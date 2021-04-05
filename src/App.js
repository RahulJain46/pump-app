import React, { useEffect, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
const HomePage = lazy(() => import("./components/Home/Home"));

const AppBar = lazy(() => import("./components/common/AppBar"));

const PageNotFound = lazy(() => import("./components/PageNotFound"));
const PumpsDescription = lazy(() => import("./components/PumpsDescription"));

const useStyles = makeStyles(theme => ({
  [theme.breakpoints.down("1124")]: {
    container: {
      width: "100%",
      left: "0%",
      right: "0%",
      top: "0%"
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pumpdescription/:id" component={PumpsDescription} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </Suspense>
    </div>
  );
}

export default App;
