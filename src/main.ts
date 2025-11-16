import './style.css'
import qrWifiImage from './assets/images/QR_WiFi.png'

// TRMNL optimized display - Simple QR Code viewer
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <img src="${qrWifiImage}" alt="TRMNL WiFi QR Code" />
  </div>
`

