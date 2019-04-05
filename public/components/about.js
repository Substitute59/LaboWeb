import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';

class About extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-about" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre à propos']}
        </AppBar>
        <Paper className={classes.paper}>
          <ReactMarkdown source={hp['Contenu à propos']} className={classes.markdownabout} />
        </Paper>
      </div>
    );
  }
}

export default About;
