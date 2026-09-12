import { resolve } from "node:path";
import { defineConfig } from "vite";

const page = (file) => resolve(import.meta.dirname, "web", file);

export default defineConfig({
  root: "web",
  publicDir: "public",
  build: {
    outDir: resolve(import.meta.dirname, "docs"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: page("index.html"),
        apps: page("apps/index.html"),
        about: page("about/index.html"),
        privacy: page("privacy/index.html"),
        support: page("support/index.html"),
        snapordina: page("snapordina/index.html"),
        snapordinaPrivacy: page("snapordina/privacy/index.html"),
        snapordinaSupport: page("snapordina/support/index.html"),
        qrartify: page("qrartify/index.html"),
        qrartifyPrivacy: page("qrartify/privacy/index.html"),
        qrartifySupport: page("qrartify/support/index.html"),
        notFound: page("404.html")
      }
    }
  }
});
