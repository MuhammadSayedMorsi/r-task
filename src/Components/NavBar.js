import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




import DropDown from './DropDown'
// styledComponentsLibrary
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components'

// wrapheader
const WrapHeader = styled.div`
  /* adjust_the_header */
  header {
    display: flex;
    justify-content: flex;
    align-items: center;
    height: auto;
    padding-top: 5px;
    background-color: black;
    .MuiToolbar-gutters {
      padding-right: 0;
      padding-left: 0;
      width: 992px;
      margin-top: -9px;
      min-height: auto;
    }
    .makeStyles-sectionDesktop-8 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .wrapper__nav__bar__icons {
    width: 300px;
    div {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
  }
`
//wrapTitle
const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// arrowDown
const ArrowButton = styled.a`
  svg {
    font-size: 25px;
    margin-top: 5px;
  }
`
// site title
const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  `
// srarch icon
const IconSearch = styled.div`
  background-color: blue;
  width: 35px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  svg {
    font-size: 1rem;
  }

`

// style_span_track
const SpanTrack = styled.a`
  font-size: 13px;
  cursor: pointer;
  border-right: 1px solid #fff;
  /* height: 20px; */
  border-left: 1px solid #fff;
  padding-left: 10px;
  padding-right: 10px;
`

// bottomNav
const BottomNav = styled.div`
  height: 50px;
  margin-top: 21px;
  display: flex;
  align-items: center;
  width: 76%;
  justify-content: flex-start;
`

const TitleBottom = styled.a`
  font-size: 20px;
  img {
    width: 80%;
    height: 100%;
  }
`


const ShopingCart = styled.div`
  .MuiIconButton-label {
    border-left: 1px solid #fff;
    border-radius: 0;
    padding: 0 10px 0 10px;
    height: 20px;
  }
    svg {
      color: #fff;
    }
`


const SearchIconBottomNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-left: 330px;
  div {
    margin-right: 10px;
  }
`

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '.5em',
    [theme.breakpoints.up('md')]: {
      width: 540,
      height: 9
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <WrapHeader>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>

            <WrapTitle>
              <Typography className={classes.title} variant="h6" noWrap>
                <Title> Zain</Title>
              </Typography>
              <ArrowButton><ArrowDropDownIcon /></ArrowButton>
            </WrapTitle>
            <div className={classes.search}>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,

                }}
                inputProps={{ 'aria-label': 'search' }}
              >
              </InputBase>
              <IconSearch>
                <SearchIcon />
              </IconSearch>
            </div>

            <div className="wrapper__nav__bar__icons">
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit">

                  <span>ع</span>

                </IconButton>
                <SpanTrack>Track Orders</SpanTrack>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <ShopingCart>
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                </ShopingCart>
              </div>
            </div>
          </Toolbar>
          <BottomNav>
            <TitleBottom>
              <img src="https://www.jo.zain.com/Style%20Library/en-us/Images/assets/logos/zainSilverLogo.png" />
            </TitleBottom>
            <DropDown />
            <SearchIconBottomNav>
              <div><SearchIcon /></div>
              <div>login</div>
            </SearchIconBottomNav>
          </BottomNav>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </WrapHeader>
  );
}
