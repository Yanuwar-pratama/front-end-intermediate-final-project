class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<img src="./img/MYFLIX.svg" alt="">`;
  }
}

customElements.define("nav-bar", NavBar);
