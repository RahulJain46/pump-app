import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import { links } from "../Config";
import { Link as DomLink } from "react-router-dom";
import SortPumps from "./sortPumps";
import FilterPump from "./FilterPump";
import ApplicationBar from "./common/ApplicationBar";
import Paper from "@material-ui/core/Paper";
import Image from "./../pump1.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    display: "block",
    width: "89%",
    float: "right"
  },
  searchPump: { margin: 8, width: "80%", top: "0px" },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#ac7818",
    color: "#e9ecef",
    position: "relative",
    top: "85px",
    fontSize: "27px",
    top: "-65px"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  list: {
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
    width: "30%",
    display: "inline-block"
  },
  imageSize: {
    height: "200px",
    width: "200px"
  },
  pumpDetail: {
    float: "right",
    width: "65%",
    display: "inline-block"
  },
  pumpContainer: {
    border: "1px solid #cfd8dc",
    boxShadow: "7px 5px #eeeeee",
    paddingTop: "16px",
    paddingBottom: "0px"
  },
  [theme.breakpoints.up("1119")]: {
    root: {
      position: "relative",
      top: 144
    },
    test: {
      top: 164
    },
    pumpDetail: {
      width: "60%"
    },
    paper: {
      top: "86px !important"
    },
    searchPump: {
      top: 100
    }
  },
  [theme.breakpoints.down("1124")]: {
    paper: {
      top: "0px"
    },
    test: {
      display: "none"
    },
    root: {
      width: "100%"
    },
    pumpDetail: {
      width: "50%"
    }
  },
  [theme.breakpoints.down("600")]: {
    paper: {
      fontSize: "16px",
      marginBottom: "-83px",
      marginTop: "-6px"
    },
    test: {
      display: "none"
    },
    root: {
      width: "100%",
      position: "relative",
      top: 147
    },
    imageSize: {
      height: "100px",
      width: "100px"
    },
    pumpDetail: {
      width: "50%"
    },
    searchPump: {
      top: 100
    },
    pumpContainer: {
      paddingBottom: "92px !important"
    }
  },
  [theme.breakpoints.down("382")]: {
    imageSize: {
      height: "76px",
      width: "76px"
    },
    pumpDetail: {
      width: "45%"
    },
    pumpContainer: {
      paddingBottom: "120px !important"
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

const Search = props => {
  const classes = new useStyles();

  const [pumps, setPumps] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortValue, setSortValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [pumpStatus, setPumpStatus] = useState(objList);
  const [checkboxes, setCheckboxes] = useState(checkBoxes);
  const [search, setSearch] = useState("");

  const fetchUsers = () => {
    const pumpArray = [];
    setLoading(true);
    fetch(links.backendURL + `pumps`)
      .then(pumpsJson => {
        return pumpsJson.json();
      })
      .then(pumpsJson => {
        pumpsJson.map(pump => {
          pumpArray.push(pump);
        });
        setPumps(pumpArray);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    filterPumps();
  }, [pumps]);

  useEffect(() => {
    searchPump();
  }, [search]);

  function sortPump(pumpList, keyWord) {
    let key = keyWord === "Model" ? "modelNumber" : "serialNumber";
    setFilterList(
      pumpList.sort((a, b) => {
        if (a.pumpDetail[key] > b.pumpDetail[key]) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  }

  function filterPumps() {
    setFilterList(
      pumps.filter(pump => {
        return pumpStatus[pump.pumpStatus] === true;
      })
    );
  }
  const handleChange = event => {
    sortPump(pumps, event.target.value);
    setSortValue(event.target.value);
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

  const searchPump = () => {
    setFilterList(
      pumps.filter(pump => {
        return pump.pumpName.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <React.Fragment>
      <ApplicationBar
        change={filterHandleChange}
        checkboxes={checkboxes}
        checkedItems={checkedItems}
      />
      <Paper className={classes.paper}>Pump Overview</Paper>
      <div className={classes.test}>
        <FilterPump
          change={filterHandleChange}
          checkboxes={checkboxes}
          checkedItems={checkedItems}
        />
      </div>
      <TextField
        className={classes.searchPump}
        id="standard-full-width"
        placeholder="Search Pump"
        fullWidth
        margin="normal"
        onChange={e => setSearch(e.target.value)}
        InputLabelProps={{
          shrink: true
        }}
      />
      <SortPumps change={handleChange} sortValue={sortValue} />
      <Card className={classes.root + " PumpList"}>
        {filterList.length != 0 && !loading ? (
          filterList.map((list, index) => (
            <React.Fragment>
              <DomLink to={`/pumpdescription` + `/${list._id}`}>
                <CardContent className={classes.pumpContainer}>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.list}
                  >
                    {list.pumpName}
                  </Typography>
                  <CardContent className={classes.pumpImage}>
                    <img src={Image} className={classes.imageSize} alt="logo" />
                  </CardContent>

                  <CardContent className={classes.pumpDetail}>
                    <Typography paragraph>
                      Model Number : {list.pumpDetail.modelNumber}{" "}
                    </Typography>
                    <Typography paragraph>
                      Serial Number : {list.pumpDetail.serialNumber}{" "}
                    </Typography>
                    <Typography paragraph>
                      Description : {list.pumpDetail.description}{" "}
                    </Typography>
                    <Typography paragraph>
                      Location : {list.pumpDetail.location}{" "}
                    </Typography>
                  </CardContent>
                  <Typography paragraph>
                    Pump Status : {list.pumpStatus}{" "}
                  </Typography>
                </CardContent>
              </DomLink>
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
