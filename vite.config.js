import { defineConfig } from "vite"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      dndrxjs: path.resolve(__dirname, "./src"),
    },
  },
})
