import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  define: {
    __CANONICAL_ORIGIN__: JSON.stringify("https://pasalopalante.com"),
    __APP_BASE_URL__: JSON.stringify(process.env.APP_BASE_URL || "https://app.pasalopalante.com/"),
  },
  server: { host: "::", port: 8080, hmr: { overlay: false } },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared/src"),
    },
  },
}));
