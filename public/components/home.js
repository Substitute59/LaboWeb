import ReactMarkdown from 'react-markdown';

class Home extends React.Component {
  render() {
    const { classes, hp, strapiUrl } = this.props;

    return (
      <div id="home" className={classes.photo} style={{ backgroundImage: `url(${strapiUrl}${hp.Photo.url})` }}>
        <div className={classes.baseline}>
          <ReactMarkdown source={hp.Baseline} className={classes.markdownhome} />
        </div>
      </div>
    );
  }
}

export default Home;
