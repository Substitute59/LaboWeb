import PropTypes from 'prop-types';

import styles from '../styles/theme';
import GlobalStyle from '../styles/global';

import DrawerContent from '../components/drawerContent';
import Home from '../components/home';
import About from '../components/about';
import Skills from '../components/skills';
import Work from '../components/work';
import Experience from '../components/experience';
import Education from '../components/education';
import Contact from '../components/contact';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

class Site extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, strapiUrl, lang } = this.props;
    const { hp, domains, skills } = this.props.apiDatas;

    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden mdUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <DrawerContent classes={classes} hp={hp} strapiUrl={strapiUrl} handleDrawerToggle={this.handleDrawerToggle} />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <DrawerContent classes={classes} hp={hp} strapiUrl={strapiUrl} />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.burger}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Home classes={classes} hp={hp} strapiUrl={strapiUrl} />
          <About classes={classes} hp={hp} />
          <Skills classes={classes} hp={hp} lang={lang} domains={domains} skills={skills} strapiUrl={strapiUrl} />
          <Work classes={classes} hp={hp} lang={lang} />
          <Experience classes={classes} hp={hp} lang={lang} />
          <Education classes={classes} hp={hp} lang={lang} />
          <Contact classes={classes} hp={hp} lang={lang} />
        </main>
        <GlobalStyle classes={classes} />
      </div>
    );
  }
}

Site.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Site);