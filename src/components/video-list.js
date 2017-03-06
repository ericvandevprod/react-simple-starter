import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.filter((video) => video.etag !== props.currentVideo.etag).map((video) => {
    return <VideoListItem
              onVideoSelect={props.onVideoSelect}
              key={video.etag}
              video={video} />
  });
  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  )
};

export default VideoList;