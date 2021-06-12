import React ,{ useState } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { CssBaseline, Drawer} from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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
 const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };
  return (
    <div>
     <div className="top_head">
        <div className={classes.root}>
          <CssBaseline />
          <AppBar>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <img src="https://www.prestigeconstructions.com/images/logo.png" />
              </Typography>

              <ul className="navigation-menu mobBlock">
                <li>
                  <a href="/#">
                    <span>Project Highlights</span>
                  </a>
                </li>
              
                <li>
                  <a href="/#">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>Amenities</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>FloorPlan</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>Price Plan</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <span>Location</span>
                  </a>
                </li>
              </ul>
              <div>
                <IconButton
                  onClick={handleDrawer}
                  edge="start"
                  className={`${classes.menuButton} `}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div style={{ height: "100vh", padding: "20px 40px", width: "415px" }}>
              <IconButton
                onClick={() => {
                  setOpen(false);
                }}
                color="primary"
                style={{ position: "absolute", right: "0", top: "-3px" }}
              >
                <CloseOutlined color="primary" />
              </IconButton>
              <div>
                <div className="demo-list">
                  <ul>
                    <li>
                      <a href="/#">About Us </a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact us </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Luxury Homes</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Ready Homes</span>
                      </a>
                    </li>
                    <li>
                      <a className="phone_url" href="07411782406">
                        <span className="phone_no">07411782406</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      </div>

 
      
    </div>
  )
}
export default Navbar;