import AppBar from '@material-ui/core/AppBar';

class Experience extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-experience">
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre expériences']}
        </AppBar>
      </div>
    );
  }
}

export default Experience;
