import Suggestion from "./Suggestion.js";
import SelectedLanguages from "./SelectedLanguages.js";
import SearchInput from "./SearchInput.js";
import { getData } from "./api.js";

export default function App({ $target }) {
  this.state = {
    languages: [],
    index: 0,
    items: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    // update suggestion
    suggestion.setState({ items: this.state.items, index: this.state.index });
  };
  const languages = new SelectedLanguages({ $target });
  const input = new SearchInput({
    $target,
    onClick: async (value) => {
      // console.log(value);
      if (value.length > 0) {
        const items = await getData(value);
        this.setState({ items });
      }
    },
  });
  const suggestion = new Suggestion({ $target });
}
