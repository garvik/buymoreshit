import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { routePaths } from "./routes/routes";

const useStyles = makeStyles((theme: Theme) => ({
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

const TopNavigation: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link component={RouterLink} color="inherit" to={routePaths.home}>
            Buy More Shit
          </Link>
        </Typography>
        <Link component={RouterLink} color="inherit" to={routePaths.create}>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
