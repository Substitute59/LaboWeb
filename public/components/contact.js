import AppBar from '@material-ui/core/AppBar';

class Contact extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-contact" className={classes.fullheight}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre contact']}
        </AppBar>
      </div>
    );
  }
}

export default Contact;
