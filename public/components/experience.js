import AppBar from '@material-ui/core/AppBar';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strapiUrl: this.props.strapiUrl,
      classes: this.props.classes,
      lang: this.props.lang,
    };
  }

  getHeader = (xp) => {
    const { classes, strapiUrl, lang } = this.state;

    return <CardHeader
      avatar={
        xp.Logo ? <img src={strapiUrl + xp.Logo.url} alt={xp.Entreprise} className={classes.xpimg} /> : null
      }
      className={classes.cardheader}
      title={
        <div className={classes.xpheader}>
          <div className={classes.xpcompany}>{xp.Entreprise}</div>
          <div className={classes.xpjob}>{lang === 'en' ? xp['Poste anglais'] : xp.Poste}</div>
        </div>
      }
    />
  };

  getContent = (xp) => {
    const { classes, lang } = this.state;

    return <CardContent>
      <ReactMarkdown source={lang === 'en' ? xp['Description anglais'] : xp.Description} className={classes.markdownxp} />
    </CardContent>
  };

  getFooter = (xp) => {
    const { classes, lang } = this.state;

    return <CardActions className={classes.cardfooter}>
      <div>{lang === 'en' ? xp['Période anglais'] : xp['Période']} | {lang === 'en' ? xp['Lieu anglais'] : xp.Lieu}</div>
    </CardActions>
  };

  render() {
    const { classes, hp, experiences } = this.props;

    return (
      <div id="section-experience" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre expériences']}
        </AppBar>
        {experiences.map(xp => (
          <Card key={xp._id} className={classes.card}>
            {this.getHeader(xp)}
            {this.getContent(xp)}
            {this.getFooter(xp)}
          </Card>
        ))}
      </div>
    );
  }
}

export default Experience;
