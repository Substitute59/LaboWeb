import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Icon from '@mdi/react'
import { mdiTwitterCircle, mdiGithubCircle, mdiLinkedin } from '@mdi/js'

class Contact extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-contact" className={`${classes.fullheight} ${classes.section}`}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre contact']}
        </AppBar>
        <Paper className={classes.paper}>
          <List component="nav">
            <ListItem button component="a" href={`mailto:${hp.Email}`} target="_blank">
              <ListItemIcon className={classes.socialicon}>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText className={classes.contacttxt} primary={hp.Email} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.socialicon}>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText className={classes.contacttxt} primary={hp['Téléphone']} />
            </ListItem>
            <ListItem button component="a" href={hp.Twitter} target="_blank">
              <ListItemIcon className={classes.socialicon}>
                <Icon path={mdiTwitterCircle}
                  size={1} />
              </ListItemIcon>
              <ListItemText className={classes.contacttxt} primary={hp.Twitter} />
            </ListItem>
            <ListItem button component="a" href={hp.Github} target="_blank">
              <ListItemIcon className={classes.socialicon}>
                <Icon path={mdiGithubCircle}
                  size={1} />
              </ListItemIcon>
              <ListItemText className={classes.contacttxt} primary={hp.Github} />
            </ListItem>
            <ListItem button component="a" href={hp.LinkedIn} target="_blank">
              <ListItemIcon className={classes.socialicon}>
                <Icon path={mdiLinkedin}
                  size={1} />
              </ListItemIcon>
              <ListItemText className={classes.contacttxt} primary={hp.LinkedIn} />
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default Contact;
