/* ============ NỢ CHỒNG NỢ — đồ họa nhân vật (SVG webtoon + chibi canvas) ============ */

/* quả thận dễ thương — Windows 10 không có emoji 🫁 nên tự vẽ */
const KIDNEY = `<svg viewBox="0 0 64 64" style="height:1.05em;vertical-align:-0.16em;display:inline-block;overflow:visible">
  <path d="M38 4 C17 4 6 18 6 32 C6 47 18 60 38 60 C51 60 58 53 58 46 C58 40 52 37 46 35 C41 33.5 41 30.5 46 29 C52 27 58 24 58 18 C58 11 51 4 38 4 Z"
    fill="#ef476f" stroke="#2a2333" stroke-width="4" stroke-linejoin="round"/>
  <ellipse cx="22" cy="20" rx="7" ry="10" fill="#ff8fae" transform="rotate(-28 22 20)"/>
  <circle cx="24" cy="32" r="3.2" fill="#2a2333"/><circle cx="38" cy="32" r="3.2" fill="#2a2333"/>
  <path d="M26 42 Q31 47 36 42" stroke="#2a2333" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`;

/* ---------- phần thưởng quest ẩn: trang phục & thú cưng ---------- */
const SKINS = {
  default: {name:'Đồ thường ngày',      cloth:'#ffd166', cloth2:'#ff9f1c'},
  phivu:   {name:'Bộ Phi Vụ Đen',       cloth:'#2a2333', cloth2:'#4cc9f0'},
  congso:  {name:'Công Sở Chỉn Chu',    cloth:'#f5f5f7', cloth2:'#5b7db1'},
  nonla:   {name:'Nón Lá Huyền Thoại',  cloth:'#e8d5a3', cloth2:'#8a5a12'},
  casi:    {name:'Ngôi Sao Sân Khấu',   cloth:'#ff6fa5', cloth2:'#ffd166'},
  bep:     {name:'Bếp Trưởng Phố Đêm',  cloth:'#ffffff', cloth2:'#ef476f'},
  thamtu:  {name:'Trinh Thám Chính Hiệu', cloth:'#a5764f', cloth2:'#5c3f28'},
  hoahong: {name:'Quý Cô Hoa Hồng',     cloth:'#7a1f3d', cloth2:'#c9a227'},
};
const PETS = {
  rua:  {e:'🐢', name:'Rùa Tốc Độ'},
  cu:   {e:'🦉', name:'Cú Soi'},
  bong: {e:'🐕', name:'Bông (về phe mình rồi)'},
  meo:  {e:'🐈', name:'Mèo Lãi Suất'},
  dino: {e:'🦖', name:'Bé Nợ Con'},
};
function chauSkin(){
  const s = (typeof Game !== 'undefined' && Game.state && Game.state.skin) || 'default';
  return SKINS[s] || SKINS.default;
}

const CHARDEF = {
  chau : {name:'Châu',  tag:'#ff6fa5', skin:'#ffdfc9', hair:'#7a4b3a', hairHi:'#a06b52',
          cloth:'#ffd166', cloth2:'#ff9f1c', style:'chau'},
  khai : {name:'Lucien',  tag:'#4cc9f0', skin:'#ffe6d0', hair:'#23222e', hairHi:'#44415c',
          cloth:'#3a3f58', cloth2:'#f5f5f7', style:'khai'},
  batu : {name:'Bà Tư', tag:'#7d5ba6', skin:'#f5cfa8', hair:'#7d5ba6', hairHi:'#a07fd0',
          cloth:'#c2185b', cloth2:'#ffd166', style:'batu'},
  lam  : {name:'Đội trưởng Lâm', tag:'#2e7d5b', skin:'#eec39a', hair:'#3d3529', hairHi:'#5a4d3a',
          cloth:'#2e6f4f', cloth2:'#ffd166', style:'lam'},
  bacsi: {name:'Bác sĩ Mập', tag:'#4cc9f0', skin:'#ffe0c2', hair:'#4a4a55', hairHi:'#6a6a78',
          cloth:'#f8fbff', cloth2:'#8fc7e8', style:'bacsi'},
  yta  : {name:'Y tá Hồng Hài Hước', tag:'#ef476f', skin:'#ffe6d6', hair:'#d96a8b', hairHi:'#f2a0b8',
          cloth:'#fff0f4', cloth2:'#ef476f', style:'yta'},
  camdo: {name:'Ông Cầm Đồ', tag:'#8a5a12', skin:'#e8b98a', hair:'#333', hairHi:'#555',
          cloth:'#6d4c2f', cloth2:'#c9a227', style:'camdo'},
  vinh : {name:'Vinh Xe Ôm', tag:'#1b9e55', skin:'#e8b98a', hair:'#2b2b2b', hairHi:'#444',
          cloth:'#19b464', cloth2:'#0d7a42', style:'vinh'},
  baove: {name:'Bác Bảo Vệ', tag:'#5b7db1', skin:'#eec39a', hair:'#b9b9c4', hairHi:'#d6d6de',
          cloth:'#33507a', cloth2:'#b9c6dd', style:'baove'},
  me   : {name:'Bà Mai (mẹ)', tag:'#d9838f', skin:'#f2cfae', hair:'#8a7a6d', hairHi:'#a89a8c',
          cloth:'#bfe0d8', cloth2:'#d9a0a8', style:'me'},
  bac  : {name:'GS. Bạc Cận Ngôn', tag:'#26314e', skin:'#ffe6d0', hair:'#1d1b26', hairHi:'#3a3750',
          cloth:'#26314e', cloth2:'#7d1f2e', style:'bac'},
  tahan: {name:'Quý Ngài Hoa Hồng', tag:'#4a2440', skin:'#f5e8de', hair:'#cfd3e8', hairHi:'#e8ebf7',
          cloth:'#4a2440', cloth2:'#c9a227', style:'tahan'},
  chuno: {name:'Anh Sáu Lãi', tag:'#b3541e', skin:'#e0a878', hair:'#c0392b', hairHi:'#e74c3c',
          cloth:'#3b3b3b', cloth2:'#ffd166', style:'chuno'},
};

/* ---------- các mảnh khuôn mặt ---------- */
function _eyeDot(x,y,r){r=r||11;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="#2a2333"/>
          <circle cx="${x+3.6}" cy="${y-3.8}" r="${r*.34}" fill="#fff"/>`;}
function _eyeHappy(x,y){
  return `<path d="M ${x-13} ${y+3} Q ${x} ${y-13} ${x+13} ${y+3}" stroke="#2a2333"
          stroke-width="5.5" fill="none" stroke-linecap="round"/>`;}
function _eyeSad(x,y){
  return `<path d="M ${x-13} ${y-4} Q ${x} ${y+10} ${x+13} ${y-4}" stroke="#2a2333"
          stroke-width="5.5" fill="none" stroke-linecap="round"/>`;}
function _eyeShock(x,y){
  return `<circle cx="${x}" cy="${y}" r="14" fill="#fff" stroke="#2a2333" stroke-width="4"/>
          <circle cx="${x}" cy="${y}" r="4" fill="#2a2333"/>`;}
function _eyeHalf(x,y){
  return `<path d="M ${x-13} ${y} A 13 13 0 0 0 ${x+13} ${y} Z" fill="#2a2333"/>
          <line x1="${x-14}" y1="${y-1}" x2="${x+14}" y2="${y-1}" stroke="#2a2333" stroke-width="5" stroke-linecap="round"/>`;}
function _eyeX(x,y){
  return `<g stroke="#2a2333" stroke-width="5.5" stroke-linecap="round">
    <line x1="${x-10}" y1="${y-10}" x2="${x+10}" y2="${y+10}"/>
    <line x1="${x+10}" y1="${y-10}" x2="${x-10}" y2="${y+10}"/></g>`;}
function _eyeHeart(x,y){
  return `<path transform="translate(${x},${y}) scale(1.35)" fill="#ff4f8b"
    d="M0 6 C -12 -6 -6 -16 0 -9 C 6 -16 12 -6 0 6 Z"/>`;}
function _eyeSquint(x,y){ // >_< kiểu đau
  return `<g stroke="#2a2333" stroke-width="5.5" stroke-linecap="round" fill="none">
    <path d="M ${x-11} ${y-8} L ${x+6} ${y} L ${x-11} ${y+8}"/></g>`;}
function _eyeSquintR(x,y){
  return `<g stroke="#2a2333" stroke-width="5.5" stroke-linecap="round" fill="none">
    <path d="M ${x+11} ${y-8} L ${x-6} ${y} L ${x+11} ${y+8}"/></g>`;}
function _eyeSide(x,y){
  return `<circle cx="${x}" cy="${y}" r="11" fill="#2a2333"/>
          <circle cx="${x+6}" cy="${y-2}" r="3.4" fill="#fff"/>`;}

function _browN(x,y,c){return `<path d="M ${x-14} ${y} Q ${x} ${y-6} ${x+14} ${y}" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round"/>`;}
function _browAngry(x,y,c,flip){const d=flip?-1:1;
  return `<line x1="${x-13*d}" y1="${y+7}" x2="${x+13*d}" y2="${y-5}" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`;}
function _browSad(x,y,c,flip){const d=flip?-1:1;
  return `<line x1="${x-13*d}" y1="${y-5}" x2="${x+13*d}" y2="${y+6}" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`;}

function _mSmile(){return `<path d="M 116 176 Q 130 188 144 176" stroke="#2a2333" stroke-width="5" fill="none" stroke-linecap="round"/>`;}
function _mBig(){return `<path d="M 106 172 Q 130 204 154 172 Q 130 182 106 172 Z" fill="#7c2f3e"/>
  <path d="M 116 185 Q 130 196 144 185 L 138 190 Q 130 194 122 190 Z" fill="#ff8fa0"/>`;}
function _mO(){return `<ellipse cx="130" cy="180" rx="11" ry="14" fill="#7c2f3e"/>`;}
function _mWavy(){return `<path d="M 112 180 Q 121 173 130 180 T 148 180" stroke="#2a2333" stroke-width="5" fill="none" stroke-linecap="round"/>`;}
function _mGrit(){return `<rect x="108" y="171" width="44" height="14" rx="6" fill="#fff" stroke="#2a2333" stroke-width="4"/>
  <line x1="123" y1="171" x2="123" y2="185" stroke="#2a2333" stroke-width="2.5"/>
  <line x1="137" y1="171" x2="137" y2="185" stroke="#2a2333" stroke-width="2.5"/>`;}
function _mSmirk(){return `<path d="M 114 180 Q 132 190 150 172" stroke="#2a2333" stroke-width="5" fill="none" stroke-linecap="round"/>`;}
function _mFlat(){return `<line x1="118" y1="179" x2="142" y2="179" stroke="#2a2333" stroke-width="5" stroke-linecap="round"/>`;}
function _mWail(){return `<path d="M 108 170 Q 130 166 152 170 Q 152 200 130 202 Q 108 200 108 170 Z" fill="#7c2f3e"/>
  <path d="M 114 192 Q 130 202 146 192 L 146 196 Q 130 205 114 196 Z" fill="#ff8fa0"/>`;}

function _fxSweat(){return `<path d="M 206 84 Q 214 100 206 108 Q 197 100 206 84 Z" fill="#7fd4ff" stroke="#2a2333" stroke-width="3"/>`;}
function _fxVein(){return `<g stroke="#ef476f" stroke-width="5" stroke-linecap="round">
  <path d="M 196 62 q 8 4 4 12"/><path d="M 208 58 q 8 4 4 12"/>
  <path d="M 192 72 q 10 -2 14 4"/><path d="M 198 84 q 10 -2 14 4"/></g>`;}
function _fxBlush(){return `<ellipse cx="86" cy="158" rx="15" ry="8" fill="#ff9fb4" opacity=".65"/>
  <ellipse cx="174" cy="158" rx="15" ry="8" fill="#ff9fb4" opacity=".65"/>`;}
function _fxTears(){return `<g fill="#7fd4ff" opacity=".9">
  <rect x="90" y="140" width="12" height="46" rx="6"/>
  <rect x="158" y="140" width="12" height="46" rx="6"/></g>`;}
function _fxSpark(){let s='';const pts=[[52,60],[214,52],[38,140],[224,150]];
  for(const [x,y] of pts) s+=`<path transform="translate(${x},${y})" fill="#ffd166" stroke="#fff" stroke-width="1.5"
    d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z"/>`;
  return s;}
function _fxShadow(){return `<rect x="30" y="28" width="200" height="52" fill="url(#gShadow)" opacity=".55"/>`;}
function _fxGloom(){return `<g stroke="#5b6bbf" stroke-width="4" stroke-linecap="round" opacity=".7">
  <line x1="96" y1="46" x2="96" y2="70"/><line x1="116" y1="40" x2="116" y2="66"/>
  <line x1="136" y1="44" x2="136" y2="70"/><line x1="156" y1="40" x2="156" y2="64"/></g>`;}

/* ---------- biểu cảm ---------- */
function _face(expr, hairC){
  const L=97,R=163,EY=128,BY=102;
  const b=hairC;
  switch(expr){
    case 'happy':  return _browN(L,BY,b)+_browN(R,BY,b)+_eyeHappy(L,EY)+_eyeHappy(R,EY)+_mBig();
    case 'laugh':  return _browN(L,BY-4,b)+_browN(R,BY-4,b)+_eyeHappy(L,EY)+_eyeHappy(R,EY)+_mWail()+_fxSpark();
    case 'shock':  return _browN(L,BY-10,b)+_browN(R,BY-10,b)+_eyeShock(L,EY)+_eyeShock(R,EY)+_mO()+_fxSweat();
    case 'angry':  return _browAngry(L,BY,b)+_browAngry(R,BY,b,true)+_eyeDot(L,EY)+_eyeDot(R,EY)+_mGrit()+_fxVein();
    case 'smug':   return _browN(L,BY,b)+_browN(R,BY,b)+_eyeHalf(L,EY)+_eyeHalf(R,EY)+_mSmirk();
    case 'worried':return _browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeDot(L,EY,9)+_eyeDot(R,EY,9)+_mWavy()+_fxSweat();
    case 'cry':    return _browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeSad(L,EY)+_eyeSad(R,EY)+_mWail()+_fxTears();
    case 'love':   return _browN(L,BY,b)+_browN(R,BY,b)+_eyeHeart(L,EY)+_eyeHeart(R,EY)+_mBig()+_fxBlush();
    case 'dizzy':  return _browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeX(L,EY)+_eyeX(R,EY)+_mWavy()+_fxSweat();
    case 'evil':   return _fxShadow()+_browAngry(L,BY,b)+_browAngry(R,BY,b,true)+_eyeHalf(L,EY)+_eyeHalf(R,EY)+_mSmirk();
    case 'pain':   return _browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeSquint(L,EY)+_eyeSquintR(R,EY)+_mGrit()+_fxSweat();
    case 'think':  return _browN(L,BY,b)+_browN(R,BY-4,b)+_eyeSide(L,EY)+_eyeSide(R,EY)+_mFlat();
    case 'blush':  return _browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeDot(L,EY)+_eyeDot(R,EY)+_mWavy()+_fxBlush();
    case 'gloom':  return _fxGloom()+_browSad(L,BY,b)+_browSad(R,BY,b,true)+_eyeSad(L,EY)+_eyeSad(R,EY)+_mWavy();
    case 'sparkle':return _browN(L,BY,b)+_browN(R,BY,b)+_eyeDot(L,EY,13)+_eyeDot(R,EY,13)+_mBig()+_fxSpark();
    default:       return _browN(L,BY,b)+_browN(R,BY,b)+_eyeDot(L,EY)+_eyeDot(R,EY)+_mSmile();
  }
}

/* ---------- tóc & phụ kiện theo nhân vật ---------- */
function _hairBack(c){
  switch(c.style){
    case 'chau': return `<ellipse cx="130" cy="112" rx="92" ry="90" fill="${c.hair}"/>
      <path d="M 208 120 Q 250 160 232 236 Q 214 262 204 240 Q 220 180 196 148 Z" fill="${c.hair}"/>
      <path d="M 212 132 Q 238 168 226 224" stroke="${c.hairHi}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case 'khai': return `<ellipse cx="130" cy="110" rx="88" ry="84" fill="${c.hair}"/>`;
    case 'batu': return `<ellipse cx="130" cy="116" rx="90" ry="86" fill="${c.hair}"/>
      <circle cx="130" cy="30" r="34" fill="${c.hair}"/><circle cx="130" cy="30" r="34" fill="none" stroke="${c.hairHi}" stroke-width="5" stroke-dasharray="10 12"/>`;
    case 'yta': return `<ellipse cx="130" cy="114" rx="92" ry="88" fill="${c.hair}"/>
      <path d="M 46 130 Q 30 220 52 264 L 84 250 Q 62 190 66 140 Z" fill="${c.hair}"/>
      <path d="M 214 130 Q 230 220 208 264 L 176 250 Q 198 190 194 140 Z" fill="${c.hair}"/>`;
    case 'bacsi': return `<ellipse cx="130" cy="106" rx="86" ry="80" fill="${c.hair}"/>`;
    case 'lam': return `<ellipse cx="130" cy="112" rx="84" ry="80" fill="${c.hair}"/>`;
    case 'baove': return `<ellipse cx="130" cy="112" rx="84" ry="80" fill="${c.hair}"/>`;
    case 'vinh': return '';
    case 'camdo': return '';
    case 'me': return `<ellipse cx="130" cy="114" rx="86" ry="82" fill="${c.hair}"/>
      <circle cx="196" cy="180" r="26" fill="${c.hair}"/>
      <circle cx="196" cy="180" r="26" fill="none" stroke="${c.hairHi}" stroke-width="4" stroke-dasharray="8 10"/>`;
    case 'bac': return `<ellipse cx="130" cy="108" rx="85" ry="82" fill="${c.hair}"/>`;
    case 'tahan': return `<ellipse cx="130" cy="112" rx="90" ry="86" fill="${c.hair}"/>
      <path d="M 44 128 Q 30 210 50 258 L 82 246 Q 62 190 64 138 Z" fill="${c.hair}"/>
      <path d="M 216 128 Q 230 210 210 258 L 178 246 Q 198 190 196 138 Z" fill="${c.hair}"/>
      <path d="M 52 150 Q 44 210 56 244" stroke="${c.hairHi}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    case 'chuno': return '';
    default: return `<ellipse cx="130" cy="110" rx="88" ry="84" fill="${c.hair}"/>`;
  }
}
function _hairFront(c){
  switch(c.style){
    case 'chau': return `<path d="M 52 118 Q 44 52 130 44 Q 216 52 208 118 Q 196 92 178 104 Q 172 74 148 88 Q 138 66 118 84 Q 100 68 90 96 Q 68 88 52 118 Z" fill="${c.hair}"/>
      <path d="M 78 74 Q 110 56 148 62" stroke="${c.hairHi}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case 'khai': return `<path d="M 48 112 Q 40 40 132 38 Q 224 44 212 118 Q 208 84 184 96 Q 190 62 152 74 Q 120 52 96 84 Q 72 74 48 112 Z" fill="${c.hair}"/>
      <path d="M 96 66 Q 130 48 168 58" stroke="${c.hairHi}" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    case 'batu': return `<path d="M 50 116 Q 48 56 130 50 Q 212 56 210 116 Q 190 86 166 98 Q 150 72 122 90 Q 94 74 82 100 Q 62 94 50 116 Z" fill="${c.hair}"/>`;
    case 'yta': return `<path d="M 48 120 Q 44 52 130 46 Q 216 52 212 120 Q 198 90 176 102 Q 166 72 142 88 Q 118 66 100 92 Q 72 84 48 120 Z" fill="${c.hair}"/>`;
    case 'bacsi': return `<path d="M 54 104 Q 60 52 130 48 Q 200 52 206 104 Q 180 80 158 92 Q 138 68 108 90 Q 80 78 54 104 Z" fill="${c.hair}"/>`;
    case 'lam': return `<path d="M 56 96 Q 70 66 130 62 Q 190 66 204 96 L 200 106 Q 130 84 60 106 Z" fill="${c.hair}"/>`;
    case 'baove': return `<path d="M 56 98 Q 70 68 130 64 Q 190 68 204 98 L 200 108 Q 130 88 60 108 Z" fill="${c.hair}"/>`;
    case 'camdo': return `<ellipse cx="100" cy="64" rx="18" ry="8" fill="#fff" opacity=".5" transform="rotate(-18 100 64)"/>`;
    case 'vinh': return '';
    case 'me': return `<path d="M 50 118 Q 48 56 130 50 Q 212 56 210 118 Q 188 88 160 100 Q 144 76 116 92 Q 88 78 74 102 Q 60 96 50 118 Z" fill="${c.hair}"/>
      <path d="M 70 82 Q 100 64 134 68" stroke="${c.hairHi}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    case 'bac': return `<path d="M 48 106 Q 46 40 130 36 Q 214 40 212 106 Q 206 76 176 84 Q 186 54 140 66 Q 100 50 82 80 Q 62 76 48 106 Z" fill="${c.hair}"/>
      <path d="M 92 62 Q 130 46 172 58" stroke="${c.hairHi}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    case 'tahan': return `<path d="M 46 122 Q 42 50 130 44 Q 218 50 214 122 Q 200 88 174 100 Q 168 68 138 86 Q 112 62 94 92 Q 68 84 46 122 Z" fill="${c.hair}"/>
      <path d="M 82 74 Q 118 56 156 64" stroke="${c.hairHi}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    case 'chuno': return '';
    default: return '';
  }
}
function _accessory(c){
  switch(c.style){
    case 'batu': return `<g><rect x="70" y="112" width="52" height="30" rx="12" fill="#2a2333"/>
      <rect x="138" y="112" width="52" height="30" rx="12" fill="#2a2333"/>
      <line x1="122" y1="124" x2="138" y2="124" stroke="#2a2333" stroke-width="6"/>
      <circle cx="88" cy="120" r="5" fill="#fff" opacity=".55"/><circle cx="156" cy="120" r="5" fill="#fff" opacity=".55"/></g>
      <circle cx="130" cy="248" r="10" fill="#ffd166" stroke="#2a2333" stroke-width="3"/>
      <path d="M 96 236 Q 130 258 164 236" stroke="#ffd166" stroke-width="7" fill="none"/>`;
    case 'lam': return `<g><path d="M 48 84 Q 60 30 130 26 Q 200 30 212 84 L 206 92 Q 130 70 54 92 Z" fill="#2e6f4f" stroke="#2a2333" stroke-width="4"/>
      <path d="M 44 88 L 216 88 L 208 106 L 52 106 Z" fill="#245c40" stroke="#2a2333" stroke-width="4"/>
      <path transform="translate(130,58) scale(1.1)" fill="#ffd166" stroke="#2a2333" stroke-width="2"
        d="M0 -12 L3.5 -4 L12 -4 L5 1.5 L8 10 L0 5 L-8 10 L-5 1.5 L-12 -4 L-3.5 -4 Z"/></g>
      <path d="M 100 160 Q 130 148 160 160 L 156 170 Q 130 160 104 170 Z" fill="#3d3529"/>`;
    case 'bacsi': return `<g fill="none" stroke="#2a2333" stroke-width="5">
      <circle cx="97" cy="128" r="24"/><circle cx="163" cy="128" r="24"/>
      <line x1="121" y1="126" x2="139" y2="126"/></g>
      <circle cx="130" cy="252" r="12" fill="#8fc7e8" stroke="#2a2333" stroke-width="3"/>
      <path d="M 92 232 Q 96 252 118 252 M 168 232 Q 164 252 142 252" stroke="#2a2333" stroke-width="5" fill="none"/>`;
    case 'yta': return `<g><path d="M 92 44 L 168 44 L 158 14 L 102 14 Z" fill="#fff" stroke="#2a2333" stroke-width="4"/>
      <rect x="120" y="20" width="20" height="7" rx="3" fill="#ef476f"/>
      <rect x="126.5" y="13" width="7" height="20" rx="3" fill="#ef476f"/></g>`;
    case 'vinh': return `<g><path d="M 42 118 Q 40 30 130 28 Q 220 30 218 118 L 196 122 Q 196 60 130 58 Q 64 60 64 122 Z" fill="#19b464" stroke="#2a2333" stroke-width="4"/>
      <path d="M 42 118 Q 130 100 218 118 L 214 132 Q 130 116 46 132 Z" fill="#0d7a42" stroke="#2a2333" stroke-width="4"/></g>`;
    case 'baove': return `<g><path d="M 52 88 Q 64 40 130 36 Q 196 40 208 88 L 202 96 Q 130 76 58 96 Z" fill="#33507a" stroke="#2a2333" stroke-width="4"/>
      <circle cx="130" cy="62" r="9" fill="#ffd166" stroke="#2a2333" stroke-width="3"/></g>
      <path d="M 96 160 Q 112 172 126 162 M 134 162 Q 148 172 164 160" stroke="#b9b9c4" stroke-width="6" fill="none" stroke-linecap="round"/>`;
    case 'camdo': return `<path d="M 76 156 Q 78 210 130 212 Q 182 210 184 156 Q 168 176 130 176 Q 92 176 76 156 Z" fill="#3f3f3f"/>
      <circle cx="130" cy="250" r="9" fill="#c9a227" stroke="#2a2333" stroke-width="3"/>`;
    case 'me': return `<path d="M 60 262 Q 130 232 200 262 L 196 292 Q 130 268 64 292 Z" fill="${c.cloth2}" stroke="#2a2333" stroke-width="4"/>
      <circle cx="88" cy="262" r="8" fill="#ffd166" stroke="#2a2333" stroke-width="3"/>
      <g stroke="#c9a08a" stroke-width="3" stroke-linecap="round" opacity=".6">
        <path d="M 78 148 q 8 4 16 2"/><path d="M 166 148 q 8 4 16 2"/></g>`;
    case 'bac': return `<g stroke="#2a2333" stroke-width="4">
      <path d="M 96 224 L 118 262 L 106 292 L 78 244 Z" fill="#1c2439"/>
      <path d="M 164 224 L 142 262 L 154 292 L 182 244 Z" fill="#1c2439"/>
      <path d="M 124 240 L 136 240 L 140 276 L 130 292 L 120 276 Z" fill="${c.cloth2}"/></g>`;
    case 'tahan': return `<g>
      <circle cx="86" cy="252" r="13" fill="#2a1a2e" stroke="#2a2333" stroke-width="3"/>
      <circle cx="86" cy="252" r="6" fill="#6d1f3e"/>
      <path d="M 86 264 q -4 14 4 22" stroke="#2e5c3f" stroke-width="4" fill="none"/>
      <path d="M 60 240 Q 130 218 200 240" stroke="${c.cloth2}" stroke-width="4" fill="none" opacity=".8"/></g>`;
    case 'chuno': return `<g>
      <path d="M 50 96 Q 130 70 210 96 L 208 122 Q 130 98 52 122 Z" fill="#c0392b" stroke="#2a2333" stroke-width="4"/>
      <circle cx="76" cy="106" r="4" fill="#fff" opacity=".7"/><circle cx="128" cy="92" r="4" fill="#fff" opacity=".7"/>
      <circle cx="180" cy="104" r="4" fill="#fff" opacity=".7"/>
      <path d="M 210 108 L 236 96 L 232 122 Z" fill="#c0392b" stroke="#2a2333" stroke-width="4"/>
      <path d="M 92 234 Q 130 262 168 234" stroke="#ffd166" stroke-width="8" fill="none"/>
      <circle cx="130" cy="252" r="11" fill="#ffd166" stroke="#2a2333" stroke-width="3"/>
      <text x="130" y="258" text-anchor="middle" font-size="14" font-weight="800" fill="#2a2333">$</text></g>`;
    default: return '';
  }
}
function _body(c){
  return `<path d="M 30 300 Q 34 238 84 226 L 130 218 L 176 226 Q 226 238 230 300 Z"
    fill="${c.cloth}" stroke="#2a2333" stroke-width="5"/>
    <path d="M 108 224 L 130 218 L 152 224 L 146 252 L 130 244 L 114 252 Z" fill="${c.cloth2}" stroke="#2a2333" stroke-width="4"/>`;
}

/* ---------- chân dung hoàn chỉnh ---------- */
function portraitSVG(id, expr){
  let c = CHARDEF[id]; if(!c) return '';
  if(id === 'chau'){ const sk = chauSkin(); c = {...c, cloth: sk.cloth, cloth2: sk.cloth2}; }
  expr = expr || 'normal';
  return `<svg viewBox="0 0 260 310" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gShadow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3d3266"/><stop offset="1" stop-color="#3d3266" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${_hairBack(c)}
    <rect x="112" y="188" width="36" height="42" rx="14" fill="${c.skin}" stroke="#2a2333" stroke-width="4"/>
    ${_body(c)}
    <ellipse cx="50" cy="134" rx="14" ry="18" fill="${c.skin}" stroke="#2a2333" stroke-width="4"/>
    <ellipse cx="210" cy="134" rx="14" ry="18" fill="${c.skin}" stroke="#2a2333" stroke-width="4"/>
    <ellipse cx="130" cy="128" rx="80" ry="84" fill="${c.skin}" stroke="#2a2333" stroke-width="5"/>
    <path d="M 127 148 Q 132 154 128 158" stroke="#d9a184" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${_face(expr, c.hair)}
    ${_hairFront(c)}
    ${_accessory(c)}
  </svg>`;
}

/* ---------- chibi top-down cho bản đồ ---------- */
function drawChibi(ctx, x, y, dir, frame, id, opts){
  let c = CHARDEF[id] || CHARDEF.chau;
  if(id === 'chau'){ const sk = chauSkin(); c = {...c, cloth: sk.cloth, cloth2: sk.cloth2}; }
  opts = opts || {};
  const t = frame || 0;
  const step = Math.sin(t*0.25)*4;
  ctx.save();
  ctx.translate(x, y);
  // bóng
  ctx.fillStyle = 'rgba(20,12,30,.25)';
  ctx.beginPath(); ctx.ellipse(0, 20, 15, 6, 0, 0, Math.PI*2); ctx.fill();
  // chân
  ctx.fillStyle = '#2a2333';
  ctx.beginPath(); ctx.ellipse(-6, 16+ (opts.walking?step:0)*.5, 4.5, 5.5, 0, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse( 6, 16- (opts.walking?step:0)*.5, 4.5, 5.5, 0, 0, Math.PI*2); ctx.fill();
  // thân
  const bob = opts.walking ? Math.abs(Math.sin(t*0.25))*2 : 0;
  ctx.translate(0, -bob);
  ctx.fillStyle = c.cloth; ctx.strokeStyle = '#2a2333'; ctx.lineWidth = 3;
  rrect(ctx, -12, -4, 24, 22, 9); ctx.fill(); ctx.stroke();
  ctx.fillStyle = c.cloth2;
  rrect(ctx, -5, -2, 10, 9, 4); ctx.fill();
  // đầu
  ctx.fillStyle = c.skin;
  ctx.beginPath(); ctx.arc(0, -18, 14, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  // tóc (mũ tóc theo hướng)
  ctx.fillStyle = c.hair;
  ctx.beginPath(); ctx.arc(0, -20, 14.5, Math.PI*0.95, Math.PI*2.05); ctx.fill();
  ctx.beginPath(); ctx.ellipse(0, -27, 14.5, 8.5, 0, 0, Math.PI*2); ctx.fill();
  if(c.style==='chau'){ // đuôi tóc
    ctx.beginPath(); ctx.ellipse(11, -12, 5, 9, 0.4, 0, Math.PI*2); ctx.fill();
  }
  if(c.style==='vinh'||c.style==='lam'||c.style==='baove'){ // mũ
    ctx.fillStyle = c.cloth2==='#0d7a42' ? '#19b464' : c.cloth;
    ctx.beginPath(); ctx.ellipse(0, -26, 15, 9, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  }
  // mặt theo hướng
  const fx = dir==='left' ? -5 : dir==='right' ? 5 : 0;
  const fy = dir==='up' ? -3 : 1;
  if(dir!=='up'){
    ctx.fillStyle = '#2a2333';
    ctx.beginPath(); ctx.arc(fx-4, -17+fy, 2.2, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(fx+4, -17+fy, 2.2, 0, Math.PI*2); ctx.fill();
    if(opts.blushy){ ctx.fillStyle='rgba(255,140,170,.6)';
      ctx.beginPath(); ctx.arc(fx-7,-13+fy,2.6,0,Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(fx+7,-13+fy,2.6,0,Math.PI*2); ctx.fill(); }
  }
  ctx.restore();
}

function rrect(ctx, x, y, w, h, r){
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r);
  ctx.arcTo(x, y, x+w, y, r);
  ctx.closePath();
}
