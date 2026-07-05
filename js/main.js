/* ============ NỢ CHỒNG NỢ — khởi động & điều phối luồng chơi ============ */

/* ---------------- FLOW: chạy tuần tự các bước của chương ---------------- */
const Flow = {
  steps: [], si: 0,

  startChapter(i){
    if(i >= STORY.flow.length){ showEnding(); return; }
    Game.state.chapter = i;
    Game.save();
    const ch = STORY.flow[i];
    Transition.wipe(() => {
      Game.setQuest(null);
      AudioSys.music(null);
      TitleCard.show(ch.no, ch.title, ch.stamp, () => {
        this.steps = ch.steps;
        this.si = 0;
        this.next();
      });
    });
  },

  next(){
    const st = this.steps[this.si++];
    if(st === undefined){ this.startChapter(Game.state.chapter + 1); return; }
    if(st.when && !st.when()){ this.next(); return; }
    this.runStep(st, once(() => this.next()));
  },

  runStep(st, done){
    if(st.do){ st.do(); done(); return; }
    if(st.vn){ VN.play(STORY.scenes[st.vn], done); return; }
    if(st.panels){ Panels.play(STORY.panels[st.panels], done); return; }
    if(st.mg){
      MG.run(st.mg, st.opts, res => { if(st.after) st.after(res); done(); });
      return;
    }
    if(st.map){ this.runMap(st.map, done); return; }
    if(st.ending){ showEnding(); return; }
    done();
  },

  runMap(cfg, done){
    const npcs = (cfg.npcs || []).map(n => {
      const c = {...n};
      if(cfg.talk && n.id === cfg.talk){
        c.onTalk = done;
      } else if(n.bark){
        c.onTalk = () => { if(!VN.active) VN.play(n.bark.slice(), null); };
      }
      return c;
    });
    const wcfg = {npcs, patrols: cfg.patrols || [], playerAt: cfg.playerAt};
    if(cfg.goto) wcfg.objective = {...cfg.goto, onReach: done};
    World.config(wcfg);
    if(cfg.music) AudioSys.music(cfg.music);
    Game.setQuest(cfg.quest, cfg.ic);
    World.start();
  },
};

function once(fn){
  let called = false;
  return (...a) => { if(called) return; called = true; fn(...a); };
}

/* ---------------- MÀN HÌNH KẾT THÚC ---------------- */
function showEnding(){
  World.stop();
  Game.setQuest(null);
  Game.clearSave();
  AudioSys.music('sad');
  const key = STORY.computeEnding();
  const e = STORY.endings[key];
  const s = Game.state;
  const paras = e.text.split('\n').map(p =>
    `<p>${p.trim().replace(/\{ten\}/g, Game.charName('chau'))}</p>`).join('');
  const el = $('ending');
  el.className = e.cls;
  el.innerHTML = `
    <div class="end-card">
      <div class="end-emoji">${e.emoji}</div>
      <div class="end-tag">✦ ${e.tag} ✦</div>
      <h1>${e.title}</h1>
      ${paras}
      <div class="end-stats">
        <span>⚡ Rắc Rối: ${s.dr}</span>
        <span>💗 Tin Tưởng: ${s.trust}%</span>
        <span>💸 Tài chính: ${Game.fmtMoney(s.money)}</span>
      </div>
    </div>
    <div class="end-note">Còn 3 kết thúc khác đang chờ... Chơi lại và chọn khác đi! 🎲</div>
    <button class="big-btn" onclick="location.reload()">🔄 CHƠI LẠI TỪ ĐẦU</button>`;
  el.classList.remove('hidden');
  AudioSys.sfx('win');
}

/* ---------------- MÀN HÌNH CHÍNH ---------------- */
function setupTitle(){
  $('logoStamp').innerHTML = KIDNEY + ' một quả thận đã ra đi vì game này';
  // nhân vật hai bên
  $('titleChars').innerHTML = `
    <div class="tchar tc-l">${portraitSVG('chau', 'happy')}</div>
    <div class="tchar tc-r">${portraitSVG('khai', 'smug')}</div>`;
  // tiền rơi
  const bills = $('titleBills');
  const ems = ['💸','💵','🧾','💰','📄'];
  let html = '';
  for(let i = 0; i < 14; i++){
    html += `<span class="bill" style="left:${rand(2,95)}%;
      animation-duration:${rand(6,13)}s;animation-delay:${rand(0,9)}s;
      font-size:${rand(22,40)}px">${ems[randInt(0, ems.length-1)]}</span>`;
  }
  bills.innerHTML = html;

  if(Game.hasSave()) $('btnContinue').classList.remove('hidden');

  $('btnNew').onclick = () => {
    AudioSys.sfx('click');
    $('titleMenu').classList.add('hidden');
    $('nameEntry').classList.remove('hidden');
    $('nameInput').focus();
  };
  $('btnContinue').onclick = () => {
    AudioSys.sfx('click');
    if(Game.load()){
      startPlay(Game.state.chapter);
    }
  };
  const go = () => {
    const name = ($('nameInput').value || '').trim() || 'Châu';
    Game.state = Game.newState(name);
    startPlay(0);
  };
  $('nameGo').onclick = go;
  $('nameInput').addEventListener('keydown', e => {
    if(e.key === 'Enter') go();
    e.stopPropagation();
  });
}

function startPlay(chapter){
  $('title').classList.add('hidden');
  Game.updateHUD();
  $('hud').classList.remove('hidden');
  World.refreshStatic();
  AudioSys.ensure();
  Flow.startChapter(chapter);
}

/* ---------------- VÒNG LẶP CHÍNH ---------------- */
let _lastT = performance.now();
function mainLoop(now){
  const dt = Math.min(0.05, (now - _lastT) / 1000);
  _lastT = now;
  if(World.running){
    const overlay = VN.active || Panels.active || MG.active
      || !$('titleCard').classList.contains('hidden')
      || !$('ending').classList.contains('hidden');
    if(!overlay) World.update(dt);
    World.draw();
  }
  requestAnimationFrame(mainLoop);
}

/* chặn cuộn trang bằng phím */
window.addEventListener('keydown', e => {
  if(e.target.tagName === 'INPUT') return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
});

/* ---------------- KHỞI ĐỘNG ---------------- */
World.init();
setupTitle();
requestAnimationFrame(mainLoop);
// vẽ lại bản đồ khi font tải xong (biển hiệu dùng font Baloo 2)
if(document.fonts && document.fonts.ready) document.fonts.ready.then(() => World.refreshStatic());
