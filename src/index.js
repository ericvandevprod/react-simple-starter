import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyC2zHCthFRN06NcDOX4f46WZk9pu8Ju4rg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('puppies');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos: videos
      });
    });
  }

  render() {
    const throttleSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 200);

    return (
        <div>
          <SearchBar onSearchTermChange={throttleSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              currentVideo={this.state.selectedVideo}
              videos={this.state.videos} />
        </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
