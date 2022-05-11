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
    this.render();
  };

  this.render = () => {
    // console.log("SelectedLanguages");
    console.log(this.state.langs);
    const list = this.state.langs;
    this.$element.innerHTML = `<ul>
      ${list
        .map((e) => {
          return `<li>${e}</li>`;
        })
        .join("")}
    </ul>`;
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
