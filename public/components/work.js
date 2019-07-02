import AppBar from '@material-ui/core/AppBar';
import ReactMarkdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Carousel from 'react-img-carousel';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strapiUrl: this.props.strapiUrl,
      classes: this.props.classes,
      lang: this.props.lang,
      open: false
    };
  }

  toggleGallery = (index = false) => {
    this.setState({ open: index });
  };

  getProject = project => {
    const { classes, strapiUrl, lang } = this.state;
    let counter = 0;

    return <Card>
      <CardMedia
        className={classes.projectimg}
        image={strapiUrl + project.Image[project.Image.length - 1].url}
        title={project.Titre}
      />
      <CardContent>
        <div className={classes.projecttitle}>{project.Titre}</div>
        <ReactMarkdown source={lang === 'en' ? project['Description courte anglais'] : project['Description courte']} className={classes.markdowwork} />
        <Dialog
          onClose={() => this.toggleGallery()}
          aria-labelledby="dialog-title"
          open={this.state.open === project.Ordre}
        >
          <DialogTitle disableTypography id="dialog-title" className={classes.modalheader}>
            {project.Titre}
          </DialogTitle>
          <DialogContent className={classes.modalcontent}>
            <Carousel width="100%" height="100%" slideWidth="100%" slideHeight="auto">
              {project.Image.map(image => {
                counter++;
                return <img key={image._id} src={strapiUrl + image.url} alt={`Image ${counter}/${project.Image.length}`} className={classes.modalimg} />
              })}
            </Carousel>
          </DialogContent>
          <DialogActions className={classes.modalactions}>
            <Button onClick={() => this.toggleGallery()} className={classes.modalbutton}>
              {lang === 'en' ? 'Close' : 'Fermer'}
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
      <CardActions className={classes.cardfooter}>
        <IconButton href={project.Lien} target="_blank">
          <LaunchIcon />
        </IconButton>
        <IconButton onClick={() => this.toggleGallery(project.Ordre)}>
          <PhotoLibraryIcon />
        </IconButton>
      </CardActions>
    </Card>
  };

  render() {
    const { classes, hp, projects } = this.props;

    return (
      <div id="section-work" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre projets']}
        </AppBar>
        <div className={classes.card}>
          <Grid container spacing={16}>
            {projects.map(project => (
              <Grid item xs={12} sm={6} md={4} key={project._id} className={classes.project}>
                {this.getProject(project)}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Work;
