import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link as DomLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { links } from "../../Config";
import { useForm } from "react-hook-form";
import Search from "../Search";

const useStyles = makeStyles(theme => ({
  home: {
    left: 0,
    right: 0
  },
  classNotice: {
    color: "#ff0068",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600
  },
  classLink: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    color: "#510c0c"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  error: {
    color: "#bf1650",
    "&::before": {
      content: "'⚠ '"
    }
  },
  notice: {
    marginBottom: 5,
    backgroundColor: "cornsilk"
  },
  topNotice: {
    textAlign: "center",
    fontSize: 20,
    color: "indigo",
    fontWeight: 600
  },
  booksLink: {
    textAlign: "center",
    fontSize: 20,
    color: "#920808",
    fontWeight: 600
  },
  messageText: {
    textAlign: "center",
    fontSize: 20,
    color: "#da2646",
    fontWeight: 600
  },
  toploginNotice: {
    textAlign: "center",
    fontSize: 20,
    color: "indigo",
    fontWeight: 600,
    display: "inline-block"
  },
  quizNotice: {
    textAlign: "center",
    fontSize: 20,
    color: "#11757f",
    fontWeight: 600,
    display: "inline-block"
  },
  quizNameNotice: {
    textAlign: "center",
    fontSize: 20,
    color: "red",
    fontWeight: 600,
    display: "inline-block"
  },
  kbcNotice: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    color: "#11757f"
  },
  loginNotice: {
    color: "red",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    display: "inline-block"
  },
  noticeText: {
    textAlign: "center",
    fontSize: 20
  },

  button: {
    backgroundColor: "#1976d2",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#303f9f"
    }
  },
  topicButton: {
    backgroundColor: "darkred",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#981212cf"
    }
  },
  bhajanButton: {
    backgroundColor: "#b04512",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#8a0000f0"
    }
  },
  kbcButton: {
    backgroundColor: "#127c28",
    color: "#fff",
    width: 188,
    fontSize: 18,
    "&:hover": {
      backgroundColor: "#8a0000f0"
    }
  },
  kbcResultButton: {
    backgroundColor: "#b04512",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#8a0000f0"
    }
  },
  ishtopdeshButton: {
    backgroundColor: "#1c008dbf",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#323dc1"
    }
  },
  form: {
    display: "inline-block"
  },
  feedbackButton: {
    backgroundColor: "#1976d2",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#303f9f"
    }
  },
  mobileInput: {
    display: "block",
    left: 0,
    right: 0,
    margin: "0 auto",
    marginBottom: 10,
    boxShadow: "4px 4px #eeeeee"
  },
  feedbackInput: {
    left: 0,
    right: 0,
    margin: "0 auto",
    marginBottom: 17,
    paddingBottom: 0,
    marginBottom: 17,
    boxShadow: "4px 4px #eeeeee"
  },
  formContainer: {
    textAlign: "center",
    marginTop: 18
  },
  message: {
    marginBottom: 14,
    fontSize: 18,
    fontWeight: 600
  },
  responseMessage: {
    color: "#d34242"
  },
  comment: {
    display: "block",
    textAlign: "center"
  },
  submitButton: {
    textAlign: "center"
  },
  mobilenumber: {
    textAlign: "center",
    display: "block"
  },
  home: {
    flexGrow: 1,
    position: "absolute",
    marginBottom: 73,
    width: "100%"
  },
  quizResultButton: {
    backgroundColor: "#aa1050e3",
    color: "#fff",
    width: 188,
    "&:hover": {
      backgroundColor: "#610c2b"
    }
  },
  quizitems: {
    maxWidth: "100%",
    padding: "0px ! important",
    paddingTop: "10px ! important"
  },
  [theme.breakpoints.down("1123")]: {
    home: {
      width: "100%",
      left: "0%",
      right: "0%",
      top: "0%",
      marginTop: "0px"
    },
    quizbutton: {
      display: "inline-block"
    },

    feedbackButton: {
      padding: "4px 6px",
      width: 111
    },
    button: {
      padding: "4px 6px",
      width: 185
    },
    form: {
      display: "inline-block"
    },
    mobileInput: {
      display: "block",
      left: 0,
      right: 0,
      margin: "0 auto",
      marginBottom: 10,
      boxShadow: "4px 4px #eeeeee"
    },
    feedbackInput: {
      left: 0,
      right: 0,
      margin: "0 auto",
      marginBottom: 17,
      paddingBottom: 0,
      marginBottom: 17,
      boxShadow: "4px 4px #eeeeee"
    },
    formContainer: {
      textAlign: "center",
      marginTop: 18
    },
    message: {
      marginBottom: 14,
      fontSize: 18,
      fontWeight: 600
    },
    responseMessage: {
      color: "#d34242"
    },
    comment: {
      display: "block",
      textAlign: "center"
    },
    submitButton: {
      textAlign: "center"
    },
    mobilenumber: {
      textAlign: "center",
      display: "block"
    },
    toploginNotice: {
      paddingLeft: 17
    },
    quizNotice: {
      paddingLeft: 17
    },
    quizNameNotice: {
      paddingLeft: 17
    },
    loginNotice: {
      paddingLeft: 17
    },
    toploginNotice: {
      paddingLeft: 17
    },
    message: {
      paddingLeft: 17
    }
  },
  [theme.breakpoints.down("361")]: {
    form: {
      display: "inline-block"
    },
    mobileInput: {
      display: "block",
      marginBottom: 10,
      boxShadow: "4px 4px #eeeeee"
    },
    feedbackInput: {
      paddingBottom: 0,
      marginBottom: 17,
      boxShadow: "4px 4px #eeeeee"
    },
    formContainer: {
      textAlign: "center",
      marginTop: 18
    },
    message: {
      marginBottom: 14,
      fontSize: 18,
      fontWeight: 600
    },
    comment: {
      display: "block",
      marginLeft: -33
    },
    submitButton: {
      textAlign: "center"
    },
    toploginNotice: {
      paddingLeft: 17
    },
    loginNotice: {
      paddingLeft: 17
    },
    toploginNotice: {
      paddingLeft: 17
    },
    message: {
      paddingLeft: 17
    }
  }
}));

function Home() {
  const classes = useStyles();
  const date = new Date();
  const [toggleButton, setToggleButton] = useState(false);

  const day =
    new Date().getDate() > 9
      ? new Date().getDate()
      : "0" + new Date().getDate();
  const year = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async data => {
    let userOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    await fetch(links.backendURL + "comments", userOptions);
    setToggleButton(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.home + " home"}>
      <Search />
    </div>
  );
}

export default Home;
