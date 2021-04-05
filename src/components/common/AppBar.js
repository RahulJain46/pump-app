import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import DesktopHeader from "./DesktopHeader";
import FilterPump from "../FilterPump";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appbar: {
    flexGrow: 1
  },
  barheader: {
    backgroundColor: "#234f64"
  },
  loginButton: {
    padding: "0px 0px",
    minWidth: 54,
    paddingBottom: 2,
    paddingTop: 2
  },
  login: {
    position: "absolute",
    right: 15,
    padding: 0
  },
  barheading: {
    position: "absolute",
    right: 0,
    left: 0,
    textAlign: "center",
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#ac7818",
    color: "#e9ecef"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    zIndex: 1
  },
  title: {
    flexGrow: 1
  },
  mobile: {
    width: "100%"
  },
  [theme.breakpoints.between("345", "xs")]: {
    barheading: {
      fontSize: 15,
      left: -17
    },
    loginButton: {
      padding: "0px 0px",
      minWidth: 54,
      paddingBottom: 2,
      paddingTop: 2,
      fontSize: 12
    },
    login: {
      position: "absolute",
      right: 15,
      padding: 0
    },
    appbar: {
      marginRight: -9
    },
    mobile: {
      width: "100%"
    }
  },
  [theme.breakpoints.down("345")]: {
    barheading: {
      fontSize: 15,
      left: -17
    },
    loginButton: {
      padding: "0px 0px",
      minWidth: 54,
      paddingBottom: 2,
      paddingTop: 2,
      fontSize: 12
    },
    login: {
      position: "absolute",
      right: 15,
      padding: 0
    },
    appbar: {
      marginRight: -14
    },
    mobile: {
      width: "100%"
    }
  }
}));

const checkBoxes = [
  {
    name: "Running",
    key: "running",
    label: "Running"
  },
  {
    name: "Stopped",
    key: "stopped",
    label: "Stopped"
  }
];

const objList = {
  Running: true,
  Stopped: true
};

export default function appBar() {
  const classes = useStyles();
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [checkedItems, setCheckedItems] = useState({});
  const [checkboxes, setCheckboxes] = useState(checkBoxes);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterList, setFilterList] = useState([]);
  const [pumpStatus, setPumpStatus] = useState(objList);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  function filterPumps() {
    setFilterList(
      questions.filter(pump => {
        return pumpStatus[pump.pumpStatus] === true;
      })
    );
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const filterHandleChange = event => {
    pumpStatus[event.target.name] = event.target.checked;
    setPumpStatus({ ...pumpStatus, [event.target.name]: event.target.checked });
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
    filterPumps();
  };

  function handleNavClose(nav) {
    history.push(`${nav}`);
    setAnchorEl(null);
  }
  return (
    <div className={classes.appbar}>
      {width > "1120" ? (
        <DesktopHeader />
      ) : (
        <React.Fragment>
          <AppBar position="static" className={classes.barheader}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                open={Boolean(anchorEl)}
                onClick={handleClick}
                aria-haspopup="true"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <div className={classes.mobile}></div>
                <FilterPump
                  change={filterHandleChange}
                  checkboxes={checkboxes}
                  checkedItems={checkedItems}
                  device="mobile"
                />
              </Menu>

              <Typography
                variant="h4"
                className={classes.barheading}
                gutterBottom
              >
                Pumps Application
              </Typography>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
    </div>
  );
}
