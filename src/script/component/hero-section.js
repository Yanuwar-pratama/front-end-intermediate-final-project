class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  get value() {
    return this.querySelector(".search-bar").value;
  }

  render() {
    this.innerHTML = `

        <style>
        .hero {
          background: linear-gradient(0deg, #00081d, #00081dce), url(./img/bg-img.jpg);
        }
        </style>

        <div class="container">
            <h1>Discover Various Movies</h1>
            <p class="hero-desc">Let's find out about your favorite movie</p>
        </div>
        <div id="searchContainer">
            <form action="">
                <input type="text" class="search-bar" placeholder="Search Movie">
                <input id="searchBtn" type="submit" value="search">
            </form>
        </div>
        `;

    this.querySelector("#searchBtn").addEvenlistener("click", this._clickEvent);
  }
}

customElements.define("hero-section", HeroSection);
