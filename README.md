# Portfolio — Đỗ Tuyết Nhung

Trang portfolio cá nhân dựng bằng Next.js 16 (App Router) + Tailwind CSS v4.
Phong cách lấy cảm hứng từ chính cái tên: **Tuyết** (trắng tuyết, trong trẻo) và **Nhung** (nhung hồng trầm, mềm mại).
Có giao diện sáng / tối, hiệu ứng xuất hiện khi cuộn và tương thích điện thoại.

## Chạy thử

```bash
npm install
npm run dev        # http://localhost:3000
```

## Sửa nội dung

Toàn bộ chữ trên trang nằm trong **`src/content/profile.ts`**: giới thiệu, dự án, sở thích,
gallery, liên hệ… Sửa ở đó là giao diện tự cập nhật. Trong tiêu đề, phần đặt giữa `*dấu sao*` sẽ được in
nghiêng màu hồng nhung, ví dụ `"Một chút *về mình*"`.

Nhớ thay các thông tin mẫu:

- `contact.email` và `contact.links`: email, LinkedIn, Facebook, Instagram thật.
- `interests` và `gallery.photos[].caption`: sở thích và chú thích ảnh của riêng bạn.

## Thêm ảnh

Thả ảnh vào `public/images/` với đúng tên, trang sẽ tự dùng ảnh thật thay cho hình minh hoạ:

| File                                        | Vị trí                   | Gợi ý tỉ lệ         |
| ------------------------------------------- | ------------------------ | ------------------- |
| `public/images/avatar.jpg`                  | Ảnh chân dung ở đầu trang | Dọc 4:5             |
| `public/images/photo1.jpg` … `photo5.jpg`   | Photo corner (gallery)   | Ảnh 1 nên là ảnh lớn |

Muốn dùng tên file khác thì sửa đường dẫn `profile.avatar` / `gallery.photos[].src` trong `profile.ts`.
Khi đang chạy `npm run dev` chỉ cần tải lại trang; bản production thì build lại (`npm run build`).

## Cấu trúc

```
src/
  app/              layout (font, theme), page, globals.css (bảng màu & hiệu ứng), icon.svg
  content/          profile.ts — toàn bộ nội dung
  components/
    navbar.tsx      thanh điều hướng, đổi sáng/tối, menu điện thoại
    sections/       hero, about (+ marquee, identity), projects, personal (interests, gallery), contact
    icons.tsx, ui.tsx, …
```

## Đưa lên mạng

Cách nhanh nhất là [Vercel](https://vercel.com/new): đẩy thư mục này lên GitHub, import repo vào Vercel,
giữ nguyên cấu hình mặc định và bấm Deploy.
