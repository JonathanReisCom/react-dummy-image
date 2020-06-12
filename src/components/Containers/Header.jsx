import React from 'react';
// nodejs library that concatenates classes
// import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// Spring for animations
import { useSpring, animated } from 'react-spring';
// @material-ui/icons
// import Menu from '@material-ui/icons/Menu';

// My Components
// import Bold from 'components/Bold';

// Images
// import headerImage from '../../public/img/bg-header-002.jpg';

// Style
import theme from '../../common/Theme';
const localStyle = {
  header: {
    background: theme.gradients.black,
    height: 200,
    overflow: 'hidden',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',

    marginTop: '90px', // Header
    marginBottom: '70px', // Section

    [theme.breakpoints.down('xs')]: {
      paddingBottom: '10vh',
      justifyContent: 'center',
    },
  },
  containerLeft: {
    height: '30vh',
    marginTop: '5vh',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: 'fit-content',
    },
  },
  containerRight: {
    textAlign: 'center',
    height: '30vh',
    marginTop: '5vh',
  },
  containerBottom: {
    height: '10vh',
    marginTop: '15vh',
    [theme.breakpoints.down('xs')]: {
      marginTop: '5vh',
    },
  },
  logoImage: {
    width: '100%',
    objectFit: 'contain',
    border: '1px solid red',
  },
  devImage: {
    height: '100%',
    objectFit: 'contain',
  },
  h1Variant: {
    color: 'white',
    textAlign: 'center',
    background:
      '-webkit-linear-gradient(#9DCCEF, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
  },
  h2Variant: {
    color: 'white',
    textAlign: 'center',
  },
};
const useStyles = makeStyles(localStyle);

const Component = (props) => {
  const classes = useStyles();
  const [transform, setTransform] = React.useState('translate3d(0, 0px, 0)');
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  const texts = {
    profileName: 'Jonathan Reis',
    profileDesc: 'Um desenvolvedor criativo',
    // profileDesc: 'A creative developer',
    profileDescBottom: 'Eu imagino e desenvolvo coisas úteis',
    // profileDescBottom: 'I imagine and develop useful things',
  };

  // Parallax Start
  React.useEffect(() => {
    window.addEventListener('scroll', resetTransform);
    return function cleanup() {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0, ' + windowScrollTop + 'px, 0)');
  };
  // Parallax End

  return (
    <animated.div
      style={{
        // backgroundImage: `url(${headerImage})`,
        transform: transform,
        ...fade,
      }}
      className={classes.header}>
      <Container maxWidth="md" disableGutters className={classes.container}>
        <Grid container>
          {/* Title */}
          {/* <Grid item xs={12} sm={6} md={6} className={classes.containerLeft}>
            <Typography variant={'h1'} className={classes.h1Variant}>
              <Bold>{texts.profileName}</Bold>
            </Typography>
            <Typography variant={'h3'} className={classes.h2Variant}>
              {texts.profileDesc}
            </Typography>
          </Grid> */}

          {/* Image */}
          {/* <Grid item xs={12} sm={6} md={6} className={classes.containerRight}>
            <animated.img
              style={fade}
              src={image}
              alt={`${texts.profileName} Header Image`}
              className={classes.devImage}
            />
          </Grid> */}
        </Grid>

        {/* Bottom */}
        {/* <Grid container className={classes.containerBottom}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant={'h3'} className={classes.h2Variant}>
              {texts.profileDescBottom}
            </Typography>
          </Grid>
        </Grid> */}
      </Container>
    </animated.div>
  );
};

export default Component;
