import Searchbar from './components/Searchbar';
import { Component } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RenderImages from './components/RenderImages';
export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <RenderImages searchQuery={this.state.searchQuery} />
        <ToastContainer transition={Slide} />
      </div>
    );
  }
}
