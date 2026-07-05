// Baris 1: Ganti nama Class menjadi LayerSatuComponent
class LayerSatuComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Kelas CSS di bawah ini biarkan tetap "hero" tidak apa-apa, atau ganti jika mau -->
      <section class="hero">
        <div class="content">
          <h1>Selamat Datang di <span>Phunk Film</span></h1>
          <p>Temukan berbagai hal menarik dan keseruan tanpa batas di sini.</p>
          <a href="#" class="cta-button">Mulai Sekarang</a>
        </div>
      </section>
    `;
  }
}
// Baris terakhir: Ganti nama tag panggilannya sesuai di index.html tadi
customElements.define('layer-satu', LayerSatuComponent);
