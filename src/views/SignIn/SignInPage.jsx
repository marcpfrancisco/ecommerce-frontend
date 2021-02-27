import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Snackbar,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import "./signinpage.scoped.sass";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

const getIndex = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const SignInPage = () => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    setIsLoading(true);
    if (email === "" || password === "") {
      setShowAlert(true);
      setError("Fields are required");
      return;
    }

    console.log({ email, password });
    setIsLoading(false);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={6}>
          <h1 className="light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum
            eius sunt maxime fuga libero minima rerum alias, hic dolore quas in
            sint. Voluptatem eveniet quo necessitatibus optio soluta quisquam
            voluptatibus, sapiente minus laboriosam corporis natus consectetur
            obcaecati neque quidem itaque suscipit sed ipsam harum ab possimus.
            Sit, fugit facere!
          </h1>
        </Grid>

        <Grid className="right" item xs={12} md={6}>
          <Card>
            <CardContent>
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={showAlert}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="error">
                  {error}
                </Alert>
              </Snackbar>

              <Tabs
                value={tabValue}
                onChange={handleTabs}
                aria-label="simple tabs example"
              >
                <Tab label="Sign In" {...getIndex(0)} />
                <Tab label="Sign Up" {...getIndex(1)} />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <form className="form-fields" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <TextField
                      variant="outlined"
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="off"
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      variant="outlined"
                      label="Password"
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>

                  <div className="form-group">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      LOGIN
                    </Button>
                  </div>
                </form>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                GAGO KA!
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default SignInPage;
