export default function SearchInput ({ $target, initialState, onChange }){
  this.$form = document.createElement("form");
  this.$form.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$form);

  this.render = () => {
    console.log(this.state);
    this.$form.innerHTML = `<input type="text" class="SearchInput__input"placeholder="프로그램 언어를 입력하세요." value="${this.state}">`;
  };

  this.render();

  this.$form.addEventListener('keyup', (e) => {
    onChange(e.target.value);
  })
};