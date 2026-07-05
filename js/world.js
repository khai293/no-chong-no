/* ============ NỢ CHỒNG NỢ — thế giới top-down "Thành Phố Hỗn Loạn" ============ */

const ZONES = {
  taichinh: {x:120,  y:100, w:940, h:460, name:'KHU TÀI CHÍNH',  ic:'🏦', ground:'#ccd6ea', trim:'#b8c4dd'},
  benhvien: {x:1500, y:100, w:940, h:460, name:'BỆNH VIỆN SỐ 7', ic:'🏥', ground:'#d9eee2', trim:'#c2e0d0'},
  choden:   {x:120,  y:880, w:940, h:460, name:'PHỐ CHỢ ĐEN',    ic:'🌆', ground:'#b9a3cf', trim:'#a690bd'},
  doncs:    {x:1500, y:880, w:940, h:460, name:'ĐỒN CẢNH SÁT',   ic:'🚔', ground:'#c4d6cd', trim:'#b0c6bb'},
  anau:     {x:1090, y:560, w:380, h:320, name:'KHU ẨN NÁU',     ic:'🎪', ground:'#ecd9ae', trim:'#dfc794'},
};

const BUILDINGS = [
  // ---- Khu tài chính ----
  {zone:'taichinh', x:330, y:150, w:330, h:190, wall:'#7f95c9', roof:'#5b6fa3', win:'#dff1ff', sign:'🏦 NH ĐẠI PHÁT', big:true},
  {zone:'taichinh', x:150, y:150, w:130, h:150, wall:'#9db1dd', roof:'#7186b8', win:'#eaf6ff'},
  {zone:'taichinh', x:720, y:150, w:150, h:200, wall:'#8fa3d4', roof:'#66799f', win:'#eaf6ff'},
  {zone:'taichinh', x:920, y:150, w:110, h:160, wall:'#aab9e0', roof:'#7d8cba', win:'#f2f8ff'},
  {zone:'taichinh', x:150, y:400, w:180, h:120, wall:'#e8a06a', roof:'#b4703f', win:'#fff3d6', sign:'☕ CÀ PHÊ NỢ NẦN'},
  {zone:'taichinh', x:760, y:410, w:200, h:110, wall:'#93a8d8', roof:'#69759e', win:'#eaf6ff', sign:'🏧 ATM 24/7'},
  // ---- Bệnh viện ----
  {zone:'benhvien', x:1740, y:140, w:400, h:230, wall:'#f4fbf7', roof:'#c4ded2', win:'#cfe9ff', sign:'🏥 BỆNH VIỆN SỐ 7', big:true, cross:true},
  {zone:'benhvien', x:1540, y:160, w:150, h:140, wall:'#e6f4ec', roof:'#b6d2c4', win:'#d6ecff', sign:'💊 NHÀ THUỐC'},
  {zone:'benhvien', x:2220, y:160, w:170, h:170, wall:'#eef8f2', roof:'#bfdacd', win:'#d6ecff'},
  {zone:'benhvien', x:1560, y:420, w:220, h:100, wall:'#f9e6e6', roof:'#d3a8a8', win:'#ffefef', sign:'🍜 CANTIN'},
  {zone:'benhvien', x:2140, y:420, w:250, h:100, wall:'#e2ecf9', roof:'#a9bcd6', win:'#eef6ff', sign:'🅿️ NHÀ XE'},
  // ---- Chợ đen ----
  {zone:'choden', x:150, y:930, w:230, h:130, wall:'#8c5fb0', roof:'#5f3a80', win:'#ffd166', sign:'🛒 CHỢ ĐEN 18+', neon:true},
  {zone:'choden', x:450, y:930, w:190, h:120, wall:'#a06fc4', roof:'#6d4691', win:'#ffb3c9', sign:'🧸 GẤU BÔNG "SẠCH"', neon:true},
  {zone:'choden', x:700, y:930, w:230, h:130, wall:'#6d4c2f', roof:'#4a3220', win:'#ffe9a0', sign:'💰 TIỆM CẦM ĐỒ', neon:true},
  {zone:'choden', x:150, y:1190, w:200, h:110, wall:'#94569e', roof:'#68386f', win:'#ff9f1c', sign:'🍵 TRÀ SỮA LẬU'},
  {zone:'choden', x:430, y:1190, w:170, h:110, wall:'#7d5ba6', roof:'#573d78', win:'#ffd166'},
  {zone:'choden', x:690, y:1190, w:250, h:110, wall:'#59416b', roof:'#3d2b4c', win:'#ff6fa5', sign:'🎤 KARAOKE BÍ MẬT', neon:true},
  // ---- Đồn cảnh sát ----
  {zone:'doncs', x:1720, y:920, w:380, h:220, wall:'#7fae96', roof:'#557a67', win:'#eafff4', sign:'🚔 ĐỒN CẢNH SÁT', big:true},
  {zone:'doncs', x:1540, y:950, w:140, h:130, wall:'#98bda9', roof:'#6b8d79', win:'#eafff4', sign:'🚧 TRẠM GÁC'},
  {zone:'doncs', x:2180, y:950, w:210, h:150, wall:'#8ab49d', roof:'#5e8570', win:'#d6f2e4', sign:'⛓️ NHÀ TẠM GIỮ'},
  {zone:'doncs', x:1600, y:1190, w:300, h:110, wall:'#a4c4b2', roof:'#748f80', win:'#eafff4', sign:'🅿️ BÃI XE TUẦN TRA'},
];

const TREES = [
  [1120,180],[1440,180],[1120,420],[1440,420],[1120,1010],[1440,1010],[1120,1260],[1440,1260],
  [340,620],[620,620],[900,620],[340,830],[620,830],[900,830],
  [1660,620],[1940,620],[2220,620],[1660,830],[1940,830],[2220,830],
  [220,700],[2380,700]
];

const World = {
  running:false, cv:null, ctx:null, off:null, octx:null,
  W:2560, H:1440,
  player:{x:640, y:715, dir:'down', frame:0, walking:false, r:14},
  cam:{x:0, y:0},
  npcs:[], objective:null, patrols:[], patrolCD:0,
  dust:[], time:0, nearNPC:null,

  init(){
    this.cv = $('world');
    this.ctx = this.cv.getContext('2d');
    this.off = document.createElement('canvas');
    this.off.width = this.W; this.off.height = this.H;
    this.octx = this.off.getContext('2d');
    this.refreshStatic();
  },

  /* cấu hình cho một đoạn chơi trên bản đồ */
  config(cfg){
    cfg = cfg || {};
    if(cfg.playerAt){ this.player.x = cfg.playerAt.x; this.player.y = cfg.playerAt.y; }
    this.npcs = cfg.npcs || [];
    this.objective = cfg.objective || null;
    this.patrols = (cfg.patrols || []).map(p => ({...p, t:0, seg:0, x:p.path[0][0], y:p.path[0][1], ang:0}));
    this.patrolCD = 0;
  },

  start(){ this.running = true; $('hud').classList.remove('hidden');
    if('ontouchstart' in window) $('touch').classList.remove('hidden'); },
  stop(){ this.running = false; $('touch').classList.add('hidden'); },

  /* ---------- vẽ bản đồ tĩnh ---------- */
  refreshStatic(){
    const g = this.octx, W = this.W, H = this.H;
    // nền cỏ
    g.fillStyle = '#9fce7a'; g.fillRect(0,0,W,H);
    g.fillStyle = '#93c46e';
    for(let i=0;i<400;i++){
      const x = (i*137)%W, y = (i*211+((i*53)%97))%H;
      g.fillRect(x, y, 14, 5);
    }
    // đường nhựa (chữ thập)
    const roadC = '#8d86a3', sideC = '#c8c2d6';
    g.fillStyle = sideC; g.fillRect(0, 610, W, 220); g.fillRect(1140, 0, 280, H);
    g.fillStyle = roadC; g.fillRect(0, 640, W, 160); g.fillRect(1170, 0, 220, H);
    // vạch kẻ đường
    g.strokeStyle = '#f5efdd'; g.lineWidth = 6; g.setLineDash([36, 30]);
    g.beginPath(); g.moveTo(0, 720); g.lineTo(W, 720); g.stroke();
    g.beginPath(); g.moveTo(1280, 0); g.lineTo(1280, H); g.stroke();
    g.setLineDash([]);
    // vạch sang đường
    g.fillStyle = 'rgba(245,239,221,.8)';
    for(let i=0;i<7;i++){ g.fillRect(1085-14, 652+i*20, 40, 12); g.fillRect(1462-14, 652+i*20, 40, 12); }

    // sân khu vực
    for(const key in ZONES){
      const z = ZONES[key];
      g.fillStyle = z.ground;
      rrect(g, z.x, z.y, z.w, z.h, 26); g.fill();
      g.strokeStyle = z.trim; g.lineWidth = 8; g.stroke();
      // tên khu in trên nền
      g.fillStyle = 'rgba(42,35,51,.18)';
      g.font = '800 44px "Baloo 2", sans-serif';
      g.textAlign = 'center';
      g.fillText(z.ic + ' ' + z.name, z.x + z.w/2, z.y + z.h - 26);
    }

    // lều ẩn náu (rạp xiếc nhỏ)
    this.drawTent(g, 1280, 700);

    // nhà cửa
    for(const b of BUILDINGS){ this.drawBuilding(g, b); }

    // cây
    for(const [x,y] of TREES){
      g.fillStyle = 'rgba(20,12,30,.18)';
      g.beginPath(); g.ellipse(x, y+26, 24, 9, 0, 0, Math.PI*2); g.fill();
      g.fillStyle = '#7a5236'; g.fillRect(x-5, y, 10, 26);
      g.fillStyle = '#5fa053';
      g.beginPath(); g.arc(x, y-16, 26, 0, Math.PI*2); g.fill();
      g.fillStyle = '#74b866';
      g.beginPath(); g.arc(x-8, y-24, 16, 0, Math.PI*2); g.fill();
    }

    // khoá khu chưa mở
    const un = Game.state ? Game.state.unlocked : {taichinh:true};
    for(const key in ZONES){
      if(key === 'anau') continue;
      if(un && un[key]) continue;
      const z = ZONES[key];
      g.save();
      g.fillStyle = 'rgba(30,22,44,.55)';
      rrect(g, z.x, z.y, z.w, z.h, 26); g.fill();
      // băng dính cảnh báo
      g.translate(z.x + z.w/2, z.y + z.h/2);
      g.rotate(-0.06);
      g.fillStyle = '#ffd166';
      g.fillRect(-z.w/2-30, -22, z.w+60, 44);
      g.fillStyle = '#2a2333';
      g.font = '800 30px "Baloo 2", sans-serif'; g.textAlign = 'center';
      g.fillText('🔒 CHƯA MỞ KHÓA — ĐỪNG TÒ MÒ 🔒', 0, 11);
      g.restore();
    }
  },

  drawBuilding(g, b){
    // bóng
    g.fillStyle = 'rgba(20,12,30,.2)';
    rrect(g, b.x+10, b.y+14, b.w, b.h, 10); g.fill();
    // tường
    g.fillStyle = b.wall;
    rrect(g, b.x, b.y, b.w, b.h, 10); g.fill();
    g.strokeStyle = 'rgba(42,35,51,.75)'; g.lineWidth = 5; g.stroke();
    // mái
    const roofH = 26;
    g.fillStyle = b.roof;
    rrect(g, b.x-8, b.y-10, b.w+16, roofH+14, 10); g.fill();
    g.strokeStyle = 'rgba(42,35,51,.75)'; g.stroke();
    // cửa sổ
    g.fillStyle = b.win;
    const cols = Math.max(2, Math.floor(b.w/70)), rows = Math.max(1, Math.floor((b.h-50)/60));
    const gw = b.w/(cols+1), gh = (b.h-40)/(rows+1);
    for(let r=1;r<=rows;r++) for(let c=1;c<=cols;c++){
      rrect(g, b.x + c*gw - 14, b.y + 18 + r*gh - 12, 28, 24, 5); g.fill();
    }
    // cửa ra vào
    g.fillStyle = 'rgba(42,35,51,.85)';
    rrect(g, b.x + b.w/2 - 20, b.y + b.h - 38, 40, 38, 6); g.fill();
    // chữ thập bệnh viện
    if(b.cross){
      g.fillStyle = '#ef476f';
      g.fillRect(b.x + b.w/2 - 10, b.y - 6, 20, 44);
      g.fillRect(b.x + b.w/2 - 22, b.y + 6, 44, 20);
    }
    // biển hiệu
    if(b.sign){
      g.save();
      g.font = '800 21px "Baloo 2", sans-serif';
      const tw = g.measureText(b.sign).width + 30;
      const sx = b.x + b.w/2 - tw/2, sy = b.y - 44;
      g.fillStyle = b.neon ? '#2a2333' : '#fff8ef';
      rrect(g, sx, sy, tw, 34, 10); g.fill();
      g.strokeStyle = b.neon ? '#ff6fa5' : '#2a2333'; g.lineWidth = 4; g.stroke();
      g.fillStyle = b.neon ? '#ffd166' : '#2a2333';
      g.textAlign = 'center';
      g.fillText(b.sign, b.x + b.w/2, sy + 24);
      g.restore();
    }
  },

  drawTent(g, cx, cy){
    g.fillStyle = 'rgba(20,12,30,.22)';
    g.beginPath(); g.ellipse(cx, cy+62, 120, 26, 0, 0, Math.PI*2); g.fill();
    // thân lều sọc
    for(let i=0;i<8;i++){
      g.fillStyle = i%2 ? '#ef476f' : '#fff8ef';
      g.beginPath();
      g.moveTo(cx, cy-95);
      g.lineTo(cx-110 + i*(220/8), cy+55);
      g.lineTo(cx-110 + (i+1)*(220/8), cy+55);
      g.closePath(); g.fill();
    }
    g.strokeStyle = '#2a2333'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(cx-110, cy+55); g.lineTo(cx, cy-95); g.lineTo(cx+110, cy+55);
    g.closePath(); g.stroke();
    g.beginPath(); g.ellipse(cx, cy+55, 110, 18, 0, 0, Math.PI); g.stroke();
    // cửa lều
    g.fillStyle = '#2a2333';
    g.beginPath(); g.moveTo(cx-26, cy+58); g.lineTo(cx, cy+6); g.lineTo(cx+26, cy+58); g.closePath(); g.fill();
    // cờ
    g.fillStyle = '#ffd166';
    g.beginPath(); g.moveTo(cx, cy-95); g.lineTo(cx, cy-125); g.lineTo(cx+34, cy-112); g.closePath(); g.fill();
    g.strokeStyle = '#2a2333'; g.lineWidth = 3; g.stroke();
    g.font = '800 22px "Baloo 2", sans-serif'; g.textAlign='center';
    g.fillStyle = '#fff8ef';
    g.fillText('🎪 TỔNG HÀNH DINH "NỢ"', cx, cy+96);
  },

  /* ---------- va chạm ---------- */
  blocked(x, y){
    const r = this.player.r;
    if(x < 60 || x > this.W-60 || y < 60 || y > this.H-60) return true;
    // lều
    if(Math.abs(x-1280) < 100 && y > 620 && y < 760 && !(y > 700 && Math.abs(x-1280) < 34)) {
      if(y < 756 && y > 610) return true;
    }
    for(const b of BUILDINGS){
      if(x+r > b.x && x-r < b.x+b.w && y+r > b.y && y-r < b.y+b.h) return true;
    }
    const un = Game.state.unlocked;
    for(const key in ZONES){
      if(key === 'anau' || un[key]) continue;
      const z = ZONES[key];
      if(x+r > z.x && x-r < z.x+z.w && y+r > z.y && y-r < z.y+z.h){
        this._bump = key; return true;
      }
    }
    return false;
  },

  /* ---------- cập nhật ---------- */
  update(dt){
    const p = this.player;
    this.time += dt;
    let vx = 0, vy = 0;
    if(Keys['KeyW'] || Keys['ArrowUp']) vy -= 1;
    if(Keys['KeyS'] || Keys['ArrowDown']) vy += 1;
    if(Keys['KeyA'] || Keys['ArrowLeft']) vx -= 1;
    if(Keys['KeyD'] || Keys['ArrowRight']) vx += 1;
    if(Joy.active){ vx += Joy.vx; vy += Joy.vy; }
    const len = Math.hypot(vx, vy);
    p.walking = len > 0.15;
    if(p.walking){
      vx /= Math.max(1,len); vy /= Math.max(1,len);
      const sp = 280 * dt;
      this._bump = null;
      const nx = p.x + vx*sp, ny = p.y + vy*sp;
      if(!this.blocked(nx, p.y)) p.x = nx;
      if(!this.blocked(p.x, ny)) p.y = ny;
      if(this._bump){
        if(!this._bumpToastCD || this.time > this._bumpToastCD){
          Toast('🚧 Khu này chưa mở khóa — đi chỗ khác chơi!', 'bad');
          this._bumpToastCD = this.time + 2.5;
        }
      }
      p.dir = Math.abs(vx) > Math.abs(vy) ? (vx > 0 ? 'right' : 'left') : (vy > 0 ? 'down' : 'up');
      p.frame++;
      if(p.frame % 9 === 0) this.dust.push({x:p.x+rand(-6,6), y:p.y+18, t:0});
    }
    this.dust = this.dust.filter(d => (d.t += dt) < 0.5);

    // camera
    const tx = clamp(p.x - 640, 0, this.W - 1280);
    const ty = clamp(p.y - 380, 0, this.H - 720);
    this.cam.x += (tx - this.cam.x) * Math.min(1, dt*5);
    this.cam.y += (ty - this.cam.y) * Math.min(1, dt*5);

    // NPC gần nhất
    this.nearNPC = null;
    let best = 80;
    for(const n of this.npcs){
      const d = Math.hypot(n.x - p.x, n.y - p.y);
      if(d < best){ best = d; this.nearNPC = n; }
    }

    // mục tiêu
    if(this.objective){
      const o = this.objective;
      const d = Math.hypot(o.x - p.x, o.y - p.y);
      if(d < (o.r || 70) && !o._hit){
        o._hit = true;
        const cb = o.onReach;
        this.objective = null;
        if(cb) cb();
      }
    }

    // tuần tra
    if(this.patrolCD > 0) this.patrolCD -= dt;
    for(const c of this.patrols){
      const a = c.path[c.seg], b = c.path[(c.seg+1) % c.path.length];
      const segLen = Math.hypot(b[0]-a[0], b[1]-a[1]);
      c.t += (c.speed || 90) * dt / segLen;
      if(c.t >= 1){ c.t = 0; c.seg = (c.seg+1) % c.path.length; }
      const na = c.path[c.seg], nb = c.path[(c.seg+1) % c.path.length];
      c.x = na[0] + (nb[0]-na[0]) * c.t;
      c.y = na[1] + (nb[1]-na[1]) * c.t;
      c.ang = Math.atan2(nb[1]-na[1], nb[0]-na[0]);
      // phát hiện
      if(this.patrolCD <= 0){
        const dx = p.x - c.x, dy = p.y - c.y;
        const d = Math.hypot(dx, dy);
        if(d < 170){
          const diff = Math.abs(normAng(Math.atan2(dy, dx) - c.ang));
          if(diff < 0.65){
            this.patrolCD = 4;
            AudioSys.sfx('siren');
            stageFX('shake');
            Game.addDR(10, 'bị cảnh sát hỏi thăm');
            // đẩy người chơi lùi lại
            const push = 90;
            const nx = p.x + (dx/d)*push, ny = p.y + (dy/d)*push;
            if(!this.blocked(nx, ny)){ p.x = nx; p.y = ny; }
          }
        }
      }
    }
  },

  tryInteract(){
    if(this.nearNPC && this.nearNPC.onTalk){
      const n = this.nearNPC;
      AudioSys.sfx('click');
      n.onTalk(n);
    }
  },

  /* ---------- vẽ ---------- */
  draw(){
    const g = this.ctx, cam = this.cam;
    g.clearRect(0, 0, 1280, 720);
    g.drawImage(this.off, cam.x, cam.y, 1280, 720, 0, 0, 1280, 720);
    g.save();
    g.translate(-cam.x, -cam.y);

    // bụi chân
    for(const d of this.dust){
      g.fillStyle = `rgba(160,140,120,${0.4*(1-d.t*2)})`;
      g.beginPath(); g.arc(d.x, d.y, 4 + d.t*10, 0, Math.PI*2); g.fill();
    }

    // mục tiêu — vòng sáng
    if(this.objective){
      const o = this.objective;
      const pu = (Math.sin(this.time*4) + 1) / 2;
      g.strokeStyle = `rgba(255,209,102,${0.5 + pu*0.5})`;
      g.lineWidth = 6;
      g.beginPath(); g.arc(o.x, o.y, 34 + pu*14, 0, Math.PI*2); g.stroke();
      g.fillStyle = 'rgba(255,209,102,.25)';
      g.beginPath(); g.arc(o.x, o.y, 30, 0, Math.PI*2); g.fill();
      g.font = '30px sans-serif'; g.textAlign = 'center';
      g.fillText(o.ic || '🎯', o.x, o.y - 44 - pu*8);
    }

    // tuần tra + nón quan sát
    for(const c of this.patrols){
      g.save();
      g.translate(c.x, c.y);
      g.rotate(c.ang);
      const grad = g.createLinearGradient(0, 0, 170, 0);
      grad.addColorStop(0, 'rgba(239,71,111,.30)');
      grad.addColorStop(1, 'rgba(239,71,111,0)');
      g.fillStyle = grad;
      g.beginPath(); g.moveTo(0, 0);
      g.arc(0, 0, 170, -0.65, 0.65);
      g.closePath(); g.fill();
      g.restore();
      drawChibi(g, c.x, c.y, angToDir(c.ang), this.time*60, 'lam', {walking:true});
      g.font = '20px sans-serif'; g.textAlign = 'center';
      g.fillText('🚨', c.x, c.y - 46 + Math.sin(this.time*6)*3);
    }

    // NPC
    for(const n of this.npcs){
      const facing = (n === this.nearNPC)
        ? (this.player.x < n.x ? 'left' : 'right') : (n.dir || 'down');
      drawChibi(g, n.x, n.y, facing, 0, n.char, {});
      // tên
      g.font = '700 15px "Baloo 2", sans-serif';
      const nm = n.label || Game.charName(n.char);
      const tw = g.measureText(nm).width + 16;
      g.fillStyle = 'rgba(42,35,51,.8)';
      rrect(g, n.x - tw/2, n.y - 68, tw, 22, 10); g.fill();
      g.fillStyle = '#fff8ef'; g.textAlign = 'center';
      g.fillText(nm, n.x, n.y - 52);
      // dấu chấm than
      if(n.emote){
        g.font = '26px sans-serif';
        g.fillText(n.emote, n.x, n.y - 78 + Math.sin(this.time*5)*4);
      }
    }

    // người chơi
    const p = this.player;
    drawChibi(g, p.x, p.y, p.dir, p.frame, 'chau', {walking:p.walking});
    // đồng đội đi theo (Lucien) — trang trí khi flag bật
    if(Game.state.flags.khaiFollow){
      const off = {down:[-34,-20], up:[34,20], left:[34,-16], right:[-34,-16]}[p.dir] || [-34,-20];
      drawChibi(g, p.x + off[0], p.y + off[1], p.dir, p.frame - 6, 'khai', {walking:p.walking});
    }

    // gợi ý tương tác
    if(this.nearNPC){
      const n = this.nearNPC;
      const pu = (Math.sin(this.time*6)+1)/2;
      g.fillStyle = '#fff8ef';
      g.strokeStyle = '#2a2333'; g.lineWidth = 3;
      rrect(g, n.x - 22, n.y + 26 + pu*3, 44, 26, 8); g.fill(); g.stroke();
      g.fillStyle = '#2a2333';
      g.font = '800 15px "Baloo 2", sans-serif'; g.textAlign = 'center';
      g.fillText('E', n.x, n.y + 44 + pu*3);
    }
    g.restore();

    // mũi tên chỉ đường khi mục tiêu ngoài màn hình
    if(this.objective){
      const o = this.objective;
      const sx = o.x - cam.x, sy = o.y - cam.y;
      if(sx < -20 || sx > 1300 || sy < -20 || sy > 740){
        const cx = 640, cy = 360;
        const ang = Math.atan2(sy - cy, sx - cx);
        const ex = cx + Math.cos(ang) * 540, ey = cy + Math.sin(ang) * 300;
        g.save();
        g.translate(ex, ey); g.rotate(ang);
        g.fillStyle = '#ffd166'; g.strokeStyle = '#2a2333'; g.lineWidth = 4;
        g.beginPath(); g.moveTo(26, 0); g.lineTo(-14, -18); g.lineTo(-6, 0); g.lineTo(-14, 18);
        g.closePath(); g.fill(); g.stroke();
        g.restore();
      }
    }

    // viền tối nhẹ (vignette)
    const vg = g.createRadialGradient(640, 360, 380, 640, 360, 780);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(20,10,35,.35)');
    g.fillStyle = vg; g.fillRect(0, 0, 1280, 720);
  },
};

function normAng(a){
  while(a > Math.PI) a -= Math.PI*2;
  while(a < -Math.PI) a += Math.PI*2;
  return a;
}
function angToDir(a){
  a = normAng(a);
  if(a > -Math.PI*0.25 && a < Math.PI*0.25) return 'right';
  if(a >= Math.PI*0.25 && a < Math.PI*0.75) return 'down';
  if(a <= -Math.PI*0.25 && a > -Math.PI*0.75) return 'up';
  return 'left';
}

/* ---------- joystick cảm ứng ---------- */
const Joy = {active:false, vx:0, vy:0};
(function(){
  const joy = $('joy'), knob = $('joyKnob');
  let pid = null;
  function setKnob(dx, dy){
    knob.style.left = (39 + dx) + 'px';
    knob.style.top = (39 + dy) + 'px';
  }
  joy.addEventListener('pointerdown', e => {
    pid = e.pointerId; joy.setPointerCapture(pid);
    Joy.active = true;
    move(e);
  });
  function move(e){
    const r = joy.getBoundingClientRect();
    const scale = r.width / 130;
    let dx = (e.clientX - (r.left + r.width/2)) / scale;
    let dy = (e.clientY - (r.top + r.height/2)) / scale;
    const d = Math.hypot(dx, dy);
    if(d > 44){ dx = dx/d*44; dy = dy/d*44; }
    setKnob(dx, dy);
    Joy.vx = dx / 44; Joy.vy = dy / 44;
  }
  joy.addEventListener('pointermove', e => { if(e.pointerId === pid) move(e); });
  function up(e){
    if(e.pointerId !== pid) return;
    pid = null; Joy.active = false; Joy.vx = Joy.vy = 0;
    setKnob(0, 0);
  }
  joy.addEventListener('pointerup', up);
  joy.addEventListener('pointercancel', up);
  $('btnAct').addEventListener('pointerdown', e => {
    e.preventDefault();
    if(World.running) World.tryInteract();
  });
})();

document.addEventListener('keydown', e => {
  if(e.code === 'KeyE' && World.running && !VN.active && !Panels.active && !MG.active){
    World.tryInteract();
  }
});
