class LayerTigaComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="layer-tiga">
        <div class="layer-tiga-content">
          <div class="section-title"><h2>Rekomendasi Film Populer</h2></div>
          <div class="grid-foto">
            <!-- Kartu 1 -->
            <a href="pages/detail.html?id=Avatar" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">MOVIE</span>
                <span class="badge-time">2:15:40</span>
                <img src="img/bag2/avatar.jpg" alt="Film 1">
              </div>
              <div class="card-info">
                <h3>Avatar(2026)</h3>
                <p class="quality">1080p & 720p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
            <!-- Kartu 2 -->
            <a href="pages/detail.html?id=Dragon" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E8 END</span>
                <span class="badge-time">1:08:03</span>
                <img src="img/bag2/dragon.jpg" alt="Human Vapor">
              </div>
              <div class="card-info">
                <h3>Dragon(2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: kemarin</p>
              </div>
            </div>
             <!-- KARTU 3 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Full Metal Alchemist" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/full.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Full Metal Alchemist (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 4 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=The Godfather" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/god.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>The Godfather (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 5 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Inception" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/inception.jpeg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Inception (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
            <!-- Kartu 6 -->
            <a href="pages/detail.html?id=Jhon Wick 3" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E8 END</span>
                <span class="badge-time">1:08:03</span>
                <img src="img/bag2/jhon.jpg" alt="Human Vapor">
              </div>
              <div class="card-info">
                <h3>Jhon Wick 3 (2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: kemarin</p>
              </div>
            </div>
             <!-- KARTU 7 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Rurouni Kenshin" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/kenshin.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Rurouni Kenshin (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 8 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Moana" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/moana.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Moana (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 9 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Mortal Kombat" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/mortal.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Mortal Kombat (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
            <!-- Kartu 10 -->
            <a href="pages/detail.html?id=Oppenheimer" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E8 END</span>
                <span class="badge-time">1:08:03</span>
                <img src="img/bag2/open.jpg" alt="Human Vapor">
              </div>
              <div class="card-info">
                <h3>Oppenheimer(2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: kemarin</p>
              </div>
            </div>
             <!-- KARTU 11 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=SpongeBob SquarePants" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/spon.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>SpongeBob SquarePants (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 12 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Resident Evil" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/resident.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Resident Evil (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 13 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=World War Z" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/war.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>World War Z(2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
            <!-- Kartu 14 -->
            <a href="pages/detail.html?id=Maze Runner" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E8 END</span>
                <span class="badge-time">1:08:03</span>
                <img src="img/bag2/maze.jpg" alt="Human Vapor">
              </div>
              <div class="card-info">
                <h3>Maze Runner (2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: kemarin</p>
              </div>
            </div>
             <!-- KARTU 15 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Final Destination 5" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/final.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Final Destination 5 (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             <!-- KARTU 16 (TAMBAHAN BARU) -->
             <a href="pages/detail.html?id=Tomb Raider" class="card-link">
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/bag2/tom.jpg" alt="Agent Kim"> <!-- Ganti gambar jika ada -->
              </div>
              <div class="card-info">
                <h3>Tomb Raider (2026)</h3> <!-- Ganti judul -->
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>
             
            <!-- Anda bisa tambah Kartu lainnya di sini -->
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('layer-tiga', LayerTigaComponent);
