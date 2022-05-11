import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";
import SearchInput from "./SearchInput.js";
import { getData } from "./api.js";

export default function App({ $target }) {
  this.state = {
    languages: [],
    index: 0,
    items: [],
    inputValue: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    // update suggestion
    selected.setState({ langs: this.state.languages });
    suggestion.setState({
      items: this.state.items,
      index: this.state.index,
      inputValue: this.state.inputValue,
    });
  };
  const selected = new SelectedLanguages({ $target });
  const input = new SearchInput({
    $target,
    onClick: async (value) => {
      if (value.length > 0) {
        const items = await getData(value);
        this.setState({ items, inputValue: value });
      }
    },
  });
  const suggestion = new Suggestion({
    $target,
    onSelect: (index) => {
      const target = this.state.items[index];
      const currentItems = this.state.languages;
      if (target && !currentItems.includes(target)) {
        this.setState({ languages: [...currentItems, target] });
      }
    },
  });
}
