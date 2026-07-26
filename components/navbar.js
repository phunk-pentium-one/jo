class NavbarComponent extends HTMLElement {
  connectedCallback() {
    // Mengecek apakah halaman yang sedang dibuka ada di dalam folder 'pages' atau tidak
    const isInsidePages = window.location.pathname.includes('/pages/');
    const pathPrefix = isInsidePages ? '../' : './';

    this.innerHTML = `
      <nav class="navbar">
        <a href="${pathPrefix}index.html" class="navbar-logo">
          <!-- Otomatis menambahkan tanda ../ jika browser mendeteksi posisi ada di dalam folder pages -->
          <img src="${pathPrefix}img/logo/one.jpg" alt="Logo">
          Phunk <span>Film !!!</span>
        </a>
        <div class="auth-container">
        <a href="${pathPrefix}login.html" class="btn btn-login">Login</a>
        <a href="${pathPrefix}register.html" class="btn btn-register">Register</a>
        </div>
        <div class="navbar-extra">
          <a href="#" id="search"><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href="#" id="shopping-cart"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </nav>
    `;
  }
}
customElements.define('menu-navbar', NavbarComponent);
