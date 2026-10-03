import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Đỗ Tuyết Nhung — Portfolio",
  description:
    "Portfolio của Đỗ Tuyết Nhung — sinh viên Đại học Ngoại thương, yêu thích thiết kế trải nghiệm, tư duy sản phẩm và dữ liệu.",
  openGraph: {
    title: "Đỗ Tuyết Nhung — Portfolio",
    description: "Thiết kế trải nghiệm · Tư duy sản phẩm · Dữ liệu",
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#141017" },
  ],
};

// Chạy trước khi trang hiển thị để không bị nháy sai giao diện sáng/tối.
const themeScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      data-theme="light"
      className={`${serif.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full overflow-x-clip">{children}</body>
    </html>
  );
}
