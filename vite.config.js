import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    qrcode(),
  ],

  base: "/",

  server: {
    host: true,
    port: 5173,
  },
});