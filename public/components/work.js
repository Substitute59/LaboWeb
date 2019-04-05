import AppBar from '@material-ui/core/AppBar';

class Work extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-work" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre projets']}
        </AppBar>
      </div>
    );
  }
}

export default Work;
