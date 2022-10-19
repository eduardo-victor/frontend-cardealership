import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

// module.exports = {
//   async headers() {
//     return [{
//       source: '/:path*',
//       headers: [
//         {key: 'Access-Control-Allow-Credentials', value: 'true'},
//         {key: 'Access-Control-Allow-Origin', value: '*'},
//         {key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE'},
//         {key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'},
//       ]
//     }]
//   }
// }
