import ImageGallery from 'react-image-gallery';
import React from 'react';
import Constants from '../../helper/Constants';

class Slideshow extends React.Component {
    constructor() {
        super();
        this.state = {
          showIndex: false,
          showBullets: true,
          infinite: true,
          showThumbnails: true,
          showFullscreenButton: true,
          showGalleryFullscreenButton: true,
          showPlayButton: true,
          showGalleryPlayButton: true,
          showNav: true,
          isRTL: false,
          slideDuration: 450,
          slideInterval: 2000,
          slideOnThumbnailOver: false,
          thumbnailPosition: 'left',
          showVideo: {},
          useWindowKeyDown: true,
          images:[]
        };
    }
    componentDidMount() {

        fetch(Constants.aboutus)
            .then((resp) => resp.json())
            .then((result) => {
                let gallery = []
                result.data[0].gallery.forEach(element => {
                  if (element.directus_files_id.type === "image/jpeg") {
                    let part = {
                      // id: element.id,
                      original: element.directus_files_id.data.thumbnails[7].url,
                      thumbnail: element.directus_files_id.data.thumbnails[0].url,
                    };
                    gallery.push(part);
                  }
                });
                this.setState({
                    images: gallery
                });

            },
                (error) => {
                    this.setState({
                        error,
                    });
                }
            );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
          // refresh setInterval
          this._imageGallery.pause();
          this._imageGallery.play();
        }
      }
    
      _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
      }
    
      _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
      }
    
      _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
      }
    
      _onPause(index) {
        console.debug('paused on index', index);
      }
    
      _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
      }
    
      _onPlay(index) {
        console.debug('playing from index', index);
      }
    
      _handleInputChange(state, event) {
        this.setState({[state]: event.target.value});
      }
    
      _handleCheckboxChange(state, event) {
        this.setState({[state]: event.target.checked});
      }
    
      _handleThumbnailPositionChange(event) {
        this.setState({thumbnailPosition: event.target.value});
      }
    
    //   _getStaticImages() {
    //     let images = [];
    //     for (let i = 2; i < 12; i++) {
    //       images.push({
    //         original: `${i}.jpg`,
    //         thumbnail:`${i}t.jpg`
    //       });
    //     }
    //     return images;
    //   }
    
      _resetVideo() {
        this.setState({showVideo: {}});
    
        if (this.state.showPlayButton) {
          this.setState({showGalleryPlayButton: true});
        }
    
        if (this.state.showFullscreenButton) {
          this.setState({showGalleryFullscreenButton: true});
        }
      }
    
      _toggleShowVideo(url) {
        // this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
        this.setState({
          // showVideo: this.state.showVideo,
          showVideo: !Boolean(this.state.showVideo[url]),
        });
    
        if (this.state.showVideo[url]) {
          if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: false});
          }
    
          if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: false});
          }
        }
      }
    
      _renderVideo(item) {
        return (
          <div>
            {
              this.state.showVideo[item.embedUrl] ?
                <div className='video-wrapper'>
                    <a href
                        className='close-video'
                      onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                    >
                    </a>
                    <iframe title='myiframe'
                      width='560'
                      height='315'
                      src={item.embedUrl}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe>
                </div>
              :
                <a href onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
                  <div className='play-button'></div>
                  <img className='image-gallery-image' src={item.original} alt='aboutus' />
                  {
                    item.description &&
                      <span
                        className='image-gallery-description'
                        style={{right: '0', left: 'initial'}}
                      >
                        {item.description}
                      </span>
                  }
                </a>
            }
          </div>
        );
      }

    render() {

        return (
            <ImageGallery 
          ref={i => this._imageGallery = i}
          items={this.state.images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />
        );
    }

} export default Slideshow;