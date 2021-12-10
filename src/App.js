import Searchbar from './components/Searchbar';
import { Component } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader/Loader';
import Initial from './components/Initial';
import Button from './components/Button';
import NotFound from './components/NotFound/NotFound';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    hits: [],
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState.searchQuery',prevState.searchQuery)
    // console.log('this.state.searchQuery',this.state.searchQuery)
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;

    if (prevSearch !== nextSearch) {
      this.searchAPI();
    }
  }

  handleSearchbarSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  searchAPI() {
    const BASE_URL =
      'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';
    const API_KEY = '23976074-1864ef446645d9fee251ba638';

    this.setState({ status: 'pending', hits: [], total: null });
    setTimeout(() => {
      return fetch(
        `${BASE_URL}&q=${this.state.searchQuery}&page=${this.state.page}&key=${API_KEY}`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              `Ошибка сервиса, изображение по запросу '${this.state.searchQuery}' не найдено`,
            ),
          );
        })
        .then(hits => this.setState({ ...hits, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }, 500);

    if (this.state.total === 0) {
      this.setState({ status: 'rejected' });
    }
  }

  onScroll = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  handleLoadmoreButton = () => {
    this.setState({ page: this.state.page + 1 });
    // console.log('клик',this.state.page )
    this.searchAPI();
    this.onScroll();
  };

  render() {
    const { status, hits, searchQuery, total } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {status === 'idle' && <Initial />}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && <h1>{this.state.error}</h1>}
        {status === 'resolved' && (
          <>
            <ImageGallery images={hits} />
            <Button onClick={this.handleLoadmoreButton} />
          </>
        )}
        {total === 0 && <NotFound searchQuery={searchQuery} />}
        <ToastContainer transition={Slide} />
      </div>
    );
  }
}
