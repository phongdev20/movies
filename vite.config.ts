import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
  server: {
    host: "https://api.themoviedb.org/3",
    port: 5173,
  },
});
