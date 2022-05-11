export default function SelectedLanguages({ $target }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";
  $target.appendChild(this.$element);

  this.state = {
    langs: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    if (this.state.langs.length > 5) {
      this.state.langs.shift();
    }
    this.render();
  };

  this.render = () => {
    // console.log(this.state.langs);
    const list = this.state.langs;
    if (list.length > 0) {
      this.$element.innerHTML = `<ul>
      ${list
        .map((e) => {
          return `<li>${e}</li>`;
        })
        .join("")}
    </ul>`;
    }
  };

  this.render();
}
{
  /* <ul>
<li>JavaScript</li>
<li>Python</li>
<li>Elixir</li>
<li>Java</li>
<li>PHP</li>
</ul> */
}
