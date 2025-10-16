import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  define: {
    global: "window",  // ✅ global değişkenini tarayıcı ortamına tanıt
  },
});
