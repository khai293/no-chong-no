/* ============ NỢ CHỒNG NỢ — PHẦN MỞ RỘNG: 8 chương mới ============
   ch4  Mẹ Ơi, Đừng Xem Thời Sự   — thăm mẹ bệnh ở Bệnh Viện Số 7
   ch6  Đại Chiến Chủ Nợ          — hội chủ nợ + đêm nhạc karaoke
   ch7  Quả Thận Cuối Cùng        — Lucien lén đi bán nốt quả thận
   ch9  Tập Làm Người Lương Thiện — mở quán + mẹ xuất viện
   ch10-12 Arc "HÃY NHẮM MẮT KHI ANH ĐẾN" — GS. Bạc Cận Ngôn & Quý Ngài Hoa Hồng
   ch13 Ngày Không Nợ Nần         — hẹn hò
================================================================== */

/* ---------------- CẢNH THOẠI MỚI ---------------- */
Object.assign(STORY.scenes, {

/* ========== CH4: MẸ ƠI, ĐỪNG XEM THỜI SỰ ========== */
m1_call: [
  {bg:'hideout'}, {music:'comedy'},
  {who:'sys', text:'Sáng sớm ở lều xiếc. Điện thoại của {ten} reo — số lạ. Nhạc chuông là bài "Tiền Ơi Về Đi" cài từ hồi còn hy vọng.'},
  {who:'yta', expr:'happy', text:'Chị {ten} hả~? Em nè~ Y tá Hồng đáng yêu nè~ Báo tin nè: có bà MAI mới nhập viện khoa tim mạch, khai người thân là chị đó~'},
  {who:'chau', expr:'shock', text:'MẸ TÔI?! Mẹ tôi nhập viện mà cô báo tin bằng giọng đọc quảng cáo trà sữa vậy hả?!', pfx:true},
  {who:'yta', expr:'normal', text:'Bà ổn rồi nha, nằm theo dõi thôi~ Mà bà dặn em: "đừng báo con bé, nó lo". Nên em... gọi cho chị liền nè~ Em phản bội có chọn lọc lắm~'},
  {who:'chau', expr:'worried', text:'Lần đầu tiên tôi biết ơn tính nhiều chuyện của cô đó Hồng.'},
  {who:'khai', expr:'normal', text:'Đi. Anh đi cùng.'},
  {who:'chau', expr:'shock', text:'KHOAN! Mẹ tôi mà thấy tôi dẫn đàn ông về là bà suy diễn nhanh hơn tốc độ ánh sáng đó! Bà từng đặt tên cho cháu ngoại chỉ vì tôi khen anh giao gas lễ phép!'},
  {who:'khai', expr:'smug', text:'Yên tâm. Anh có chứng chỉ diễn xuất. Tự cấp, nhưng có mộc đỏ.'},
  {do:()=>{ Game.state.flags.khaiFollow = true; }},
],
m1_mom: [
  {bg:'hospital'}, {music:'love'},
  {who:'me', expr:'shock', text:'Ơ con gái?! Sao con biết mẹ ở đây? Mẹ dặn con Hồng giấu kỹ rồi mà!'},
  {who:'chau', expr:'cry', text:'MẸ! Mẹ đau tim mà còn bày đặt giấu con?!'},
  {who:'me', expr:'normal', text:'Có gì đâu mà rối. Tim mẹ chỉ... hơi mỏi thôi. Máy chạy lâu năm, xuống cấp là đúng quy trình. Bảo hành hết từ đời nào rồi.'},
  {who:'chau', expr:'angry', text:'Thế BỐ đâu?! Thằng Tí đâu?! Cả nhà không ai báo con một tiếng!'},
  {who:'me', expr:'smug', text:'Mẹ giấu CẢ NHÀ chứ riêng gì con. Bố mày đang đi xa, biết tin lại tất tả bỏ hết mọi thứ chạy về thì khổ. Còn thằng Tí sắp thi — nó mà biết là mượn cớ nghỉ học liền, nó chỉ chờ có thế thôi.'},
  {who:'chau', expr:'dizzy', text:'Mẹ nằm giường bệnh mà điều phối thông tin cả nhà như trung tâm tình báo vậy...'},
  {who:'me', expr:'normal', text:'Làm mẹ ngần ấy năm — không có nghiệp vụ thì sao sống nổi với ba bố con nhà mày.'},
  {who:'me', expr:'think', text:'Khoan đã. Cậu nào đứng nép sau cánh cửa kia? Cao ráo, sáng sủa... Con ơi, đây là...?'},
  {choice:[
    {ic:'😇', label:'"Bạn... làm ăn chung của con ạ."', trust:3, reply:[
      {who:'me', expr:'smug', text:'"Làm ăn chung" mà đứng canh cửa phòng bệnh cho con gái mẹ kìa. Mẹ già chứ MẮT mẹ chưa già nha con.'},
      {who:'chau', expr:'worried', text:'(Mẹ ơi, "canh cửa" đúng là chuyên môn của ảnh, nhưng không phải theo nghĩa mẹ nghĩ đâu...)'}]},
    {ic:'😈', label:'"Chồng sắp cưới của con đó mẹ!"', dr:5, why:'nói dối mẹ ruột không chớp mắt', reply:[
      {who:'khai', expr:'shock', text:'?!?!', pfx:true},
      {who:'me', expr:'sparkle', text:'TRỜI ƠI BIẾT NGAY MÀ!! Để mẹ gọi cho dì Bảy báo tin—'},
      {who:'chau', expr:'dizzy', text:'ĐỪNG!! DÌ BẢY LÀ LOA PHƯỜNG SỐNG MẸ ƠI!! Con đùa!! ĐÙA!!'},
      {who:'me', expr:'gloom', text:'Đùa về hạnh phúc của mẹ. Được. Tim mẹ vừa mỏi thêm 5%.'}]},
    {ic:'🤡', label:'"Nhân viên giao cơm ạ. Giao 24/7. Tận giường."', reply:[
      {who:'khai', expr:'gloom', text:'(Từ chuyên gia tài chính thành shipper cơm trong một nốt nhạc.)'},
      {who:'me', expr:'think', text:'Giao cơm? Tay trắng trơn? Cơm đâu?'},
      {who:'khai', expr:'worried', text:'Dạ... cơm đang... trên đường ạ. Cháu là shipper đi trước tiền trạm.'},
      {who:'me', expr:'laugh', text:'Tiền trạm! Nghề giao cơm giờ chuyên nghiệp dữ vậy hả! Ngồi đi cháu, kể bác nghe!'}]},
  ]},
  {who:'khai', expr:'normal', text:'Cháu chào bác. Cháu là Lucien ạ. Cháu đang cùng {ten} làm... một dự án tài chính.'},
  {who:'me', expr:'happy', text:'Lucien! Tên nghe như tài tử. Ngồi xuống đi cháu. Kể bác nghe hai đứa "làm dự án" kiểu gì nào.'},
  {who:'sys', text:'Chín mươi phút tiếp theo là vở kịch "dự án tài chính" ly kỳ nhất lịch sử khoa tim mạch — với 0% sự thật, 100% mồ hôi, và một bà mẹ gật gù không tin lấy một chữ.'},
  {who:'bacsi', expr:'normal', text:'Người nhà bà Mai đâu! Ký giúp tôi ít giấy tờ. Yên tâm — lần này tôi ĐÁNH DẤU SẴN chỗ cần ký. Danh tiếng của cô... tới khoa tim mạch rồi.'},
  {who:'chau', expr:'gloom', text:'Tôi có fan ở mọi khoa của bệnh viện này. Toàn fan phòng hờ.'},
],
m1_leave: [
  {bg:'hospital'}, {music:'sad'},
  {who:'sys', text:'Trên phiếu hẹn in đậm một dòng: "PHẪU THUẬT TIM NỘI SOI — DỰ KIẾN 200 TRIỆU". Con số nhảy múa trước mắt {ten} như bọn chủ nợ nhảy múa trước lều.'},
  {do:()=>{ Game.addMoney(-80, 'viện phí đợt đầu của mẹ'); }},
  {who:'me', expr:'normal', text:'Lucien nè. Lại đây bác dặn riêng cái này. Con gái bác đó... ngoài miệng mạnh mẽ vậy thôi, chứ tối nào gọi điện cho mẹ xong nó cũng khóc. Từ hồi mất việc.'},
  {who:'khai', expr:'gloom', text:'...Cháu biết ạ. À không— cháu... đoán vậy ạ.'},
  {who:'me', expr:'normal', text:'Bác không biết hai đứa làm "dự án" gì. Nhưng nhìn ánh mắt cháu nhìn nó, bác yên tâm được một nửa. Nửa còn lại... cháu tự chứng minh nghen.'},
  {who:'khai', expr:'normal', text:'Cháu hứa với bác. Bằng cả quả thận còn lại của cháu.'},
  {who:'me', expr:'laugh', text:'Cháu này nói chuyện duyên ghê! Ai đời thề bằng thận!'},
  {who:'sys', text:'(Bác ơi. Đó không phải phép ẩn dụ đâu ạ. Đó là tài sản thật sự cuối cùng của cậu ấy đó ạ.)'},
  {who:'me', expr:'normal', text:'Khi nào rảnh thì ghé nhà ăn cơm. Nhưng chuẩn bị tinh thần khi gặp bố con bé nha cháu. Ông ấy hiền khô à... mỗi tội thương con gái nhất nhà.'},
  {who:'khai', expr:'worried', text:'D-dạ. Cháu sẽ... tập trả lời phỏng vấn trước ạ.'},
  {who:'me', expr:'gloom', text:'Tập kỹ vào. Ổng chỉ hỏi đúng một câu thôi: "Cậu định để con gái tôi khổ tới bao giờ?"'},
  {who:'khai', expr:'dizzy', text:'(Ghi chú sinh tồn: câu này không trả lời được bằng thống kê. Phải trả lời bằng cả đời.)'},
  {who:'me', expr:'normal', text:'Con gái. Cầm lấy. 500 nghìn — tiền mẹ giấu trong hộp dầu gió. Đừng cãi. Mẹ già rồi, cãi thua là mệt tim, con muốn mẹ mệt tim không?'},
  {who:'chau', expr:'cry', text:'Mẹ dùng bệnh án để THẮNG CÃI NHAU?! ...Mẹ giữ mà mua cháo! Con sắp giàu rồi! Con có rất nhiều dự án!'},
  {who:'me', expr:'smug', text:'Ừ. Mẹ tin. Như mẹ đã từng tin 17 tờ đơn xin việc của con đều "sắp được nhận".'},
  {who:'chau', expr:'gloom', text:'Nhà này ai cũng có khiếu đâm chọt hết vậy...'},
  {who:'khai', expr:'think', text:'(200 triệu. Một tháng. ...Được. Sẽ có cách. Kiểu gì cũng phải có cách.)'},
  {do:()=>{ Game.state.flags.khaiFollow = false; }},
],

/* ========== CH6: ĐẠI CHIẾN CHỦ NỢ ========== */
n1_debtors: [
  {bg:'hideout'}, {music:'comedy'}, {fx:'shake'},
  {who:'chuno', expr:'angry', text:'LUCIEN!!! {ten}!!! HỘI CHỦ NỢ LIÊN PHƯỜNG ghé thăm hỏi sức khỏe nèèè!!!', pfx:true},
  {who:'khai', expr:'gloom', text:'Sáu Lãi. Trùm gom nợ cả khu này. Nghe đồn hắn đòi nợ bằng cách... hát bolero trước cửa nhà con nợ. 24/7. Cho tới khi trả.'},
  {who:'chau', expr:'shock', text:'ĐÒI NỢ BẰNG BOLERO?!'},
  {who:'chuno', expr:'smug', text:'Chuẩn. Loa kẹo kéo sạc đầy 3 cục pin. Playlist 400 bài toàn nhạc thất tình. Ngày thứ ba là hàng xóm sẽ GÓP TIỀN trả nợ giùm hai người. Hiệu quả 100%.'},
  {who:'chuno', expr:'normal', text:'Vào việc: tổng nợ gốc lẫn lãi của hai người, cộng khoản viện phí ký nợ bệnh viện — tròn 350 triệu. Hạn 3 ngày. Không trả — ta dựng sân khấu.'},
  {choice:[
    {ic:'😇', label:'"Anh Sáu cho tụi em khất thêm..."', reply:[
      {who:'chuno', expr:'normal', text:'Khất hả? Được. Nhưng lãi khất tính bằng YÊU CẦU BÀI HÁT. Mỗi ngày khất, ta hát tặng một bài. Chọn đi: "Đắp Mộ Cuộc Tình" hay "Nợ Anh Một Đời"?'},
      {who:'chau', expr:'dizzy', text:'Cả hai lựa chọn đều là hình phạt mà?!'}]},
    {ic:'😈', label:'"Nợ 350 mà đòi... khoan, anh học toán ở đâu vậy?"', dr:5, why:'cà khịa trùm đòi nợ', reply:[
      {who:'chuno', expr:'laugh', text:'Ở CHỢ ĐEN. Toán ở đó dạy bằng ví dụ thực tế, học phí trả bằng máu và nước mắt. Chủ yếu nước mắt.'},
      {who:'khai', expr:'gloom', text:'Em ơi đừng hỏi thêm về giáo dục của người ta nữa, tình hình đang căng.'}]},
    {ic:'🤡', label:'"Giọng anh trầm ấm vậy... đi hát chuyên nghiệp chưa?"', trust:3, reply:[
      {who:'chuno', expr:'shock', text:'...Cô là người ĐẦU TIÊN khen giọng ta thay vì bịt tai. Ta... ta cần một phút.'},
      {who:'chau', expr:'normal', text:'(Ghi chú trinh thám: điểm yếu của trùm đòi nợ = một lời khen chân thành.)'}]},
  ]},
  {who:'batu', expr:'angry', text:'KHOAN ĐÃ! Sáu Lãi, ai cho mày dựng loa trong khu của tao?!'},
  {who:'batu', expr:'think', text:'...Mà khoan. Loa. Sân khấu. Đám đông. Ý TƯỞNG LỚN ĐÂY RỒI. ĐÊM NHẠC CHỢ ĐEN — bán vé, con {ten} hát chính, trả nợ bằng doanh thu! Karaoke Bí Mật, tối nay! Tao lấy 70%!'},
  {who:'chau', expr:'shock', text:'Sao bà lấy 70%?!'},
  {who:'batu', expr:'evil', text:'30% là dành cho đứa vừa hỏi câu ngu đó.'},
  {who:'khai', expr:'normal', text:'Chốt kèo. {ten}, em hát chính. Anh nghe em ngân nga lúc rửa bát rồi — giọng em là loại vũ khí... dùng đúng chỗ sẽ hái ra tiền.'},
  {who:'chau', expr:'worried', text:'Còn dùng sai chỗ?'},
  {who:'khai', expr:'gloom', text:'Thì như tối hôm qua. Con chuột hàng xóm dọn nhà đi rồi.'},
],
n1_after: [
  {bg:'market'}, {music:'comedy'},
  {who:'chuno', expr:'cry', text:'HUHUHU... Bài "Kiếp Nợ Nần" đó... là CÂU CHUYỆN ĐỜI TA... Ta đi đòi nợ dạo... vì năm xưa ta từng BỊ NỢ... đứa bạn thân ôm cả dây hụi bỏ trốn...', pfx:true},
  {who:'chau', expr:'worried', text:'Anh Sáu... anh khóc ướt hết sổ nợ rồi kìa... chữ nhòe hết rồi...'},
  {who:'chuno', expr:'shock', text:'NHÒE THẬT! Thôi xong, trang này ghi nợ của cả tổ dân phố 4!'},
  {who:'chuno', expr:'normal', text:'...Quyết định. HOÃN NỢ VÔ THỜI HẠN cho hai người. Đổi lại: mỗi tháng hát cho Hội Chủ Nợ nghe một đêm. Bọn ta đi đòi nợ quanh năm... có ai mời bọn ta đi nghe nhạc bao giờ đâu.'},
  {who:'khai', expr:'dizzy', text:'Hội đòi nợ thuê cô đơn. Thành phố này chưa bao giờ ngừng làm anh bất ngờ.'},
  {who:'batu', expr:'smug', text:'Thấy chưa? Ở chợ đen, thứ đáng tiền nhất không phải vàng — là CẢM XÚC. Vàng tao còn cân ký được, chứ cảm xúc là vô giá. Nên tao thu 70%.'},
  {who:'chau', expr:'dizzy', text:'Logic đó sai ở đâu đó nhưng tôi không đủ tiền để cãi.'},
  {who:'khai', expr:'normal', text:'Mà này. Lúc em hát câu "dù trắng tay vẫn còn một người ngồi cạnh"... em nhìn anh đúng không?'},
  {who:'chau', expr:'blush', text:'Nhìn... đèn EXIT phía sau anh! Đèn đẹp mà!'},
  {who:'khai', expr:'smug', text:'Ừ. Đèn. Lần đầu anh thấy cái đèn EXIT biết đỏ mặt.'},
  {do:()=>{ Game.addTrust(5); }},
],

/* ========== CH7: QUẢ THẬN CUỐI CÙNG ========== */
k2_notice: [
  {bg:'hideout'}, {music:'sad'},
  {who:'sys', text:'Sáng hôm sau. Lều vắng tanh. Trên thùng sơn: một hộp cơm gà còn ấm và một tờ giấy gấp đôi.'},
  {who:'sys', text:'"Anh đi xử lý dự án tài chính cuối cùng. Nếu trưa không thấy anh về thì... đừng đi tìm. Ăn sáng đi. Cơm gà đó. Lần này anh mua NGUYÊN HAI ĐÙI. — L."'},
  {who:'chau', expr:'shock', text:'HAI ĐÙI?! Anh ta CHƯA BAO GIỜ chịu chi hai đùi!! Keo nhất quả đất mà!! CÓ CHUYỆN RỒI!!!', pfx:true},
  {who:'chau', expr:'angry', text:'IQ trinh thám ơi, ONLINE GẤP!! Manh mối, manh mối... Tờ rơi gì rơi dưới gầm thùng sơn đây?!'},
  {who:'sys', text:'"THẬN PHÁT LỘC — THU MUA GIÁ SỐC: 5 TỶ ĐỒNG/QUẢ! Tiền trao tận tay, mổ tận giường. Cơ hội ĐỔI ĐỜI chỉ đến một lần trong đời!"'},
  {who:'chau', expr:'shock', text:'NĂM TỶ?! Một quả thận giá NĂM TỶ?!', pfx:true},
  {who:'chau', expr:'cry', text:'ĐỒ NGỐC!!! Anh ta thấy con số 5 TỶ là hai mắt sáng rực rồi đi bán nốt quả thận còn lại chứ gì!!! Chuyên gia tài chính cái kiểu gì mà tin quảng cáo trên tờ rơi vậy trời!!!'},
  {who:'chau', expr:'angry', text:'Khoan. Góc tờ rơi có dấu son hình trái tim... và mùi trà sữa thoang thoảng...'},
  {who:'chau', expr:'angry', text:'LẠI. LÀ. CÔ. TA.'},
],
k2_yta: [
  {bg:'hospital'}, {music:'tense'},
  {who:'yta', expr:'worried', text:'Ơ chị {ten}~ Sao mặt chị như muốn nuốt sống em vậy~ Em vừa lau sàn đó, chị té là em không đền đâu nha~'},
  {who:'chau', expr:'angry', text:'Tờ rơi "Thận Phát Lộc". Dấu son hình tim của cô. Lucien đâu. Nói. NGAY.'},
  {who:'yta', expr:'normal', text:'Ơ em chỉ phát tờ rơi kiếm thêm thôi mà~ Năm nghìn một tờ~ Ai cầm tờ nào em đâu có nhớ~'},
  {who:'chau', expr:'think', text:'(Mặt cô ta sắp chuyển chế độ "giả trân". Soi. Kỹ. Vào.)'},
],
k2_yta2: [
  {who:'yta', expr:'cry', text:'DẠ EM KHAI!! Sáng nay anh Lucien hỏi em "chỗ nào mua thận giá cao nhất"!! Em chỉ anh ấy tới phòng khám sau tiệm GẤU BÔNG "SẠCH"!! NHƯNG MÀ CHỊ ƠI—'},
  {who:'yta', expr:'worried', text:'Chỗ đó KHÔNG PHẢI phòng khám thật!! Tụi nó là ĐA CẤP NỘI TẠNG!! Thu thận xong còn bắt người ta ở lại làm TUYẾN DƯỚI, đi tuyển thận người khác!!'},
  {who:'chau', expr:'shock', text:'ĐA CẤP TỚI MỨC ĐÓ RỒI HẢ?!'},
  {who:'yta', expr:'cry', text:'Em phát tờ rơi chứ em có bao giờ chỉ NGƯỜI QUEN tới đó đâu... ủa mà sáng nay em chỉ rồi... EM XIN LỖIIIII!! Chị chạy lẹ đi!! Em gọi bác sĩ Mập hỗ trợ!!'},
  {who:'chau', expr:'angry', text:'CHẠY!!'},
],
k2_confront: [
  {bg:'night'}, {music:'sad'},
  {who:'khai', expr:'shock', text:'{ten}?! Sao em tìm ra chỗ này—'},
  {who:'chau', expr:'cry', text:'HAI ĐÙI GÀ!! Anh lộ bài từ HAI ĐÙI GÀ đó đồ ngốc!!! Người keo kiệt chỉ hào phóng đúng một lần trong đời — là lúc định làm chuyện DẠI DỘT!!! XUỐNG KHỎI CÁI BÀN MỔ ĐÓ NGAY!!!', pfx:true},
  {who:'khai', expr:'gloom', text:'Anh tính kỹ rồi. Tờ rơi ghi NĂM TỶ một quả. Năm tỷ, {ten}! Trả sạch nợ, lo được viện phí cho bác, còn dư làm lại từ đầu. Còn anh... người ta sống được với một quả thận mà. Đáng chứ.'},
  {who:'chau', expr:'angry', text:'TỪ TỪ TÍNH?! Anh nghe lại câu anh vừa nói đi! KHÔNG AI "TỪ TỪ TÍNH" VỚI 0 QUẢ THẬN HẾT!!'},
  {who:'chau', expr:'cry', text:'Anh từng nói với tôi: mất người tin mình thì sống như trả góp từng ngày. Vậy anh nghĩ tôi sẽ sống kiểu gì... nếu không còn anh?!'},
  {who:'chau', expr:'cry', text:'Tôi cần mẹ. Nhưng tôi cũng cần ANH. Anh chưa học phép CỘNG hả?! Người ta có quyền cần CẢ HAI!!'},
  {who:'khai', expr:'shock', text:'...'},
  {who:'khai', expr:'gloom', text:'Xin lỗi. Anh... quen tự giải quyết một mình rồi. Hai năm qua có ai đâu mà bàn. Não anh chưa cập nhật bản vá "có đồng bọn".'},
  {who:'chau', expr:'normal', text:'Thì cập nhật NGAY đi. Luật mới của lều: từ nay mọi quyết định ngu — phải NGU CHUNG. Rõ chưa?'},
  {who:'khai', expr:'normal', text:'...Rõ. Ngu chung. Luật đẹp nhất anh từng ký.'},
  {who:'bacsi', expr:'normal', text:'Rồi rồi, cảm động đủ chưa? Tôi rửa tay 47 LẦN để câu giờ chờ cô tới đó. Nước xà phòng của tụi nó sắp hết rồi kìa.'},
  {who:'chau', expr:'shock', text:'BÁC SĨ MẬP?! Bác là "bác sĩ phẫu thuật" của ổ đa cấp này?!'},
  {who:'bacsi', expr:'gloom', text:'Tôi TRÀ TRỘN, cô ơi. Gom bằng chứng cho công an suốt ba tháng nay. Còn cậu kia — NĂM TỶ? Cậu tin số đó thật à?! Đó là MỒI CÂU của tụi đa cấp! Mổ xong tụi nó dúi cho vài chục triệu là cùng, rồi bắt cậu ở lại làm TUYẾN DƯỚI đi lừa người khác. Cậu là chuyên gia tài chính mà mắc bẫy con số trên trời...'},
  {who:'khai', expr:'dizzy', text:'Một quả thận... suýt đổi bằng đúng cái bẫy mà cả đời anh chuyên đi giăng cho người khác. Nghiệp quật đau thật đấy.'},
  {who:'batu', expr:'normal', text:'NGHE HẾT RỒI NHA MẤY ĐỨA. Trời ơi, hai đứa bây diễn cảm động hơn phim truyền hình 8 giờ tối.'},
  {who:'batu', expr:'smug', text:'Nè. 200 triệu. Cho MƯỢN — không lãi. Lo cho bà chị sui... à nhầm, bà mẹ, xong xuôi thì trả tao bằng 20 đêm nhạc. Cấm cãi.'},
  {who:'chau', expr:'cry', text:'Bà Tư... sao tự nhiên bà tốt vậy...'},
  {who:'batu', expr:'evil', text:'ĐỪNG HIỂU LẦM! Tao đầu tư vào CẢM XÚC thôi! Nghe chưa! Còn khóc nữa là tao TÍNH LÃI đó!!'},
  {who:'sys', text:'Ca phẫu thuật của bà Mai được đặt lịch ngay tối hôm đó. Còn hồ sơ dày cộp của Bác sĩ Mập về "Thận Phát Lộc" — sáng hôm sau đã nằm ngay ngắn trên bàn Đội trưởng Lâm.'},
  {do:()=>{ Game.addTrust(20); Game.addDR(5, 'phá cửa tiệm gấu bông (lần 2 trong tháng)'); Game.state.flags.momSurgery = true; }},
],
k2_home: [
  {bg:'hideout'}, {music:'love'},
  {who:'khai', expr:'normal', text:'Này. Lúc nãy em nói... em cần anh.'},
  {who:'chau', expr:'blush', text:'Tôi nói cần "NHÂN LỰC". Lều dột, cần người trám mái. Đừng có tự tin.'},
  {who:'khai', expr:'smug', text:'Ừ. Nhân lực. Nhân lực này xin thông báo: từ nay không tự ý biến mất nữa. Có mất gì thì mất... nhưng không mất mặt khỏi cái lều này.'},
  {who:'chau', expr:'normal', text:'Ghi vào hợp đồng đó. Tôi giữ bản gốc.'},
  {who:'sys', text:'Đêm đó, lần đầu tiên sau hai năm, Lucien ngủ mà không mơ thấy mình đứng một mình giữa tòa nhà ngân hàng rỗng tuếch. Trong mơ, có tiếng ai đó cằn nhằn về mái lều dột. Anh mỉm cười cả trong giấc ngủ.'},
],

/* ========== CH9: TẬP LÀM NGƯỜI LƯƠNG THIỆN ========== */
l1_shop: [
  {bg:'hideout'}, {music:'comedy'},
  {who:'sys', text:'Sau cơn bão mang tên Ngân hàng Đại Phát, mẹ đã mổ xong và đang hồi phục thần tốc (bác sĩ bảo: "tim bà khỏe hơn tim tôi"). Hai kẻ nợ quyết định thử một điều chưa từng làm: SỐNG LƯƠNG THIỆN.'},
  {who:'khai', expr:'happy', text:'Khai trương: "CÀ PHÊ NỢ CŨ 0.5"! Gọi là chi nhánh 0.5 vì... chưa đủ tiền làm chi nhánh 1.'},
  {who:'chau', expr:'sparkle', text:'Menu em viết xong rồi nè! "Cà phê đen: 15k. Cà phê sữa: 18k. Cà phê pha bằng nước mắt khởi nghiệp: miễn phí — tự phục vụ, nguồn nguyên liệu dồi dào."'},
  {who:'khai', expr:'normal', text:'Muốn bán được hàng thì hình ảnh phải chuyên nghiệp. Đi thay đồ. Hôm nay chúng ta là BARISTA.'},
],
l1_day: [
  {bg:'hideout'}, {music:'comedy'},
  {who:'sys', text:'Khách hàng #1: Anh Sáu Lãi — gọi một đen đá, ngồi bốn tiếng, kể chuyện tình ba tập. Doanh thu: 15 nghìn.'},
  {who:'sys', text:'Khách hàng #2: Y tá Hồng — hỏi có trà sữa không. Không có. Đi về. Để lại một tia hy vọng và mang nó đi luôn.'},
  {who:'sys', text:'Khách hàng #3: chó Bông — không gọi gì, gặm mất một chân ghế, để lại một bãi... thôi bỏ qua chi tiết này.'},
  {who:'khai', expr:'gloom', text:'Tổng kết ngày đầu: doanh thu 15 nghìn. Chi phí: 20 TRIỆU. Gồm tiền ghế, tiền hàng xóm khiếu nại tiếng loa, và "phí mặt bằng tự phát" của Bà Tư.'},
  {do:()=>{ Game.addMoney(-20, 'khởi nghiệp lương thiện ngày thứ nhất'); }},
  {who:'chau', expr:'gloom', text:'Hóa ra sống lương thiện... LỖ dữ vậy hả anh?'},
  {who:'khai', expr:'laugh', text:'Giờ em hiểu vì sao anh chọn nghề "phi truyền thống" rồi ha. Truyền thống đắt lắm.'},
],
l1_mom: [
  {bg:'sunset'}, {music:'love'},
  {who:'me', expr:'normal', text:'Quán xá gì mà tuềnh toàng vậy hai đứa? Cái biển hiệu viết bằng bút xóa hả?'},
  {who:'chau', expr:'shock', text:'MẸ?! Mẹ mới mổ xong mà đi tận đây?! Mà... SAO MẸ BIẾT CHỖ NÀY?!', pfx:true},
  {who:'me', expr:'smug', text:'Mẹ biết từ lâu rồi. Từ cái hôm thời sự chiếu tin "CƯỚP NGÂN HÀNG HỤT — HAI NGHI PHẠM CÕNG NHAU BỎ CHẠY". Con che mặt nhưng đôi dép thì không che. Đôi dép đó MẸ MUA.'},
  {who:'chau', expr:'dizzy', text:'Vậy tờ "giấy cam kết không xem thời sự" con ký ở bệnh viện...'},
  {who:'me', expr:'normal', text:'Mẹ ký xong xem tiếp chứ sao. Mẹ già chứ mẹ có ngoan đâu con.'},
  {who:'me', expr:'normal', text:'Còn cậu. "Chuyên gia tài chính" hả? Bác biết hết rồi. Biết cả... vụ cái thận. Con Hồng kể. Nó kể có nhạc nền luôn.'},
  {who:'khai', expr:'gloom', text:'Bác... cháu xin lỗi. Vì đã nói dối bác ngay lần đầu gặp mặt.'},
  {who:'me', expr:'normal', text:'Vụ nói dối — bác giận. Cái vụ dại dột tin quảng cáo 5 tỷ suýt mất quả thận — bác cũng giận. Nhưng lúc hai mắt sáng rực vì con số trên trời đó, trong đầu nó vẫn kịp tính chuyện lo viện phí cho một bà già KHÔNG PHẢI mẹ nó... thì bác giận không nổi. Cái đó người ta gọi là gì hả trời. À. Là NGHĨA. Chữ đó giờ hiếm lắm.'},
  {who:'me', expr:'gloom', text:'Nhà bác bốn người — ai cũng ôm khư khư một thứ: bố nó ôm cái đài cũ, thằng Tí ôm đống sách, còn con bé này thì ôm... nợ. Bác không cần thêm một đứa giàu. Bác chỉ cần thêm một đứa — lúc nhà cháy không chạy trước.'},
  {who:'khai', expr:'normal', text:'Cháu cam kết chạy sau cùng ạ. Có gì cháu cõng — cháu quen việc đó rồi.'},
  {who:'me', expr:'laugh', text:'Ừ, nghe đồn cõng giỏi lắm. Thời sự quay rõ nét lắm. Chạy cũng nhanh nữa.'},
  {who:'khai', expr:'worried', text:'Thế... bác trai cũng xem đoạn đó rồi ạ?'},
  {who:'me', expr:'smug', text:'Xem đi xem lại ba lần. Xong phán đúng một câu: "Chân cẳng tốt. Cõng không làm rơi. Làm rể được." Tiêu chí chọn rể của ổng đơn giản lắm.'},
  {who:'khai', expr:'dizzy', text:'Cháu vừa đậu vòng hồ sơ nhờ... tốc độ bỏ chạy?'},
  {who:'me', expr:'normal', text:'Còn thằng Tí thì đòi xin chữ ký "chị đại trên tivi" kìa. Nó khoe khắp xóm: "chị tao ngầu nhất phường".'},
  {who:'chau', expr:'worried', text:'Mẹ ơi con xin cả nhà đừng hâm mộ kỹ năng phạm tội của tụi con nữa...'},
  {who:'me', expr:'normal', text:'Thôi. Bán cho mẹ 3 ly cà phê. Tính tiền đầy đủ. Khởi nghiệp mà — đồng đầu tiên phải là đồng tử tế.'},
  {do:()=>{ Game.addTrust(8); Game.addMoney(1, 'mẹ mua mở hàng 3 ly (boa thêm)'); }},
],

/* ========== CH10: THIÊN TÀI GHÉ THÀNH PHỐ ========== */
b1_meet: [
  {bg:'night'}, {music:'mystery'},
  {who:'bac', expr:'normal', text:'Cô là {ten}. Cựu nhân viên văn phòng, hiện hành nghề "trinh thám tự phong", tỷ lệ phá án 100% trên tổng số... một vụ. Chỉ số linh cảm dao động phi chuẩn. Tôi cần cô.'},
  {who:'chau', expr:'shock', text:'Ơ?! Anh là AI mà đọc lý lịch tôi vanh vách như đọc menu vậy?!'},
  {who:'bac', expr:'smug', text:'Bạc Cận Ngôn. Giáo sư tâm lý học tội phạm. Thiên tài. Đây không phải tự tin — là sự thật đã qua kiểm định ở ba châu lục.'},
  {who:'khai', expr:'angry', text:'Thế TÔI là ai thì "giáo sư ba châu lục" không thèm phân tích à?'},
  {who:'bac', expr:'think', text:'Nam. Ngoài hai mươi. Một quả thận. Hai tiền án hụt. Và đang GHEN — cường độ 8.5 trên thang 10.'},
  {who:'khai', expr:'shock', text:'TÔI KHÔNG H— ...8.5 là còn đo thiếu đấy.', pfx:true},
  {who:'chau', expr:'dizzy', text:'Ít nhất anh thành thật.'},
  {who:'bac', expr:'normal', text:'Vào việc. "Quý Ngài Hoa Hồng" — kẻ chuyên đánh cắp THỨ QUÝ GIÁ NHẤT của nạn nhân, chỉ để lại một bông hồng đen và tấm thiệp ký tên hắn. Hắn vừa chuyển địa bàn tới thành phố này. Ba vụ trong hai đêm.'},
  {who:'bac', expr:'normal', text:'Trợ lý chính thức của tôi — Giản Dao — đang ở nước ngoài. Cô sẽ tạm thay. Lý do: hắn tính toán mọi biến số. Còn cô... là biến số HỖN LOẠN nhất thành phố này. Đó là lời khen cao cấp nhất kho từ vựng của tôi.'},
  {who:'khai', expr:'gloom', text:'Cả thành phố xếp hàng khen em theo kiểu xúc phạm. Anh bắt đầu quen rồi.'},
  {who:'bac', expr:'normal', text:'Thù lao: 100 triệu. Điều kiện: nghe lệnh tôi tuyệt đối.'},
  {who:'chau', expr:'sparkle', text:'MỘT TRĂM TRIỆU?! Nghe lệnh liền! Giáo sư nói nhảy là em hỏi nhảy kiểu gì luôn!'},
  {who:'khai', expr:'normal', text:'Tôi đi cùng. MIỄN PHÍ. Chức danh: trợ-lý-của-trợ-lý. Nhiệm vụ chính: đứng giữa hai người. Chốt, không thương lượng.'},
  {who:'bac', expr:'smug', text:'Ghen cường độ 9.0. Đã cập nhật hồ sơ.'},
],
b1_batu: [
  {bg:'market'},
  {who:'batu', expr:'cry', text:'CẶP KÍNH RÂM GỐC CỦA TAO!!! Cặp kính ĐẦU TIÊN tao bán được năm 18 tuổi, tao chuộc lại làm kỷ niệm!! Hắn không lấy tiền, không lấy vàng — lấy đúng CẶP KÍNH!!'},
  {who:'chau', expr:'think', text:'(Két sắt còn nguyên... hắn thật sự chỉ lấy "thứ quý giá nhất". Kẻ này nghiên cứu nạn nhân kỹ khủng khiếp.)'},
  {who:'bac', expr:'normal', text:'Hoa hồng đặt chính giữa bàn, cuống xoay 15 độ về hướng cửa. Hắn thuận tay trái, cao trên 1m75, và... có gu thẩm mỹ tốt một cách khó chịu.'},
  {who:'batu', expr:'shock', text:'Nhìn cái cuống hoa mà ra được chừng đó?! Cậu coi bói ở chợ nào, tao xin một quẻ!'},
],
b1_camdo: [
  {bg:'market'},
  {who:'camdo', expr:'cry', text:'Chiếc RĂNG VÀNG đầu tiên của lão... Không phải hàng cầm cố đâu. Là răng của BÀ NHÀ lão. Bà ấy dặn: "Ông giữ nó, coi như tôi vẫn cười với ông mỗi ngày." Hắn lấy đúng nó. Chỉ nó.'},
  {who:'chau', expr:'gloom', text:'Ông ơi... cháu xin lỗi vì từng nghĩ răng vàng là thứ buồn cười...'},
  {who:'bac', expr:'think', text:'Ba nạn nhân. Ba món đồ vô giá trị với thị trường, vô giá với chủ nhân. Hắn không trộm đồ — hắn SƯU TẦM khoảnh khắc người ta đánh mất điều quan trọng nhất. Hồ sơ tâm lý đang rõ dần.'},
],
b1_vinh: [
  {bg:'market'},
  {who:'vinh', expr:'worried', text:'Em hả? Đêm đó em... không thấy gì hết á... hehe... em chở khách xong về ngủ sớm á... hehehe...'},
  {who:'chau', expr:'normal', text:'(Ba tiếng "hehe" trong một câu. Chỉ số giả trân vượt ngưỡng đo. SOI.)'},
],
b1_vinh2: [
  {who:'vinh', expr:'cry', text:'DẠ EM THẤY!! Người mặc áo nhung tím ôm bó hoa đen lên xe em!! Giọng ổng nhẹ như ru, nghe xong em BUỒN NGỦ giữa ca luôn!! Ổng boa em HAI TRIỆU dặn "quên chuyến này đi"!!'},
  {who:'chau', expr:'dizzy', text:'Sao ai làm chuyện mờ ám cũng boa anh để quên vậy? Mặt anh giống cái USB dễ format lắm hả?'},
  {who:'vinh', expr:'shock', text:'Chị nói trúng nỗi đau của em rồi đó!! Ai cũng nói vậy!!'},
  {who:'vinh', expr:'normal', text:'À mà ổng xuống xe ở đầu PHỐ CHỢ ĐEN. Người thơm mùi nước hoa mắc tiền — loại mà em chở giám đốc mới ngửi thấy.'},
  {who:'sys', text:'📋 Hồ sơ Quý Ngài Hoa Hồng: thuận tay trái, cao trên 1m75, áo nhung tím, nước hoa hạng sang, giọng ru ngủ, hoạt động quanh chợ đen.'},
],
b1_end: [
  {bg:'hideout'}, {music:'mystery'},
  {who:'sys', text:'Nửa đêm. Dưới khe cửa lều — một tấm thiệp đen viền vàng, thơm mùi hoa hồng.'},
  {who:'bac', expr:'normal', text:'"Chào mừng nhập cuộc, cô trợ lý hỗn loạn. Đêm mai, ta sẽ đến lấy THỨ QUÝ GIÁ NHẤT của ngươi. — Q.N.H.H."'},
  {who:'chau', expr:'worried', text:'Thứ quý giá nhất của tôi?! Là gì?! Tôi CÓ gì đâu mà lấy?!'},
  {who:'khai', expr:'smug', text:'Yên tâm đi. Cái nồi anh giấu dưới gầm thùng sơn rồi. Khóa hai lớp.'},
  {who:'chau', expr:'worried', text:'Ừ... cái nồi... chắc là cái nồi... chắc vậy...'},
  {who:'bac', expr:'think', text:'Hắn không đùa. Và tôi e rằng thứ hắn nhắm tới... không cất được dưới gầm thùng sơn. Đêm nay, không ai rời nhau nửa bước.'},
  {who:'sys', text:'Giáo sư Bạc nhìn Lucien đúng 1.5 giây. Rồi nhìn {ten}. Rồi ghi gì đó vào sổ. Không ai dám hỏi.'},
],

/* ========== CH11: HÃY NHẮM MẮT KHI ANH ĐẾN ========== */
b2_kidnap: [
  {bg:'night'}, {music:'sad'},
  {who:'sys', text:'Sáng hôm sau. Cái nồi: còn nguyên. Tiền lẻ trong hộp: còn nguyên. Thùng sơn: còn nguyên. Chỉ thiếu... Lucien.'},
  {who:'chau', expr:'shock', text:'KHÔNG... KHÔNG PHẢI CHỨ...', pfx:true},
  {who:'sys', text:'Trên gối của anh: một bông hồng đen và tấm thiệp. "Ta đã lấy thứ quý giá nhất của ngươi. Yên tâm — hắn được đối xử tốt, dù hắn NÓI HƠI NHIỀU nên ta đã dán băng keo. — Q.N.H.H."'},
  {who:'chau', expr:'cry', text:'LUCIEN LÀ "THỨ QUÝ GIÁ NHẤT" CỦA TÔI?! AI CHO PHÉP HẮN KẾT LUẬN VẬY?! ...Mà sao tim tôi lại công nhận trước cả não vậy?!'},
  {who:'bac', expr:'normal', text:'Thú vị. Hắn đọc cô chính xác hơn tôi — tôi đoán là cái nồi, xác suất 78%. Tôi sẽ hạ điểm mình 0.5. Chuyện này 10 năm mới có một lần, cô nên ghi lại.'},
  {who:'chau', expr:'angry', text:'GHI GHI CÁI GÌ!! CỨU NGƯỜI TRƯỚC!! IQ với EQ của giáo sư — chọn MỘT đứa chạy ra đây làm việc giùm tôi!!'},
  {who:'bac', expr:'smug', text:'Bình tĩnh. Phân tích: hắn chưa từng làm hại "món đồ" nào. Hắn sưu tầm PHẢN ỨNG của người mất. Nghĩa là ngay lúc này, hắn đang chờ xem cô GÃY... hay cô CHIẾN.'},
  {who:'chau', expr:'normal', text:'...Vậy thì cho hắn xem vế sau. Bảng suy luận. BÀY. RA. Hắn có tay trong ở thành phố này — tìm ra kẻ đó, tìm ra Lucien.'},
],
b2_yta3: [
  {bg:'market'}, {music:'tense'},
  {who:'yta', expr:'shock', text:'Ơ... sao mọi người lại nhìn em... LẠI NỮA HẢ?!'},
  {who:'chau', expr:'angry', text:'LẦN THỨ BA RỒI HỒNG À. Cánh hoa hồng dính trân châu đường đen. Voucher "cảm ơn đã hợp tác" hạng kim cương. CÔ chỉ điểm cho hắn!'},
  {who:'yta', expr:'cry', text:'HẮN TRẢ CÔNG BẰNG VOUCHER TRÀ SỮA TRỌN ĐỜI!! TRỌN ĐỜI ĐÓ CHỊ HIỂU KHÔNG?! AI TỪ CHỐI ĐƯỢC CHỨ!!'},
  {who:'chau', expr:'dizzy', text:'Cô bán đứng tôi hai lần, bán thông tin một lần — toàn vì TRÀ SỮA. Cô là gián điệp rẻ nhất lịch sử tình báo.'},
  {who:'yta', expr:'worried', text:'Rẻ đâu mà rẻ! Voucher TRỌN ĐỜI mà!... Dạ. Hắn thuê em nghe ngóng về chị. Em kể vụ cái thận, vụ hai đùi gà... Hắn nghe xong gật gù: "Ra vậy. Thứ quý giá nhất của cô ta biết đi và biết cãi."'},
  {who:'yta', expr:'normal', text:'Hắn đang ở KARAOKE BÍ MẬT — bao trọn phòng VIP từ hôm qua, dặn chủ quán treo biển "sửa chữa". Chị... chị đi cứu anh Lucien đi. Voucher này em đưa chị nè, coi như... em xin lỗi. Một tháng thôi. Trọn đời thì em không nỡ.'},
],
b2_face: [
  {bg:'night'}, {music:'boss'},
  {who:'tahan', expr:'evil', text:'Chào mừng, cô trợ lý. Ngươi đến nhanh hơn tính toán của ta 20 phút. Biến số hỗn loạn... danh bất hư truyền.'},
  {who:'khai', expr:'angry', text:'{ten}!! Cẩn thận!! Hắn nguy hiểm lắm — hắn cho anh nghe kể chuyện đêm khuya bằng GIỌNG THÔI MIÊN, anh suýt khai hết chuyện hồi mẫu giáo rồi!!', pfx:true},
  {who:'tahan', expr:'normal', text:'Hắn nói nhiều đúng như hồ sơ. Ta đã tháo băng keo vì tò mò... và dán lại hai lần. Kỷ lục của bộ sưu tập.'},
  {who:'chau', expr:'angry', text:'Trả anh ấy đây. NGAY. Không thì tôi thề tôi sẽ làm điều mà không thiên tài nào tính trước được — vì chính tôi cũng không biết tôi sắp làm gì!'},
  {who:'tahan', expr:'smug', text:'Tuyệt. PHẢN ỨNG này — chính là thứ ta sưu tầm. Nhưng lần này ta muốn hơn thế. Ta muốn một VÁN ĐẤU.'},
  {who:'tahan', expr:'normal', text:'Luật chơi: ngươi — không phải giáo sư — đọc được MỘT khoảnh khắc thật trên gương mặt ta, ta trả "món đồ". Ta chưa thua ai ngoài Bạc Cận Ngôn. Nhưng biến số như ngươi... đáng để đặt cược.'},
  {who:'bac', expr:'think', text:'Cẩn thận. Mặt hắn là sa mạc cảm xúc — tôi từng mất ba ngày mới bắt được một cái chớp mắt thật. Nhưng sa mạc nào cũng có mưa. Của hắn... tôi đoán liên quan tới lý do hắn CHỈ TRỘM MÀ KHÔNG PHÁ. Tìm cơn mưa đó.'},
  {who:'khai', expr:'worried', text:'{ten}. Nghe anh. Đừng nhìn mắt hắn — nhìn CÁI HẮN NHÌN. Em dạy anh chiêu đó — lúc em bắt bài anh vụ hai đùi gà.'},
  {who:'chau', expr:'normal', text:'...Được. Chơi.'},
],

/* ========== CH12: TẠM BIỆT, THIÊN TÀI ========== */
b3_end: [
  {bg:'night'}, {music:'sad'},
  {who:'tahan', expr:'shock', text:'...Ngươi thấy.'},
  {who:'chau', expr:'normal', text:'Thấy. Suốt ván đấu, mỗi lần nhắc tới "thứ quý giá nhất", mắt ông không nhìn chiến lợi phẩm. Ông nhìn... cái hộp gỗ RỖNG trên bàn. Món đồ quý nhất của chính ông — là cái hộp không có gì bên trong.'},
  {who:'tahan', expr:'gloom', text:'...Hộp kỷ vật của mẹ ta. Thứ duy nhất ta mang theo vào trại mồ côi năm chín tuổi. Và cũng là thứ đầu tiên ta bị lấy mất ở đó. Từ ngày ấy ta muốn biết: người khác đánh mất "thứ quý nhất"... gương mặt họ trông thế nào. Có giống ta hôm đó không.'},
  {who:'chau', expr:'gloom', text:'Giống. Ai cũng giống nhau ở khoảnh khắc đó hết, ông ạ. Nhưng khác nhau ở chỗ này: có người... được TRẢ LẠI.'},
  {who:'chau', expr:'normal', text:'Cái hộp gỗ khắc chữ T.H. — ba mươi năm trước có người cầm cố ở Tiệm Cầm Đồ phố này, chưa ai chuộc. Tôi THẤY nó rồi. Kệ tầng ba. Ngay cạnh cái nồi 200 nghìn mà tôi suýt đổi bằng đồng hồ của Lucien.'},
  {who:'tahan', expr:'shock', text:'...Ngươi nói gì?'},
  {who:'khai', expr:'happy', text:'Cô ấy nói thật đó. Tin đi. Trí nhớ của cô ấy về MỌI THỨ trong tiệm cầm đồ là tuyệt đối — cô ấy từng định bán cả tôi ở đó mà.'},
  {who:'lam', expr:'normal', text:'Và tôi xác nhận: Ông Cầm Đồ vừa kiểm tra kho. Cái hộp vẫn ở đó. Ông ấy nói nguyên văn: "Đồ của người ta gửi, lão giữ 30 năm chưa mất món nào."'},
  {who:'tahan', expr:'cry', text:'...'},
  {who:'sys', text:'Quý Ngài Hoa Hồng — kẻ khiến cảnh sát ba thành phố mất ngủ — đứng giữa phòng karaoke đèn mờ, khóc không ra tiếng vì một cái hộp gỗ rỗng. Không ai nói gì. Cả thành phố hỗn loạn này, hóa ra, ai cũng từng mất một thứ gì đó.'},
  {who:'lam', expr:'normal', text:'Rồi. Quý Ngài. Mời về đồn. Trả lại huy hiệu của tôi trước — 25 năm của tôi đó. Còng số 8 đây có bọc nhung — đặc quyền cho tội phạm thanh lịch nhất sự nghiệp tôi.'},
  {who:'tahan', expr:'normal', text:'Ta đi. Nhưng trước hết —'},
  {who:'tahan', expr:'smug', text:'Hoa ĐEN là dành cho người ta muốn thử. Còn hoa ĐỎ này... cho người khiến ta thua tâm phục khẩu phục. Này cô gái — giữ chặt "món đồ" của ngươi. Loại đó, mất rồi... không tiệm cầm đồ nào chuộc lại được đâu.'},
  {who:'khai', expr:'angry', text:'LẦN CUỐI CÙNG: TÔI KHÔNG PHẢI ĐỒ VẬT.'},
  {who:'tahan', expr:'normal', text:'Mọi báu vật đều phủ nhận mình là báu vật. Chương một, sách của ta. Sắp xuất bản. Viết trong tù.'},
  {do:()=>{ Game.addMoney(100, 'thù lao trợ lý của thiên tài'); Game.addDR(-10, 'phá vụ án thế kỷ (mùa 2)'); Game.addTrust(10); }},
  {who:'bac', expr:'normal', text:'Cô trợ lý. Kết quả vượt dự đoán của tôi 4.2% — tôi sẽ ghi vào báo cáo là 4% cho đỡ đau lòng. Đây, 100 triệu. Và một thứ giá trị hơn: lời khuyên miễn phí. Tôi chưa từng cho ai. Kể cả sinh viên đóng học phí.'},
  {who:'bac', expr:'think', text:'Giản Dao của tôi từng hỏi: sao anh luôn nói "hãy nhắm mắt khi anh đến"? Vì với người mình bảo vệ, câu đó nghĩa là: bóng tối có ập đến, cứ nhắm mắt lại — khi mở ra, sẽ luôn thấy tôi đứng chắn phía trước.'},
  {who:'bac', expr:'smug', text:'Học đi, anh một-thận. Câu đó hợp với anh hơn tôi tưởng đấy. Tôi bay chuyến sớm. Đừng tiễn — cảm xúc chia tay làm giảm 3% hiệu suất làm việc của tôi.'},
  {who:'khai', expr:'normal', text:'...Này {ten}.'},
  {who:'chau', expr:'normal', text:'Hửm?'},
  {who:'khai', expr:'blush', text:'Sau này, nếu chuyện tồi tệ lại ập đến — chủ nợ, còng số 8, hay quý ngài hoa gì đó nữa — HÃY NHẮM MẮT KHI ANH ĐẾN. Phần còn lại, để anh.'},
  {who:'chau', expr:'blush', text:'...Câu đó anh mượn của giáo sư.'},
  {who:'khai', expr:'smug', text:'Mượn. Như mọi thứ khác trong đời anh. Nhưng cách TRẢ... là của riêng anh.'},
],

/* ========== CH13: NGÀY KHÔNG NỢ NẦN ========== */
d1_start: [
  {bg:'hideout'}, {music:'comedy'},
  {who:'chau', expr:'sparkle', text:'MỘT TRĂM TRIỆU! Trả bớt cho Bà Tư, gửi mẹ ít thuốc bổ... vẫn còn dư chút xíu!'},
  {who:'khai', expr:'normal', text:'Hôm nay khoan trả ai hết. Anh tuyên bố: HAI MƯƠI BỐN GIỜ KHÔNG NỢ NẦN. Không chủ nợ. Không vụ án. Không ai bị bắt cóc — anh kiểm tra lịch rồi, hôm nay không ai rảnh để bắt cóc anh.'},
  {who:'chau', expr:'shock', text:'Vậy làm gì?'},
  {who:'khai', expr:'blush', text:'Đi... chơi.'},
  {who:'chau', expr:'think', text:'"Đi chơi"... Từ này nghĩa là gì nhỉ? Nghe quen lắm mà lâu quá không dùng, não tôi lưu nó vào mục "từ cổ".'},
  {who:'khai', expr:'laugh', text:'Thì hôm nay khai quật. Đi. Bắt đầu từ nơi mọi thứ bắt đầu.'},
],
d1_cafe: [
  {bg:'cafe'}, {music:'love'},
  {who:'sys', text:'Quán cà phê cũ. Cái bàn cũ. Nhưng lần này: HAI ly. Đầy. Có topping. Nhân viên phục vụ nhìn hai người như nhìn cột mốc lịch sử.'},
  {who:'khai', expr:'smug', text:'Nhớ hồi đó không? Em ngồi đúng ghế này, nhìn nửa ly cà phê như nhìn người yêu cũ.'},
  {who:'chau', expr:'happy', text:'Giờ em nhìn ly cà phê ĐẦY này như nhìn... hóa đơn đã thanh toán. Cảm xúc mãnh liệt hơn nhiều. Anh không hiểu được đâu.'},
  {choice:[
    {ic:'😇', label:'"Cảm ơn anh. Vì hồi đó đã bắt chuyện."', trust:6, reply:[
      {who:'khai', expr:'blush', text:'Cảm ơn cái gã định lợi dụng em đi cướp ngân hàng á?'},
      {who:'chau', expr:'normal', text:'Ừ. Vì nếu hôm đó anh không ngồi xuống... giờ em vẫn đang uống nửa ly cà phê một mình. Cướp ngân hàng thì tệ. Nhưng một mình... còn tệ hơn.'},
      {who:'khai', expr:'normal', text:'...Câu đó anh sẽ nhớ tới già. Khoan— anh vừa quyết định: tới già CÙNG AI thì nhớ mới tiện.'}]},
    {ic:'😈', label:'"Lần này anh trả tiền đó. Đủ 100%."', trust:3, reply:[
      {who:'khai', expr:'shock', text:'Anh ĐỊNH trả mà! Từ đầu! Kế hoạch của anh luôn là trả!'},
      {who:'chau', expr:'smug', text:'Kế hoạch của anh còn từng nằm trên khăn giấy. Em cần cam kết bằng hành động.'},
      {who:'khai', expr:'laugh', text:'Được. Hành động đây — anh gọi thêm hai cái bánh. Ghi sổ... à không. TIỀN MẶT.'}]},
    {ic:'🤡', label:'"Mình cướp quán này làm kỷ niệm không?"', dr:5, why:'đùa dại nơi công cộng', reply:[
      {who:'khai', expr:'dizzy', text:'EM NÓI NHỎ THÔI!! Chú bảo vệ ngân hàng NGỒI BÀN BÊN KÌA KÌA!!'},
      {who:'baove', expr:'normal', text:'Bác nghe hết rồi. Ghế nhựa bác cũng mang theo rồi. Muốn thử lại không con?'},
      {who:'chau', expr:'worried', text:'DẠ TỤI CON ĐÙA MÀ BÁC!! UỐNG CÀ PHÊ VUI VẺ Ạ!!'}]},
  ]},
  {who:'khai', expr:'normal', text:'Giờ tới tiết mục chính. Karaoke. Anh đặt phòng rồi — lần này KHÔNG phải để giải cứu ai hết. Chỉ để hát. Dở cũng được. Càng dở càng vui.'},
],
d1_sunset: [
  {bg:'sunset'}, {music:'love'},
  {who:'sys', text:'Nóc lều xiếc. Hai ly trà sữa — mua bằng voucher Y tá Hồng gửi tặng kèm 47 tin nhắn xin lỗi. Mặt trời đang lặn như một đồng xu vàng rơi chậm... mà lần này, không ai buồn nhặt.'},
  {who:'chau', expr:'normal', text:'Này anh. Một năm trước, nếu có ai nói với em: "mày sẽ mất việc, cướp ngân hàng hụt, bán nhầm thận người ta, bị đòi nợ bằng bolero, làm trợ lý cho thiên tài, và đấu trí với trùm trộm quốc tế"... chắc em khóc ngất.'},
  {who:'khai', expr:'normal', text:'Còn bây giờ?'},
  {who:'chau', expr:'happy', text:'Bây giờ em nghĩ: đó là năm GIÀU nhất đời em. Chỉ là tiền thì... âm thôi.'},
  {who:'khai', expr:'blush', text:'{ten}. Có chuyện này anh nợ em lâu rồi. Hồi đó, anh chọn em vì hồ sơ — con tốt thí hoàn hảo cho phi vụ. Anh xin lỗi vì điều đó.'},
  {who:'khai', expr:'normal', text:'Nhưng anh cũng muốn cảm ơn cái phiên bản khốn nạn của anh năm đó. Vì trong tất cả những chuyện nó làm sai... nó CHỌN ĐÚNG một chuyện.'},
  {who:'chau', expr:'blush', text:'...'},
  {who:'khai', expr:'normal', text:'Nhắm mắt lại đi.'},
  {who:'chau', expr:'worried', text:'Hả?! Có chuyện tồi tệ gì sắp ập đến hả?! Chủ nợ hả?! CẢNH SÁT HẢ?!'},
  {who:'khai', expr:'laugh', text:'Không. Lần này là chuyện TỐT đang đến. Nhưng luật cũ vẫn còn hiệu lực — em quên rồi à?'},
  {who:'sys', text:'Cô nhắm mắt. Và trong bóng tối tự nguyện đầu tiên của cuộc đời mình, {ten} không nghe thấy tiếng báo động, không nghe thấy tiếng chủ nợ — chỉ nghe thấy nhịp tim của một người đang đứng rất, rất gần.'},
  {who:'sys', text:'Khoảng cách đó rồi sẽ còn gần nữa hay không... là chuyện của chương cuối. Nhưng có một điều chắc chắn: từ hôm nay, món nợ giữa hai người đã có tên gọi khác.'},
  {do:()=>{ Game.addTrust(8); }},
],
});

/* ---------------- CẮT CẢNH MỚI ---------------- */
Object.assign(STORY.panels, {
k2_rescue: [
  {chars:[['khai','gloom']], bgc:'#e8d9f5', text:'Căn phòng sau tiệm gấu bông. Đèn mổ chế từ đèn pha xe máy. Lucien nằm trên bàn, tay nắm chặt tờ rơi nhàu nát. "Năm tỷ... trả hết nợ, lo được cho bác... đáng mà..."'},
  {chars:[['bacsi','worried']], bgc:'#fff3c4', text:'Vị "bác sĩ" bịt khẩu trang đang rửa tay... lần thứ 47. "Sát trùng phải KỸ. Chờ thêm 30 phút nữa đi." Giọng nghe quen một cách kỳ lạ. Bên cạnh, bọn "tuyến trên" bắt đầu sốt ruột.'},
  {chars:[['chau','angry']], bgc:'#ffe3e3', fx:'boom', sfx:'boom', text:'RẦM!!! Cánh cửa bay khỏi bản lề. "DỪNG TAY!!! TRẢ THẬN... À NHẦM!! TRẢ NGƯỜI ĐÂY!!!"'},
],
b1_arrive: [
  {emoji:'🌹', bgc:'#2a1a2e', text:'BẢN TIN TỐI: "QUÝ NGÀI HOA HỒNG xuất hiện tại Thành Phố Hỗn Loạn! Kẻ trộm bí ẩn chuyên đánh cắp THỨ QUÝ GIÁ NHẤT của nạn nhân, chỉ để lại một bông hồng đen và tấm thiệp: HÃY NHẮM MẮT KHI TA ĐẾN."'},
  {chars:[['bac','smug']], bgc:'#dff1ff', text:'Cùng giờ đó, tại sân bay: Giáo sư tâm lý tội phạm BẠC CẬN NGÔN về nước. Hành lý: một vali, ba tấm bằng tiến sĩ, và một lượng tự tin đủ dùng cho cả châu lục.'},
  {chars:[['lam','gloom']], bgc:'#e8f5ee', text:'Đêm đó, Đội trưởng Lâm mất ngủ: HUY HIỆU 25 NĂM của ông bốc hơi khỏi két đồn cảnh sát. Trên bàn: một bông hồng đen. "Trộm vào tận ĐỒN... Về hưu sớm thật rồi..."'},
],
b2_found: [
  {emoji:'🎤', bgc:'#2a1a2e', text:'Karaoke Bí Mật, phòng VIP. Nến thơm. Rượu vang. Một bàn cờ đang đánh dở. Và Lucien — bị trói vào ghế mát-xa đang bật chế độ "thư giãn cổ vai gáy". "Ít nhất tên này bắt cóc CÓ TÂM."'},
  {chars:[['tahan','evil']], bgc:'#e8d9f5', text:'Chiếc ghế xoay lại. Tóc bạc như trăng, áo nhung tím, nụ cười như rượu ủ lâu năm. "Chào mừng, cô trợ lý. Ta là người mà bọn báo chí gọi bằng cái tên khá... sến: Quý Ngài Hoa Hồng. Tên thật của ta — Tạ Hàn."'},
],
});

/* ---------------- LẮP CHƯƠNG MỚI VÀO LUỒNG ---------------- */
(function(){
  const KGB = {x:815, y:1315};   // cửa Karaoke Bí Mật
  const GAU = {x:545, y:1070};   // cửa tiệm gấu bông
  const HOSP = {x:1940, y:390};  // cửa bệnh viện
  const TENT = {x:1280, y:800};  // cửa lều

  const CH_ME = { title:'"MẸ ƠI, ĐỪNG XEM THỜI SỰ"', stamp:'💗 khoa tim mạch gọi tên',
    steps:[
      {vn:'m1_call'},
      {map:{playerAt:{x:1280, y:820}, quest:'Đến Bệnh Viện Số 7 thăm mẹ 🏥', music:'lofi',
        goto:{x:HOSP.x, y:HOSP.y, ic:'🏥', label:'Bệnh viện'}}},
      {vn:'m1_mom'},
      {mg:'papers', opts:{papers:[
        {title:'ĐƠN THUỐC TIM MẠCH', fine:'Sáng 1 viên, tối 1 viên. Tuyệt đối không uống chung với trà sữa. (Quy định mới sau một sự cố ở khoa.)', good:true},
        {title:'GÓI "GYM NGƯỜI CAO TUỔI VIP"', fine:'Hợp đồng 10 năm, tặng bình giữ nhiệt. Thanh toán một lần: 60 triệu. Người giới thiệu: Y tá H.', good:false},
        {title:'GIẤY CAM KẾT KHÔNG XEM THỜI SỰ', fine:'Bệnh nhân tim mạch cần tránh tin giật gân: cướp ngân hàng, trộm két, đa cấp nội tạng, giá xăng...', good:true, time:6},
        {title:'ĐƠN NHẬN NUÔI MÈO BỆNH VIỆN', fine:'Mèo tên "Viện Phí", ăn khỏe gấp ba mèo thường, đã cắn 4 người nhà bệnh nhân. Hợp đồng trọn đời.', good:false},
        {title:'PHIẾU HẸN PHẪU THUẬT TIM', fine:'Phẫu thuật nội soi cho bà Mai. Chi phí dự kiến: 200 triệu. Ký để giữ lịch — chưa cần đóng ngay.', good:true, time:6},
      ]}, after(res){
        if(res.wrong === 0) Game.addDR(-5, 'ký chuẩn từng tờ trước mặt mẹ');
        else Game.addDR(Math.min(12, res.wrong*6), 'suýt nhận nuôi mèo Viện Phí');
      }},
      {vn:'m1_leave'},
  ]};

  const CH_CHUNO = { title:'"ĐẠI CHIẾN CHỦ NỢ"', stamp:'🎤 bolero là vũ khí',
    steps:[
      {vn:'n1_debtors'},
      {map:{playerAt:{x:1280, y:820}, quest:'Đến Karaoke Bí Mật — ĐÊM NHẠC TRẢ NỢ 🎤', music:'night',
        goto:{x:KGB.x, y:KGB.y, ic:'🎤', label:'Karaoke Bí Mật'},
        npcs:[{char:'chuno', x:1180, y:900, label:'Sáu Lãi (đi theo đòi nợ)', bark:[
          {who:'chuno', expr:'normal', text:'Đi nhanh giùm. Loa của ta chỉ còn 2 cục pin — đủ hát đúng 9 tiếng thôi đó.'},
          {who:'chau', expr:'dizzy', text:'"CHỈ CÒN" 9 tiếng...'}]}],
      }},
      {mg:'karaoke', opts:{title:'🎤 ĐÊM NHẠC "TRẢ NỢ BẰNG GIỌNG CA"', notes:14}, after(res){
        if(res.success){ Game.addMoney(50, 'tiền vé đêm nhạc (đã trừ 70% "phí cảm xúc" của Bà Tư)'); Game.addDR(-5, 'cả phố vui một đêm'); }
        else { Game.addMoney(25, 'vé bán nửa rạp'); Game.addDR(8, 'khán giả hàng ghế đầu đòi bịt tai có hoàn tiền'); }
      }},
      {vn:'n1_after'},
  ]};

  const CH_THAN2 = { title:'"QUẢ THẬN CUỐI CÙNG"', stamp: (typeof KIDNEY !== 'undefined' ? KIDNEY : '') + ' đừng, Lucien ơi',
    steps:[
      {vn:'k2_notice'},
      {map:{playerAt:{x:1280, y:820}, quest:'Tra hỏi Y tá Hồng về "Thận Phát Lộc" 🏥', music:'tense',
        talk:'yta',
        npcs:[{id:'yta', char:'yta', x:2000, y:450, emote:'💦'}]}},
      {vn:'k2_yta'},
      {mg:'liedetect', opts:{char:'yta', name:'Y TÁ HỒNG (LẦN 2)', need:3, time:20,
        hint:'Cô ta đang run — vụ này chính cô ta cũng sợ!'}, after(res){
        if(!res.success) Game.addDR(8, 'mất thời gian vàng bạc');
      }},
      {vn:'k2_yta2'},
      {map:{quest:'XÔNG VÀO "phòng khám ma" sau tiệm gấu bông!! 🧸', music:'tense',
        goto:{x:GAU.x, y:GAU.y, ic:'🧸', label:'Tiệm gấu bông'}}},
      {panels:'k2_rescue'},
      {vn:'k2_confront'},
      {mg:'escape', opts:{night:true, title:'🌙 CÕNG LUCIEN RỜI Ổ ĐA CẤP'}, after(res){
        if(!res.success) Game.addDR(8, 'đạp đổ ' + res.hits + ' thùng "sản phẩm tuyến dưới"');
      }},
      {vn:'k2_home'},
  ]};

  const CH_LUONG = { title:'"TẬP LÀM NGƯỜI LƯƠNG THIỆN"', stamp:'☕ khởi nghiệp 0.5',
    steps:[
      {vn:'l1_shop'},
      {mg:'disguise', opts:{
        target:'☕ BARISTA CHUYÊN NGHIỆP', time:13,
        hints:['Đồng phục của nghề pha chế','Che tóc cho hợp vệ sinh','Dụng cụ ghi order thần thánh'],
        items:[
          {e:'👕', label:'Tạp dề nâu', ok:true},
          {e:'🧢', label:'Mũ lưỡi trai sạch', ok:true},
          {e:'📝', label:'Sổ order', ok:true},
          {e:'🥊', label:'Găng đấm bốc', ok:false},
          {e:'🎺', label:'Kèn trumpet', ok:false},
          {e:'🕶️', label:'Kính "đừng hỏi"', ok:false},
          {e:'👑', label:'Vương miện (vẫn ở đây)', ok:false},
          {e:'🔦', label:'Đèn pin thẩm vấn', ok:false},
          {e:'🎩', label:'Mũ ảo thuật (lại nữa)', ok:false},
        ]}, after(res){
        if(res.success) Game.addDR(-3, 'nhìn cũng ra dáng barista phết');
        else Game.addDR(5, 'khách tưởng quán bán đồ hóa trang');
      }},
      {vn:'l1_day'},
      {vn:'l2_bbq'},
      {mg:'grill', opts:{need:8, time:60}, after(res){
        if(res.success){ Game.addMoney(30, 'lương đứng bếp một đêm'); Game.addDR(-3, 'khách khen nức nở'); }
        else { Game.addMoney(10, 'lương bị trừ tiền bò cháy'); Game.addDR(8, 'suýt thiêu rụi khu bếp'); }
      }},
      {vn:'l2_bbq_end'},
      {vn:'l1_mom'},
  ]};

  const CH_BAC1 = { title:'"THIÊN TÀI GHÉ THÀNH PHỐ"', stamp:'🌹 hoa hồng đen thứ nhất',
    steps:[
      {panels:'b1_arrive'},
      {map:{playerAt:{x:1280, y:820}, quest:'Một quý ông đáng ngờ đang chờ ở quảng trường... 🧐', music:'mystery',
        talk:'bac',
        npcs:[{id:'bac', char:'bac', x:1230, y:870, emote:'❗'}]}},
      {vn:'b1_meet'},
      {map:{quest:'Khám nghiệm hiện trường 1/3: sạp Bà Tư 🕶️', music:'mystery',
        talk:'batu',
        npcs:[{id:'batu', char:'batu', x:265, y:1120, emote:'💢'},
          {char:'bac', x:1230, y:870, label:'GS. Bạc (đang phân tích)', bark:[
            {who:'bac', expr:'think', text:'Đừng báo cáo miệng. Tôi nghe được nhịp thở của cô từ 40 mét — đủ dữ liệu rồi.'},
            {who:'chau', expr:'dizzy', text:'(Làm việc với thiên tài áp lực dễ sợ...)'}]}]}},
      {vn:'b1_batu'},
      {map:{quest:'Hiện trường 2/3: Tiệm Cầm Đồ 🦷', music:'mystery',
        talk:'camdo',
        npcs:[{id:'camdo', char:'camdo', x:815, y:1085, emote:'💧'}]}},
      {vn:'b1_camdo'},
      {map:{quest:'Nhân chứng cuối: Vinh Xe Ôm thấy gì đó! 🛵', music:'mystery',
        talk:'vinh',
        npcs:[{id:'vinh', char:'vinh', x:950, y:815, emote:'❓'}]}},
      {vn:'b1_vinh'},
      {mg:'liedetect', opts:{char:'vinh', name:'VINH XE ÔM (TẬP 2)', need:3, time:20,
        hint:'Cậu ta sợ tới mức mặt giật như đèn nháy karaoke!'}, after(res){
        if(!res.success) Game.addDR(8, 'bị Vinh mời chào combo 9 vòng lần nữa');
      }},
      {vn:'b1_vinh2'},
      {vn:'b1_end'},
  ]};

  const CH_BAC2 = { title:'"HÃY NHẮM MẮT KHI ANH ĐẾN"', stamp:'🥀 thứ quý giá nhất',
    steps:[
      {vn:'b2_kidnap'},
      {mg:'deduce', opts:{
        culprit:'yta',
        suspects:[
          {id:'yta',   char:'yta',   name:'Y tá Hồng'},
          {id:'vinh',  char:'vinh',  name:'Vinh Xe Ôm'},
          {id:'chuno', char:'chuno', name:'Anh Sáu Lãi'},
        ],
        clues:[
          {ic:'🌹', text:'Cánh hoa hồng đen dính... trân châu đường đen', sus:'yta'},
          {ic:'🎫', text:'Voucher trà sữa "Cảm ơn đã hợp tác" hạng KIM CƯƠNG', sus:'yta'},
          {ic:'💄', text:'Vết son hình tim trên phong bì thiệp đen', sus:'yta'},
          {ic:'📱', text:'App của Vinh: đêm qua chở khách say đi 7 vòng (lần 2)', sus:'vinh'},
          {ic:'🎙️', text:'Sáu Lãi hát bolero ở phường bên cả đêm — 200 nhân chứng bịt tai xác nhận', sus:'chuno'},
          {ic:'🧾', text:'Hóa đơn bao trọn phòng VIP Karaoke Bí Mật — "khách giấu tên, boa hậu hĩnh"', sus:null},
        ]}, after(res){
        Game.state.flags.ded2OK = res.success;
        if(res.success){ Game.addDR(-15, 'suy luận chuẩn không cần chỉnh'); }
        else { Game.addDR(10, 'buộc tội nhầm người đang hát bolero'); }
      }},
      {vn:'b2_yta3'},
      {mg:'disguise', opts:{
        target:'💐 NGƯỜI GIAO HOA CHUYÊN NGHIỆP', time:12,
        hints:['Thứ nhất định phải ôm trên tay','Đội của dân giao hàng','Đạo cụ "hàng dễ vỡ xin nhẹ tay"'],
        items:[
          {e:'💐', label:'Bó hoa to chắn mặt', ok:true},
          {e:'🧢', label:'Mũ shipper', ok:true},
          {e:'📦', label:'Thùng "dễ vỡ"', ok:true},
          {e:'🎸', label:'Đàn ghi-ta', ok:false},
          {e:'🥽', label:'Kính bơi', ok:false},
          {e:'🦺', label:'Áo phản quang chói lóa', ok:false},
          {e:'👘', label:'Kimono', ok:false},
          {e:'🛒', label:'Xe đẩy siêu thị', ok:false},
          {e:'🎩', label:'Mũ ảo thuật (nghỉ hưu đi!)', ok:false},
        ]}, after(res){
        if(!res.success) Game.addDR(10, 'bảo vệ karaoke nghi ngờ "hoa gì mà biết đổ mồ hôi"');
      }},
      {panels:'b2_found'},
      {vn:'b2_face'},
  ]};

  const CH_BAC3 = { title:'"TẠM BIỆT, THIÊN TÀI"', stamp:'🌹 ván đấu cuối cùng',
    steps:[
      {mg:'liedetect', opts:{char:'tahan', name:'TẠ HÀN — QUÝ NGÀI HOA HỒNG', need:3, time:26, hard:true, music:'boss',
        hint:'Sa mạc cũng có mưa. Đừng nhìn mắt hắn — nhìn thứ HẮN nhìn...'}, after(res){
        if(!res.success) Game.addDR(10, 'suýt bị giọng ru ngủ thôi miên');
      }},
      {vn:'b3_end'},
  ]};

  const CH_DATE = { title:'"NGÀY KHÔNG NỢ NẦN"', stamp:'🌇 24 giờ tự do',
    steps:[
      {vn:'d1_start'},
      {map:{playerAt:{x:1280, y:820}, quest:'Về nơi mọi thứ bắt đầu ☕', music:'love',
        goto:{x:240, y:545, ic:'☕', label:'Cà Phê Nợ Nần'},
        npcs:[{char:'baove', x:700, y:480, label:'Bác Bảo Vệ (nghỉ hưu thật rồi)', bark:[
          {who:'baove', expr:'happy', text:'Hai đứa hả! Giờ bác thấy hai đứa là bác cười. Hồi đó thấy là bác... cầm ghế.'},
          {who:'chau', expr:'worried', text:'Tụi con vẫn còn ám ảnh cái ghế đó bác ơi.'}]}],
      }},
      {vn:'d1_cafe'},
      {mg:'karaoke', opts:{title:'🎤 SONG CA "NỢ ĐỜI CÓ ĐÔI"', notes:12, gap:1.15, duet:true}, after(res){
        if(res.success) Game.addTrust(5);
        else { Game.addTrust(3); Toast('🎵 Hát dở mà vui — thế mới là hẹn hò', 'good'); }
      }},
      {vn:'d2_lab'},
      {mg:'dino', opts:{goal:9}, after(res){
        if(res.success) Game.addTrust(6);
        else { Game.addTrust(2); Game.addDR(5, 'Nợ Con dỗi, cắn thủng biển hiệu lab'); }
      }},
      {vn:'d2_lab_end'},
      {vn:'d1_sunset'},
  ]};

  /* ---- cảnh bổ sung: bếp nướng & lab khủng long ---- */
  Object.assign(STORY.scenes, {
    l2_bbq: [
      {bg:'cafe'}, {music:'comedy'},
      {who:'batu', expr:'normal', text:'Ê hai đứa thua lỗ! Cơ hội gỡ vốn đây: nhà hàng "BÒ NƯỚNG PHỐ ĐÊM" tối nay thiếu người đứng bếp gấp — đầu bếp chính vừa trúng số, đang đứng giữa quán xé tạp dề tuyên bố nghỉ việc.'},
      {who:'chau', expr:'shock', text:'Rồi sao bà lại nghĩ ngay tới TỤI CON? Con nướng cơm còn khét mà!'},
      {who:'batu', expr:'smug', text:'Vì chủ quán trả 30 triệu một đêm và KHÔNG HỎI KINH NGHIỆM. Đúng phân khúc của tụi bây còn gì.'},
      {who:'khai', expr:'smug', text:'Để anh. Anh từng xem 400 video nướng bò. Về mặt lý thuyết, anh là bậc thầy.'},
      {who:'chau', expr:'gloom', text:'Về mặt lý thuyết, anh cũng từng là chuyên gia tài chính đấy.'},
      {who:'sys', text:'Và thế là hai kẻ khởi nghiệp thất bại khoác tạp dề, bước vào căn bếp chuyên nghiệp đầu tiên trong đời...'},
    ],
    l2_bbq_end: [
      {bg:'cafe'}, {music:'comedy'},
      {who:'sys', text:'Cuối ca, cả nhà hàng đứng dậy vỗ tay. Không rõ vì miếng bò... hay vì tinh thần "cháy hết mình" theo đúng nghĩa đen của căn bếp.'},
      {who:'khai', expr:'happy', text:'Thấy chưa! 400 video không phản bội anh!'},
      {who:'chau', expr:'normal', text:'Anh làm cháy đúng MỘT miếng. Và anh đã ăn nó để phi tang. Tôi thấy hết rồi nhé.'},
      {who:'khai', expr:'gloom', text:'Đó gọi là quy trình kiểm soát chất lượng nội bộ.'},
    ],
    d2_lab: [
      {bg:'night'}, {music:'cute'},
      {who:'sys', text:'Trên đường về, hai người đi ngang một cánh cửa mới toanh ở chợ đen: "PHÒNG THÍ NGHIỆM KHỦNG LONG MINI — trải nghiệm làm bố mẹ trong 10 phút, 50 nghìn/lượt".'},
      {who:'bacsi', expr:'happy', text:'Ơ, hai đứa! Vào chơi không? Nghề tay trái mới của tôi đây. Khoa học... giải trí. Hoàn toàn hợp pháp. Tương đối.'},
      {who:'chau', expr:'shock', text:'Bác sĩ. Đây. Là. TRỨNG GÌ?'},
      {who:'bacsi', expr:'think', text:'Quy tắc chợ đen, cô quên rồi à? KHÔNG. HỎI. NGUỒN. GỐC. Cứ coi là "gà biến dị thân thiện" đi cho dễ ngủ.'},
      {who:'khai', expr:'normal', text:'Tôi thấy nó giống khủng long.'},
      {who:'bacsi', expr:'gloom', text:'Thì tôi có cãi đâu. Rồi — hai người nuôi thử một bé. Cho ăn, tắm rửa, chơi cùng, ru ngủ. Đủ yêu thương là nó lớn. Y như người thật, chỉ nhanh hơn và... nhiều răng hơn.'},
      {who:'chau', expr:'sparkle', text:'Đặt tên bé là NỢ CON nha! Vì bé là con của hai đứa đang gánh nợ!'},
      {who:'khai', expr:'dizzy', text:'Logic đặt tên của em khiến anh vừa muốn cười vừa muốn đi trả nợ ngay lập tức.'},
    ],
    d2_lab_end: [
      {bg:'night'}, {music:'cute'},
      {who:'bacsi', expr:'shock', text:'Nó... nó quấn hai người quá rồi. Bình thường tụi nó chỉ quấn cái máy ấp thôi! Thôi vậy — mang về nuôi đi. Phí chuyển giao: 2 triệu, kèm sách hướng dẫn tôi viết tay.'},
      {do:()=>{ Game.addMoney(-2, 'phí "nhận con nuôi" bé Nợ Con'); }},
      {who:'chau', expr:'love', text:'Lều mình có thành viên mới rồi!! Nợ Con ơi chào bố mẹ đi con!!'},
      {who:'khai', expr:'worried', text:'Khoan đã. Nó ăn gì? Ăn bao nhiêu? MỘT NGÀY MẤY BỮA?'},
      {who:'bacsi', expr:'normal', text:'Trang một của sách: "Bé ăn mọi thứ. Kể cả hóa đơn." Chúc hai người may mắn.'},
      {who:'khai', expr:'sparkle', text:'KHOAN. NÓ ĂN HÓA ĐƠN?! Đây là sinh vật hữu ích nhất tôi từng gặp trong đời!!'},
    ],
  });

  /* thứ tự mới: 14 chương */
  const f = STORY.flow;
  const c1 = f[0], c2 = f[1], c3 = f[2], c4det = f[3], c5twist = f[4], c6fin = f[5];
  STORY.flow = [c1, c2, c3, CH_ME, c4det, CH_CHUNO, CH_THAN2, c5twist, CH_LUONG, CH_BAC1, CH_BAC2, CH_BAC3, CH_DATE, c6fin];
  STORY.flow.forEach((c, i) => { c.no = i + 1; });
})();
