import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "11%",
    float: "left",
    top: "189px",
    position: "relative",
    backgroundColor: "#437389",
    color: "white",
    paddingTop: "11px",
    fontWeight: "200"
  },
  headerHeading: {
    fontSize: "19px",
    fontWeight: 400,
    paddingLeft: "17px",
    paddingBottom: "10px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  checkoutInput: {
    margin: "10px"
  },
  labelitem: {
    display: "block"
  },
  [theme.breakpoints.down("1124")]: {
    root: {
      width: "100%",
      top: "0px"
    }
  }
}));

export default function FilterPump(props) {
  const classes = useStyles();
  console.log(props);
  const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
    return (
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        style={{ margin: "8px" }}
        className="checkoutInput"
      />
    );
  };

  return (
    <div className={classes.root + ` filterPump `}>
      <Typography className={classes.headerHeading}>Filter</Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Structure</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails></ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Monitor Status</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="checkbox-label">
            {props.checkboxes.map(item => (
              <label
                key={item.key}
                className="labelitem"
                style={{ display: "block" }}
              >
                {item.label}
                <Checkbox
                  name={item.name}
                  checked={
                    props.checkedItems[item.name] === undefined
                      ? true
                      : props.checkedItems[item.name]
                  }
                  onChange={props.change}
                />
              </label>
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>More</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}
