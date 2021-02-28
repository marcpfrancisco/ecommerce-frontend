import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "constants/index";

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
  navLink: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const NavHeader = () => {
  const classes = useStyles();
  const links = NAV_LINKS;

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
          VonFactory PH
        </Typography>

        {links.map((link) => (
          <Button color="inherit" key={link.id}>
            <Link
              className={classes.navLink}
              to={link.path}
              key={link.id}
              replace
            >
              {link.label}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavHeader;
