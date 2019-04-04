import AppBar from '@material-ui/core/AppBar';
import ReactMarkdown from 'react-markdown';

class About extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-about">
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre à propos']}
        </AppBar>
        <ReactMarkdown source={hp['Contenu à propos']} className={classes.markdownabout} />
      </div>
    );
  }
}

export default About;
