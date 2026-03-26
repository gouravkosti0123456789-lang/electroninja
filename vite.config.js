import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        pyqs: './pyqs.html',
        aiSolver: './ai-solver.html',
        branches: './branches.html',
        about: './about.html',
      }
    }
  }
})
