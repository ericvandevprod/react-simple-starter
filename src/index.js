import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        selectedVideo: videos[0],
        videos: videos
      });
    });
  }
  render() {
    return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos} />
        </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
