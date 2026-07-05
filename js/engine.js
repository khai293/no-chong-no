/* ============ NỢ CHỒNG NỢ — engine: trạng thái, VN, cắt cảnh, âm thanh ============ */

const $ = id => document.getElementById(id);
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
const rand = (a,b) => a + Math.random()*(b-a);
const randInt = (a,b) => Math.floor(rand(a,b+1));
const SAVE_KEY = 'nochongno_save_v1';

/* ---------------- GAME STATE ---------------- */
const Game = {
  state: null,

  newState(name){
    return {
      name: name || 'Châu',
      chapter: 0,
      dr: 20, trust: 30, money: -200,
      flags: {},
      route: null,          // 'ruot' (cứu Lucien) | 'nop' (giao bằng chứng)
      solved: false,        // giải đúng vụ án ch4
      unlocked: {taichinh:true, anau:false, choden:false, benhvien:false, doncs:false},
    };
  },

  charName(id){
    if(id === 'chau') return (this.state && this.state.name) || 'Châu';
    if(id === 'sys') return '💭';
    return (CHARDEF[id] && CHARDEF[id].name) || '???';
  },

  fmtMoney(m){
    const sign = m < 0 ? '-' : (m > 0 ? '+' : '');
    const a = Math.abs(m);
    if(a >= 1000) return `${sign}${(a/1000).toFixed(1)} tỷ`;
    return `${sign}${a}tr`;
  },

  addDR(n, why){
    if(!n) return;
    this.state.dr = clamp(this.state.dr + n, 0, 100);
    this.updateHUD();
    pulse('hud-dr');
    if(n > 0){ Toast(`⚡ +${n} Rắc Rối${why ? ' — '+why : ''}`, 'bad'); AudioSys.sfx('bad'); }
    else { Toast(`😌 ${n} Rắc Rối${why ? ' — '+why : ''}`, 'good'); AudioSys.sfx('good'); }
  },
  addTrust(n, quiet){
    if(!n) return;
    this.state.trust = clamp(this.state.trust + n, 0, 100);
    this.updateHUD();
    pulse('hud-trust');
    if(!quiet){
      if(n > 0){ Toast(`💗 +${n}% Tin Tưởng`, 'good'); AudioSys.sfx('heart'); }
      else Toast(`💔 ${n}% Tin Tưởng`, 'bad');
    }
  },
  addMoney(n, why){
    if(!n) return;
    this.state.money += n;
    this.updateHUD();
    pulse('hud-money');
    if(n > 0){ Toast(`💰 +${n} triệu${why ? ' — '+why : ''}`, 'good'); AudioSys.sfx('ding'); }
    else Toast(`💸 ${this.fmtMoney(n)}${why ? ' — '+why : ''}`, 'bad');
  },

  updateHUD(){
    const s = this.state; if(!s) return;
    $('drFill').style.width = s.dr + '%';
    $('drNum').textContent = s.dr;
    $('trustFill').style.width = s.trust + '%';
    $('trustNum').textContent = s.trust + '%';
    const mEl = $('moneyNum');
    mEl.textContent = this.fmtMoney(s.money);
    mEl.className = s.money < 0 ? 'neg' : 'pos';
  },

  setQuest(txt, ic){
    if(!txt){ $('quest').classList.add('hidden'); return; }
    $('quest').classList.remove('hidden');
    $('questIc').textContent = ic || '🎯';
    $('questTx').textContent = txt;
  },

  save(){
    try{ localStorage.setItem(SAVE_KEY, JSON.stringify(this.state)); }catch(e){}
  },
  hasSave(){ try{ return !!localStorage.getItem(SAVE_KEY); }catch(e){ return false; } },
  load(){
    try{
      const raw = localStorage.getItem(SAVE_KEY);
      if(raw){ this.state = JSON.parse(raw); return true; }
    }catch(e){}
    return false;
  },
  clearSave(){ try{ localStorage.removeItem(SAVE_KEY); }catch(e){} },
};

function pulse(id){
  const el = $(id);
  el.classList.remove('hud-pulse');
  void el.offsetWidth;
  el.classList.add('hud-pulse');
}

/* ---------------- TOAST ---------------- */
function Toast(text, kind){
  const t = document.createElement('div');
  t.className = 'toast' + (kind ? ' ' + kind : '');
  t.textContent = text;
  $('toasts').appendChild(t);
  setTimeout(() => t.classList.add('fade'), 2100);
  setTimeout(() => t.remove(), 2700);
}

/* ---------------- HIỆU ỨNG MÀN HÌNH ---------------- */
function stageFX(kind){
  const st = $('stage');
  st.classList.remove('shake','flash');
  void st.offsetWidth;
  st.classList.add(kind);
  setTimeout(() => st.classList.remove(kind), 600);
}

/* ---------------- CHUYỂN CẢNH SỌC CHÉO ---------------- */
const Transition = {
  busy: false,
  wipe(midCb, endCb){
    if(this.busy){ if(midCb) midCb(); if(endCb) endCb(); return; }
    this.busy = true;
    const w = $('wipe');
    w.classList.remove('go');
    void w.offsetWidth;
    w.classList.add('go');
    AudioSys.sfx('whoosh');
    setTimeout(() => { if(midCb) midCb(); }, 480);
    setTimeout(() => { w.classList.remove('go'); this.busy = false; if(endCb) endCb(); }, 1120);
  }
};

/* ---------------- THẺ TIÊU ĐỀ CHƯƠNG ---------------- */
const TitleCard = {
  show(no, name, stamp, cb){
    const tc = $('titleCard');
    tc.innerHTML = `
      <div class="tc-no">— CHƯƠNG ${no} —</div>
      <div class="tc-name">${name}</div>
      ${stamp ? `<div class="tc-stamp">${stamp}</div>` : ''}`;
    tc.classList.remove('hidden');
    AudioSys.sfx('boom');
    setTimeout(() => { tc.classList.add('hidden'); if(cb) cb(); }, 2600);
  }
};

/* ---------------- VISUAL NOVEL ---------------- */
const VN = {
  active: false,
  queue: [], done: null,
  typing: false, typeTimer: null, fullText: '',
  leftChar: null, rightChar: null,
  _pcache: {},

  portrait(id, expr){
    const k = id + '|' + expr;
    if(!this._pcache[k]) this._pcache[k] = portraitSVG(id, expr);
    return this._pcache[k];
  },

  play(nodes, done){
    this.queue = nodes.slice();
    this.done = done || null;
    this.active = true;
    this.leftChar = this.rightChar = null;
    $('pL').innerHTML = ''; $('pR').innerHTML = '';
    $('pL').className = 'portrait left'; $('pR').className = 'portrait right';
    $('vn').classList.remove('hidden');
    $('choices').classList.add('hidden');
    this.next();
  },

  next(){
    if(this.typing){ this.finishType(); return; }
    const node = this.queue.shift();
    if(node === undefined){ this.end(); return; }

    if(node.bg !== undefined){
      const bg = $('vnbg');
      if(node.bg === null){ bg.classList.add('hidden'); }
      else { bg.className = 'bg-' + node.bg; bg.classList.remove('hidden'); }
      this.next(); return;
    }
    if(node.fx){ stageFX(node.fx); AudioSys.sfx(node.fx === 'shake' ? 'boom' : 'ding'); this.next(); return; }
    if(node.sfx){ AudioSys.sfx(node.sfx); this.next(); return; }
    if(node.music !== undefined){ AudioSys.music(node.music); this.next(); return; }
    if(node.do){ node.do(); this.next(); return; }
    if(node.choice){ this.showChoices(node.choice); return; }
    if(node.who !== undefined){ this.say(node); return; }
    this.next();
  },

  say(node){
    const id = node.who;
    const isNarr = id === 'sys';
    const nameEl = $('dname');
    nameEl.textContent = Game.charName(id);
    nameEl.style.background = isNarr ? '#7d5ba6' : ((CHARDEF[id] && CHARDEF[id].tag) || '#ff6fa5');

    if(!isNarr){
      const side = (id === 'chau') ? 'L' : 'R';
      const el = $('p' + side);
      const other = $(side === 'L' ? 'pR' : 'pL');
      const expr = node.expr || 'normal';
      const key = id + '|' + expr;
      if(el.dataset.key !== key){ el.innerHTML = this.portrait(id, expr); el.dataset.key = key; }
      if(side === 'L') this.leftChar = id; else this.rightChar = id;
      el.classList.add('active');
      other.classList.remove('active');
      el.classList.remove('talk'); void el.offsetWidth; el.classList.add('talk');
      if(node.pfx){ el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
    } else {
      $('pL').classList.remove('active');
      $('pR').classList.remove('active');
    }

    let txt = node.text.replace(/\{ten\}/g, Game.charName('chau'));
    this.fullText = txt;
    this.typing = true;
    $('dnext').style.visibility = 'hidden';
    const dt = $('dtext');
    dt.textContent = '';
    if(isNarr) dt.classList.add('it'); else dt.classList.remove('it');
    let i = 0;
    clearInterval(this.typeTimer);
    this.typeTimer = setInterval(() => {
      i += 2;
      dt.textContent = txt.slice(0, i);
      if(i >= txt.length) this.finishType();
    }, 24);
  },

  finishType(){
    clearInterval(this.typeTimer);
    this.typing = false;
    $('dtext').textContent = this.fullText;
    $('dnext').style.visibility = 'visible';
  },

  showChoices(opts){
    const box = $('choices');
    box.innerHTML = '';
    box.classList.remove('hidden');
    const cls = {'😇':'c-that','😈':'c-bia','🤡':'c-hai'};
    opts.forEach(op => {
      const b = document.createElement('button');
      b.className = 'choice ' + (cls[op.ic] || '');
      b.innerHTML = `<span class="cic">${op.ic || '💬'}</span><span>${op.label.replace(/\{ten\}/g, Game.charName('chau'))}</span>`;
      b.onclick = (e) => {
        e.stopPropagation();
        box.classList.add('hidden');
        AudioSys.sfx('click');
        if(op.dr) Game.addDR(op.dr, op.why);
        if(op.trust) Game.addTrust(op.trust);
        if(op.money) Game.addMoney(op.money, op.why);
        if(op.flag) Game.state.flags[op.flag] = true;
        if(op.do) op.do();
        if(op.reply) this.queue = op.reply.concat(this.queue);
        this.next();
      };
      box.appendChild(b);
    });
  },

  end(){
    this.active = false;
    clearInterval(this.typeTimer);
    $('vn').classList.add('hidden');
    $('vnbg').classList.add('hidden');
    const cb = this.done; this.done = null;
    if(cb) cb();
  },

  handleAdvance(){
    if(!this.active) return;
    if(!$('choices').classList.contains('hidden')) return; // đang chọn
    this.next();
  }
};

$('dbox').addEventListener('click', () => VN.handleAdvance());
$('vn').addEventListener('click', (e) => {
  if(e.target.closest('#choices') || e.target.closest('#dbox')) return;
  VN.handleAdvance();
});

/* ---------------- CẮT CẢNH TRUYỆN TRANH ---------------- */
const Panels = {
  active: false, list: [], idx: 0, done: null,
  play(list, done){
    this.list = list; this.idx = 0; this.done = done || null;
    this.active = true;
    $('panels').classList.remove('hidden');
    this.show();
  },
  show(){
    const p = this.list[this.idx];
    if(!p){ this.end(); return; }
    let art = '';
    if(p.chars){
      art = `<div class="speedlines"></div>` + p.chars.map(([id, expr]) =>
        `<svg viewBox="0 0 260 310" style="height:104%">${portraitSVG(id, expr).replace(/<\/?svg[^>]*>/g,'')}</svg>`
      ).join('');
    } else {
      art = `<div class="speedlines"></div><div class="big-emoji">${p.emoji || '💥'}</div>`;
    }
    const bgc = p.bgc || '#fdf3df';
    $('panels').innerHTML = `
      <div class="panel ${p.fx === 'boom' ? 'pfx-boom' : ''}">
        <div class="panel-art" style="background:${bgc}">${art}</div>
        <div class="panel-cap">${p.text.replace(/\{ten\}/g, Game.charName('chau'))}</div>
        <div class="panel-tap">— chạm để tiếp tục —</div>
      </div>`;
    if(p.fx === 'boom'){ stageFX('shake'); AudioSys.sfx('boom'); }
    if(p.sfx) AudioSys.sfx(p.sfx);
  },
  advance(){
    if(!this.active) return;
    this.idx++;
    AudioSys.sfx('click');
    if(this.idx >= this.list.length) this.end();
    else this.show();
  },
  end(){
    this.active = false;
    $('panels').classList.add('hidden');
    $('panels').innerHTML = '';
    const cb = this.done; this.done = null;
    if(cb) cb();
  }
};
$('panels').addEventListener('click', () => Panels.advance());

/* ---------------- ÂM THANH (WebAudio, không cần file) ---------------- */
const AudioSys = {
  ctx: null, master: null, musicGain: null,
  muted: false, curTrack: null, schedTimer: null, stepIdx: 0,

  ensure(){
    if(this.ctx) return true;
    try{
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ctx.destination);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0.32;
      this.musicGain.connect(this.master);
      return true;
    }catch(e){ return false; }
  },

  toggle(){
    this.muted = !this.muted;
    if(this.master) this.master.gain.value = this.muted ? 0 : 0.55;
    $('muteBtn').textContent = this.muted ? '🔇' : '🔊';
  },

  note(freq, t, dur, type, vol, dest){
    const c = this.ctx;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol || 0.2, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(dest || this.master);
    o.start(t); o.stop(t + dur + 0.05);
  },
  noise(t, dur, vol, dest){
    const c = this.ctx;
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for(let i = 0; i < len; i++) d[i] = (Math.random()*2-1) * (1 - i/len);
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(); g.gain.value = vol || 0.1;
    src.connect(g); g.connect(dest || this.master);
    src.start(t);
  },

  sfx(name){
    if(!this.ensure() || this.muted) return;
    const t = this.ctx.currentTime;
    switch(name){
      case 'click': this.note(660, t, .08, 'triangle', .15); break;
      case 'good': this.note(523, t, .12, 'triangle', .2); this.note(784, t+.09, .18, 'triangle', .2); break;
      case 'bad': this.note(220, t, .2, 'sawtooth', .12); this.note(185, t+.12, .25, 'sawtooth', .12); break;
      case 'ding': this.note(880, t, .3, 'sine', .22); this.note(1318, t+.05, .35, 'sine', .12); break;
      case 'boom': this.noise(t, .4, .3); this.note(80, t, .4, 'sine', .4); break;
      case 'whoosh': this.noise(t, .3, .18); break;
      case 'heart': this.note(392, t, .12, 'sine', .2); this.note(523, t+.1, .2, 'sine', .2); break;
      case 'siren': this.note(700, t, .25, 'square', .07); this.note(520, t+.25, .25, 'square', .07); break;
      case 'flash': this.note(1100, t, .15, 'sine', .15); break;
      case 'win': [523,659,784,1046].forEach((f,i)=>this.note(f, t+i*.11, .3, 'triangle', .2)); break;
      case 'lose': [400,350,300,220].forEach((f,i)=>this.note(f, t+i*.14, .3, 'sawtooth', .1)); break;
    }
  },

  /* nhạc nền dạng pattern lặp */
  TRACKS: {
    lofi: {
      bpm: 76,
      bass: [110,0,0,0, 87,0,0,0, 130,0,0,0, 98,0,0,98],
      chords: [[220,261,329],null,null,null,[174,220,261],null,null,null,
               [261,329,392],null,null,null,[196,246,293],null,null,null],
      hat: [0,0,1,0, 0,0,1,0, 0,0,1,0, 0,0,1,1],
    },
    tense: {
      bpm: 132,
      bass: [98,98,0,98, 98,0,104,0, 98,98,0,98, 110,0,116,0],
      chords: [[196,233],null,[196,233],null,[185,220],null,null,null,
               [196,233],null,[196,233],null,[220,261],null,null,null],
      hat: [1,0,1,1, 1,0,1,0, 1,0,1,1, 1,1,1,0],
    },
    night: {
      bpm: 92,
      bass: [82,0,0,82, 0,0,73,0, 82,0,0,82, 0,98,0,0],
      chords: [[164,196,246],null,null,null,null,null,[155,196,233],null,
               [164,196,246],null,null,null,[174,220,261],null,null,null],
      hat: [0,0,1,0, 0,1,0,0, 0,0,1,0, 0,1,0,1],
    },
    sad: {
      bpm: 66,
      bass: [110,0,0,0, 98,0,0,0, 87,0,0,0, 82,0,0,0],
      chords: [[220,261,329],null,null,null,[196,246,293],null,null,null,
               [174,220,261],null,null,null,[164,207,246],null,null,null],
      hat: [0,0,0,0, 0,0,1,0, 0,0,0,0, 0,0,1,0],
    },
    /* hài hước — nhảy nhót, đảo phách */
    comedy: {
      bpm: 122,
      bass: [130,0,130,0, 98,0,110,0, 130,0,130,0, 87,0,146,164],
      chords: [[261,329],null,null,[261,329], null,[246,311],null,null,
               [220,261,329],null,null,[220,277], null,[196,246],[233,293],null],
      hat: [0,1,0,1, 0,1,1,0, 0,1,0,1, 0,1,1,1],
    },
    /* lãng mạn — ấm áp, hợp âm 7 */
    love: {
      bpm: 70,
      bass: [87,0,0,0, 130,0,0,0, 146,0,0,0, 116,0,0,98],
      chords: [[174,220,261,329],null,null,null,[196,261,329,392],null,null,null,
               [174,220,293,349],null,null,null,[155,233,293,349],null,null,null],
      hat: [0,0,1,0, 0,0,0,0, 0,0,1,0, 0,0,0,1],
    },
    /* bí ẩn — thưa thớt, nửa cung trườn */
    mystery: {
      bpm: 96,
      bass: [110,0,0,0, 0,0,103,0, 110,0,0,98, 0,0,82,0],
      chords: [[220,261],null,null,null,null,null,[207,246],null,
               null,[220,277],null,null,[196,233],null,null,null],
      hat: [1,0,0,1, 0,0,1,0, 1,0,0,1, 0,1,0,0],
    },
    /* đối đầu — dồn dập, trầm nặng */
    boss: {
      bpm: 140,
      bass: [73,73,0,73, 73,0,78,0, 73,73,0,73, 87,0,82,78],
      chords: [[146,174,220],null,null,null,[146,174,220],null,[155,185,233],null,
               [146,174,220],null,null,null,[164,196,246],[155,185,233],null,null],
      hat: [1,0,1,0, 1,1,1,0, 1,0,1,0, 1,1,1,1],
    },
  },

  music(name){
    if(name === this.curTrack) return;
    this.curTrack = name;
    clearInterval(this.schedTimer);
    this.schedTimer = null;
    if(!name) return;
    if(!this.ensure()) return;
    const tr = this.TRACKS[name]; if(!tr) return;
    this.stepIdx = 0;
    let nextT = this.ctx.currentTime + 0.1;
    const stepDur = 60 / tr.bpm / 2; // nốt 1/8
    this.schedTimer = setInterval(() => {
      if(this.muted){ nextT = Math.max(nextT, this.ctx.currentTime + 0.1); return; }
      while(nextT < this.ctx.currentTime + 0.35){
        const i = this.stepIdx % 16;
        const b = tr.bass[i];
        if(b) this.note(b, nextT, stepDur*1.8, 'triangle', .18, this.musicGain);
        const ch = tr.chords[i];
        if(ch) ch.forEach(f => this.note(f, nextT, stepDur*3.6, 'sine', .06, this.musicGain));
        if(tr.hat[i]) this.noise(nextT, .04, .05, this.musicGain);
        nextT += stepDur;
        this.stepIdx++;
      }
    }, 120);
  },
};

$('muteBtn').addEventListener('click', () => { AudioSys.ensure(); AudioSys.toggle(); });
document.addEventListener('pointerdown', function once(){
  AudioSys.ensure();
  if(AudioSys.ctx && AudioSys.ctx.state === 'suspended') AudioSys.ctx.resume();
  document.removeEventListener('pointerdown', once);
});

/* ---------------- BÀN PHÍM CHUNG ---------------- */
const Keys = {};
document.addEventListener('keydown', e => {
  Keys[e.code] = true;
  if(VN.active && (e.code === 'Space' || e.code === 'Enter')){
    e.preventDefault(); VN.handleAdvance();
  }
  if(Panels.active && (e.code === 'Space' || e.code === 'Enter')){
    e.preventDefault(); Panels.advance();
  }
});
document.addEventListener('keyup', e => { Keys[e.code] = false; });

/* ---------------- CO GIÃN SÂN KHẤU ---------------- */
function fitStage(){
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  $('stage').style.transform = `translate(-50%,-50%) scale(${s})`;
}
$('stage').style.left = '50%';
$('stage').style.top = '50%';
window.addEventListener('resize', fitStage);
fitStage();
