import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

class GlobalStyle extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <style jsx global>{`
        body {
          font-family: 'Roboto';
        }
        .${classes.photo} blockquote {
          font-style: italic;
          text-align: justify;
          margin: 0;
        }
        .${classes.photo} blockquote p {
          margin: 0;
          line-height: 1.1em;
        }
        .${classes.photo} blockquote + p {
          text-align: right;
          margin: 10px 0 0;
          font-size: .8em;
        }
        .${classes.logo} p {
          margin: 0;
        }
        .${classes.logo} h1 {
          margin: 10px 0 0;
          font-size: 26px;
          color: ${green[500]};
        }
        .${classes.logo} h2,
        .${classes.logo} h3 {
          margin: 0;
        }
        .${classes.logo} h2 {
          font-size: 16px;
          color: ${grey[700]};
        }
        .${classes.logo} h3 {
          font-size: 12px;
          color: ${grey[700]};
        }
        .${classes.skillko} img {
          opacity: .5;
        }
        [role="button"].currentnav {
          border-left: 3px solid ${green[500]};
          background-color: ${grey[100]};
        }
        [role="button"].currentnav span {
          font-weight: 500;
        }
        .carousel {
          text-align: center;
          position: relative;
          opacity: 0;
          margin: 0 auto;
          -webkit-transition: opacity 0.5s;
          transition: opacity 0.5s;
        }
        .carousel .carousel-container-inner {
          margin: 0 auto;
          position: relative;
        }
        .carousel .carousel-viewport {
          overflow: hidden;
          white-space: nowrap;
          text-align: left;
        }
        .carousel .carousel-arrow {
          position: absolute;
          z-index: 1;
          color: white;
          border: 3px solid;
          border-radius: 50%;
          bottom: 23px;
          height: 32px;
          width: 32px;
          font-weight: 900;
          background: rgba(0, 0, 0, 0.15);
          padding: 0;
          cursor: pointer;
        }
        .carousel .carousel-arrow:focus {
          outline: none;
        }
        .carousel .carousel-arrow:before {
          font-size: 19px;
          display: block;
          margin-top: -2px;
        }
        .carousel .carousel-arrow:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .carousel .carousel-left-arrow {
          left: 23px;
        }
        .carousel .carousel-left-arrow:before {
          content: '<';
          padding-right: 2px;
        }
        .carousel .carousel-right-arrow {
          right: 23px;
        }
        .carousel .carousel-right-arrow:before {
          content: '>';
          padding-left: 2px;
        }
        .carousel .carousel-track {
          list-style: none;
          padding: 0;
          margin: 0;
          -ms-touch-action: pan-y pinch-zoom;
              touch-action: pan-y pinch-zoom;
        }
        .carousel .carousel-track .carousel-slide {
          display: inline-block;
          opacity: 0.7;
          -webkit-transition: opacity 0.5s ease-in-out;
          transition: opacity 0.5s ease-in-out;
          white-space: initial;
        }
        .carousel .carousel-track .carousel-slide > * {
          display: block;
        }
        .carousel .carousel-track .carousel-slide.carousel-slide-loading {
          background: rgba(204, 204, 204, 0.7);
        }
        .carousel .carousel-track .carousel-slide.carousel-slide-fade {
          position: absolute;
          left: 50%;
          -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
          opacity: 0;
        }
        .carousel .carousel-track .carousel-slide.carousel-slide-selected {
          opacity: 1;
          z-index: 1;
        }
        .carousel.loaded {
          opacity: 1;
        }
        .carousel .carousel-dots {
          list-style: none;
          padding: 0;
          margin: 0;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -30px;
          text-align: center;
        }
        .carousel .carousel-dots li {
          display: inline-block;
        }
        .carousel .carousel-dots button {
          border: 0;
          background: transparent;
          font-size: 1.1em;
          cursor: pointer;
          color: #CCC;
          padding-left: 6px;
          padding-right: 6px;
        }
        .carousel .carousel-dots button.selected {
          color: black;
        }
        .carousel .carousel-dots button:focus {
          outline: none;
        }
      `}</style>
    );
  }
}

export default GlobalStyle;
