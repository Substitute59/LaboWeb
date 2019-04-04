import AppBar from '@material-ui/core/AppBar';

class Education extends React.Component {
  render() {
    const { classes, hp } = this.props;

    return (
      <div id="section-education">
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre formations']}
        </AppBar>
      </div>
    );
  }
}

export default Education;
