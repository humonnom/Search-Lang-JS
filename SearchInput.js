export default function SearchInput({ $target, onClick }) {
  //init
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.value = "";
  $target.appendChild(this.$element);

  this.render = () => {
    // console.log("SearchInput");
    this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.value}">`;
  };

  this.render();

  this.$element.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  this.$element.addEventListener("keyup", (e) => {
    const ignoreList = [
      "Enter",
      "ArrowRight",
      "ArrowLeft",
      "ArrowDown",
      "ArrowUp",
    ];
    if (!ignoreList.includes(e.key)) {
      onClick(e.target.value);
    }
  });
}
{
  /* <form class="SearchInput">
  <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">
</form> */
}
