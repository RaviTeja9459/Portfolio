import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        projects: resolve(__dirname, 'projects.html'),
        skills: resolve(__dirname, 'skills.html'),
        experience: resolve(__dirname, 'experience.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
