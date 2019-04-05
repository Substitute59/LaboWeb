import AppBar from '@material-ui/core/AppBar';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strapiUrl: this.props.strapiUrl,
      classes: this.props.classes,
    };
  }

  getSkillsByDomain = domain => {
    const domainSkills = this.props.skills.filter(skill => {
      return skill.domaine._id == domain
    });
    const { classes, strapiUrl } = this.state;

    return <Grid container spacing={16}>
      {domainSkills.map(skill => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={skill._id} className={skill.Acquis ? classes.skillok : classes.skillko}>
          <img src={strapiUrl + skill.Logo.url} alt={skill.Titre} className={classes.skillimg} />
          <div className={classes.skilltitle}>{skill.Titre}</div>
        </Grid>
      ))}
    </Grid>
  };

  render() {
    const { classes, hp, lang, domains } = this.props;

    return (
      <div id="section-skills" className={classes.section}>
        <AppBar position="static" className={classes.appbar}>
          {hp['Titre compétences']}
        </AppBar>
        <ReactMarkdown source={hp['Texte compétences']} className={classes.markdownskills} />
        {domains.map(domain => (
          <Card key={domain._id} className={classes.card}>
            <CardHeader disableTypography={true} className={classes.cardheader} title={lang === 'en' ? domain['Titre anglais'] : domain.Titre} />
            <CardContent>
              {this.getSkillsByDomain(domain._id)}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

export default Skills;
