import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Config from "./propertyConfig";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  propertyBreak: {
    width: "100%",
    height: "22px"
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.root}>
        {Object.keys(props.property).map(propertyKey =>
          props.property[propertyKey].length > 0 ? (
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
                        {Config[propertyKey]}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {props.property[propertyKey]}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ) : (
            ""
          )
        )}
      </List>
      <Typography
        className={classes.propertyBreak}
        variant="h5"
        component="h2"
      ></Typography>
    </React.Fragment>
  );
}
