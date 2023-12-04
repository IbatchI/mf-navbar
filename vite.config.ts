import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      exposes: {
        './AuthProtection': './src/shared/Routes/AuthRoutes.tsx',
      },
      remotes: {
        // login: 'http://localhost:5001/assets/remoteEntry.js',
        login: {
          external: `fetch('http://localhost:5001/assets/remoteEntry.js').then(response=>response.json()).then(data=>data.url).catch(e=>"http://localhost:5002/assets/remoteEntry.js")`,
          externalType: 'promise',
        },
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
