import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import SlideShow from './SlideShow'

// styled_component.
import styled from 'styled-components'
import CardUi from './CardUi'

// cutomize_the_tabs
const WrapperTabs = styled.div`
  margin-top: 50px;
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  //customize the tabs size
  .makeStyles-root-124 {
    width: 90vw;
    margin-top: 117px;
  }
  header {
    background-color: #fff;
    border-radius: 100px;
    width: 570px;
    margin: 0 auto 45px auto;
  }

  .PrivateTabIndicator-colorPrimary-147 {
    display: none !important;
  }

  //selected__one
  .MuiTab-textColorPrimary.Mui-selected {
    background: blue;
    color: #fff;
    font-weight: bold;
    border-bottom: none;
    border-radius: 100px;
  }
`
const Content = styled.div`
  h1 {
    font-weight: 700;
    margin-bottom: 126px;
    font-size: 2.5rem;
    margin-top: 22px;
  }
  p {
    line-height: 2.6;
  }
`


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <WrapperTabs>
      <Content>
        <h1> Postpaid Go Packages​</h1>
        <p>Get introduced to Zain's most flexible bundles & offers, Zain Postpaid Service! Specially designed to best meet your lifestyle.

        Learn more about postpaid plans, packages, promotions and get the   chance to reach out for your ideal lifestyle.

        Know more about the packages and offers through our Official social Media channels or through the chat icon on the bottom of the page.​</p>
      </Content>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Go PostPaid Plans" {...a11yProps(0)} />
            <Tab label="Go Family" {...a11yProps(1)} />
            <Tab label="Go Governorates" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <SlideShow toggle={props.toggle} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CardUi toggle={props.toggle} title="Go Family " details="Local internet (4G/LTE): 15 GB" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CardUi toggle={props.toggle} title="Go Governorates" details="Zain minutes In zone: 9000 " />
        </TabPanel>
      </div>
    </WrapperTabs>

  );
}
