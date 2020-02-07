import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppleIcon from '@material-ui/icons/Apple';
import styled from 'styled-components'
import Select from './Select'
import MobileCardShow from './MobileCardShow.js'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
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
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

// styled-components
const WrapperTabs = styled.div`
  margin-top: 23px;

  .MuiAppBar-root {
    width: 27%;
    margin: 0 auto;
    border-radius: 10px;
  }
  .MuiTab-root {
    min-width: 60px;
  }
  header {
    background-color: transparent;
    box-shadow: none;
  }
  button {
    width: 50px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    border: 1px solid #E3E3E3;
    margin-right: 10px;
    span {
      color: #000;
      font-weight: bold;
      font-size: 13px;
    }
  }
  .MuiTab-textColorInherit.Mui-selected {
    background-color: #54B8E9;
    color: #fff;
    span {
      color: #fff;
    }
  }

  // remove the indicator
  .PrivateTabIndicator-colorSecondary-148 {
    background-color: transparent;
  }
  .d__on_the_same_line {
    display: flex;
    margin-left: 100px;
  }
  .wrapper-for-mobile {
    margin-right: 20px;
  }
`

const ContentWrapper = styled.div`
  margin: 50px 100px;
  div {
    display: flex;
    justify-content: space-between;

  }
  .content__wrap {
      display: flex;
      justify-content: center;
      align-items: baseline;
      div {
        width: 130px;
      }
      span {
        color: #9F9FA8;
        font-size: 12px;
      }
    }

    .MuiInput-underline:before {
      border-bottom: none;
    }

    .makeStyles-margin-198 {
      width: 125px;
    }
    .MuiSelect-icon {
      border-left: 2px solid #E3E3E3;

    }
`

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <WrapperTabs>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="All" aria-label="phone" {...a11yProps(0)} />
            <Tab icon={<AppleIcon />} aria-label="favorite" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <ContentWrapper>
            <div>
              <h3>22 results found</h3>
              <div className="content__wrap">
                <span>Sort By Name</span>
                <Select />
              </div>
            </div>
          </ContentWrapper>

          <div className="d__on_the_same_line">
            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>

            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>

            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="d__on_the_same_line">
            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>

            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>

            <div className="wrapper-for-mobile">
              <MobileCardShow />
            </div>
          </div>
        </TabPanel>

      </div>
    </WrapperTabs>
  );
}
