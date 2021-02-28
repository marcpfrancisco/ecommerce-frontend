import {
  Backdrop,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Hidden,
  makeStyles,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
  withWidth,
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
  signUpTextFields: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
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
      {value === index && <>{children}</>}
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

  const [valuesSignIn, setValuesSignIn] = useState({
    email: "",
    password: "",
  });

  const [valuesSignUp, setValuesSignUp] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    showPassword: false,
    isChecked: false,
  });

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [tabValue, setTabValue] = useState(0);

  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;

    setValuesSignIn((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;

    setValuesSignUp((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickShowPassword = () => {
    setValuesSignUp({
      ...valuesSignUp,
      showPassword: !valuesSignUp.showPassword,
    });
  };

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setValuesSignUp({ ...valuesSignUp, [name]: checked });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = valuesSignIn;

    try {
      setIsLoading(true);
      if (email === "" || password === "") {
        setShowAlert(true);
        setError("Fields are required");
        setIsLoading(false);
        return;
      }

      console.log({ email, password });
    } catch (e) {
      setError("Failed to login!");
    }

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
        <Hidden only="sm" xsDown>
          <Grid className="left" item xs={12} md={6}>
            <Typography variant="h5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              cum eius sunt maxime fuga libero minima rerum alias, hic dolore
              quas in sint. Voluptatem eveniet quo necessitatibus optio soluta
              quisquam voluptatibus, sapiente minus laboriosam corporis natus
              consectetur obcaecati neque quidem itaque suscipit sed ipsam harum
              ab possimus. Sit, fugit facere!
            </Typography>
          </Grid>
        </Hidden>

        <Grid className="right" item xs={12} md={6}>
          <Card raised>
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
                indicatorColor="primary"
                centered
              >
                <Tab label="Sign In" {...getIndex(0)} />
                <Tab label="Sign Up" {...getIndex(1)} />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <form
                  className="form-fields"
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h6" align="center">
                    Sign in to your Account
                  </Typography>

                  <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    name="email"
                    value={valuesSignIn.email}
                    onChange={handleChangeSignIn}
                  />

                  <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    name="password"
                    value={valuesSignIn.password}
                    onChange={handleChangeSignIn}
                  />

                  <Button type="submit" variant="contained" color="primary">
                    Sign In
                  </Button>
                </form>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <form className="form-fields" noValidate autoComplete="off">
                  <Typography variant="h6" style={{ margin: "0 23px" }}>
                    Create your VonFactory Account
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        label="Firstname"
                        type="text"
                        name="firstname"
                        size="small"
                        value={valuesSignUp.firstname}
                        onChange={handleChangeSignUp}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        variant="outlined"
                        label="Lastname"
                        type="text"
                        name="lastname"
                        size="small"
                        value={valuesSignUp.lastname}
                        onChange={handleChangeSignUp}
                      />
                    </Grid>

                    <Grid item md={11} xs={11}>
                      <TextField
                        variant="outlined"
                        label="Email Address"
                        type="email"
                        name="email"
                        size="small"
                        fullWidth
                        value={valuesSignUp.small}
                        onChange={handleChangeSignUp}
                      />
                    </Grid>

                    <Grid item>
                      <FormControl component="fieldset">
                        <FormGroup row>
                          <TextField
                            variant="outlined"
                            label="Password"
                            name="password"
                            size="small"
                            style={{ marginRight: "17px" }}
                            type={
                              valuesSignUp.showPassword ? "text" : "password"
                            }
                            value={valuesSignUp.password}
                            onChange={handleChangeSignUp}
                          />

                          <TextField
                            variant="outlined"
                            label="Confirm Password"
                            name="confirmpassword"
                            size="small"
                            type={
                              valuesSignUp.showPassword ? "text" : "password"
                            }
                            value={valuesSignUp.confirmpassword}
                            onChange={handleChangeSignUp}
                          />
                        </FormGroup>

                        <FormHelperText>
                          Use 8 or more characters with a mix of letters,
                          numbers & symbols
                        </FormHelperText>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormGroup row>
                          <FormControlLabel
                            control={
                              <Checkbox
                                name="showPassword"
                                color="primary"
                                checked={isChecked.showPassword}
                                onClick={handleClickShowPassword}
                                onChange={handleCheckBox}
                                onMouseDown={handleMouseDownPassword}
                              />
                            }
                            label="Show Password"
                          />
                        </FormGroup>
                      </FormControl>
                    </Grid>

                    <Grid item xs={9} style={{ marginLeft: "-6px" }}>
                      <Button color="primary">Sign in instead</Button>
                    </Grid>

                    <Grid item style={{ marginLeft: "-8px" }}>
                      <Button type="submit" variant="contained" color="primary">
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Backdrop
        className={classes.backdrop}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default withWidth()(SignInPage);
