import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";

import { fetchLanguages } from "./api.js";
export default function App({ $target }) {
  this.state = {
    fetchLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
      this.state = {
        ...this.state,
        ...nextState
      }
      suggestion.setState({
        items: this.state.fetchLanguages
      })
  };

  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (keyword.length === 0){
        this.setState({
          fetchLanguages: [],
        })
      } else {
        const languages = await fetchLanguages(keyword)
        this.setState({
          fetchLanguages: languages,
        })
      }
      
    }
  })


  const suggestion = new Suggestion({
    $target,
    initialState: {
      items: []
    }
  })
};