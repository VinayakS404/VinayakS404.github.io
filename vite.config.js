import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { qrcode } from "vite-plugin-qrcode"; // 1. Import it

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    qrcode(), // 2. Add it here
  ],
  base: "/",
  server: {
    host: true,
    port: 5173,
  },
});
