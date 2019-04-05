import AppBar from '@material-ui/core/AppBar';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strapiUrl: this.props.strapiUrl,
      classes: this.props.classes,
      lang: this.props.lang,
    };
  }

  getHeader = formation => {
    const { classes, lang } = this.state;

    return <CardHeader disableTypography={true} className={classes.cardheader} title={lang === 'en' ? formation['Titre anglais'] : formation.Titre} />
  };

  getContent = formation => {
    const { classes, lang } = this.state;

    return <CardContent>
      <ReactMarkdown source={lang === 'en' ? formation['Description anglais'] : formation.Description} className={classes.markdownformation} />
    </CardContent>
  };

  getFooter = formation => {
    const { classes, lang } = this.state;

    return <CardActions className={classes.cardfooter}>
      <div>{formation['Année']} | {formation.Organisme} - {formation.Lieu}</div>
    </CardActions>
  };

  render() {
    const { classes, hp, formations } = this.props;

    return (
      <div id="section-education" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre formations']}
        </AppBar>
        {formations.map(formation => (
          <Card key={formation._id} className={classes.card}>
            {this.getHeader(formation)}
            {this.getContent(formation)}
            {this.getFooter(formation)}
          </Card>
        ))}
      </div>
    );
  }
}

export default Education;
