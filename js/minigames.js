/* ============ NỢ CHỒNG NỢ — 6 minigame ============ */

const MG = {
  active: false,
  _raf: null, _cleanup: null, _timers: [],

  run(id, opts, done){
    this.active = true;
    this._timers = [];
    $('mg').classList.remove('hidden');
    const game = MG_GAMES[id];
    game(opts || {}, res => this.finish(res, done));
  },

  frame(title, goal, bodyHTML){
    $('mg').innerHTML = `
      <div class="mg-frame">
        <div class="mg-head"><h2>${title}</h2><div class="mg-goal">${goal}</div></div>
        <div class="mg-body">${bodyHTML}</div>
      </div>`;
    return $('mg').querySelector('.mg-body');
  },

  msg(text, ms){
    const body = $('mg').querySelector('.mg-body');
    if(!body) return;
    const m = document.createElement('div');
    m.className = 'mg-msg';
    m.textContent = text;
    body.appendChild(m);
    if(ms) this.after(ms, () => m.remove());
  },

  after(ms, fn){
    const t = setTimeout(fn, ms);
    this._timers.push(t);
    return t;
  },

  finish(res, done){
    if(this._raf) cancelAnimationFrame(this._raf);
    this._raf = null;
    if(this._cleanup){ this._cleanup(); this._cleanup = null; }
    this._timers.forEach(clearTimeout); this._timers = [];
    AudioSys.sfx(res.success ? 'win' : 'lose');
    const body = $('mg').querySelector('.mg-body');
    if(body){
      const m = document.createElement('div');
      m.className = 'mg-msg';
      m.textContent = res.success ? (res.winText || 'QUÁ ĐỈNH! 🎉') : (res.loseText || 'TOANG RỒI... 💀');
      body.appendChild(m);
    }
    setTimeout(() => {
      $('mg').classList.add('hidden');
      $('mg').innerHTML = '';
      this.active = false;
      if(done) done(res);
    }, 1500);
  },
};

const MG_GAMES = {

/* ============== 1. CANH CỬA NGÂN HÀNG ============== */
lookout(opts, cb){
  const body = MG.frame('👀 CANH CỬA "DỄ LẮM"', 'Nhấp vào người qua đường để đuổi họ đi! Đừng để ai tới cửa!',
    `<div class="mg-bar-wrap"><span>🚨 BÁO ĐỘNG</span><div class="mg-bar"><div class="fill" id="alarmFill" style="width:0%"></div></div></div>
     <div class="mg-bar-wrap" style="top:46px"><span>🔓 LUCIEN PHÁ KHÓA</span><div class="mg-bar"><div class="fill" id="lockFill" style="width:0%;background:linear-gradient(90deg,#4cc9f0,#2ec4b6)"></div></div></div>
     <canvas class="mg-canvas" id="mgCv"></canvas>`);
  const cv = $('mgCv');
  cv.width = body.clientWidth; cv.height = body.clientHeight;
  const g = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const DOOR = {x: W/2, y: H - 90};
  const CHARSET = ['vinh','bacsi','baove','camdo','yta','batu'];
  const EXCUSES = ['"Trong đó có CHÓ DỮ đó cô!"','"Ngân hàng HẾT TIỀN rồi bác ơi!"',
    '"Sơn chưa khô! Dính là đền 5 triệu!"','"Hôm nay khử trùng... khuẩn lạ!"',
    '"Có người nổi tiếng đang livestream, đông lắm!"','"WC hỏng, mùi kinh khủng lắm!!"'];
  let peds = [], alarm = 0, lock = 0, spawnT = 1, time = 0, over = false, bubbles = [];
  MG.msg('CANH CHỪNG! 👀', 1300);
  AudioSys.music('tense');

  function spawn(){
    const side = Math.random() < 0.5 ? -30 : W + 30;
    peds.push({x: side, y: rand(H-220, H-60), char: CHARSET[randInt(0, CHARSET.length-1)],
      sp: rand(46, 86) * (Math.random() < 0.25 ? 1.6 : 1), flee: 0, t: rand(0, 99)});
  }
  function onClick(e){
    if(over) return;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (W / r.width);
    const my = (e.clientY - r.top) * (H / r.height);
    for(const p of peds){
      if(!p.flee && Math.hypot(p.x - mx, p.y - my - (-20)) < 46){
        p.flee = 1;
        bubbles.push({x: p.x, y: p.y - 60, text: EXCUSES[randInt(0, EXCUSES.length-1)], t: 0});
        AudioSys.sfx('click');
        return;
      }
    }
  }
  cv.addEventListener('pointerdown', onClick);
  MG._cleanup = () => { cv.removeEventListener('pointerdown', onClick); AudioSys.music('lofi'); };

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    time += dt;
    if(!over){
      lock += dt / 30 * 100;
      $('lockFill').style.width = Math.min(100, lock) + '%';
      spawnT -= dt;
      if(spawnT <= 0){ spawn(); spawnT = rand(1.4, 2.8) - Math.min(0.9, time/30); }
      for(const p of peds){
        p.t += dt;
        if(p.flee){
          p.x += (p.x < W/2 ? -1 : 1) * 220 * dt;
        } else {
          const dx = DOOR.x - p.x, dy = DOOR.y - p.y;
          const d = Math.hypot(dx, dy);
          p.x += dx/d * p.sp * dt; p.y += dy/d * p.sp * dt;
          if(d < 44){
            p.flee = 1; alarm++;
            $('alarmFill').style.width = (alarm/3*100) + '%';
            AudioSys.sfx('siren'); stageFX('flash');
            bubbles.push({x: p.x, y: p.y-60, text: '"Ơ?! CÓ TRỘM!! 📢"', t: 0});
          }
        }
      }
      peds = peds.filter(p => p.x > -60 && p.x < W + 60);
      bubbles = bubbles.filter(b => (b.t += dt) < 1.6);
      if(alarm >= 3){ over = true; cb({success: false, alarm, loseText: 'BÁO ĐỘNG RỒI!! 🚨'}); return; }
      if(lock >= 100){ over = true; cb({success: true, alarm, winText: 'LUCIEN MỞ ĐƯỢC CỬA! 🔓'}); return; }
    }
    // vẽ
    g.fillStyle = '#cdd5e8'; g.fillRect(0, 0, W, H);
    g.fillStyle = '#8d86a3'; g.fillRect(0, H-46, W, 46);
    // mặt tiền ngân hàng
    g.fillStyle = '#7f95c9'; g.fillRect(W/2-190, H-260, 380, 180);
    g.strokeStyle = '#2a2333'; g.lineWidth = 5; g.strokeRect(W/2-190, H-260, 380, 180);
    g.fillStyle = '#5b6fa3'; g.fillRect(W/2-210, H-290, 420, 40);
    g.strokeRect(W/2-210, H-290, 420, 40);
    g.fillStyle = '#fff8ef'; g.font = '800 24px "Baloo 2"'; g.textAlign = 'center';
    g.fillText('🏦 NGÂN HÀNG ĐẠI PHÁT', W/2, H-262);
    for(let i=0;i<4;i++){
      g.fillStyle = '#dff1ff';
      g.fillRect(W/2-170 + i*90, H-240, 60, 60);
    }
    g.fillStyle = '#2a2333'; g.fillRect(DOOR.x-34, H-160, 68, 80);
    g.fillStyle = '#ffd166'; g.font='34px sans-serif';
    g.fillText('🔧', DOOR.x, H-115 + Math.sin(time*10)*4);
    // người đi đường
    for(const p of peds){
      drawChibi(g, p.x, p.y, p.flee ? (p.x < W/2 ? 'left':'right') : 'down', p.t*60, p.char, {walking:true});
    }
    // bong bóng thoại
    for(const b of bubbles){
      g.save(); g.globalAlpha = Math.min(1, (1.6-b.t)/0.4);
      g.font = '700 16px "Baloo 2"';
      const tw = g.measureText(b.text).width + 20;
      const bx = clamp(b.x, tw/2+8, W-tw/2-8);
      g.fillStyle = '#fff8ef'; g.strokeStyle = '#2a2333'; g.lineWidth = 3;
      rrect(g, bx-tw/2, b.y-20 - b.t*14, tw, 30, 12); g.fill(); g.stroke();
      g.fillStyle = '#2a2333'; g.textAlign='center';
      g.fillText(b.text, bx, b.y - b.t*14);
      g.restore();
    }
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
},

/* ============== 2. CÕNG LUCIEN CHẠY TRỐN ============== */
escape(opts, cb){
  const night = opts.night;
  const body = MG.frame(opts.title || '🏃 CÕNG "NẠN NHÂN" BỎ CHẠY', 'Phím ▲▼ (hoặc chạm nửa trên/dưới) để né chướng ngại!',
    `<div class="mg-bar-wrap"><span>🏁 QUÃNG ĐƯỜNG</span><div class="mg-bar"><div class="fill" id="distFill" style="width:0%;background:linear-gradient(90deg,#4cc9f0,#2ec4b6)"></div></div></div>
     <div class="mg-timer" id="hitCount">💥 0</div>
     <canvas class="mg-canvas" id="mgCv"></canvas>`);
  const cv = $('mgCv');
  cv.width = body.clientWidth; cv.height = body.clientHeight;
  const g = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const LANES = [H*0.36, H*0.58, H*0.8];
  const OBS = ['🗑️','🐕','👵','🛵','🚧','📦'];
  let lane = 1, obs = [], time = 0, dur = 24, hits = 0, inv = 0, spawnT = 0.8, over = false, scroll = 0;
  MG.msg('CHẠYYYY! 🏃💨', 1200);
  AudioSys.music('tense');

  function key(e){
    if(e.code === 'ArrowUp' || e.code === 'KeyW'){ lane = Math.max(0, lane-1); e.preventDefault(); }
    if(e.code === 'ArrowDown' || e.code === 'KeyS'){ lane = Math.min(2, lane+1); e.preventDefault(); }
  }
  function tap(e){
    const r = cv.getBoundingClientRect();
    const my = (e.clientY - r.top) / r.height;
    if(my < 0.5) lane = Math.max(0, lane-1); else lane = Math.min(2, lane+1);
  }
  document.addEventListener('keydown', key);
  cv.addEventListener('pointerdown', tap);
  MG._cleanup = () => { document.removeEventListener('keydown', key); cv.removeEventListener('pointerdown', tap); AudioSys.music('lofi'); };

  let py = LANES[1], last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now-last)/1000); last = now;
    if(!over){
      time += dt; inv = Math.max(0, inv - dt);
      const speed = 300 + time*14;
      scroll += speed*dt;
      $('distFill').style.width = Math.min(100, time/dur*100) + '%';
      spawnT -= dt;
      if(spawnT <= 0){
        obs.push({x: W+60, lane: randInt(0,2), e: OBS[randInt(0,OBS.length-1)]});
        spawnT = rand(0.55, 1.1) - Math.min(0.3, time/60);
      }
      for(const o of obs) o.x -= speed*dt;
      obs = obs.filter(o => o.x > -80);
      py += (LANES[lane] - py) * Math.min(1, dt*12);
      if(inv <= 0) for(const o of obs){
        if(Math.abs(o.x - 190) < 40 && Math.abs(LANES[o.lane] - py) < 34){
          hits++; inv = 1; o.x = -999;
          $('hitCount').textContent = '💥 ' + hits;
          AudioSys.sfx('boom'); stageFX('shake');
        }
      }
      if(time >= dur){
        over = true;
        cb({success: hits < 4, hits, winText: 'THOÁT RỒI!! 😅', loseText: 'TÉ LÊN TÉ XUỐNG... 🤕'});
        return;
      }
    }
    // vẽ nền
    g.fillStyle = night ? '#241f45' : '#ffd9a0'; g.fillRect(0,0,W,H*0.22);
    // dãy nhà xa
    g.fillStyle = night ? '#171331' : '#c97b4a';
    for(let i=0;i<9;i++){
      const bx = (i*180 - (scroll*0.3)%180);
      g.fillRect(bx, H*0.06 + (i%3)*14, 120, H*0.18);
    }
    g.fillStyle = night ? '#3b3567' : '#8d86a3';
    g.fillRect(0, H*0.22, W, H);
    g.strokeStyle = 'rgba(245,239,221,.7)'; g.lineWidth = 5; g.setLineDash([40,34]);
    for(let i=0;i<2;i++){
      const ly = (LANES[i]+LANES[i+1])/2;
      g.beginPath(); g.moveTo(-(scroll%74), ly); g.lineTo(W, ly); g.stroke();
    }
    g.setLineDash([]);
    // chướng ngại
    g.font = '46px sans-serif'; g.textAlign = 'center';
    for(const o of obs) g.fillText(o.e, o.x, LANES[o.lane] + 16);
    // Châu cõng Lucien
    if(inv <= 0 || Math.floor(time*12)%2 === 0){
      drawChibi(g, 190, py, 'right', time*70, 'chau', {walking:true});
      drawChibi(g, 172, py - 26, 'right', time*70+4, 'khai', {walking:false});
      g.font = '20px sans-serif';
      g.fillText('💫', 172, py - 66 + Math.sin(time*9)*4);
    }
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
},

/* ============== 3. KÝ GIẤY TỜ ============== */
papers(opts, cb){
  const papers = opts.papers;
  const body = MG.frame('🖊️ KÝ GIẤY THẦN TỐC', 'ĐỌC KỸ trước khi ký! Bác sĩ đang hối...',
    `<div class="mg-bar-wrap"><span>⏱️ KIÊN NHẪN CỦA BÁC SĨ</span><div class="mg-bar"><div class="fill" id="patFill" style="width:100%"></div></div></div>
     <div id="paperHost"></div>`);
  let idx = 0, wrong = 0, correct = 0, patT = null;
  AudioSys.music('tense');
  MG._cleanup = () => { if(patT) clearInterval(patT); AudioSys.music(null); };

  function showPaper(){
    const p = papers[idx];
    if(!p){ cb({success: wrong === 0, wrong, correct,
      winText: 'MẮT TINH NHƯ CÚ! 🦉', loseText: 'KÝ NHẦM RỒI KÌA... 😵'}); return; }
    const host = $('paperHost');
    host.innerHTML = `
      <div class="paper-card">
        <h3>${p.title}</h3>
        <div class="fine">${p.fine}</div>
        <div class="paper-btns">
          <button class="mg-btn sign">🖊️ KÝ LUÔN</button>
          <button class="mg-btn deny">🙅 TỪ CHỐI</button>
        </div>
      </div>`;
    let t = p.time || 6;
    const t0 = t;
    if(patT) clearInterval(patT);
    patT = setInterval(() => {
      t -= 0.1;
      $('patFill').style.width = Math.max(0, t/t0*100) + '%';
      if(t <= 0){ clearInterval(patT); resolve(p.good); Toast('⏱️ Hết giờ — bác sĩ tự ký hộ luôn?!', 'bad'); }
    }, 100);
    function resolve(signed){
      clearInterval(patT);
      const ok = (signed === p.good);
      if(ok){ correct++; AudioSys.sfx('good'); }
      else { wrong++; AudioSys.sfx('bad'); stageFX('shake');
        Toast(p.good ? '😱 Đó là giấy CẦN ký mà!' : `😱 Vừa ký "${p.title}"!!`, 'bad'); }
      idx++;
      showPaper();
    }
    host.querySelector('.sign').onclick = () => resolve(true);
    host.querySelector('.deny').onclick = () => resolve(false);
  }
  MG.msg('BÁC SĨ ĐƯA XẤP GIẤY... 📄', 1300);
  MG.after(1400, showPaper);
},

/* ============== 4. HÓA TRANG THẦN TỐC ============== */
disguise(opts, cb){
  const body = MG.frame('🎭 HÓA TRANG THẦN TỐC', 'Chọn đúng 3 món đồ trước khi cảnh sát tới!',
    `<div class="mg-bar-wrap"><span>🚔 CẢNH SÁT ĐANG TỚI</span><div class="mg-bar"><div class="fill" id="copFill" style="width:0%"></div></div></div>
     <div class="dis-target">
       <h4>MỤC TIÊU HÓA TRANG:</h4>
       <div class="who">${opts.target}</div>
       <ul>${opts.hints.map(h => `<li>• ${h}</li>`).join('')}</ul>
     </div>
     <div class="dis-grid" id="disGrid"></div>`);
  let cop = 0, picked = 0, over = false;
  const total = opts.time || 13;
  const items = opts.items.slice().sort(() => Math.random() - 0.5);
  const grid = $('disGrid');
  items.forEach(it => {
    const d = document.createElement('div');
    d.className = 'dis-item';
    d.innerHTML = `${it.e}<small>${it.label}</small>`;
    d.onclick = () => {
      if(over || d.classList.contains('picked')) return;
      if(it.ok){
        d.classList.add('picked'); picked++;
        AudioSys.sfx('good');
        if(picked >= 3){ over = true;
          cb({success: true, winText: 'KHÔNG AI NHẬN RA! 🎭'}); }
      } else {
        d.classList.add('wrongpick');
        setTimeout(() => d.classList.remove('wrongpick'), 450);
        cop += 12;
        AudioSys.sfx('bad');
        Toast(`🤦 ${it.label}?! Lộ quá!`, 'bad');
      }
    };
    grid.appendChild(d);
  });
  const iv = setInterval(() => {
    if(over) return;
    cop += 100 / (total * 10);
    $('copFill').style.width = Math.min(100, cop) + '%';
    if(cop >= 100){
      over = true; clearInterval(iv);
      cb({success: false, loseText: 'CẢNH SÁT TỚI RỒI!! 🚔'});
    }
  }, 100);
  MG._cleanup = () => clearInterval(iv);
  AudioSys.music('tense');
  MG.msg('NHANH LÊN!! ⏰', 1100);
},

/* ============== 5. ĐỌC VỊ NGƯỜI NÓI DỐI ============== */
liedetect(opts, cb){
  const need = opts.need || 3;
  const dur = opts.time || 22;
  const twWindow = opts.window || 0.6;
  const body = MG.frame(`🔍 ĐỌC VỊ: ${opts.name}`, 'Nhấn SPACE (hoặc chạm) ĐÚNG LÚC mặt họ GIẬT!',
    `<div class="mg-bar-wrap"><span>⏱️</span><div class="mg-bar"><div class="fill" id="ldTime" style="width:100%;background:linear-gradient(90deg,#2ec4b6,#4cc9f0)"></div></div></div>
     <div class="lie-stage">
       <div class="lie-face" id="lieFace">${portraitSVG(opts.char, 'normal')}</div>
     </div>
     <div class="lie-hint" id="lieHint">${opts.hint || 'Quan sát kỹ... đừng bấm bừa!'}</div>
     <div class="lie-hits" id="lieHits">${Array.from({length:need}, ()=>'<span>🔎</span>').join('')}</div>`);
  const face = $('lieFace');
  let time = dur, hits = 0, wrong = 0, twitching = 0, nextTw = rand(1.2, 2.4), over = false;
  AudioSys.music(opts.music || 'tense');

  function press(e){
    if(over) return;
    if(e && e.code && e.code !== 'Space') return;
    if(e && e.preventDefault) e.preventDefault();
    if(twitching > 0){
      hits++; twitching = 0;
      face.innerHTML = portraitSVG(opts.char, 'shock');
      MG.after(500, () => { if(!over) face.innerHTML = portraitSVG(opts.char, 'normal'); });
      const spans = $('lieHits').querySelectorAll('span');
      spans[hits-1].classList.add('on');
      AudioSys.sfx('ding');
      Toast('🔎 Bắt được biểu cảm giả trân!', 'good');
      if(hits >= need){ over = true;
        cb({success: true, wrong, winText: 'NÓI DỐI LÒI ĐUÔI! 🔍'}); }
    } else {
      wrong++;
      AudioSys.sfx('bad');
      $('lieHint').textContent = ['Bấm bừa kìa! Bình tĩnh...', 'Chưa giật mà?!', 'IQ trinh thám đang offline...'][Math.min(2, wrong-1)];
      time -= 2;
    }
  }
  function onKey(e){ if(e.code === 'Space'){ press(e); } }
  function onTap(){ press(); }
  document.addEventListener('keydown', onKey);
  body.addEventListener('pointerdown', onTap);
  MG._cleanup = () => {
    document.removeEventListener('keydown', onKey);
    body.removeEventListener('pointerdown', onTap);
    AudioSys.music('lofi');
  };

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now-last)/1000); last = now;
    if(!over){
      time -= dt;
      $('ldTime').style.width = Math.max(0, time/dur*100) + '%';
      if(twitching > 0){
        twitching -= dt;
        if(twitching <= 0) face.innerHTML = portraitSVG(opts.char, 'normal');
      } else {
        nextTw -= dt;
        if(nextTw <= 0){
          twitching = twWindow;
          nextTw = rand(opts.hard ? 1.6 : 1.1, opts.hard ? 3.2 : 2.4);
          face.innerHTML = portraitSVG(opts.char, 'worried');
          face.classList.remove('twitch'); void face.offsetWidth; face.classList.add('twitch');
        }
      }
      if(time <= 0){
        over = true;
        cb({success: hits >= need, wrong, loseText: 'HỌ CHỐI BAY CHỐI BIẾN... 🙄'});
        return;
      }
    }
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
},

/* ============== 6. BẢNG SUY LUẬN ============== */
deduce(opts, cb){
  const body = MG.frame('🧠 BẢNG SUY LUẬN CỦA {ten}'.replace('{ten}', Game.charName('chau').toUpperCase()),
    'Gắn manh mối vào nghi phạm, rồi BUỘC TỘI kẻ khả nghi nhất!',
    `<div class="ded-wrap">
      <div class="ded-clues" id="dedClues">
        <div style="font-weight:800;font-size:15px;opacity:.6">📋 MANH MỐI (chọn rồi gắn vào nghi phạm)</div>
      </div>
      <div class="ded-suspects" id="dedSus"></div>
    </div>`);
  let selected = null;
  const pins = {};
  opts.suspects.forEach(s => pins[s.id] = []);

  const cluesEl = $('dedClues');
  opts.clues.forEach(c => {
    const d = document.createElement('div');
    d.className = 'ded-clue';
    d.innerHTML = `<span>${c.ic}</span><span>${c.text}</span>`;
    d.onclick = () => {
      cluesEl.querySelectorAll('.ded-clue').forEach(x => x.classList.remove('sel'));
      d.classList.add('sel');
      selected = {clue: c, el: d};
      AudioSys.sfx('click');
    };
    cluesEl.appendChild(d);
  });

  const susEl = $('dedSus');
  opts.suspects.forEach(s => {
    const d = document.createElement('div');
    d.className = 'ded-sus';
    d.innerHTML = `
      <div class="mini">${portraitSVG(s.char, 'think')}</div>
      <h4>${s.name}</h4>
      <div class="ded-slots" id="slot-${s.id}"></div>
      <button class="mg-btn plain" style="font-size:15px;padding:6px 16px">🔨 BUỘC TỘI</button>`;
    d.querySelector('.mini').onclick = d.querySelector('h4').onclick = () => pin(s, d);
    d.querySelector('.ded-slots').onclick = () => pin(s, d);
    d.querySelector('button').onclick = (e) => {
      e.stopPropagation();
      accuse(s);
    };
    susEl.appendChild(d);
  });

  function pin(s){
    if(!selected) return;
    const c = selected.clue;
    selected.el.classList.remove('sel');
    selected.el.classList.add('used');
    pins[s.id].push(c);
    const slot = $('slot-' + s.id);
    const p = document.createElement('div');
    p.className = 'ded-pin';
    p.textContent = c.ic + ' ' + c.text;
    slot.appendChild(p);
    AudioSys.sfx('good');
    selected = null;
  }

  function accuse(s){
    const good = (pins[s.id] || []).filter(c => c.sus === s.id).length;
    const success = s.id === opts.culprit;
    cb({success, goodPins: good, accused: s.id,
      winText: `CHÍNH LÀ ${s.name.toUpperCase()}! 👉`,
      loseText: `${s.name} có bằng chứng ngoại phạm... 😬`});
  }
  MG._cleanup = () => {};
  AudioSys.music('mystery');
  MG.msg('SUY LUẬN NÀO! 🧠✨', 1300);
},

/* ============== 7. ĐÊM NHẠC KARAOKE ============== */
karaoke(opts, cb){
  const body = MG.frame(opts.title || '🎤 ĐÊM NHẠC CHỢ ĐEN',
    'Nhấn SPACE (hoặc chạm) đúng lúc nốt nhạc bay vào vòng sáng!',
    `<div class="mg-timer" id="kCombo">🎵 x0</div>
     <canvas class="mg-canvas" id="mgCv"></canvas>`);
  const cv = $('mgCv');
  cv.width = body.clientWidth; cv.height = body.clientHeight;
  const g = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const TX = 200, TY = H * 0.38;
  const total = opts.notes || 14;
  const gapT = opts.gap || 1.0;
  const notes = [];
  for(let i = 0; i < total; i++) notes.push({t: 2.2 + i*gapT + (i%4===3 ? 0.5 : 0), hit:false, gone:false, x:0});
  const speed = 230;
  const lastNoteT = notes[notes.length-1].t;
  const scale = [392, 440, 494, 523, 587, 659, 698, 784];
  const CROWD = ['🧔','👵','👮','🧑','👩','🐕','🧓'];
  let time = 0, hits = 0, combo = 0, over = false, flash = 0, shakeT = 0;

  function press(e){
    if(over) return;
    if(e && e.code && e.code !== 'Space') return;
    if(e && e.preventDefault) e.preventDefault();
    let best = null, bd = 44;
    for(const n of notes){
      if(n.hit || n.gone) continue;
      const d = Math.abs(n.x - TX);
      if(d < bd){ bd = d; best = n; }
    }
    if(best){
      best.hit = true; hits++; combo++; flash = 0.3;
      if(AudioSys.ensure() && !AudioSys.muted)
        AudioSys.note(scale[combo % scale.length], AudioSys.ctx.currentTime, .3, 'triangle', .3);
      $('kCombo').textContent = '🎵 x' + combo;
    } else {
      combo = 0; shakeT = 0.3;
      AudioSys.sfx('bad');
      $('kCombo').textContent = '🎵 x0';
    }
  }
  function onKey(e){ if(e.code === 'Space') press(e); }
  function onTap(){ press(); }
  document.addEventListener('keydown', onKey);
  cv.addEventListener('pointerdown', onTap);
  MG._cleanup = () => {
    document.removeEventListener('keydown', onKey);
    cv.removeEventListener('pointerdown', onTap);
    AudioSys.music('lofi');
  };
  AudioSys.music(null);
  MG.msg('🎤 MIC ĐÃ LÊN NGUỒN!', 1400);

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if(!over){
      time += dt;
      flash = Math.max(0, flash - dt); shakeT = Math.max(0, shakeT - dt);
      for(const n of notes){
        n.x = TX + (n.t - time) * speed;
        if(!n.hit && !n.gone && n.x < TX - 56){ n.gone = true; combo = 0; $('kCombo').textContent = '🎵 x0'; }
      }
      if(time > lastNoteT + 1.6){
        over = true;
        const need = Math.ceil(total * 0.6);
        cb({success: hits >= need, hits, total,
          winText: 'KHÁN GIẢ PHÁT CUỒNG!! 🌟', loseText: 'CÓ NGƯỜI ĐÒI VÉ... 😅'});
        return;
      }
    }
    // sân khấu
    g.fillStyle = '#1c1630'; g.fillRect(0, 0, W, H);
    for(let i = 0; i < 5; i++){
      g.fillStyle = ['#ff6fa5','#4cc9f0','#ffd166','#2ec4b6','#b477d9'][i] + '22';
      const bx = (i*230 + time*40) % (W+200) - 100;
      g.fillRect(bx, 0, 90, H);
    }
    // đèn sân khấu
    const grad = g.createRadialGradient(150, H*0.8, 30, 150, H*0.8, 320);
    grad.addColorStop(0, 'rgba(255,230,170,.35)'); grad.addColorStop(1, 'rgba(255,230,170,0)');
    g.fillStyle = grad; g.fillRect(0, 0, W, H);
    // thanh nốt nhạc
    g.strokeStyle = 'rgba(255,248,239,.25)'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, TY); g.lineTo(W, TY); g.stroke();
    // vòng mục tiêu
    const pu = (Math.sin(time*6)+1)/2;
    g.strokeStyle = flash > 0 ? '#ffd166' : 'rgba(255,111,165,.9)';
    g.lineWidth = 6 + (flash > 0 ? 5 : pu*2);
    g.beginPath(); g.arc(TX, TY, 38, 0, Math.PI*2); g.stroke();
    g.fillStyle = 'rgba(255,111,165,.15)';
    g.beginPath(); g.arc(TX, TY, 34, 0, Math.PI*2); g.fill();
    // nốt nhạc
    g.font = '38px sans-serif'; g.textAlign = 'center';
    for(const n of notes){
      if(n.hit || n.gone || n.x > W + 40) continue;
      g.fillText('🎵', n.x, TY + 13 + Math.sin(n.t*7 + time*4)*6);
    }
    // ca sĩ
    const sx = 150 + (shakeT > 0 ? rand(-4,4) : 0);
    drawChibi(g, sx, H*0.8, 'right', time*50, 'chau', {walking:false});
    g.font = '26px sans-serif';
    g.fillText('🎤', sx + 26, H*0.8 - 14 + Math.sin(time*5)*3);
    if(opts.duet){
      drawChibi(g, sx - 52, H*0.8, 'right', time*50 + 8, 'khai', {walking:false});
      g.fillText('🎤', sx - 30, H*0.8 - 14 + Math.cos(time*5)*3);
    }
    // khán giả
    g.font = '30px sans-serif';
    for(let i = 0; i < 9; i++){
      const cx = 80 + i*((W-160)/8);
      g.fillText(CROWD[i % CROWD.length], cx, H - 16 + Math.sin(time*4 + i)*(combo > 4 ? 8 : 3));
      if(combo > 7 && i % 3 === 0) g.fillText('✨', cx + 18, H - 46 + Math.sin(time*6+i)*6);
    }
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
},

/* ============== 8. NƯỚNG BÒ NHÀ HÀNG ============== */
grill(opts, cb){
  const body = MG.frame(opts.title || '🥩 BẾP NƯỚNG "PHỐ ĐÊM"',
    'Nhấp miếng bò khi vòng canh chuyển XANH LÁ! Đừng để cháy!',
    `<div class="mg-bar-wrap"><span>🍽️ PHỤC VỤ</span><div class="mg-bar"><div class="fill" id="srvFill" style="width:0%;background:linear-gradient(90deg,#4cc9f0,#2ec4b6)"></div></div></div>
     <div class="mg-timer" id="grTime">60</div>
     <canvas class="mg-canvas" id="mgCv"></canvas>`);
  const cv = $('mgCv');
  cv.width = body.clientWidth; cv.height = body.clientHeight;
  const g = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const need = opts.need || 8, dur = opts.time || 60;
  const SLOTS = [];
  for(let r = 0; r < 2; r++) for(let c = 0; c < 3; c++)
    SLOTS.push({x: W/2 - 250 + c*250, y: H/2 - 60 + r*170, steak: null});
  let time = dur, served = 0, burnt = 0, over = false, spawnT = 0, plates = [];
  AudioSys.music('cooking');
  MG.msg('LÊN THỚT!! 🔥', 1300);

  function spawn(){
    const empty = SLOTS.filter(s => !s.steak);
    if(!empty.length) return;
    const s = empty[randInt(0, empty.length - 1)];
    s.steak = {done: 0, flare: 0};
  }
  spawn(); spawn(); spawn();

  function onClick(e){
    if(over) return;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (W / r.width);
    const my = (e.clientY - r.top) * (H / r.height);
    for(const s of SLOTS){
      if(!s.steak) continue;
      if(Math.hypot(s.x - mx, s.y - my) < 72){
        const d = s.steak.done;
        if(d >= 50 && d <= 88){
          served++; plates.push({x: s.x, y: s.y, t: 0});
          s.steak = null;
          $('srvFill').style.width = Math.min(100, served/need*100) + '%';
          AudioSys.sfx('ding');
        } else if(d < 50){
          AudioSys.sfx('bad');
          Toast('🥩 Còn sống nhăn! Khách kiện đó!', 'bad');
        } else {
          s.steak = null; burnt++;
          AudioSys.sfx('bad');
          Toast('🔥 Cháy khét! Bỏ thùng rác!', 'bad');
        }
        return;
      }
    }
  }
  cv.addEventListener('pointerdown', onClick);
  MG._cleanup = () => cv.removeEventListener('pointerdown', onClick);

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if(!over){
      time -= dt;
      $('grTime').textContent = Math.ceil(time);
      spawnT -= dt;
      if(spawnT <= 0){ spawn(); spawnT = rand(2.2, 3.2); }
      for(const s of SLOTS){
        if(!s.steak) continue;
        const st = s.steak;
        if(st.flare > 0) st.flare -= dt;
        else if(Math.random() < dt*0.05) st.flare = 1.4;
        st.done += dt * (100/10) * (st.flare > 0 ? 1.8 : 1);
        if(st.done >= 100){
          s.steak = null; burnt++;
          AudioSys.sfx('bad'); stageFX('flash');
          Toast('💀 Một miếng bò đã hy sinh!', 'bad');
        }
      }
      plates = plates.filter(p => (p.t += dt) < 0.8);
      if(served >= need){ over = true;
        cb({success: true, served, burnt, winText: 'BẾP TRƯỞNG MỚI LÀ ĐÂY! 👨‍🍳'}); return; }
      if(time <= 0){ over = true;
        cb({success: served >= Math.ceil(need*0.6), served, burnt,
          winText: 'CA LÀM TẠM ỔN! 🍽️', loseText: 'KHÁCH ĐÓI BỎ VỀ... 😅'}); return; }
    }
    // nhà hàng
    g.fillStyle = '#2a1c14'; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(255,180,90,.08)';
    for(let i = 0; i < 4; i++){ g.beginPath(); g.arc(W*(i+0.5)/4, 30, 60, 0, Math.PI*2); g.fill(); }
    // vỉ nướng
    g.fillStyle = '#3a3f47';
    rrect(g, W/2 - 390, H/2 - 170, 780, 380, 24); g.fill();
    g.strokeStyle = '#14161a'; g.lineWidth = 6; g.stroke();
    g.strokeStyle = 'rgba(20,22,26,.85)'; g.lineWidth = 8;
    for(let i = 0; i < 9; i++){
      g.beginPath(); g.moveTo(W/2 - 370, H/2 - 150 + i*42); g.lineTo(W/2 + 370, H/2 - 150 + i*42); g.stroke();
    }
    for(const s of SLOTS){
      if(!s.steak) continue;
      const st = s.steak, d = st.done;
      // màu thịt theo độ chín
      const col = d < 55 ? `rgb(${226 - d}, ${90 - d*0.4}, ${100 - d*0.6})`
        : d < 85 ? `rgb(${150 - (d-55)}, ${84 - (d-55)}, 48)`
        : `rgb(${70 - (d-85)}, 40, 26)`;
      g.fillStyle = col;
      g.save();
      g.translate(s.x, s.y);
      g.rotate(Math.sin(s.x + s.y) * 0.2);
      rrect(g, -52, -36, 104, 72, 22); g.fill();
      g.strokeStyle = 'rgba(20,10,5,.6)'; g.lineWidth = 4; g.stroke();
      g.strokeStyle = 'rgba(40,20,10,.5)'; g.lineWidth = 5;
      g.beginPath(); g.moveTo(-34, -12); g.lineTo(34, -12); g.moveTo(-34, 12); g.lineTo(34, 12); g.stroke();
      g.restore();
      // vòng canh độ chín
      g.lineWidth = 8;
      g.strokeStyle = 'rgba(255,255,255,.22)';
      g.beginPath(); g.arc(s.x, s.y, 62, 0, Math.PI*2); g.stroke();
      g.strokeStyle = '#2ec4b6';
      g.beginPath(); g.arc(s.x, s.y, 62, -Math.PI/2 + Math.PI*2*0.50, -Math.PI/2 + Math.PI*2*0.88); g.stroke();
      g.strokeStyle = d < 50 ? '#ffd166' : d <= 88 ? '#3ef0b0' : '#ef476f';
      g.beginPath(); g.arc(s.x, s.y, 62, -Math.PI/2, -Math.PI/2 + Math.PI*2*(d/100)); g.stroke();
      // lửa bùng
      if(st.flare > 0){
        g.font = '38px sans-serif'; g.textAlign = 'center';
        g.fillText('🔥', s.x, s.y - 66 + Math.sin(performance.now()/60)*4);
      }
      if(d > 85){
        g.font = '26px sans-serif'; g.textAlign = 'center';
        g.globalAlpha = .8;
        g.fillText('💨', s.x + 30, s.y - 50 - (d-85));
        g.globalAlpha = 1;
      }
    }
    // đĩa bay lên khi phục vụ
    g.font = '44px sans-serif'; g.textAlign = 'center';
    for(const p of plates){
      g.globalAlpha = 1 - p.t/0.8;
      g.fillText('🍽️', p.x, p.y - p.t*90);
      g.globalAlpha = 1;
    }
    g.fillStyle = '#fff8ef'; g.font = '800 22px "Baloo 2"'; g.textAlign = 'center';
    g.fillText(`🍽️ ${served}/${need}   💀 cháy: ${burnt}`, W/2, H - 22);
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
},

/* ============== 9. NUÔI KHỦNG LONG TRONG LAB ============== */
dino(opts, cb){
  const NEEDS = [
    {ic:'🍖', label:'Cho ăn'},
    {ic:'🚿', label:'Tắm rửa'},
    {ic:'🎾', label:'Chơi cùng'},
    {ic:'💤', label:'Ru ngủ'},
  ];
  const STAGES = ['🥚','🐣','🦕','🦖'];
  const goal = opts.goal || 9;
  const body = MG.frame(opts.title || '🧪 LAB KHỦNG LONG MINI',
    'Bé cần gì thì bấm đúng nút đó — trước khi bé dỗi!',
    `<div class="mg-bar-wrap"><span>🌱 TRƯỞNG THÀNH</span><div class="mg-bar"><div class="fill" id="growFill" style="width:0%;background:linear-gradient(90deg,#a8e063,#2ec4b6)"></div></div></div>
     <div style="position:absolute;inset:44px 0 0 0;display:flex;flex-direction:column;align-items:center;justify-content:center">
       <div style="font-size:26px;opacity:.55">⚗️ 🧪 🔬 🧫 ⚗️</div>
       <div id="dnTank" style="width:340px;height:300px;border:5px solid var(--ink);border-radius:26px;
         background:linear-gradient(180deg,#d6f4ff,#9fdcf0);position:relative;display:flex;
         align-items:center;justify-content:center;box-shadow:var(--shadow)">
         <div id="dnPet" style="font-size:96px;transition:font-size .4s;animation:bob 1.6s infinite">🥚</div>
         <div id="dnNeed" class="hidden" style="position:absolute;top:-26px;left:50%;transform:translateX(-50%);
           background:#fff;border:3px solid var(--ink);border-radius:999px;padding:6px 18px;
           font-size:30px;box-shadow:var(--shadow)"></div>
         <div id="dnMood" style="position:absolute;right:10px;bottom:8px;font-size:24px"></div>
       </div>
       <div id="dnBtns" style="display:flex;gap:14px;margin-top:16px">
         ${NEEDS.map((n,i) => `<button class="mg-btn plain" data-i="${i}">${n.ic}<br><small style="font-size:13px">${n.label}</small></button>`).join('')}
       </div>
     </div>`);
  let grow = 0, stress = 0, need = -1, needT = 0, over = false, idleT = 1.2;
  const pet = $('dnPet'), bubble = $('dnNeed'), mood = $('dnMood');
  AudioSys.music('cute');
  MG.msg('BÉ SẮP NỞ RỒI! 🥚', 1300);

  function stage(){ return STAGES[Math.min(3, Math.floor(grow / (goal/3)))]; }
  function refresh(){
    pet.textContent = stage();
    pet.style.fontSize = (96 + grow*6) + 'px';
    $('growFill').style.width = Math.min(100, grow/goal*100) + '%';
    mood.textContent = '💢'.repeat(stress);
  }
  function newNeed(){
    need = randInt(0, NEEDS.length - 1);
    needT = Math.max(2.6, 4.2 - grow*0.15);
    bubble.textContent = NEEDS[need].ic + ' ‼️';
    bubble.classList.remove('hidden');
  }
  function miss(){
    stress++; need = -1;
    bubble.classList.add('hidden');
    idleT = 1.0;
    AudioSys.sfx('bad');
    pet.classList.remove('hud-pulse'); void pet.offsetWidth; pet.classList.add('hud-pulse');
    if(stress >= 4 && !over){
      over = true;
      cb({success: false, grow, loseText: 'BÉ DỖI, TRỐN VÀO ỐNG NGHIỆM... 🥺'});
    }
  }
  body.querySelectorAll('#dnBtns button').forEach(b => {
    b.onclick = () => {
      if(over) return;
      const i = +b.dataset.i;
      if(need === -1){ return; }
      if(i === need){
        grow++; need = -1;
        bubble.classList.add('hidden');
        idleT = rand(0.8, 1.6);
        AudioSys.sfx('ding');
        refresh();
        if(grow >= goal && !over){
          over = true;
          stageFX('flash');
          cb({success: true, grow, winText: 'TRƯỞNG THÀNH RỰC RỠ! 🦖✨'});
        }
      } else miss();
    };
  });
  refresh();

  let last = performance.now();
  function loop(now){
    const dt = Math.min(0.05, (now - last)/1000); last = now;
    if(!over){
      if(need === -1){
        idleT -= dt;
        if(idleT <= 0) newNeed();
      } else {
        needT -= dt;
        bubble.style.transform = 'translateX(-50%) scale(' + (1 + Math.sin(now/120)*0.08) + ')';
        if(needT <= 0) miss();
      }
    }
    if(!over) MG._raf = requestAnimationFrame(loop);
  }
  MG._raf = requestAnimationFrame(loop);
  MG._cleanup = () => {};
},
};
