import { existsSync } from "node:fs";
import path from "node:path";

/** Ảnh trong `public/` đã có chưa — chưa có thì trang hiển thị hình minh hoạ thay thế. */
export function publicFileExists(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}
