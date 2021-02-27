import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
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
          Clothing Store
        </Typography>

        {links.map((link) => (
          <Button color="inherit">
            <Link className={classes.navLink} to={link.path} key={link.id}>
              {link.label}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavHeader;
