import tsconfigPaths from "vite-tsconfig-paths";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.jsx",
      name: "react-json-view",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [
    react(), 
    tsconfigPaths(),
    dts({insertTypesEntry: true}),
  ]
})