const SearchInput = ({ $target, initialState }) => {
  this.$form = document.createElement("form");
  this.$form.className = "search";
  this.state = "";

  $target.appendChild(this.form);

  this.render = () => {
    this.$form.innerHTML = `<input type="text" placeholder="오 짱신기해" value="test"/>`;
  };

  this.render();
};

export default SearchInput;
