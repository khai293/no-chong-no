# 🎮 Nợ Chồng Nợ

> **Trinh thám hài hước • Phiêu lưu • Tình cảm** — game web HTML5, chơi ngay trên trình duyệt.

🔗 **Chơi ngay:** https://khai293.github.io/no-chong-no/

## 📖 Cốt truyện

Ngày thất nghiệp đầu tiên (lý do: khai sai giấy tờ 17 lần), nữ chính gặp **Khải** — gã điển trai tự xưng "chuyên gia tài chính phi truyền thống" — rủ đi cướp ngân hàng với lời hứa *"Em chỉ cần đứng canh cửa thôi. Dễ lắm."*

Kết quả: cướp thất bại, Khải bị ghế nhựa hạ gục, và trong lúc hoảng loạn ở bệnh viện, nữ chính **vô tình ký giấy hiến thận của anh** vì tưởng là giấy xuất viện. 🫁

Cả hai trắng tay — và giờ bị ràng buộc vào nhau bởi... NỢ.

## 🕹️ Cách chơi

| Hành động | Điều khiển |
|---|---|
| Di chuyển | WASD / phím mũi tên / joystick cảm ứng |
| Tương tác | E hoặc chạm |
| Thoại tiếp | Space / Enter / nhấp chuột |

- **6 chương** với bản đồ 5 khu vực mở khóa dần
- **6 minigame**: canh cửa ngân hàng, chạy trốn, ký giấy thần tốc, hóa trang, đọc vị người nói dối, bảng suy luận
- **3 kiểu thoại**: 😇 Thật thà / 😈 Bịa đặt / 🤡 Vô tình hài
- **Điểm Rắc Rối** ⚡ + **Chỉ Số Tin Tưởng** 💗 quyết định **4 kết thúc** khác nhau

## 🛠️ Kỹ thuật

Thuần HTML/CSS/JS — không framework, không asset ngoài:
- Đồ họa nhân vật webtoon vẽ bằng SVG (16 biểu cảm/nhân vật)
- Bản đồ top-down 2560×1440 vẽ bằng Canvas 2D
- Nhạc lo-fi/hồi hộp tự sinh bằng WebAudio
- Lưu game qua localStorage (checkpoint đầu mỗi chương)

Chạy local: mở `index.html` qua một static server bất kỳ, ví dụ:

```bash
python -m http.server 8213
```

---

*🫁 một quả thận đã ra đi vì game này*
