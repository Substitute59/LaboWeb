import ReactMarkdown from 'react-markdown';
import ScrollspyNav from 'react-scrollspy-nav';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import BarChartIcon from '@material-ui/icons/BarChart';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SchoolIcon from '@material-ui/icons/School';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import TranslateIcon from '@material-ui/icons/Translate';

class DrawerContent extends React.Component {
  closeDrawer = () => {
    if (this.props.handleDrawerToggle) {
      this.props.handleDrawerToggle();
    }
  };

  render() {
    const { classes, hp, strapiUrl, lang } = this.props;

    return (
      <div>
        <ScrollspyNav scrollTargetIds={['home', 'section-about', 'section-skills', 'section-work', 'section-experience', 'section-education', 'section-contact']} activeNavClass="currentnav" scrollDuration="200">
          <div className={classes.logo}>
            <Link href="#home" onClick={this.closeDrawer}>
              <img src={strapiUrl+hp.Logo.url} alt={hp.Titre} />
            </Link>
            <ReactMarkdown source={hp['Titre du site']} />
          </div>
          <Divider />
          <List component="nav" className={classes.nav}>
            <ListItem button component="a" href="#section-about" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <PersonIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre à propos']} />
            </ListItem>
            <ListItem button component="a" href="#section-skills" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <BarChartIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre compétences']} />
            </ListItem>
            <ListItem button component="a" href="#section-work" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <DesktopMacIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre projets']} />
            </ListItem>
            <ListItem button component="a" href="#section-experience" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <TrendingUpIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre expériences']} />
            </ListItem>
            <ListItem button component="a" href="#section-education" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <SchoolIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre formations']} />
            </ListItem>
            <ListItem button component="a" href="#section-contact" className={classes.navlink} onClick={this.closeDrawer}>
              <ListItemIcon>
                <EmailIcon className={classes.navicon} />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.navlinktext }} primary={hp['Titre contact']} />
            </ListItem>
          </List>
        </ScrollspyNav>
        <Divider/>
        <List className={classes.nav}>
          <ListItem button component="a" href={strapiUrl + hp.CV.url} className={classes.navlink} target="_blank">
            <ListItemIcon>
              <DescriptionIcon className={classes.navicon} />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.navlinktext }} primary="CV" />
          </ListItem>
          <ListItem button component="a" href={lang === 'en' ? '/index' : '/en'} className={classes.navlink}>
            <ListItemIcon>
              <TranslateIcon className={classes.navicon} />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.navlinktext }} primary={lang === 'en' ? 'French / Français' : 'Anglais / English'} />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default DrawerContent;
