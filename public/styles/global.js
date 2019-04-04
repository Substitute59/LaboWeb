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
        [role="button"].currentnav {
          border-left: 3px solid ${green[500]};
          background-color: ${grey[100]};
        }
        [role="button"].currentnav span {
          font-weight: 500;
        }
        .${classes.skillko} img {
          opacity: .5;
        }
      `}</style>
    );
  }
}

export default GlobalStyle;
