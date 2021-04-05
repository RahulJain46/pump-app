import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Accordion } from "@material-ui/core";
import clsx from "clsx";
import Fade from "@material-ui/core/Fade";
import { Link as DomLink } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import FilterPump from "./FilterPump";
import { links } from "../Config";
import { useHistory } from "react-router-dom";
import Image from "./../pump1.jpeg";
import PropertyList from "./List";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import DesktopHeader from "./common/DesktopHeader";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    width: "78%",
    float: "right"
  },
  propertyContainer: {
    backgroundColor: "whitesmoke"
  },
  headingProperty: {
    paddingBottom: 17,
    color: "#3562b3",
    backgroundColor: "whitesmoke",
    padding: "13px"
  },
  breadcrumdHeading: {
    position: "relative",
    top: "139px",
    left: "14px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#ac7818",
    color: "#e9ecef",
    position: "relative",
    top: "85px",
    fontSize: "27px"
  },
  listroot: {
    float: "left",
    width: "22%",
    top: "144px",
    position: "relative",
    backgroundColor: "whitesmoke"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  question: {
    paddingBottom: 17,
    color: "#3562b3"
  },
  option: {
    color: "currentcolor",
    backgroundColor: "antiquewhite"
  },
  optionAnswer: {
    color: "currentcolor",
    backgroundColor: "ivory"
  },
  loading: {
    position: "relative",
    top: 5,
    left: "47%"
  },
  pumpImage: {
    display: "inline-block",
    paddingBottom: "12px"
  },
  pumpDetail: {
    float: "right",
    width: "85%",
    backgroundColor: "whitesmoke",
    display: "inline-block",
    paddingBottom: "1px !important"
  },
  pumpContainer: {
    border: "1px solid #cfd8dc",
    boxShadow: "7px 5px #eeeeee",
    paddingTop: "16px",
    paddingBottom: "23px",
    height: "263px"
  },
  highlight: {
    backgroundColor: "#94a7c9"
  },
  imageSize: {
    height: "150px",
    width: "150px"
  },
  [theme.breakpoints.up("1107")]: {
    root: {
      position: "relative",
      top: 144
    }
  },
  [theme.breakpoints.down("1171")]: {
    listroot: {
      width: "12%"
    },
    root: {
      width: "88%"
    }
  },
  [theme.breakpoints.down("1627")]: {
    imageSize: {
      height: "100px",
      width: "100px"
    }
  },
  [theme.breakpoints.down("1107")]: {
    paper: {
      top: "0px"
    },
    root: {
      top: "0px",
      position: "relative"
    },
    listroot: {
      top: "0px"
    },
    breadcrumdHeading: {
      top: "0px"
    }
  },
  [theme.breakpoints.between("833", "1039")]: {
    pumpDetail: {
      width: "70%"
    }
  },
  [theme.breakpoints.down("1039")]: {
    pumpDetail: {
      width: "49%"
    },
    imageSize: {
      height: "80px",
      width: "76px"
    },
    listroot: {
      display: "none"
    },
    root: {
      width: "100%"
    }
  },
  [theme.breakpoints.down("477")]: {
    pumpContainer: {
      height: "403px"
    }
  },
  [theme.breakpoints.between("477", "695")]: {
    pumpContainer: {
      height: "351px"
    }
  }
}));

const Search = props => {
  const classes = new useStyles();
  const [pumpDescriptionArray, setPumpDescription] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let pumpDescriptionArray = [];
    const id = props.match.params.id;
    fetch(links.backendURL + "pumps/" + `${id}`)
      .then(pumpJson => {
        return pumpJson.json();
      })
      .then(pump => {
        pumpDescriptionArray.push(pump);
        setPumpDescription(pumpDescriptionArray);
        setLoading(false);
      });
  }, []);

  function handleClick(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <React.Fragment>
      <Paper className={classes.paper}>Pump Properties</Paper>
      <Breadcrumbs
        aria-label="breadcrumb"
        className={classes.breadcrumdHeading}
      >
        <Link color="inherit" href="/" onClick={handleClick}>
          Pump Overview
        </Link>
        <Typography color="textPrimary">Properties</Typography>
      </Breadcrumbs>
      <List className={classes.listroot}>
        <React.Fragment>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Performance
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" className={classes.highlight}>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Monitored Properties
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Additional Properties
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remote Access
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    File Transfer
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    File Transfer History
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Remote Commands
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Work Orders
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Logs
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      </List>

      <Card className={classes.root}>
        {pumpDescriptionArray.length != 0 && !loading ? (
          pumpDescriptionArray.map((question, index) => (
            <React.Fragment>
              <CardContent className={classes.pumpContainer}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.question}
                >
                  {question.pumpName}
                </Typography>
                <CardContent className={classes.pumpImage}>
                  <img src={Image} className={classes.imageSize} alt="logo" />
                </CardContent>

                <CardContent className={classes.pumpDetail}>
                  <Typography paragraph>
                    Model Number : {question.pumpDetail.modelNumber}{" "}
                  </Typography>
                  <Typography paragraph>
                    Serial Number : {question.pumpDetail.serialNumber}{" "}
                  </Typography>
                  <Typography paragraph>
                    Description : {question.pumpDetail.description}{" "}
                  </Typography>
                  <Typography paragraph>
                    Location : {question.pumpDetail.location}{" "}
                  </Typography>
                </CardContent>
              </CardContent>
              <CardContent className={classes.propertyContainer}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.headingProperty}
                >
                  Monitored Properties
                </Typography>
                {question.monitoredProperties.map(property => (
                  <PropertyList property={property} />
                ))}
              </CardContent>
            </React.Fragment>
          ))
        ) : (
          <div className={classes.loading}>
            <Fade
              in={loading}
              style={{
                transitionDelay: loading ? "0ms" : "0ms"
              }}
              unmountOnExit
            >
              <CircularProgress />
            </Fade>
          </div>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Search;
