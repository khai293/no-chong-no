/* ============ NỢ CHỒNG NỢ — kịch bản 6 chương ============ */

const NPC_POS = {
  batu:  {x:265,  y:1120},
  camdo: {x:815,  y:1085},
  yta:   {x:2000, y:450},
  vinh:  {x:950,  y:815},
  baove: {x:495,  y:390},
  khaiTent: {x:1330, y:800},
};

const STORY = {

/* ================================================= CẢNH THOẠI */
scenes: {

/* ---------- CHƯƠNG 1 ---------- */
c1_meet: [
  {bg:'cafe'}, {music:'lofi'},
  {who:'sys', text:'Ngày thất nghiệp đầu tiên của {ten}. Lý do mất việc: khai sai giấy tờ 17 lần. Kỷ lục công ty.'},
  {who:'sys', text:'Số dư tài khoản: -200 triệu. Số bạn bè còn liên lạc: 0. Số ly cà phê có thể mua: 0.5.'},
  {who:'chau', expr:'gloom', text:'Nửa ly cà phê... Uống phần trên hay phần dưới đây...'},
  {who:'khai', expr:'smug', text:'Xin chào. Tôi để ý em từ nãy — người duy nhất trong quán nhìn ly cà phê như nhìn người yêu cũ.'},
  {who:'chau', expr:'shock', text:'Hả?! Anh là ai? Nhân viên đòi nợ hả?! Tôi... tôi có kế hoạch trả góp mà!'},
  {who:'khai', expr:'smug', text:'Bình tĩnh. Tôi là Lucien — chuyên gia tài chính PHI TRUYỀN THỐNG. Tôi giúp người ta... giàu nhanh.'},
  {who:'chau', expr:'think', text:'Lucien? Người Việt trăm phần trăm mà tên Lucien?'},
  {who:'khai', expr:'smug', text:'Nghề của tôi cần thương hiệu quốc tế. Khách nghe "chuyên gia Lucien" là xuống tiền nhanh gấp ba lần. Tôi có thống kê hẳn hoi.'},
  {who:'chau', expr:'gloom', text:'(Thống kê từ ba phi vụ gần nhất chắc luôn.)'},
  {choice:[
    {ic:'😇', label:'"Phi truyền thống" nghĩa là gì ạ?', reply:[
      {who:'khai', expr:'think', text:'Nghĩa là... không theo truyền thống. Ngân hàng giữ tiền của dân, tôi giúp dân... giữ lại tiền của ngân hàng.'},
      {who:'chau', expr:'worried', text:'Nghe cứ sai sai...'}]},
    {ic:'😈', label:'"Tôi cũng là chuyên gia tài chính đấy!"', dr:5, why:'nói dối chuyên gia', reply:[
      {who:'khai', expr:'happy', text:'Ồ? Vậy chắc em biết quy tắc 50/30/20?'},
      {who:'chau', expr:'worried', text:'Biết chứ! 50 nghìn ăn sáng, 30 nghìn gửi xe, 20 nghìn... khóc.'},
      {who:'khai', expr:'laugh', text:'...Tuyệt. Em được nhận.'}]},
    {ic:'🤡', label:'"Anh đẹp trai vậy chắc lừa đảo giỏi lắm"', trust:3, reply:[
      {who:'khai', expr:'shock', text:'...!'},
      {who:'khai', expr:'smug', text:'Thẳng thắn. Tôi thích. Nhưng từ chuyên môn là "thuyết phục có chiều sâu" nhé.'}]},
  ]},
  {who:'khai', expr:'normal', text:'Vào việc. Tôi có một PHI VỤ. Ngân hàng Đại Phát, két chính, tối nay. Chia đôi 50/50.'},
  {who:'chau', expr:'shock', text:'CƯỚP NGÂN HÀNG?! Anh nhìn tôi giống tội phạm lắm hả?!', pfx:true},
  {who:'khai', expr:'smug', text:'Em chỉ cần ĐỨNG CANH CỬA thôi. Dễ lắm. Dễ hơn khai giấy tờ nhiều.'},
  {who:'chau', expr:'angry', text:'Này! Chuyện khai giấy tờ là tai nạn nghề nghiệp!... 17 lần tai nạn.'},
  {who:'sys', text:'Trong đầu {ten}: nợ 200 triệu. Tiền thuê nhà: quá hạn 2 tháng. Mì tôm: còn 3 gói.'},
  {choice:[
    {ic:'😇', label:'"Chỉ đứng canh thôi đấy nhé. KHÔNG cướp."', reply:[
      {who:'khai', expr:'happy', text:'Đương nhiên! Em canh cửa, anh làm phần "kỹ thuật". Hoàn toàn trong sạch... một nửa.'}]},
    {ic:'😈', label:'"Chia 70/30 tôi mới làm. Tôi 70."', dr:5, why:'trả giá với tội phạm', reply:[
      {who:'khai', expr:'shock', text:'Em đang trả giá vụ CƯỚP NGÂN HÀNG như mua rau?!'},
      {who:'chau', expr:'smug', text:'Kỹ năng đi chợ. Có chịu không?'},
      {who:'khai', expr:'laugh', text:'55/45. Chốt. Trời ơi, em nguy hiểm hơn anh nghĩ.'}]},
    {ic:'🤡', label:'"Được! Mà... ngân hàng mở cửa mấy giờ nhỉ?"', trust:3, reply:[
      {who:'khai', expr:'dizzy', text:'... Em định CƯỚP ngân hàng trong GIỜ HÀNH CHÍNH?'},
      {who:'chau', expr:'happy', text:'Thì lịch sự mà! Xếp hàng lấy số luôn thể!'},
      {who:'khai', expr:'gloom', text:'Anh bắt đầu thấy lo cho phi vụ này rồi đấy...'}]},
  ]},
  {who:'chau', expr:'think', text:'Khoan, cho tôi tính nhẩm cái đã... 50% của án tù chung thân là... bao nhiêu năm nhỉ?'},
  {who:'khai', expr:'smug', text:'Là 0 năm — nếu không bị bắt. Toán tài chính cơ bản đấy. Có trong giáo trình của anh, chương 1: "Đừng Bị Bắt".'},
  {who:'chau', expr:'dizzy', text:'Giáo trình có chương 2 không?'},
  {who:'khai', expr:'think', text:'Có. Chương 2: "Đọc Lại Chương 1".'},
  {who:'khai', expr:'normal', text:'Đi thôi. Ngân hàng ở cuối phố. Nhớ: mặt tỉnh bơ, bước tự tin, như đi... gửi tiết kiệm.'},
  {who:'chau', expr:'worried', text:'(Gửi tiết kiệm bằng số tiền âm 200 triệu...)'},
],

c1_plan: [
  {bg:'bank'}, {music:'tense'},
  {who:'chau', expr:'normal', text:'Khoan đã. Kế hoạch đâu? Phi vụ lớn phải có kế hoạch chứ!'},
  {who:'khai', expr:'smug', text:'Đây. Anh vẽ trên khăn giấy của quán cà phê. Ô vuông này là két. Chấm này là anh. Còn vòng tròn nâu nâu này là... vết cà phê.'},
  {who:'chau', expr:'dizzy', text:'Một phi vụ trăm tỷ được quy hoạch bằng KHĂN GIẤY?! Còn nhòe nữa!!'},
  {who:'khai', expr:'normal', text:'Kế hoạch càng đơn giản càng khó hỏng. Đó là triết lý của anh.'},
  {who:'sys', text:'Ghi chú của định mệnh: kế hoạch này sẽ hỏng theo đúng 4 cách khác nhau trong 10 phút tới.'},
  {who:'khai', expr:'normal', text:'Rồi. Anh lẻn vào phá khóa két. Em đứng đây, thấy AI lại gần cửa thì... đuổi khéo họ đi.'},
  {who:'chau', expr:'shock', text:'Đuổi kiểu gì?! Tôi có phải bảo vệ đâu!'},
  {who:'khai', expr:'smug', text:'Ứng biến đi. Em khai sai giấy tờ 17 lần mà công ty 3 tháng sau mới phát hiện — em là THIÊN TÀI ứng biến đấy.'},
  {who:'chau', expr:'think', text:'Khoan... đó là lời khen hay lời sỉ nhục vậy?'},
  {who:'khai', expr:'happy', text:'Cả hai. Thôi anh vào đây. Nhớ nhé: ĐỪNG-ĐỂ-AI-TỚI-CỬA.'},
],

c1_hospital: [
  {bg:'hospital'}, {music:'sad'},
  {who:'sys', text:'Bệnh viện Số 7. Nơi mọi thứ sẽ trở nên... tồi tệ hơn nữa.'},
  {who:'chau', expr:'cry', text:'Bác sĩ ơi cứu anh này với!! Anh ấy bị... ơ... bị GHẾ NHỰA tấn công!!'},
  {who:'bacsi', expr:'normal', text:'Ghế nhựa à. Ca thứ ba trong tuần. Dạo này ghế nhựa hung hãn thật.'},
  {who:'khai', expr:'pain', text:'Ông bảo vệ đó... không phải người thường... đó là... cựu vô địch ném ghế toàn quốc...'},
  {who:'bacsi', expr:'normal', text:'Bệnh nhân còn nói được là còn cứu được. Đưa vào phòng cấp cứu. Còn cô — đi làm THỦ TỤC.'},
  {who:'chau', expr:'worried', text:'Th-thủ tục? Chỉ là ký vài tờ giấy thôi đúng không ạ?'},
  {who:'sys', text:'Ôi, {ten} ơi. Giá mà em biết.'},
],

/* ---------- CHƯƠNG 2 ---------- */
c2_docs: [
  {bg:'hospital'}, {music:'lofi'},
  {who:'bacsi', expr:'normal', text:'Đây, người nhà ký giúp xấp giấy này. Nhanh nhé, tôi còn 47 bệnh nhân và 1 trận bóng lúc 7 giờ.'},
  {who:'chau', expr:'worried', text:'Khoan đã bác sĩ! Bạn cháu... có sao không ạ?!'},
  {who:'bacsi', expr:'normal', text:'Sống. Đẹp trai là đằng khác. Da mặt kiểu đó mà đi làm "nghề nguy hiểm" thì phí — đi quảng cáo sữa rửa mặt có phải giàu rồi không.'},
  {who:'chau', expr:'shock', text:'Người nhà?! Tôi chỉ là... đồng nghiệp... của một phi vụ... từ thiện!'},
  {who:'yta', expr:'happy', text:'Chị là NGƯỜI NHÀ rồi~ Ai cõng bệnh nhân 3 cây số thì là người nhà~ Quy định bệnh viện đó~'},
  {who:'chau', expr:'worried', text:'(Cô y tá này cười... ngọt một cách đáng ngờ.)'},
  {who:'bacsi', expr:'angry', text:'Ký nhanh giúp tôi! Giấy nào cần thì ký, giấy nào lạ thì ĐỌC KỸ VÀO. Bệnh viện này hay kẹp thêm giấy linh tinh lắm.'},
  {who:'chau', expr:'shock', text:'Kẹp thêm?! Ai kẹp?!'},
  {who:'bacsi', expr:'gloom', text:'Nếu tôi biết thì phòng hành chính đã không giàu như bây giờ.'},
],

c2_broke: [
  {bg:'hospital'}, {music:'sad'},
  {who:'khai', expr:'pain', text:'Ưgh... đây là đâu... tôi còn sống à...'},
  {who:'chau', expr:'happy', text:'Anh tỉnh rồi!! Bác sĩ bảo anh ổn! Chỉ khâu vài mũi với...'},
  {who:'khai', expr:'shock', text:'Khoan. Sao anh thấy... NHẸ NHẸ bên hông trái?', pfx:true},
  {who:'chau', expr:'worried', text:'À... cái đó... chuyện buồn cười lắm... anh hứa nghe xong đừng tăng huyết áp nhé...'},
  {who:'khai', expr:'shock', text:'{ten}. Em. Đã. Ký. Cái. Gì?'},
  {who:'chau', expr:'cry', text:'GIẤY XUẤT VIỆN!! Ít nhất tôi TƯỞNG vậy!! Ai ngờ nó là đơn hiến thận!! Chữ nhỏ như con kiến mà!!'},
  {who:'khai', expr:'dizzy', text:'THẬN CỦA TÔI?! ĐI RỒI?! Nó đang ở ĐÂU?!'},
  {who:'chau', expr:'worried', text:'Cô y tá bảo là... "đã lên đường đến với người cần nó hơn". Cô ấy còn vẫy tay chào nữa.'},
  {who:'khai', expr:'gloom', text:'Quả thận của tôi có buổi chia tay ấm cúng hơn cả tôi nghỉ việc.'},
  {who:'sys', text:'Hóa đơn viện phí + tiền đền xe cảnh sát + tiền đền cửa kính ngân hàng đã trừ sạch khoản "quỹ đen dưỡng già" của cả hai. Thêm khoản đền bù: -150 triệu.'},
  {do:()=>{ Game.addMoney(-150, 'đền bù thiệt hại'); }},
  {who:'khai', expr:'gloom', text:'Tổng kết: mất một quả thận, mất sạch tiền, thêm một đống nợ. Còn em thì...'},
  {choice:[
    {ic:'😇', label:'"Tôi xin lỗi. Tôi sẽ làm mọi cách bù cho anh."', trust:8, reply:[
      {who:'khai', expr:'normal', text:'...Được. Lời xin lỗi đầu tiên anh nhận được trong 5 năm. Tính cả mẹ anh.'},
      {who:'chau', expr:'worried', text:'Nghe tội nghiệp ghê...'}]},
    {ic:'😈', label:'"Ai bảo anh rủ tôi đi cướp làm gì!"', trust:-5, dr:5, why:'đổ lỗi cho nạn nhân mất thận', reply:[
      {who:'khai', expr:'angry', text:'Anh rủ em CANH CỬA! Không ai trong kịch bản bị MẤT NỘI TẠNG cả!!'},
      {who:'chau', expr:'angry', text:'Kịch bản của anh có ông bảo vệ ném ghế không?! KHÔNG! Đội ngũ biên kịch có vấn đề!'}]},
    {ic:'🤡', label:'"Nhìn theo hướng tích cực: anh nhẹ đi 150 gram"', trust:3, dr:3, why:'an ủi sai cách', reply:[
      {who:'khai', expr:'shock', text:'...'},
      {who:'khai', expr:'laugh', text:'HAHAHA... trời ơi anh cười mà vết mổ đau quá... em bị cái gì vậy hả?!'},
      {who:'chau', expr:'happy', text:'Bị nghèo. Lâu năm rồi, không chữa được.'}]},
  ]},
  {who:'khai', expr:'normal', text:'Nghe này. Giờ hai ta trắng tay VÀ dính vào nhau: em nợ anh một quả thận, anh nợ em một vụ suýt ngồi tù.'},
  {who:'khai', expr:'smug', text:'Nên... về "căn cứ" của anh. Ta sẽ kiếm tiền trả nợ. CÙNG NHAU. Một cách... gần như hợp pháp.'},
  {who:'chau', expr:'worried', text:'"Gần như" là bao nhiêu phần trăm vậy?'},
  {who:'khai', expr:'smug', text:'Đủ để đêm ngủ ngon nếu không suy nghĩ nhiều.'},
  {do:()=>{
    Game.state.unlocked.benhvien = true;
    Game.state.unlocked.anau = true;
    Game.state.flags.khaiFollow = true;
    World.refreshStatic();
    Toast('🗺️ Mở khóa: BỆNH VIỆN SỐ 7 & KHU ẨN NÁU', 'good');
  }},
],

c2_home: [
  {bg:'hideout'}, {music:'lofi'},
  {who:'chau', expr:'shock', text:'"Căn cứ" của anh là... CÁI LỀU XIẾC BỎ HOANG?!', pfx:true},
  {who:'khai', expr:'smug', text:'Nói "biệt thự hình nón với kiến trúc mở" nghe sang hơn. Miễn phí, không camera, hàng xóm là chuột.'},
  {who:'khai', expr:'happy', text:'Tiện nghi đầy đủ nhé: điều hòa tự nhiên (gió lùa), hồ bơi vô cực (mỗi khi mưa dột), phòng gym miễn phí (chạy trốn chủ nợ mỗi sáng).'},
  {who:'chau', expr:'dizzy', text:'Anh mà viết tin đăng bất động sản thì cả thành phố này sập bẫy mất.'},
  {who:'chau', expr:'gloom', text:'Từ nhân viên văn phòng thành cư dân lều xiếc trong 48 giờ. Mẹ ơi con xin lỗi.'},
  {who:'khai', expr:'normal', text:'Mai ta bắt đầu kiếm tiền. Chỗ này gần PHỐ CHỢ ĐEN — nhiều việc lặt vặt, trả tiền tươi, ít hỏi giấy tờ.'},
  {who:'chau', expr:'worried', text:'Với lịch sử giấy tờ của tôi thì "ít hỏi giấy tờ" đúng là thiên đường.'},
  {who:'khai', expr:'happy', text:'Đó! Tinh thần đấy! Ngủ đi. Mai gặp Bà Tư — bà trùm chợ đen. Nhớ: đừng nhìn thẳng vào kính râm của bả.'},
  {who:'chau', expr:'shock', text:'Sao vậy?'},
  {who:'khai', expr:'gloom', text:'Bả sẽ bắt em mua kính. Bả bán kính. Đa cấp.'},
  {do:()=>{ Game.state.flags.khaiFollow = false; }},
],

/* ---------- CHƯƠNG 3 ---------- */
c3_batu: [
  {bg:'market'}, {music:'night'},
  {who:'batu', expr:'smug', text:'Ồ, con bé mà thằng Lucien nhắc suốt đây hả. Nghe nói mày ký giấy "hay" lắm.'},
  {who:'chau', expr:'gloom', text:'Tin đồn lan tới CHỢ ĐEN rồi cơ à...'},
  {who:'batu', expr:'normal', text:'Ở đây ai cũng có "thành tích". Con Hồng y tá tuần trước bán nhầm sữa rửa mặt cho khoa nhi làm sữa tắm. Không sao cả.'},
  {who:'batu', expr:'smug', text:'Mà khoan. Nhìn trời nắng ghê ha. Cưng mua cặp KÍNH RÂM không? Mua 1 tặng 1, giới thiệu bạn nhận hoa hồng 3 tầng, tầng 4 được đi du lịch—'},
  {who:'chau', expr:'shock', text:'(LUCIEN CẢNH BÁO RỒI!! KHÔNG NHÌN VÀO KÍNH!!) D-dạ cháu bị... dị ứng thời trang bẩm sinh ạ!!'},
  {who:'batu', expr:'gloom', text:'Chậc. Lại một con mồi được huấn luyện trước. Thằng Lucien phá hoại hệ sinh thái kinh doanh của tao.'},
  {who:'batu', expr:'smug', text:'Việc cho mày đây: đem GẤU BÔNG này giao cho Ông Cầm Đồ cuối phố. Công 40 triệu.'},
  {who:'chau', expr:'shock', text:'BỐN MƯƠI TRIỆU?! Cho một con gấu bông?! Bên trong có gì vậy?!'},
  {who:'batu', expr:'evil', text:'Quy tắc số 1 của chợ đen: KHÔNG. HỎI. BÊN. TRONG.'},
  {choice:[
    {ic:'😇', label:'"Nếu là đồ phạm pháp thì tôi không giao đâu!"', reply:[
      {who:'batu', expr:'laugh', text:'Phạm pháp?! Cưng ơi, đây là CHỢ ĐEN, không phải chợ ĐEN TỐI. Đồ trong đó hợp pháp... theo luật của một nước nào đó.'},
      {who:'chau', expr:'worried', text:'Nước nào?!'},
      {who:'batu', expr:'smug', text:'Quy tắc số 2: KHÔNG HỎI NƯỚC NÀO.'}]},
    {ic:'😈', label:'"50 triệu. Gấu này nhìn nặng mùi phi pháp."', money:5, dr:5, why:'mặc cả với bà trùm', reply:[
      {who:'batu', expr:'shock', text:'Mày TRẢ GIÁ với tao?! Ở CHỢ CỦA TAO?!'},
      {who:'batu', expr:'laugh', text:'...Được. 45. Tao thích đứa mặt dày. Nhưng lộ hàng thì tự xử đấy.'}]},
    {ic:'🤡', label:'"Gấu có tên chưa ạ? Em định gọi nó là Nợ."', trust:0, reply:[
      {who:'batu', expr:'dizzy', text:'... Nó là HÀNG HÓA, không phải thú cưng!'},
      {who:'chau', expr:'happy', text:'Chào Nợ. Chị sẽ đưa em về nhà mới.'},
      {who:'batu', expr:'gloom', text:'Thằng Lucien nợ tao một lời giải thích về con nhỏ này.'}]},
  ]},
  {who:'batu', expr:'normal', text:'À quên. Dạo này cảnh sát tuần tra gắt lắm. Mày nên HÓA TRANG một chút. Đồ hóa trang ở thùng kia kìa.'},
  {who:'chau', expr:'worried', text:'Hóa trang thành gì bây giờ...'},
  {who:'batu', expr:'smug', text:'Thành BÀ BÁN CÁ VỀ HƯU. Ở phố này, bà bán cá là sinh vật quyền lực nhất — cảnh sát cũng né.'},
],

c3_deliver: [
  {bg:'market'}, {music:'night'},
  {who:'camdo', expr:'normal', text:'Khà khà, hàng của Bà Tư đây hả. Để lão kiểm tra... *xoạc*'},
  {who:'chau', expr:'shock', text:'Ông XÉ con Nợ ra rồi!!'},
  {who:'camdo', expr:'happy', text:'"Con Nợ"? Cô đặt tên cho hàng cấm à? Mà nhìn nè — bên trong toàn RĂNG VÀNG. Hàng ký gửi của hội người cao tuổi phường 3.'},
  {who:'chau', expr:'dizzy', text:'Tôi vừa vận chuyển... răng của các cụ... qua ba con phố... với 40 triệu tiền công?!'},
  {who:'camdo', expr:'smug', text:'Răng vàng là tài sản nghiêm túc đấy cô ơi! Có cụ gửi răng để lấy tiền chơi hụi. Kinh tế ngầm phường này sôi động lắm.'},
  {do:()=>{ Game.addMoney(40, 'tiền công giao "gấu"'); }},
  {who:'camdo', expr:'normal', text:'À mà khoan. Cái ĐỒNG HỒ cô đeo... nhìn quen lắm. Của thằng Lucien đúng không? Lão trả 15 triệu. Bán không?'},
  {who:'chau', expr:'shock', text:'Ơ, cái này tôi cầm nhầm của anh ấy lúc ở bệnh viện...'},
  {choice:[
    {ic:'😇', label:'"Không bán! Đồ của bạn tôi!"', trust:5, reply:[
      {who:'camdo', expr:'gloom', text:'Chậc. Trung thành thế. Thời buổi này hiếm lắm đó.'},
      {who:'chau', expr:'normal', text:'(Mình giữ được đồ của Lucien! Cộng điểm đạo đức!)'}]},
    {ic:'😈', label:'"15?! 20 thì bán!" (bán luôn)', money:20, dr:20, why:'bán nhầm đồ của Lucien', flag:'soldWatch', reply:[
      {who:'camdo', expr:'laugh', text:'Khà khà, 20 thì 20! Lão thích người dứt khoát!'},
      {who:'chau', expr:'worried', text:'(Lucien chắc... không để ý đâu nhỉ? Chắc vậy. Hy vọng vậy. Trời ơi.)'}]},
    {ic:'🤡', label:'"Đổi đồng hồ lấy cái nồi kia được không?"', dr:5, why:'giao dịch khó hiểu', reply:[
      {who:'camdo', expr:'dizzy', text:'Cái nồi đó 200 nghìn, đồng hồ kia 15 TRIỆU. Cô chắc chưa?'},
      {who:'chau', expr:'happy', text:'Nồi nấu được mì. Đồng hồ có nấu được đâu.'},
      {who:'camdo', expr:'shock', text:'...Logic của cô làm lão sợ. Thôi khỏi, cầm đồng hồ về đi. Tặng cô cái nồi. Coi như phí xem tấu hài.'}]},
  ]},
  {who:'camdo', expr:'normal', text:'Về đi kẻo tối. Phố này ban đêm chỉ có ba loại người: người say, người trốn nợ, và bà bán cá.'},
  {who:'chau', expr:'gloom', text:'Tôi đang mặc đồ bà bán cá và trốn nợ. Trúng hai trên ba.'},
],

c3_khai_eat: [
  {bg:'hideout'}, {music:'lofi'},
  {who:'khai', expr:'happy', text:'40 triệu ngày đầu tiên! Em đúng là có khiếu đó {ten}!'},
  {who:'chau', expr:'happy', text:'Tôi mua cơm gà nè! Mừng phi vụ "gấu răng vàng" thành công!'},
  {who:'khai', expr:'normal', text:'Khoan. Một hộp thôi à?'},
  {who:'chau', expr:'worried', text:'Tiền còn phải trả nợ mà... Một hộp, hai người, tình huống kinh điển.'},
  {choice:[
    {ic:'😇', label:'Đưa anh ấy cả hộp: "Anh mất thận, anh cần đạm."', trust:8, reply:[
      {who:'khai', expr:'shock', text:'Em... nhường thật à?'},
      {who:'khai', expr:'blush', text:'...Chia đôi. Anh không quen nợ ai cái gì. Kể cả cơm.'},
      {who:'sys', text:'Hai con người chia nhau hộp cơm gà trong lều xiếc bỏ hoang. Kỳ lạ thay, không ai thấy khổ.'}]},
    {ic:'😈', label:'Ăn phần có đùi gà trước khi anh ấy kịp nhìn', trust:-6, dr:5, why:'tội ác với đùi gà', reply:[
      {who:'khai', expr:'angry', text:'CÁI ĐÙI GÀ! Anh THẤY nó! Nó VỪA Ở ĐÓ!'},
      {who:'chau', expr:'smug', text:'Đùi gà nào? Tôi không thấy gì cả. Có bằng chứng không?'},
      {who:'khai', expr:'gloom', text:'Sống với trinh thám tự phong khổ vậy đấy — thủ tiêu tang chứng nhanh hơn cả ăn.'}]},
    {ic:'🤡', label:'Chia theo tỷ lệ 90/10 "phí vận chuyển cơm"', trust:4, reply:[
      {who:'khai', expr:'dizzy', text:'PHÍ VẬN CHUYỂN? Từ đầu ngõ vào lều?!'},
      {who:'chau', expr:'smug', text:'Phí niềm vui nữa. Tôi mang cả niềm vui về mà.'},
      {who:'khai', expr:'laugh', text:'Được được, 60/40. Niềm vui của em phí cao thật đấy.'}]},
  ]},
  {who:'khai', expr:'normal', text:'À, tiện thể... đồng hồ của anh đâu rồi nhỉ? Cái Rolex... fake... nhưng fake XỊN.'},
],
c3_watch_ok: [
  {who:'chau', expr:'happy', text:'Đây nè! Suýt bán cho Ông Cầm Đồ được 20 triệu đó, mà tôi giữ lại cho anh.'},
  {who:'khai', expr:'blush', text:'...Em từ chối 20 triệu? Vì cái đồng hồ fake của anh?'},
  {who:'chau', expr:'normal', text:'Đồ của đồng bọn thì không bán. Quy tắc số 1 của tôi.'},
  {who:'khai', expr:'smug', text:'"Đồng bọn". Ừ. Nghe cũng... ấm áp phết.'},
],
c3_watch_sold: [
  {who:'chau', expr:'worried', text:'Đồng hồ nào nhỉ? À... ừm... nó... hy sinh vì sự nghiệp trả nợ rồi.'},
  {who:'khai', expr:'shock', text:'EM BÁN NÓ?! Đó là quà của sếp cũ trước khi ổng... đổ tội cho anh!! Nó có GIÁ TRỊ TINH THẦN!'},
  {who:'chau', expr:'shock', text:'Khoan. Sếp cũ? Đổ tội? Anh chưa từng kể vụ này!'},
  {who:'khai', expr:'gloom', text:'...Quên đi. Chuyện cũ. Ngủ sớm, mai còn cày trả nợ.', pfx:true},
  {who:'sys', text:'{ten} ghi vào sổ trinh thám: "Lucien + sếp cũ + bị đổ tội = ĐÁNG NGỜ. Điều tra sau khi hết nghèo."'},
  {do:()=>{ Game.addTrust(-10); }},
],

/* ---------- CHƯƠNG 4 ---------- */
c4_case: [
  {bg:'market'}, {music:'night'},
  {who:'batu', expr:'shock', text:'MẤT RỒI!! KÉT CỦA TAO MẤT RỒI!!! 300 TRIỆU TIỀN HỤI CỦA CẢ PHỐ!!', pfx:true},
  {who:'chau', expr:'shock', text:'Bà Tư bình tĩnh! Hít vào... thở ra... Kể em nghe!'},
  {who:'batu', expr:'cry', text:'Đêm qua tao đi đám giỗ. Sáng về, két bay màu. Con Bông — chó canh két — thì no căng bụng nằm ngủ!!'},
  {who:'batu', expr:'gloom', text:'Con Bông tốt nghiệp LOẠI GIỎI trường nghiệp vụ đấy! Ba năm huấn luyện! Vậy mà phản chủ vì một bữa ăn. Tao nuôi ong tay áo, nuôi cún trong két...'},
  {who:'chau', expr:'think', text:'(Ghi chú: thủ phạm biết cách làm thân với chó nghiệp vụ. Đây KHÔNG phải tay mơ... hoặc là người có rất nhiều xúc xích.)'},
  {who:'khai', expr:'think', text:'Chó canh mà no và ngủ... Thủ phạm là người quen, hoặc người RẤT hiểu chó.'},
  {who:'batu', expr:'angry', text:'Tao nghi ba đứa: ÔNG CẦM ĐỒ — nợ tao tiền hụi. CON HỒNG Y TÁ — hay lượn lờ mua trà sữa gần đó. THẰNG VINH XE ÔM — đêm đó chạy xe quanh phố.'},
  {who:'batu', expr:'normal', text:'Tìm ra thủ phạm, tao trả 60 TRIỆU. Con {ten}, nghe nói mày tự nhận là trinh thám hả?'},
  {who:'chau', expr:'sparkle', text:'CUỐI CÙNG CŨNG CÓ NGƯỜI HỎI!! Vâng!! IQ trinh thám của em... thỉnh thoảng hoạt động!!'},
  {who:'khai', expr:'gloom', text:'"Thỉnh thoảng" là từ khóa đáng lo nhất trong câu đó.'},
  {who:'sys', text:'NHIỆM VỤ: thẩm vấn 3 nghi phạm. Dùng kỹ năng "Đọc Vị Người Nói Dối" — nhấn đúng lúc mặt họ GIẬT!'},
],
c4_camdo_pre: [
  {bg:'market'},
  {who:'camdo', expr:'worried', text:'Lão á?! Trộm két á?! Lão là doanh nhân LƯƠNG THIỆN mà! Có giấy phép... viết tay... tự cấp!'},
  {who:'chau', expr:'think', text:'(Mắt ông ấy đảo như rang lạc. Quan sát kỹ nào...)'},
],
c4_camdo_res: [
  {who:'camdo', expr:'cry', text:'ĐƯỢC RỒI LÃO KHAI! Lão có đi qua đó tối đó! Nhưng chỉ để... TRỘM TRÀ SỮA THỪA của tiệm bên cạnh! Uống dở mà ngon lắm!'},
  {who:'chau', expr:'dizzy', text:'Thông tin này vừa vô tội vừa kinh dị theo cách riêng của nó...'},
  {who:'camdo', expr:'normal', text:'Còn két hả — lão KHÔNG dám lại gần! Con Bông nhà Bà Tư dữ lắm! Lão sợ chó từ bé!! Mà tối đó lão thấy CON HỒNG lởn vởn ở đó, tay xách túi to.'},
  {who:'sys', text:'📋 Manh mối: Ông Cầm Đồ SỢ CHÓ (khó lại gần két). Y tá Hồng xuất hiện gần hiện trường với túi to.'},
],
c4_yta_pre: [
  {bg:'hospital'},
  {who:'yta', expr:'happy', text:'Ơ chị {ten}~ Em nhớ chị ghê~ Dạo này còn ký giấy linh tinh nữa hông~?'},
  {who:'chau', expr:'angry', text:'CÔ! Vụ tờ giấy hiến thận tôi chưa tính sổ đâu! Mà giờ hỏi chuyện khác: đêm qua cô ở đâu?'},
  {who:'yta', expr:'normal', text:'Em trực bệnh viện mà~ Cả đêm luôn~ Hỏi ai cũng được~'},
  {who:'chau', expr:'think', text:'(Cười ngọt thế kia... GIẢ TRÂN. Nhìn kỹ mặt cô ta nào.)'},
],
c4_yta_res: [
  {who:'yta', expr:'worried', text:'Ơ kìa... sao chị nhìn em như nhìn tội phạm vậy~ Em chỉ là y tá nhỏ bé đáng yêu~'},
  {who:'chau', expr:'smug', text:'Y tá nhỏ bé đáng yêu mà trong túi rơi ra HÓA ĐƠN 50 LY TRÀ SỮA thanh toán lúc 2 GIỜ SÁNG?'},
  {who:'yta', expr:'shock', text:'Đ-đó là em mua cho các bệnh nhân!! Uống trà sữa lúc 2h sáng rất tốt cho... tim mạch!!'},
  {who:'chau', expr:'normal', text:'(Ghi chú: hóa đơn 50 ly. Vết son hình tim trên ống hút. Và cô ta có CHÌA KHÓA ĐA NĂNG của bệnh viện...)'},
  {who:'sys', text:'📋 Manh mối: hóa đơn 50 ly trà sữa lúc 2h sáng + vết son hình trái tim + chìa khóa y tế đa năng mở được nhiều loại khóa.'},
],
c4_vinh_pre: [
  {bg:'market'},
  {who:'vinh', expr:'happy', text:'Ơ chị gái lều xiếc! Lên xe không? Hôm nay giảm 90%, bù lại đi... 9 vòng!'},
  {who:'chau', expr:'normal', text:'Không đi xe! Hỏi chuyện: đêm qua anh chạy xe gần chợ đúng không? Có thấy gì lạ không?'},
  {who:'vinh', expr:'worried', text:'Ơ... đêm qua hả... em... chạy khách bình thường mà... hehe... hehehe...'},
  {who:'chau', expr:'think', text:'(Cười "hehe" hai lần. Chỉ số giả trân tăng vọt. Soi!)'},
],
c4_vinh_res: [
  {who:'vinh', expr:'cry', text:'DẠ EM KHAI! Đêm qua em chở một ông khách say, ổng bắt em chạy 7 VÒNG quanh thành phố vì "muốn ngắm quê hương"!! App còn lưu lộ trình nè!!'},
  {who:'chau', expr:'dizzy', text:'7 vòng... App ghi lại thật... Vậy là anh có bằng chứng ngoại phạm dày như cuốn từ điển.'},
  {who:'vinh', expr:'normal', text:'Mà chị ơi, lúc 2h sáng em có ĐỔ XĂNG gần chợ, thấy CÔ Y TÁ xinh xinh vẫy xe. Cô ấy ôm cái TÚI TO, kêu chở về BỆNH VIỆN.'},
  {who:'vinh', expr:'shock', text:'Cái túi nặng lắm! Em tưởng đựng gạch! Cổ còn boa em 500k dặn "quên chuyến này đi nha"!'},
  {who:'chau', expr:'sparkle', text:'BOA 500K ĐỂ QUÊN?! Anh Vinh ơi, anh vừa nhớ lại một cách xuất sắc!'},
  {who:'sys', text:'📋 Manh mối: Vinh có ngoại phạm (app ghi 7 vòng). Y tá Hồng + túi nặng + boa tiền để giữ im lặng.'},
],
c4_board: [
  {bg:'hideout'}, {music:'night'},
  {who:'khai', expr:'normal', text:'Rồi, trinh thám. Trải hết manh mối ra. Két 300 triệu, chó không sủa, ba nghi phạm.'},
  {who:'chau', expr:'sparkle', text:'Đến giờ của BẢNG SUY LUẬN! Tôi vẽ sơ đồ cả đêm đó! Có dây len đỏ nối các manh mối như phim luôn!'},
  {who:'khai', expr:'think', text:'Dây len đó em lấy từ áo len của anh đúng không? Áo anh giờ ngắn tay rồi.'},
  {choice:[
    {ic:'😇', label:'"Ừ. Vì công lý, áo anh đã hy sinh."', trust:5, reply:[
      {who:'khai', expr:'laugh', text:'Được. Nếu phá được án thì coi như áo anh chết có ý nghĩa.'}]},
    {ic:'🤡', label:'"Áo ngắn tay đang là mốt đó!"', reply:[
      {who:'khai', expr:'gloom', text:'Mốt "bị đồng bọn rút len". Hot trend của riêng lều này.'}]},
  ]},
  {who:'chau', expr:'normal', text:'Tập trung nào! Gắn manh mối đúng người... và BUỘC TỘI!'},
],
c4_luck: [
  {bg:'hideout'},
  {who:'khai', expr:'gloom', text:'Em vừa buộc tội NHẦM người trước mặt cả phố. Bà Tư đang cân nhắc trừ tiền công kìa.'},
  {who:'chau', expr:'worried', text:'Khoan! Để tôi dùng tuyệt chiêu cuối: LINH CẢM NGẪU NHIÊN!'},
  {who:'khai', expr:'shock', text:'Đừng!! Lần trước "linh cảm" xong em ký mất quả thận của anh!!'},
  {who:'chau', expr:'sparkle', text:'Linh cảm nói: thủ phạm là... người có SON MÔI, THÍCH TRÀ SỮA, và CÓ CHÌA KHÓA VẠN NĂNG!! LÀ Y TÁ HỒNG!!'},
  {who:'khai', expr:'dizzy', text:'...Đó chính xác là suy luận đúng mà em vừa BỎ QUA để chọn sai. IQ của em bật tắt như đèn nhấp nháy vậy hả?'},
  {do:()=>{ Game.addMoney(30, 'tiền thưởng (bị trừ một nửa vì buộc tội nhầm)'); }},
],
c4_solve: [
  {bg:'market'}, {music:'tense'},
  {who:'yta', expr:'shock', text:'Sao... sao mọi người nhìn em vậy... Em là y tá nhỏ bé đáng yêu mà~...'},
  {who:'chau', expr:'smug', text:'Y tá Hồng. Hóa đơn 50 ly trà sữa lúc 2h sáng. Vết son hình tim trên két. Chó Bông không sủa vì quen mùi THUỐC SÁT TRÙNG. Và cái túi "đựng gạch" anh Vinh chở về BỆNH VIỆN.'},
  {who:'yta', expr:'cry', text:'HUHU ĐƯỢC RỒI!! EM LẤY!! Em nợ tiền trà sữa 47 quán!! Họ dọa cắt... cắt QUYỀN TÍCH ĐIỂM của em!!'},
  {who:'khai', expr:'dizzy', text:'Trộm 300 triệu vì... thẻ tích điểm trà sữa. Thế hệ này hết cứu.'},
  {who:'batu', expr:'angry', text:'CON RANH! Trả két đây! Còn 60 triệu của con {ten}... khoan đã.'},
  {who:'yta', expr:'evil', text:'Khoan gì mà khoan. Mọi người lấy lại két rồi thì nghe em nói cái này...'},
  {who:'yta', expr:'normal', text:'Trong két KHÔNG CHỈ CÓ TIỀN đâu. Có một tập HỒ SƠ. Em đọc rồi. Nó viết về... ANH LUCIEN đấy.', pfx:true},
  {who:'khai', expr:'shock', text:'...Cái gì?'},
  {who:'sys', text:'Không khí chợ đen đông cứng. Ai đó làm rơi ly trà sữa. Chính là Y tá Hồng. Cô ấy nhặt lên uống tiếp. Nhưng không khí vẫn đông cứng.'},
],

/* ---------- CHƯƠNG 5 ---------- */
c5_twist: [
  {bg:'night'}, {music:'sad'},
  {who:'yta', expr:'normal', text:'Hồ sơ đó ghi: "LUCIEN — cựu trưởng phòng tín dụng NGÂN HÀNG ĐẠI PHÁT. Bị sa thải vì biển thủ 5 tỷ." Bà Tư mua hồ sơ này để... phòng thân.'},
  {who:'chau', expr:'shock', text:'Lucien?! BIỂN THỦ 5 TỶ?! Anh... anh là TRÙM LỪA ĐẢO thật hả?!', pfx:true},
  {who:'khai', expr:'gloom', text:'...Không phải anh biển thủ. Là GIÁM ĐỐC. Ông ta rút ruột quỹ, rồi đổ hết lên đầu anh — vì anh là đứa phát hiện ra.'},
  {who:'khai', expr:'angry', text:'Bằng chứng gốc nằm trong KÉT NGÂN HÀNG. Vì thế anh mới liều... cướp chính nơi mình từng làm việc. Anh cần tờ SAO KÊ GỐC đó.'},
  {who:'khai', expr:'gloom', text:'Hai năm qua anh gõ cửa từng nơi. Đồng nghiệp cũ chặn số. Bạn thân lảng tránh. Đến mẹ anh... cũng chỉ dám hỏi nhỏ một câu: "Con... có làm thật không?"'},
  {who:'khai', expr:'normal', text:'Câu hỏi đó đau hơn mất thận nhiều, {ten} ạ. Mất thận vẫn sống được. Mất người tin mình thì... sống cũng như đang trả góp từng ngày.'},
  {who:'chau', expr:'gloom', text:'...Tôi hiểu cảm giác đó. Lúc cả công ty nhìn tôi như "con dở hơi khai sai 17 lần", tôi cũng từng tự hỏi: hay mình vô dụng thật.'},
  {who:'chau', expr:'normal', text:'Hóa ra cả hai ta đều bị cả thế giới hiểu lầm. Thảo nào... ở cạnh anh, tôi lại thấy dễ thở đến lạ.'},
  {who:'chau', expr:'shock', text:'Khoan— vậy vụ cướp đó... không phải vì tiền?!'},
  {who:'khai', expr:'normal', text:'50/50. Một nửa minh oan, một nửa... ừ thì cũng cần tiền thật. Anh mất thận rồi, cho anh thành thật một bữa.'},
  {who:'khai', expr:'gloom', text:'Còn nữa. {ten}... vụ em "khai sai giấy tờ 17 lần" — em không sai đâu. Hồ sơ công ty em bị NGÂN HÀNG ĐẠI PHÁT "xử lý hộ". Công ty em vay vốn chỗ ổng. Em chỉ là con tốt thí để che một khoản vay ma.'},
  {who:'chau', expr:'cry', text:'CÁI GÌ?! Vậy khoản nợ 200 triệu của tôi... là bị GÀI?! Tôi mất việc, mất tiền, mất cả danh dự khai-giấy-tờ vì ông giám đốc đó?!'},
  {who:'khai', expr:'normal', text:'Ừ. Anh chọn em cho phi vụ không phải ngẫu nhiên. Anh muốn... cả hai ta cùng đòi lại công bằng. Xin lỗi vì giấu em.'},
  {choice:[
    {ic:'😇', label:'"Đáng lẽ anh phải nói từ đầu. Nhưng tôi tin anh."', trust:10, reply:[
      {who:'khai', expr:'blush', text:'...Cảm ơn. Người đầu tiên tin anh sau 2 năm. Tính cả con mèo anh nuôi. Nó cũng bỏ đi rồi.'}]},
    {ic:'😈', label:'"Anh LỢI DỤNG tôi! Đồ mặt đẹp lòng đen!"', trust:-8, dr:5, why:'giận dỗi giữa đêm', reply:[
      {who:'khai', expr:'gloom', text:'Ừ. Anh không cãi được. Nhưng để anh sửa. Bằng cách nào đó.'},
      {who:'chau', expr:'angry', text:'Sửa nhanh lên. Và "mặt đẹp" không phải lời khen đâu nhé!'},
      {who:'khai', expr:'smug', text:'Nghe vẫn cứ là lời khen.'}]},
    {ic:'🤡', label:'"Khoan. Anh từng có MÈO? Kể chuyện con mèo đi."', trust:5, reply:[
      {who:'khai', expr:'dizzy', text:'Trọng tâm câu chuyện là ÂM MƯU 5 TỶ mà?!'},
      {who:'chau', expr:'normal', text:'Âm mưu để mai. Mèo là chuyện khẩn cấp.'},
      {who:'khai', expr:'laugh', text:'...Tên nó là Lãi Suất. Vì nó đòi ăn tăng dần theo tháng. Vui chưa? Giờ tập trung được chưa?'}]},
  ]},
  {who:'lam', expr:'angry', text:'ĐỨNG IM! CẢNH SÁT ĐÂY!', pfx:true},
  {fx:'shake'}, {sfx:'siren'},
  {who:'lam', expr:'normal', text:'Lucien. Cuối cùng cũng tìm ra cậu. Lệnh bắt: tình nghi cướp ngân hàng Đại Phát. Về đồn.'},
  {who:'chau', expr:'shock', text:'Khoan đã chú ơi!! Anh ấy bị OAN!! À không, vụ cướp thì đúng ảnh làm, nhưng mà oan cái KHÁC!!'},
  {who:'lam', expr:'gloom', text:'"Cướp thì đúng nhưng oan cái khác." Tôi làm nghề 25 năm chưa nghe câu nào lạ vậy.'},
  {who:'khai', expr:'normal', text:'{ten}. Nghe anh. HỒ SƠ trong két của Bà Tư — đó là chìa khóa. Phần còn lại... em quyết định. Anh tin em.'},
  {who:'sys', text:'Đội trưởng Lâm giải Lucien về đồn. Trong tay {ten} là tập hồ sơ nóng bỏng. Trước mặt là hai con đường...'},
  {do:()=>{
    Game.state.unlocked.doncs = true;
    World.refreshStatic();
    Toast('🗺️ Mở khóa: ĐỒN CẢNH SÁT', 'good');
  }},
],
c5_choice: [
  {bg:'night'},
  {who:'chau', expr:'think', text:'Suy nghĩ nào, {ten}. IQ trinh thám ơi, xin đừng offline lúc này...'},
  {choice:[
    {ic:'😇', label:'ĐEM HỒ SƠ NỘP CHO ĐỘI TRƯỞNG LÂM — chơi bài công lý', do:()=>{ Game.state.route='nop'; }, reply:[
      {who:'chau', expr:'normal', text:'Cướp ngân hàng thì tôi đứng canh cửa được. Nhưng lần này... phải làm cho ĐÚNG. Đến đồn cảnh sát!'},
    ]},
    {ic:'😈', label:'ĐỘT NHẬP ĐỒN, CỨU LUCIEN TRƯỚC — chơi bài liều', do:()=>{ Game.state.route='ruot'; }, reply:[
      {who:'chau', expr:'angry', text:'Công lý xử lý sau. ĐỒNG BỌN trước! Chờ tôi, Lucien!'},
    ]},
  ]},
],
c5_ruot_prep: [
  {bg:'night'}, {music:'tense'},
  {who:'chau', expr:'normal', text:'Kế hoạch: hóa trang thành CẢNH SÁT TẬP SỰ, lẻn vào, tìm phòng tạm giữ, cõng Lucien chạy. Có gì khó đâu!'},
  {who:'sys', text:'Rất nhiều thứ khó. Nhưng tinh thần là chính.'},
],
c5_ruot_end: [
  {bg:'hideout'}, {music:'lofi'},
  {who:'khai', expr:'dizzy', text:'Em... VỪA CÕNG ANH VƯỢT ĐỒN CẢNH SÁT. Lần thứ HAI trong tháng em cõng anh bỏ chạy khỏi hiện trường.'},
  {who:'chau', expr:'happy', text:'Kỹ năng mới của tôi: cõng-người-và-chạy. Sắp đưa vào CV luôn!'},
  {who:'khai', expr:'normal', text:'Mà khoan... áo khoác tạm giữ này... trong túi có gì cộm cộm...'},
  {who:'sys', text:'Trong túi áo là một chiếc USB dán nhãn "QUỸ ĐEN — GĐ NH ĐẠI PHÁT — TUYỆT MẬT". Kèm mật khẩu dán luôn bên cạnh: "123456".'},
  {who:'chau', expr:'shock', text:'Mật khẩu quỹ đen 5 tỷ là 123456?!'},
  {who:'khai', expr:'gloom', text:'Giám đốc mà. Não để hết vào việc đổ tội người khác rồi.'},
  {who:'sys', text:'Hóa ra Lâm tạm giữ đồ vật thu được từ xe của GIÁM ĐỐC — và bộ đồ Lucien mặc chính là đồ niêm phong nhầm. Số tiền truy ra được: 500 triệu "chảy" về ví hai người một cách... khó giải thích.'},
  {do:()=>{ Game.addMoney(500, 'quỹ đen của giám đốc (khó giải thích)'); Game.addTrust(15); Game.addDR(15, 'vượt ngục + cầm nhầm 500 triệu'); }},
  {who:'khai', expr:'worried', text:'Em biết là giữ số tiền này thì ta chính thức thành TỘI PHẠM THẬT đúng không?'},
  {who:'chau', expr:'smug', text:'Tội phạm có tiền. Khác tội phạm nghèo lắm đó.'},
  {who:'khai', expr:'laugh', text:'Trời ơi. Anh đã dạy hư em từ lúc nào vậy.'},
  {who:'khai', expr:'normal', text:'...Mà này. Lúc còi hụ inh ỏi, đèn pha rọi thẳng mặt — em vẫn quay đầu lại cõng anh. Hai năm qua, chưa từng có ai... quay lại vì anh cả.'},
  {who:'chau', expr:'blush', text:'Đồng bọn mà. Với lại bỏ anh ở đó thì ai... gánh nợ chung với tôi nữa.'},
  {who:'khai', expr:'smug', text:'Ừ. Vì nợ. Cứ cho là vì nợ đi.'},
],
c5_nop_pre: [
  {bg:'police'}, {music:'tense'},
  {who:'lam', expr:'normal', text:'Cô là đồng phạm vụ ngân hàng. Giờ tự đi vào đồn nộp mình kèm một tập hồ sơ. Tôi nên cảm động hay nên còng tay cô trước?'},
  {who:'chau', expr:'worried', text:'Chú đọc hồ sơ trước đã! Giám đốc Đại Phát biển thủ 5 tỷ, đổ tội cho Lucien, còn gài cả công ty cũ của cháu!'},
  {who:'lam', expr:'think', text:'...Hồ sơ này. Nếu là thật, đây là vụ lớn nhất sự nghiệp của tôi. Nếu là giả, cô vào tù chung phòng với bạn cô.'},
  {who:'lam', expr:'normal', text:'Tôi sẽ hỏi cô vài câu. Tôi mà thấy cô CHỚP MẮT GIAN DỐI một cái là xong phim. Nhưng nếu cô bắt được TÔI đang lung lay... thì cô thắng.'},
  {who:'chau', expr:'think', text:'(Đấu trí với đội trưởng 25 năm kinh nghiệm... Nhìn kỹ! Lúc nào mặt ổng DAO ĐỘNG là lúc ổng sắp tin mình!)'},
],
c5_nop_end: [
  {bg:'police'}, {music:'lofi'},
  {who:'lam', expr:'gloom', text:'...Được. Tôi tin cô. Thật ra phòng kỹ thuật vừa xác minh xong: chữ ký trong hồ sơ khớp với giám đốc. Lệnh bắt ông ta đang được ký.'},
  {who:'chau', expr:'sparkle', text:'VẬY LUCIEN ĐƯỢC THẢ CHỨ Ạ?!'},
  {who:'lam', expr:'normal', text:'Được thả. Tội cướp vẫn treo đó, nhưng tình tiết "cướp để minh oan" + hợp tác điều tra... tòa sẽ nhẹ tay. Án treo là cùng.'},
  {who:'lam', expr:'smug', text:'Mà này cô kia. Cô thẩm vấn tôi ngược. 25 năm chưa ai làm vậy. Cô... có muốn làm CỐ VẤN cho đội trọng án không? Lương thấp, việc nhiều, nguy hiểm cao.'},
  {who:'chau', expr:'shock', text:'Mô tả công việc tệ vậy mà chú nói như đang khoe?!'},
  {who:'lam', expr:'normal', text:'À, trước khi cô về. Thằng Lucien lúc bị tạm giữ cứ dặn đi dặn lại tôi một câu: "Nếu con bé có tới, đừng quát nó. Nó ngoài miệng mạnh mẽ vậy thôi, chứ tối nào về lều cũng khóc."'},
  {who:'chau', expr:'shock', text:'AI?! AI KHÓC?! Tôi chỉ bị bụi lều xiếc bay vào mắt... MỖI ĐÊM thôi!!', pfx:true},
  {who:'lam', expr:'gloom', text:'Ừ. Bụi. Loại bụi tên là "cuộc đời". Chú cũng hít loại đó 25 năm nay rồi.'},
  {do:()=>{ Game.addTrust(8); Game.addDR(-10, 'đứng về phía công lý'); Game.state.flags.heroOffer = true; }},
],
c5_end: [
  {bg:'sunset'}, {music:'sad'},
  {who:'sys', text:'Hoàng hôn đổ xuống nóc lều xiếc. Hai kẻ từng bị cả thành phố quay lưng, giờ ngồi cạnh nhau trên hai thùng sơn cũ — như hai vị vua trên ngai vàng của riêng mình.'},
  {who:'khai', expr:'normal', text:'Vậy là xong. Giám đốc bị bắt. Anh được minh oan. Em được xóa án "17 lần khai sai". Chỉ còn lại...'},
  {who:'chau', expr:'gloom', text:'...Đống nợ. Nợ thì không ai minh oan giùm.'},
  {who:'khai', expr:'laugh', text:'Ừ. Nợ là thứ chung thủy nhất trần đời. Người thì bỏ đi được, chứ nợ thì theo mình tới cùng.'},
  {who:'khai', expr:'blush', text:'Mà... {ten} này. Qua hết chuyện này, anh nhận ra một điều.'},
  {choice:[
    {ic:'😇', label:'"Điều gì?" (nghe nghiêm túc)', trust:10, reply:[
      {who:'khai', expr:'blush', text:'Anh nợ ngân hàng một cái cửa kính, nợ bệnh viện một quả thận... nhưng nợ em thì không tính được. Kiểu nợ này... chắc trả cả đời mới hết.'},
      {who:'chau', expr:'blush', text:'...Anh đang tỏ tình hay đang khai báo tài chính vậy?'},
      {who:'khai', expr:'smug', text:'Với anh, hai cái đó là một.'}]},
    {ic:'🤡', label:'"Rằng anh nên mua bảo hiểm thận?"', trust:4, reply:[
      {who:'khai', expr:'laugh', text:'PHỤT... Ừ. Đó. Chính xác điều anh định nói. Chính xác luôn.'},
      {who:'chau', expr:'happy', text:'Tôi biết mà! Tôi giỏi đọc vị lắm!'},
      {who:'khai', expr:'gloom', text:'(Trinh thám giỏi nhất thành phố... trừ mỗi việc đọc vị anh.)'}]},
    {ic:'😈', label:'"Khoan. Chia lại 50/50 vụ tiền thưởng đã."', trust:-4, reply:[
      {who:'khai', expr:'dizzy', text:'Khoảnh khắc lãng mạn 10 năm có một, và em dùng nó để ĐÒI CHIA TIỀN?'},
      {who:'chau', expr:'smug', text:'Bài học đầu tiên anh dạy tôi: tiền bạc phân minh, ái tình sòng phẳng.'},
      {who:'khai', expr:'gloom', text:'Anh hối hận về chương trình đào tạo của mình.'}]},
  ]},
  {who:'khai', expr:'normal', text:'Hồi trước anh nghĩ: có tiền là có tất cả. Giờ mất sạch rồi mới hiểu — thứ anh thiếu suốt hai năm qua chưa bao giờ là tiền. Là một người chịu ngồi cạnh, lúc cả thế giới đứng dậy bỏ đi.'},
  {who:'chau', expr:'blush', text:'...Anh mà nói kiểu đó nữa là tôi tính lãi đấy. Lãi suất cảm động: 5% một câu.'},
  {who:'khai', expr:'laugh', text:'Ghi sổ đi. Khoản này... anh sẵn sàng vỡ nợ.'},
  {who:'sys', text:'Mặt trời lặn trên Thành Phố Hỗn Loạn. Hai kẻ nợ nần nhìn về phía chân trời — nơi các chủ nợ đang chờ. Nhưng đó là chuyện của ngày mai.'},
],

/* ---------- CHƯƠNG 6 ---------- */
c6_final: [
  {bg:'sunset'}, {music:'lofi'},
  {who:'sys', text:'CHƯƠNG CUỐI: HÒA GIẢI & HÓA ĐƠN. Đến lúc tổng kết mọi thứ...'},
  {who:'khai', expr:'normal', text:'Rồi. Ngồi xuống. Ta làm cái việc đáng sợ nhất: TỔNG KẾT TÀI CHÍNH.'},
  {who:'chau', expr:'worried', text:'Khoan, để tôi ôm cái nồi cho vững tinh thần đã.'},
  {who:'khai', expr:'think', text:'Khoản thu: tiền công chợ đen, tiền thưởng phá án, và... vài khoản "khó ghi vào sổ".'},
  {who:'chau', expr:'gloom', text:'Khoản chi: một quả thận (giá trị tinh thần vô hạn), một cái áo len (hy sinh vì công lý), và danh dự của tôi (vốn dĩ không còn nhiều).'},
  {who:'khai', expr:'normal', text:'Và số phận của hai ta thì tính theo... những gì em đã chọn suốt chặng đường này.'},
],

c6_heart_high: [
  {bg:'sunset'}, {music:'sad'},
  {who:'khai', expr:'normal', text:'Trước khi số phận phán quyết... anh muốn thanh toán một khoản cuối cùng.'},
  {who:'chau', expr:'worried', text:'Khoản gì nữa? Tôi hết tiền THẬT rồi đó. Đến cái nồi cũng đang cầm cố tinh thần rồi.'},
  {who:'khai', expr:'blush', text:'Khoản này không trả bằng tiền. {ten}... em là người đầu tiên tin anh khi anh không còn gì để chứng minh. Người khác tin anh vì chức danh, vì hồ sơ. Còn em tin anh khi anh chỉ còn một quả thận và một cái tên xấu.'},
  {who:'chau', expr:'blush', text:'Thì... anh cũng là người đầu tiên nhìn tôi mà không thấy "con bé khai sai 17 lần". Anh nhìn tôi và thấy "thiên tài ứng biến". Dù đó là lời khen dở nhất lịch sử nhân loại.'},
  {who:'khai', expr:'laugh', text:'Dở nhưng thật lòng. Hàng thật giá gốc, không qua trung gian.'},
  {who:'khai', expr:'normal', text:'Người ta bảo nợ là thứ trói buộc con người vào nhau. Vậy thì {ten} này... mình đừng bao giờ trả hết cho nhau nhé. Cứ nợ như vậy... cả đời.'},
  {who:'chau', expr:'blush', text:'...Đề nghị vô lý nhất tôi từng nghe. Được. Ký ở đâu?'},
  {who:'sys', text:'Trong lều xiếc rách, không ai nói thêm gì nữa. Nhưng khoảng cách giữa hai cái thùng sơn... đã gần lại từ lúc nào không hay.'},
  {who:'sys', text:'Đang tính toán KẾT CỤC của bạn... Cộng dồn: Điểm Rắc Rối, Chỉ Số Tin Tưởng, tiền bạc, và các quyết định...'},
],

c6_heart_low: [
  {bg:'sunset'}, {music:'sad'},
  {who:'khai', expr:'normal', text:'Này. Dù kết quả có thế nào... cảm ơn em. Vì đã không bỏ chạy. Ừ thì em có bán đồ của anh, ăn mất đùi gà của anh, suýt buộc tội nhầm vài người—'},
  {who:'chau', expr:'worried', text:'Cảm ơn hay kể tội?! Chọn MỘT thôi được không?!'},
  {who:'khai', expr:'laugh', text:'Cả hai. Vì đồng bọn kiểu mình là vậy mà: vừa là chủ nợ, vừa là con nợ, vừa là... người duy nhất còn ở lại.'},
  {who:'chau', expr:'normal', text:'..."Người duy nhất còn ở lại". Ừ. Nghe cũng không tệ.'},
  {who:'sys', text:'Không phải mối quan hệ nào cũng cần tên gọi. Có những thứ chỉ cần một người dám ở lại — thế là đủ thành "nhà".'},
  {who:'sys', text:'Đang tính toán KẾT CỤC của bạn... Cộng dồn: Điểm Rắc Rối, Chỉ Số Tin Tưởng, tiền bạc, và các quyết định...'},
],
},

/* ================================================= CẮT CẢNH TRANH */
panels: {
c1_robbery: [
  {chars:[['khai','sparkle']], bgc:'#dff1ff', text:'Lucien mở được két! Bên trong: TIỀN! RẤT NHIỀU TIỀN! Kế hoạch hoàn hảo... trong đúng 4 giây.'},
  {chars:[['baove','angry']], bgc:'#ffe3e3', fx:'boom', text:'"CHÁU LÀM GÌ ĐẤY?!" — Bác bảo vệ VỀ HƯU quay lại lấy hộp cơm để quên. Trên tay: GHẾ NHỰA GIA TRUYỀN.'},
  {chars:[['khai','pain']], bgc:'#fff3c4', fx:'boom', sfx:'boom', text:'CỐP! Chiếc ghế nhựa bay theo quỹ đạo hoàn hảo. Lucien gục xuống cùng 0 đồng chiến lợi phẩm. Chuông báo động: RÉO RẮT KHẮP PHỐ.'},
  {chars:[['chau','shock'],['khai','dizzy']], bgc:'#e8d9f5', text:'{ten} làm điều duy nhất nghĩ ra được: CÕNG tên chủ mưu bỏ chạy. "SAO ANH NẶNG VẬY?!" — "CƠ BẮP... CỦA CÔNG LÝ..."'},
],
c2_kidney: [
  {chars:[['yta','happy']], bgc:'#ffe9f0', text:'Y tá Hồng cầm xấp giấy, mỉm cười: "Chị ký đủ rồi nha~". Có tờ giấy nào đó vừa được... TRÁO vào lúc nào không ai biết.'},
  {chars:[['yta','evil']], bgc:'#e8d9f5', fx:'boom', text:'"Giấy XUẤT VIỆN hả~? Không~ Đây là ĐƠN HIẾN THẬN TỰ NGUYỆN có chữ ký người giám hộ~ Cảm ơn chị đã đóng góp cho y học~"'},
  {emoji:KIDNEY, bgc:'#d3f6e9', sfx:'whoosh', text:'Một quả thận khỏe mạnh lên đường đến với chủ nhân mới. Nó thậm chí còn được đưa tiễn chu đáo hơn cả Lucien ngày nghỉ việc.'},
  {chars:[['chau','cry'],['khai','dizzy']], bgc:'#fff3c4', text:'Tổng thiệt hại: 1 quả thận, toàn bộ tiền đền bù, và niềm tin của Lucien vào loài người (đã thấp sẵn).'},
],
c5_ruot_break: [
  {chars:[['chau','smug']], bgc:'#d6e4ff', text:'Nửa đêm. Một "cảnh sát tập sự" mặt lạ đi vào đồn với tờ giấy tự in: "LỆNH ĐIỀU CHUYỂN PHẠM NHÂN (bản thật 100%)".'},
  {chars:[['khai','shock']], bgc:'#e8d9f5', text:'"Em điên rồi—" — "Suỵt. Tập sự Nguyễn Thị Công Lý đến điều chuyển anh. Diễn đi!"'},
  {emoji:'🚨', bgc:'#ffe3e3', fx:'boom', sfx:'siren', text:'Kế hoạch hoàn hảo trong 2 phút. Sau đó ai đó dẫm phải đuôi con mèo của đồn. BÁO ĐỘNG!! CHẠYYYY!!'},
],
},

/* ================================================= LUỒNG CHƯƠNG */
flow: [

/* ========== CHƯƠNG 1 ========== */
{ no:1, title:'"NGÀY TỆ NHẤT LỊCH SỬ"', stamp:'🏦 vụ cướp thế kỷ (tự phong)',
  steps:[
    {vn:'c1_meet'},
    {map:{playerAt:{x:300,y:600}, quest:'Đi tới Ngân hàng Đại Phát 🏦', music:'lofi',
      goto:{x:495, y:390, ic:'🏦', label:'Ngân hàng'},
      npcs:[{char:'baove', x:700, y:480, label:'Bảo vệ (về hưu?)', bark:[
        {who:'baove', expr:'normal', text:'Bác trực ở đây 30 năm rồi. Về hưu rồi nhưng nhớ nghề, ra đứng chơi. Vũ khí của bác hả? Bí mật nghề nghiệp.'}]}],
    }},
    {vn:'c1_plan'},
    {mg:'lookout', after(res){
      if(res.success) Game.addDR(5, 'dù sao vẫn là đi cướp');
      else Game.addDR(15, 'náo loạn cả khu phố');
    }},
    {panels:'c1_robbery'},
    {mg:'escape', after(res){
      if(!res.success) Game.addDR(10, 'va phải ' + res.hits + ' chướng ngại vật');
    }},
    {vn:'c1_hospital'},
]},

/* ========== CHƯƠNG 2 ========== */
{ no:2, title:'"AI KÝ CÁI GÌ VẬY?!"', stamp: KIDNEY + ' sự cố y tế nghiêm trọng',
  steps:[
    {vn:'c2_docs'},
    {mg:'papers', opts:{papers:[
      {title:'GIẤY KHÁM TỔNG QUÁT', fine:'Đồng ý cho bệnh viện khám tổng quát bệnh nhân. Hoàn toàn bình thường. Có lẽ.', good:true},
      {title:'ĐƠN MUA BẢO HIỂM CHO CHÓ', fine:'Bảo hiểm toàn diện cho thú cưng mà bạn KHÔNG hề có. Phí chỉ 2 triệu/tháng.', good:false},
      {title:'GIẤY CAM KẾT TRẢ VIỆN PHÍ', fine:'Cam kết thanh toán 100% viện phí. Kèm dòng chữ nhỏ: "và tiền trà nước cho phòng hành chính".', good:true},
      {title:'ĐƠN HIẾN GIỌNG HÁT', fine:'Tình nguyện hát karaoke phục vụ khoa hồi sức mỗi tối thứ 6, hợp đồng 10 năm.', good:false},
      {title:'ĐƠN ĐĂNG KÝ ĐA CẤP "THẬN PHÁT LỘC"', fine:'Chỉ cần giới thiệu 2 người thân... à mà thôi bạn hiểu rồi đấy.', good:false},
      {title:'GIẤY XUẤT VIỆN', fine:'Cho phép bệnh nhân Lucien xuất viện. Chữ RẤT nhỏ ở góc: "xem điều khoản đặc biệt mặt sau (mặt sau bị dán băng keo)".', good:true, time:5},
    ]}, after(res){
      if(res.wrong === 0) Game.addDR(-5, 'đọc kỹ trước khi ký (lần đầu trong đời)');
      else Game.addDR(Math.min(15, res.wrong*6), 'ký ' + res.wrong + ' tờ giấy oan nghiệt');
    }},
    {panels:'c2_kidney'},
    {vn:'c2_broke'},
    {map:{playerAt:{x:1940, y:430}, quest:'Đưa Lucien về "căn cứ" 🎪', music:'lofi',
      goto:{x:1280, y:800, ic:'🎪', label:'Khu ẩn náu'}}},
    {vn:'c2_home'},
]},

/* ========== CHƯƠNG 3 ========== */
{ no:3, title:'"CHỢ ĐEN KHÔNG PHẢI CHỖ MÌNH NGHĨ"', stamp:'🧸 phi vụ gấu bông',
  steps:[
    {do(){ Game.state.unlocked.choden = true; World.refreshStatic();
      Toast('🗺️ Mở khóa: PHỐ CHỢ ĐEN', 'good'); }},
    {map:{playerAt:{x:1280, y:820}, quest:'Tìm gặp Bà Tư ở Phố Chợ Đen 🌆', music:'night',
      talk:'batu',
      npcs:[
        {id:'batu', char:'batu', x:NPC_POS.batu.x, y:NPC_POS.batu.y, emote:'❗'},
        {char:'vinh', x:NPC_POS.vinh.x, y:NPC_POS.vinh.y, label:'Vinh Xe Ôm', bark:[
          {who:'vinh', expr:'happy', text:'Xe ôm không chị? Hôm nay khuyến mãi: đi 1 tính tiền 2!'},
          {who:'chau', expr:'dizzy', text:'Đó không phải khuyến mãi, đó là móc túi!'}]},
      ]}},
    {vn:'c3_batu'},
    {mg:'disguise', opts:{
      target:'👵 BÀ BÁN CÁ VỀ HƯU', time:13,
      hints:['Che nắng kiểu truyền thống','Đồ nghề dính mùi "biển cả"','Tay cần được bảo hộ'],
      items:[
        {e:'👒', label:'Nón lá', ok:true},
        {e:'🐟', label:'Giỏ cá', ok:true},
        {e:'🧤', label:'Găng cao su', ok:true},
        {e:'🕶️', label:'Kính đen ngầu', ok:false},
        {e:'👠', label:'Giày cao gót', ok:false},
        {e:'🎩', label:'Mũ ảo thuật', ok:false},
        {e:'💼', label:'Cặp doanh nhân', ok:false},
        {e:'👑', label:'Vương miện', ok:false},
        {e:'🛹', label:'Ván trượt', ok:false},
      ]}, after(res){
      if(res.success) Game.addDR(-5, 'hóa trang chuẩn không cần chỉnh');
      else Game.addDR(10, 'bị cảnh sát ghi sổ "người khả nghi"');
    }},
    {map:{quest:'Giao "gấu bông" cho Ông Cầm Đồ 🧸 (né cảnh sát!)', music:'night',
      talk:'camdo',
      npcs:[{id:'camdo', char:'camdo', x:NPC_POS.camdo.x, y:NPC_POS.camdo.y, emote:'❗'},
        {char:'batu', x:NPC_POS.batu.x, y:NPC_POS.batu.y, label:'Bà Tư', bark:[
          {who:'batu', expr:'angry', text:'Còn đứng đó?! Giao hàng đi! Gấu để lâu... hết hạn đấy!'},
          {who:'chau', expr:'worried', text:'Gấu bông mà cũng có hạn sử dụng hả trời...'}]}],
      patrols:[
        {path:[[420,1130],[900,1130],[900,1165],[420,1165]], speed:110},
        {path:[[180,1080],[350,1080],[350,1175],[180,1175]], speed:80},
      ]}},
    {vn:'c3_deliver'},
    {map:{quest:'Về lều báo cáo "chiến tích" 🎪', music:'lofi',
      goto:{x:1280, y:800, ic:'🎪', label:'Về căn cứ'}}},
    {vn:'c3_khai_eat'},
    {vn:'c3_watch_sold', when:()=>Game.state.flags.soldWatch},
    {vn:'c3_watch_ok', when:()=>!Game.state.flags.soldWatch},
]},

/* ========== CHƯƠNG 4 ========== */
{ no:4, title:'"THÁM TỬ BẤT ĐẮC DĨ"', stamp:'🔍 vụ án két tiền hụi',
  steps:[
    {map:{playerAt:{x:1280, y:820}, quest:'Có tiếng hét từ Chợ Đen! Đến gặp Bà Tư! 🆘', music:'tense',
      talk:'batu',
      npcs:[{id:'batu', char:'batu', x:NPC_POS.batu.x, y:NPC_POS.batu.y, emote:'💢'}]}},
    {vn:'c4_case'},
    {map:{quest:'Thẩm vấn nghi phạm 1/3: Ông Cầm Đồ 💰', music:'night',
      talk:'camdo',
      npcs:[{id:'camdo', char:'camdo', x:NPC_POS.camdo.x, y:NPC_POS.camdo.y, emote:'❓'}]}},
    {vn:'c4_camdo_pre'},
    {mg:'liedetect', opts:{char:'camdo', name:'ÔNG CẦM ĐỒ', need:3, time:22,
      hint:'Ông này dễ — mặt giật như wifi lag'}, after(res){
      if(!res.success) Game.addDR(8, 'bị nghi phạm "đọc vị" ngược');
    }},
    {vn:'c4_camdo_res'},
    {map:{quest:'Thẩm vấn nghi phạm 2/3: Y tá Hồng 🏥', music:'night',
      talk:'yta',
      npcs:[{id:'yta', char:'yta', x:NPC_POS.yta.x, y:NPC_POS.yta.y, emote:'❓'}]}},
    {vn:'c4_yta_pre'},
    {mg:'liedetect', opts:{char:'yta', name:'Y TÁ HỒNG', need:3, time:22, hard:true,
      hint:'Cẩn thận — cô ta là trùm mặt giả trân!'}, after(res){
      if(!res.success) Game.addDR(8, 'bị cười giả trân áp đảo');
    }},
    {vn:'c4_yta_res'},
    {map:{quest:'Thẩm vấn nghi phạm 3/3: Vinh Xe Ôm 🛵', music:'night',
      talk:'vinh',
      npcs:[{id:'vinh', char:'vinh', x:NPC_POS.vinh.x, y:NPC_POS.vinh.y, emote:'❓'}]}},
    {vn:'c4_vinh_pre'},
    {mg:'liedetect', opts:{char:'vinh', name:'VINH XE ÔM', need:3, time:20,
      hint:'Cậu này giật nhanh lắm, tập trung!'}, after(res){
      if(!res.success) Game.addDR(8, 'suýt bị dụ mua chuyến xe 9 vòng');
    }},
    {vn:'c4_vinh_res'},
    {vn:'c4_board'},
    {mg:'deduce', opts:{
      culprit:'yta',
      suspects:[
        {id:'camdo', char:'camdo', name:'Ông Cầm Đồ'},
        {id:'yta',   char:'yta',   name:'Y tá Hồng'},
        {id:'vinh',  char:'vinh',  name:'Vinh Xe Ôm'},
      ],
      clues:[
        {ic:'💄', text:'Vết son hình trái tim trên két', sus:'yta'},
        {ic:'🧾', text:'Hóa đơn 50 ly trà sữa lúc 2h sáng', sus:'yta'},
        {ic:'🗝️', text:'Két mở bằng chìa đa năng (loại y tế)', sus:'yta'},
        {ic:'🐕', text:'Chó Bông không sủa — quen mùi thuốc sát trùng', sus:'yta'},
        {ic:'📱', text:'App xe ôm ghi lộ trình 7 vòng (ngoại phạm)', sus:'vinh'},
        {ic:'🦷', text:'Một chiếc răng vàng gần hiện trường (rơi từ vụ khác)', sus:'camdo'},
        {ic:'🥤', text:'Túi to "nặng như gạch" được chở về bệnh viện', sus:'yta'},
      ]}, after(res){
      Game.state.flags.dedOK = res.success;
      if(res.success){
        Game.state.solved = true;
        Game.addDR(-30, 'giải quyết được vụ án!');
        Game.addMoney(60, 'tiền thưởng của Bà Tư');
      } else {
        Game.addDR(15, 'buộc tội nhầm đồng minh');
      }
    }},
    {vn:'c4_luck', when:()=>!Game.state.flags.dedOK},
    {vn:'c4_solve'},
]},

/* ========== CHƯƠNG 5 ========== */
{ no:5, title:'"AI MỚI LÀ KẺ XẤU?"', stamp:'🎭 plot twist thứ thiệt',
  steps:[
    {vn:'c5_twist'},
    {vn:'c5_choice'},
    /* --- Nhánh ĐỘT NHẬP --- */
    {vn:'c5_ruot_prep', when:()=>Game.state.route==='ruot'},
    {mg:'disguise', when:()=>Game.state.route==='ruot', opts:{
      target:'👮 CẢNH SÁT TẬP SỰ', time:12,
      hints:['Đồng phục màu của ngành','Đội thứ nghiêm túc lên đầu','Vật kêu "toét toét" tạo uy'],
      items:[
        {e:'👕', label:'Áo xanh đậm', ok:true},
        {e:'🧢', label:'Mũ kê-pi', ok:true},
        {e:'📣', label:'Còi tuýt', ok:true},
        {e:'🩱', label:'Đồ bơi', ok:false},
        {e:'🤿', label:'Kính lặn', ok:false},
        {e:'🎸', label:'Đàn ghi-ta', ok:false},
        {e:'🦸', label:'Áo choàng', ok:false},
        {e:'🍳', label:'Chảo chống dính', ok:false},
        {e:'🎅', label:'Mũ ông già Noel', ok:false},
      ]}, after(res){
      if(!res.success) Game.addDR(12, 'bị nghi ngờ ngay từ cổng đồn');
    }},
    {panels:'c5_ruot_break', when:()=>Game.state.route==='ruot'},
    {mg:'escape', when:()=>Game.state.route==='ruot', opts:{night:true, title:'🌙 CÕNG LUCIEN VƯỢT "NGỤC"'},
      after(res){ if(!res.success) Game.addDR(10, 'đâm đổ ' + res.hits + ' chậu cây của đồn'); }},
    {vn:'c5_ruot_end', when:()=>Game.state.route==='ruot'},
    /* --- Nhánh NỘP HỒ SƠ --- */
    {map:{playerAt:{x:1280, y:900}, quest:'Đem hồ sơ đến Đồn Cảnh Sát 🚔', music:'tense',
      goto:{x:1910, y:1165, ic:'🚔', label:'Đồn cảnh sát'}}, when:()=>Game.state.route==='nop'},
    {vn:'c5_nop_pre', when:()=>Game.state.route==='nop'},
    {mg:'liedetect', when:()=>Game.state.route==='nop', opts:{char:'lam', name:'ĐỘI TRƯỞNG LÂM', need:3, time:24, hard:true,
      hint:'Bắt khoảnh khắc ông ấy LUNG LAY — tin mình!'}, after(res){
      if(!res.success) Game.addDR(10, 'run quá nói lắp trước đội trưởng');
    }},
    {vn:'c5_nop_end', when:()=>Game.state.route==='nop'},
    {vn:'c5_end'},
]},

/* ========== CHƯƠNG 6 ========== */
{ no:6, title:'"HÒA GIẢI & HÓA ĐƠN"', stamp:'🧾 giờ tính sổ đã điểm',
  steps:[
    {vn:'c6_final'},
    {vn:'c6_heart_high', when:()=>Game.state.trust >= 60},
    {vn:'c6_heart_low',  when:()=>Game.state.trust < 60},
    {ending:true},
]},
],

/* ================================================= KẾT THÚC */
endings: {
  than: {
    cls:'end-than', emoji:KIDNEY, tag:'KẾT THÚC BÍ ẨN', title:'"THẬN ƠI THẬN"',
    text:`Điểm Rắc Rối của hai người cao đến mức... HỘI NHỮNG NGƯỜI MỘT THẬN tìm đến tận lều. "Chúng tôi theo dõi hai bạn từ lâu. Chưa ai gây rối có TÂM đến vậy. Mời hai bạn làm đại sứ thương hiệu."
    Và thế là {ten} cùng Lucien trở thành gương mặt quảng cáo cho chuỗi phòng khám "Thận Trọng Từng Bước". Quả thận năm xưa — theo lời đồn — đang sống tốt trong người một đại gia trà sữa, thỉnh thoảng còn gửi thiệp Tết về.
    Một tối nọ, {ten} bắt gặp Lucien đứng xoa xoa hông trái. "Còn đau hả?" — "Không. Anh đang tính sổ. Mất một quả thận... mà đổi được một người không bao giờ bỏ anh lại phía sau." Anh cười. "Lời to nhất đời anh đấy."
    Có những thứ mất đi để dạy ta biết thứ gì không được phép mất.`,
  },
  love: {
    cls:'end-love', emoji:'💕', tag:'KẾT THÚC TÌNH CẢM', title:'"NỢ ĐỜI NHAU"',
    text:`Dưới mái lều thủng lỗ chỗ — nơi ánh trăng rơi vào như tiền lẻ ai đánh rơi — Lucien đưa {ten} một tờ giấy viết tay: "HỢP ĐỒNG NỢ TRỌN ĐỜI. Bên A nợ bên B: một quả thận, 500 lần cằn nhằn, và một trái tim (đã qua sử dụng, nhưng còn tốt). Bên B nợ bên A: một chỗ dựa, mọi bữa sáng từ nay về sau, và toàn bộ phần đùi gà trong tương lai."
    Điều khoản cuối cùng in đậm: "Hai khoản nợ KHÔNG được phép triệt tiêu — để hai bên buộc phải ở cạnh nhau mà đòi nợ nhau... vô thời hạn."
    Lần đầu tiên trong đời, {ten} đọc kỹ từng chữ. Rồi ký. Chữ ký thứ 19 của cô — và là chữ ký duy nhất cô biết chắc mình sẽ không bao giờ hối hận.
    Nợ tiền rồi sẽ trả xong. Nhưng có những món nợ người ta cố tình không trả hết — vì trả hết rồi... lấy cớ gì để ở bên nhau?`,
  },
  hero: {
    cls:'end-hero', emoji:'👮', tag:'KẾT THÚC CÔNG LÝ', title:'"NGƯỜI HÙNG BẤT ĐẮC DĨ"',
    text:`Giám đốc Đại Phát bị bắt cùng 5 tỷ quỹ đen. Báo chí giật tít: "NỮ THÁM TỬ TAY NGANG PHÁ ÁN THẾ KỶ (từng khai sai giấy tờ 17 lần)". {ten} thành cố vấn đội trọng án — "Linh Cảm Ngẫu Nhiên" được ghi hẳn vào biên chế là kỹ năng đặc biệt.
    Lucien được minh oan, mở quán cà phê "NỢ CŨ" ngay cạnh đồn. Mỗi sáng anh pha sẵn một ly đặt trên bàn cố vấn {ten}, hóa đơn ghi: "Trả dần một món nợ khác — khoản này xin phép trả... cả đời."
    Có lần phóng viên hỏi: "Vụ án nào khó nhất sự nghiệp của chị?" Cô nhìn sang quán cà phê bên kia đường, cười: "Vụ tìm ra một người tử tế trốn trong cái mác 'chuyên gia tài chính phi truyền thống'. Phá án đó tốn của tôi một quả thận của người khác... và nguyên một trái tim của mình."`,
  },
  rich: {
    cls:'end-rich', emoji:'💰', tag:'KẾT THÚC GIÀU SANG (?)', title:'"TỶ PHÚ PHI PHÁP"',
    text:`Với số tiền "khó giải thích nguồn gốc", {ten} và Lucien mở chuỗi trà sữa "TIỆM NƯỚC HAI TA" — tuần nào cũng đổi tên, đổi địa điểm, đổi biển hiệu, vì lý do "phong thủy" (và vì lệnh truy nã). Khách ruột: Y tá Hồng (50 ly/tuần), Bà Tư (đến thu tiền bảo kê nhưng ở lại vì trà ngon), và một khách bí ẩn đội mũ kê-pi luôn ngồi bàn góc, không bao giờ bắt ai...
    Một tối nọ, đếm tiền xong, Lucien hỏi: "Giàu rồi đấy. Em còn thiếu gì nữa không?"
    {ten} nhìn quanh: tiệm trà chật ních tiếng cười, gã đồng bọn một-quả-thận đang lau ly, và lệnh truy nã dán ngoài cột điện có hình hai đứa cười toe toét. Lần đầu tiên kể từ ngày thất nghiệp, cô trả lời không cần suy nghĩ: "Không. Đủ rồi."
    Hóa ra "đủ" chưa bao giờ là một con số trong tài khoản. "Đủ" là có một người cùng mình chạy trốn... khắp thế gian.`,
  },
},

computeEnding(){
  const s = Game.state;
  if(s.dr >= 75) return 'than';
  if(s.trust >= 70) return 'love';
  if(s.route === 'nop') return 'hero';
  return 'rich';
},
};
