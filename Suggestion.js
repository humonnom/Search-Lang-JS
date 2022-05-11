export default function Suggestion({ $target }) {
  this.$element = document.createElement("div");
  this.$element.className = "Suggestion";
  $target.appendChild(this.$element);

  this.state = {
    items: [],
    index: 0,
  };

  this.setState = (nextState) => {
    console.log(nextState);
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    // console.log("[Suggestion render]");
    const { items, index } = this.state;
    // console.log(items);
    if (items.length > 0) {
      this.$element.style.display = "block";
      this.$element.innerHTML = `
      <ul>
        ${items
          .map(
            (e, i) => `
          <li data-index="${i}" class="${
              i === index ? "Suggestion__item--selected" : ""
            }">${e}</li>
        `
          )
          .join("")}
      </ul>
    `;
    } else {
      this.$element.style.display = "none";
    }
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    const { items, index } = this.state;
    const lastIndex = items.length - 1;
    const firstIndex = 0;
    if (items.length > 0) {
      if (e.key === "ArrowUp") {
        console.log("up");
        this.setState({ index: index === firstIndex ? lastIndex : index - 1 });
      } else if (e.key === "ArrowDown") {
        console.log("down");
        this.setState({ index: index === lastIndex ? firstIndex : index + 1 });
      }
    }
  });
}
{
  /* <div class="Suggestion">
<ul>
  <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
  <li>Java<span class="Suggestion__item--matched">Script</span></li>
  <li>Type<span class="Suggestion__item--matched">Script</span></li>
  <li>Pure<span class="Suggestion__item--matched">Script</span></li>
</ul>
</div> */
}

// 방향키 처리
// click
