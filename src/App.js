// import logo from './logo.svg';
import './styles.css';
import Searchbar from './components/Searchbar';
import { Component } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
// import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    // images: [],
    hits: [],
  };

  handleSearchbarSubmit = query => {
    this.setState({ query });

    // this.setState( ({images}) => {
    //   return {images: [...images, ...this.state.hits],}});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const BASE_URL =
        'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';
      const API_KEY = '23976074-1864ef446645d9fee251ba638';

      return fetch(
        `${BASE_URL}&q=${this.state.query}&page=${this.state.page}&key=${API_KEY}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(hits => this.setState({ ...hits }))
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          transition={Slide}
        />
        <ImageGallery images={this.state.hits} />
      </div>
    );
  }
}
