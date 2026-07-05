class LayerDuaComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="about">
        <div class="about-content">
          <div class="section-title"><h2>Serie Terbaru</h2></div>
          <div class="grid-foto">
            
         <!-- KARTU 1 (Diarahkan ke detail.html dengan ID AQUAMAN) -->
            <a href="pages/detail.html?id=AQUAMAN" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/aqua.jpg" alt="Human Vapor 1">
                </div>
                <div class="card-info">
                  <h3>AQUAMAN (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 2  -->
            <a href="pages/detail.html?id=batman-vs-superman" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E3/10</span>
                  <span class="badge-time">1:07:54</span>
                  <img src="./img/bag1/batvssuper.jpg" alt="Agent Kim">
                </div>
                <div class="card-info">
                  <h3>Batman v Superman (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: 3 hari lalu</p>
                </div>
              </div>
            </a>

            <!-- KARTU 3 (Diarahkan ke detail.html dengan ID BLACK PANTHER) -->
            <a href="pages/detail.html?id=BLACK PANTHER" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E3/10</span>
                  <span class="badge-time">1:07:54</span>
                  <img src="./img/bag1/black.jpg" alt="Batman vs Superman">
                </div>
                <div class="card-info">
                  <h3>Black Panther (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: 3 hari lalu</p>
                </div>
              </div>
            </a>

            <!-- KARTU 4 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=The Flash" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/flash.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>The Flash(2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 5 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=harry-potter" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/harry.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>harry-potter(2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 6 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Hulk" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/hulk.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Hulk (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 7 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Iron Man 3" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/iron.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Iron Man 3 (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 8 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Joker" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/joker.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Joker(2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 9 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Spider Man Miles Morales" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/miles.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Spider Man Miles Morales(2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 10 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Dead Pool" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/poll.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Dead Pool (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 11 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Spider Man: Far From Home" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/spider.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Spider Man: Far From Home (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 12 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=THOR" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/thor.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>THOR (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 13 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Tokyo Revengers" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/tokyo.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Tokyo Revengers (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 14 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Transformers" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/trans.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Transformers (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 15 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Venom" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/venom.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Venom(2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>

            <!-- KARTU 16 (BISA DIKLIK) -->
            <a href="pages/detail.html?id=Wonder Woman" class="card-link">
              <div class="card-item">
                <div class="card-thumb">
                  <span class="badge-eps">E8 END</span>
                  <span class="badge-time">1:08:03</span>
                  <img src="./img/bag1/wonder.jpg" alt="Human Vapor">
                </div>
                <div class="card-info">
                  <h3>Wonder Woman (2026)</h3>
                  <p class="quality">1080p, 720p & 480p</p>
                  <p class="updated">diperbarui: kemarin</p>
                </div>
              </div>
            </a>  
      </section>
    `;
  }
}
customElements.define('layer-dua', LayerDuaComponent);
