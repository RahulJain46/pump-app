import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    margin: "8px",
    float: "right",
    marginTop: "-57px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  [theme.breakpoints.down("600")]: {
    formControl: {
      position: "relative",
      top: 100
    }
  },
  [theme.breakpoints.up("1121")]: {
    formControl: {
      top: 100,
      marginRight: 58
    }
  }
}));

let pumps = [
  {
    id: "weew-wew-asa",
    pumpName: "Saint Mary Street Pump Station - CNTRF104M824322",
    pumpStatus: "Running",
    pumpDetail: {
      modelNumber: "ANTRF10",
      serialNumber: "CNTRF104M824322",
      description: "Pump for station 86753309",
      location: "Needham, MA"
    },
    monitoredProperties: [
      {
        propertyName: "Discharge",
        currentValue: "14.62",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quality: "GOOD"
      },
      {
        propertyName: "1a",
        currentValue: "7.16",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quantity: "GOOD"
      }
    ]
  },
  {
    id: "weew-wews-asa",
    pumpName: "Saint Mary Street Pump Station - RTRGRM09177XA432",
    pumpStatus: "Running",
    pumpDetail: {
      modelNumber: "CNTRF10",
      serialNumber: "RTRGRM091",
      description: "Pump for station 86753309",
      location: "Needham, MA"
    },
    monitoredProperties: [
      {
        propertyName: "Discharge",
        currentValue: "14.62",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quality: "GOOD"
      },
      {
        propertyName: "1a",
        currentValue: "7.16",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quantity: "GOOD"
      }
    ]
  },
  {
    id: "weew-wews-asas",
    pumpName: "Saint Mary Street Pump Station - SBMRSBW1150X890083",
    pumpStatus: "Stopped",
    pumpDetail: {
      modelNumber: "BW1150",
      serialNumber: "SBMRSBW1150",
      description: "Pump for station 86753309",
      location: "Needham, MA"
    },
    monitoredProperties: [
      {
        propertyName: "Discharge",
        currentValue: "14.62",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quality: "GOOD"
      },
      {
        propertyName: "1a",
        currentValue: "7.16",
        units: "",
        lastUpdated: "2019-10-21 22:12:44",
        quantity: "GOOD"
      }
    ]
  }
];

export default function SortPumps(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl + " SimpleSelect"}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.sortValue}
          onChange={props.change}
        >
          <MenuItem value="Model">Model</MenuItem>
          <MenuItem value="Serial">Serial</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
