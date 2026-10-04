// Toàn bộ nội dung của trang nằm ở file này — sửa chữ ở đây, giao diện tự cập nhật.
// Ảnh: thả file vào public/images với đúng tên (avatar.jpg) là trang tự hiển thị,
// chưa có ảnh thì trang dùng hình minh hoạ thay thế.

import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/icons";
import ipday1 from "@/assets/projects/ipday-1.jpg";
import ipday2 from "@/assets/projects/ipday-2.jpg";
import virtualFigures from "@/assets/projects/virtual-figures.jpg";
import ipchallenge from "@/assets/projects/ipchallenge.jpg";
import flowers from "@/assets/interests/flowers.jpg";
import photography from "@/assets/interests/photography.jpg";
import dance from "@/assets/interests/dance.jpg";
import cooking from "@/assets/interests/cooking.jpg";
import reading from "@/assets/interests/reading.jpg";
import littleThings from "@/assets/interests/little-things.jpg";

export const profile = {
  name: "Đỗ Tuyết Nhung",
  firstName: "Tuyết Nhung",
  initials: "TN",
  greeting: "Xin chào, mình là",
  roles: [
    "Sinh viên Đại học Ngoại thương",
    "Tài chính Quốc tế · CLB IPC",
    "Thích biến ý tưởng thành trải nghiệm",
  ],
  quote:
    "Một trải nghiệm đẹp bắt đầu từ việc lắng nghe thật kỹ — rồi mới đến màu sắc và đường nét.",
  intro:
    "Mình là sinh viên K63 Trường Đại học Ngoại thương, chuyên ngành Tài chính Quốc tế. Mình quan tâm đến tài chính, ngoại ngữ và những ý tưởng có thể tạo ra giá trị thực tế cho cộng đồng. Với mình, một hành trình đẹp không chỉ nằm ở thành tích, mà còn ở cách mình học hỏi, kết nối với mọi người và biến những điều mình tin tưởng thành điều gì đó hữu ích.",
  avatar: "/images/avatar.jpg",
  heroBadges: ["Tài chính", "Ngoại ngữ", "Tổ chức sự kiện"],
};

export const nav = [
  { id: "about", label: "Giới thiệu" },
  { id: "identity", label: "Mình là ai" },
  { id: "projects", label: "Dự án" },
  { id: "interests", label: "Sở thích" },
  { id: "contact", label: "Liên hệ" },
];

export const marquee = [
  "Tài chính Quốc tế",
  "Ngoại ngữ",
  "Sở hữu trí tuệ",
  "Tổ chức sự kiện",
  "Kết nối cộng đồng",
  "Múa",
  "Nấu ăn",
  "Những điều nhỏ xinh",
];

export const about = {
  tag: "About me",
  title: "Một chút *về mình*",
  paragraphs: [
    "Mình bị cuốn hút bởi những điều vừa có chiều sâu, vừa chạm đến cảm xúc — một ý tưởng cộng đồng được vun đắp chỉn chu, một câu chuyện được kể bằng sự tinh tế, hay những con số lặng lẽ phản ánh hành vi và xu hướng của con người. Có lẽ vì thế mà mình luôn tìm thấy bản thân ở nơi giao thoa giữa tài chính, dữ liệu, cộng đồng và sáng tạo.",
    "Mình từng là thành viên Ban Chuyên môn của Câu lạc bộ Sở hữu Trí tuệ IPC – Trường Đại học Ngoại thương. Quãng thời gian ấy cho mình cơ hội kết nối với nhiều người, xây dựng mạng lưới quan hệ đối ngoại, đồng thời rèn cho mình tinh thần làm việc nhóm và kinh nghiệm tổ chức những sự kiện quy mô lớn. Điều mình trân trọng nhất là khoảnh khắc một ý tưởng không chỉ dừng ở “hay”, mà thật sự chạm đến ai đó.",
    "Ở giảng đường, chuyên ngành Tài chính Quốc tế dạy mình nhìn mọi thứ bằng sự chặt chẽ của những con số; còn ngoại ngữ mở cho mình cánh cửa đến với những nền văn hoá và cách nghĩ khác. Mình muốn mang cả hai điều ấy theo trên hành trình phía trước — đủ lý trí để hiểu vấn đề thật kỹ, và đủ ấm áp để những gì mình làm ra luôn có ý nghĩa với ai đó.",
  ],
  process: [
    {
      step: "01",
      title: "Lắng nghe",
      text: "Hiểu vấn đề và người dùng trước khi nghĩ đến giải pháp.",
    },
    {
      step: "02",
      title: "Nhiệt huyết",
      text: "Dốc hết lòng cho mỗi việc mình nhận — từ một buổi họp nhóm đến một sự kiện lớn, mình luôn muốn làm đến nơi đến chốn.",
    },
    {
      step: "03",
      title: "Kết nối",
      text: "Gắn kết mọi người lại với nhau, để mỗi ý tưởng được cùng nhau vun đắp và lan toả giá trị xa hơn.",
    },
  ],
};

export const identity: {
  tag: string;
  title: string;
  cards: { icon: IconName; title: string; text: string }[];
} = {
  tag: "What defines me",
  title: "Những điều mình *đang theo đuổi*",
  cards: [
    {
      icon: "book",
      title: "Học thêm kỹ năng mới",
      text: "Mình luôn tò mò và muốn thử sức với những điều chưa biết — từ một công cụ mới, một lĩnh vực mới cho đến cách làm việc khác đi. Mỗi kỹ năng học được là thêm một cánh cửa mở ra cho hành trình của mình.",
    },
    {
      icon: "globe",
      title: "Học thêm ngoại ngữ",
      text: "Với mình, mỗi ngôn ngữ mới là một cách nhìn thế giới mới — giúp mình đọc rộng hơn, hiểu sâu hơn và tự tin kết nối với những con người, nền văn hoá khác nhau.",
    },
    {
      icon: "chart",
      title: "Dữ liệu & phân tích",
      text: "Mình tò mò về cách dữ liệu giúp con người lựa chọn tốt hơn — từ việc khớp hồ sơ với công việc cho tới gợi ý một chuyến đi phù hợp.",
    },
    {
      icon: "compass",
      title: "Khám phá & kết nối",
      text: "Mình thích những ý tưởng giúp người khác tìm được điều hợp với mình — một công việc, một hành trình, hay chỉ là một góc nhỏ dễ chịu.",
    },
  ],
};

export type Project = {
  id: "ipday" | "virtual-figures" | "ipchallenge";
  label: string;
  meta: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
  link: { label: string; href?: string };
  photos: { src: StaticImageData; alt: string }[];
};

export const projects: { tag: string; title: string; items: Project[] } = {
  tag: "Featured projects",
  title: "Một vài dự án *mình trân trọng*",
  items: [
    {
      id: "ipday",
      label: "Sự kiện · IPC FTU",
      meta: "04 – 05/2025 · CLB Sở hữu Trí tuệ IPC",
      title: "IP Day 2025 — IP and Music: Feel the beat of IP",
      description:
        "Chuỗi sự kiện chào mừng Ngày Sở hữu trí tuệ thế giới, mang tới góc nhìn mới mẻ về mối quan hệ giữa sở hữu trí tuệ và âm nhạc — đặc biệt khi AI ngày càng len lỏi sâu hơn vào quá trình sáng tác và phân phối âm nhạc. Từ không gian triển lãm đậm chất nghệ thuật đến những trao đổi chuyên sâu tại tọa đàm, IP Day 2025 trở thành cầu nối để sinh viên được nhìn ngắm, cảm nhận và hiểu thêm về sở hữu trí tuệ trong ngành công nghiệp âm nhạc.",
      points: [
        "Triển lãm “Melodies Under Lock – Những hộp nhạc bị khoá” · 23/04/2025, tầng 1 nhà D",
        "Tọa đàm “Hit or Hack? The Battle over AI-Generated Music” · 07/05/2025, Hội trường D201",
        "Diễn giả: Luật sư Lê Xuân Lộc (Công ty Luật TNHH T&G) và ca sĩ – nhạc sĩ Giang Pham, Founder HanoiJam",
        "Tham gia tổ chức với vai trò thành viên Ban Chuyên môn IPC",
      ],
      tags: ["Sở hữu trí tuệ", "Âm nhạc", "AI", "Tổ chức sự kiện"],
      link: { label: "Xem recap sự kiện", href: "https://www.facebook.com/share/19V2VAUoU5/" },
      photos: [
        {
          src: ipday2,
          alt: "Tọa đàm “Hit or Hack? The Battle over AI-Generated Music” tại Hội trường D201",
        },
        { src: ipday1, alt: "Tuyết Nhung trong bộ ảnh IP Day 2025 của IPC" },
      ],
    },
    {
      id: "virtual-figures",
      label: "Tọa đàm · IPC FTU",
      meta: "01/2025 · CLB Sở hữu Trí tuệ IPC",
      title: "3C’s and IP: Virtual Figures in the Digital Age",
      description:
        "Tọa đàm về những nhân vật ảo trong thời đại số — từ quá trình sáng tạo nên chúng đến cách bảo vệ quyền sở hữu trí tuệ đối với chúng. Sau 6 ngày mở đơn đăng ký, buổi tọa đàm diễn ra thành công và trọn vẹn, mang đến cho các bạn sinh viên nhiều trải nghiệm thú vị cùng những kiến thức bổ ích.",
      points: [
        "18:00 – 20:00 · 14/01/2025, Hội trường D201, Trường Đại học Ngoại thương",
        "Diễn giả: anh Nguyễn Văn Linh và anh Phạm Văn Anh",
        "Tham gia tổ chức với vai trò thành viên Ban Chuyên môn IPC",
      ],
      tags: ["Sở hữu trí tuệ", "Nhân vật ảo", "Tọa đàm"],
      link: {
        label: "Xem recap tọa đàm",
        href: "https://www.facebook.com/shtt.ftu/posts/pfbid028iqsALMDWLZsTnGrt2G2wSXMfEBekZWzts4tygC1FBSKFSwxeREjE1fFwSDkWwG6l",
      },
      photos: [{ src: virtualFigures, alt: "Đội ngũ IPC tại tọa đàm 3C’s and IP" }],
    },
    {
      id: "ipchallenge",
      label: "Gameshow · IPC FTU",
      meta: "CLB Sở hữu Trí tuệ IPC",
      title: "Gameshow IPChallenge",
      description:
        "Sân chơi về sở hữu trí tuệ dành cho sinh viên do IPC tổ chức, khép lại bằng đêm chung kết tại Trường Đại học Ngoại thương với sự góp mặt của các đội thi, ban giám khảo và khách mời.",
      points: [
        "Chung kết diễn ra tại Trường Đại học Ngoại thương",
        "Tham gia tổ chức với vai trò thành viên Ban Chuyên môn IPC",
      ],
      tags: ["Sở hữu trí tuệ", "Gameshow", "Tổ chức sự kiện"],
      link: { label: "Một sân chơi đáng nhớ" },
      photos: [{ src: ipchallenge, alt: "Chung kết Gameshow IPChallenge" }],
    },
  ],
};

export const interests: {
  tag: string;
  title: string;
  paragraphs: string[];
  items: {
    icon: IconName;
    label: string;
    photo?: { src: StaticImageData; alt: string; position?: string };
  }[];
} = {
  tag: "A little more personal",
  title: "Những điều *mình yêu thích*",
  paragraphs: [
    "Ngoài giờ học, mình thích đi đây đó, lưu lại những khoảnh khắc nhỏ và dành thời gian bên những bông hoa — thứ luôn khiến một ngày bình thường trở nên dịu dàng hơn.",
    "Mình bị cuốn hút bởi cả hai thế giới: một bên là cấu trúc và logic, một bên là cảm xúc và cái đẹp. Có lẽ vì vậy mà mình luôn muốn những gì mình làm ra vừa rõ ràng, vừa có hơi ấm.",
  ],
  items: [
    {
      icon: "flower",
      label: "Hoa",
      photo: { src: flowers, alt: "Những bó hoa Tuyết Nhung yêu thích" },
    },
    {
      icon: "camera",
      label: "Chụp ảnh",
      photo: { src: photography, alt: "Tuyết Nhung chụp ảnh selfie qua gương" },
    },
    {
      icon: "book",
      label: "Đọc sách",
      photo: { src: reading, alt: "Cuốn “Hai số phận” (Kane & Abel) của Jeffrey Archer" },
    },
    {
      icon: "dance",
      label: "Múa",
      photo: { src: dance, alt: "Tuyết Nhung trong trang phục múa áo dài xanh" },
    },
    {
      icon: "cookingPot",
      label: "Nấu ăn",
      photo: { src: cooking, alt: "Những bữa cơm Tuyết Nhung tự nấu" },
    },
    {
      icon: "heart",
      label: "Những điều nhỏ xinh",
      photo: {
        src: littleThings,
        alt: "Chiếc vòng charm Hello Kitty của Tuyết Nhung",
        position: "28% 50%",
      },
    },
  ],
};

export const currently = {
  tag: "Currently",
  title: "Hiện tại mình *đang quan tâm*",
  items: [
    "Tài chính Quốc tế",
    "Ngoại ngữ",
    "Sở hữu trí tuệ",
    "Tổ chức sự kiện",
    "Kết nối cộng đồng",
    "Làm việc nhóm",
    "Kỹ năng mới",
  ],
};

export const contact: {
  tag: string;
  title: string;
  text: string;
  email: string;
  links: { icon: IconName; label: string; href: string }[];
} = {
  tag: "Let’s connect",
  title: "Cùng trò chuyện *nhé?*",
  text: "Nếu bạn muốn trao đổi về sản phẩm, thiết kế, dữ liệu, một dự án đang ấp ủ hay đơn giản là một ý tưởng thú vị — mình rất vui được kết nối.",
  email: "tuyetnhung@example.com",
  links: [
    { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
    { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export const footer = "Được dựng nhẹ nhàng, tỉ mỉ — với một chút tuyết trắng và nhung mềm.";
