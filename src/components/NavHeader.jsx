import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          Clothing Store
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavHeader;
