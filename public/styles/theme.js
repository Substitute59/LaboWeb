import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

const drawerWidth = 300;

const styles = theme => ({
  "@global": {
    body: {
      backgroundImage: 'url(/static/images/pattern.png)',
    },
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  logo: {
    padding: 20,
    backgroundColor: grey[100],
  },
  content: {
    position: 'relative',
    flexGrow: 1,
  },
  burger: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    padding: 20,
    zIndex: 20,
    backgroundColor: grey[700],
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    color: '#fff',
  },
  photo: {
    position: 'relative',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% top',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '-88px',
    }
  },
  baseline: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.3)',
    fontSize: 28,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      padding: 40,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
    },
  },
  markdownhome: {
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  nav: {
    padding: 0,
  },
  navlink: {
    display: 'flex',
    padding: '10px 20px',
    alignItems: 'center',
    color: grey[700],
    textDecoration: 'none',
    '&:hover': {
      borderLeft: `3px solid ${green[500]}`,
    }
  },
  navlinktext: {
    color: grey[700],
  },
  navicon: {
    marginRight: 0,
    color: green[400],
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: -88,
    },
  },
  appbar: {
    fontSize: 36,
    color: '#fff',
    textTransform: 'uppercase',
    padding: 25,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: 88,
      zIndex: 5,
      marginBottom: 100,
    },
  },
  fullheight: {
    height: '100vh',
  },
  markdownskills: {
    fontSize: 11,
  },
  hobby: {
    textAlign: 'center',
    padding: 10,
  },
  hobbyicon: {
    color: green[500],
  },
  hobbytitle: {
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  skillko: {
    textAlign: 'center',
  },
  skillok: {
    fontWeight: 700,
    textAlign: 'center',
  },
  skillimg: {
    width: 100,
  },
  skilltitle: {
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  paper: {
    margin: 25,
    padding: 16,
    [theme.breakpoints.down('sm')]: {
      margin: 15,
    },
  },
  card: {
    margin: 25,
    [theme.breakpoints.down('sm')]: {
      margin: 15,
    },
  },
  cardheader: {
    fontSize: 24,
    color: green[500],
    borderBottom: `1px solid ${grey[300]}`,
  },
  cardfooter: {
    fontSize: '.875rem',
    padding: 12,
    backgroundColor: grey[100],
  },
  xpimg: {
    width: 75,
  },
  xpheader: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  xpcompany: {
    fontSize: 24,
    color: green[500],
  },
  xpjob: {
    color: grey[700],
    [theme.breakpoints.up('md')]: {
      paddingLeft: 50,
    },
  },
  projectimg: {
    maxWidth: '100%',
    height: 200,
  },
  projecttitle: {
    fontSize: 18,
    fontWeight: 500,
    color: green['500'],
  },
  markdownxp: {
    wordBreak: 'break-all',
  },
  socialicon: {
    height: 24,
    color: '#000',
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
  contacttxt: {
    wordBreak: 'break-all',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      '& > span': {
        fontSize: 13,
      },
    },
  },
  modalheader: {
    borderBottom: `1px solid ${grey[300]}`,
    margin: 0,
    padding: 20,
    fontSize: 24,
    color: green['500'],
  },
  modalcontent: {
    margin: 0,
    padding: 20,
  },
  modalactions: {
    borderTop: `1px solid ${grey[300]}`,
    margin: 0,
    padding: 20,
  },
  modalbutton: {
    color: green['500'],
  },
  modalimg: {
    maxWidth: '100%',
    width: 600,
  },
});

export default styles;
