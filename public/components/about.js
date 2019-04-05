import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import * as Icons from '@material-ui/icons';

class About extends React.Component {
  render() {
    const { classes, hp, hobbies, lang } = this.props;

    return (
      <div id="section-about" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre à propos']}
        </AppBar>
        <Paper className={classes.paper}>
          <ReactMarkdown source={hp['Contenu à propos']} className={classes.markdownabout} />
          <Grid container justify="space-around" spacing={16}>
            {hobbies.map(hobby => {
              let Icon = Icons[hobby.Icone];
              return <Grid item key={hobby._id} className={classes.hobby}>
                <Icon fontSize="large" className={classes.hobbyicon} />
                <div className={classes.hobbytitle}>{lang === 'en' ? hobby['Titre anglais'] : hobby.Titre}</div>
              </Grid>
            })}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default About;
