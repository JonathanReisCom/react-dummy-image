import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// My Components
import SEO from '../common/Seo';
import GoogleAnalytics from '../common/GoogleAnalytics';
import TopMenuBar from '../components/TopMenuBar/TopMenuBar';
import Header from '../components/Containers/Header';
import Section from '../components/Containers/Section';

// Logger
import Logger from '../common/Logger';
const log = new Logger({ label: 'Index', enabled: true, important: true });

// Firebase
// import API from '../common/FirebaseApi';
// const Api = new API();

// Style
import theme from '../common/Theme';
const localStyle = {
  typo: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative',
    width: '100%',
  },
  paper: {
    padding: 16,
  },
};
const useStyles = makeStyles(localStyle);

const Index = (props) => {
  const classes = useStyles();

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    log.show('useEffect');
  }, []);

  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <TopMenuBar />
      <Header />

      <Section raised>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>Teste Jonathan</h1>
        <h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </h1>
      </Section>
    </>
  );
};

export default Index;
