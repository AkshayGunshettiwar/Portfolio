import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import { Decorator } from "../common/commonComponent";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import DrawerComponent from "./DrawerComponent";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';   
import FacebookIcon from '@material-ui/icons/Facebook';
import Typed from "react-typed";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Skill", Id: "Skill" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id='Headder'>
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />

      <Box className={classes.Headercontaier}>
      
                <Box className={classes.iconContainer}>
                <a href="https://github.com/AkshayGunshettiwar" target="_blank" style={{color:'white'}}><GitHubIcon className={classes.icon}/></a>
                <a href="https://www.linkedin.com/in/akshay-gunshettiwar-0575721b2/" target="_blank" style={{color:'#0a66c2'}}><LinkedInIcon className={classes.icon}/></a>
                <a href="https://www.instagram.com/akshaygunshettiwar_/" target="_blank" style={{color:'#c32aa3'}}><InstagramIcon className={classes.icon}/></a>
                <a href="https://twitter.com/NammMeKyaRakha?s=08" target="_blank" style={{color:'#1da1f2'}}><TwitterIcon className={classes.icon}/></a>
                <a href="https://www.facebook.com/akshay.gunshettiwar" target="_blank" style={{color:'#1877f2'}}><FacebookIcon className={classes.icon}/> </a>
                </Box>
      <Typography varinat='h3' component='h2' className={classes.headerDesc}>
          Akshay Gunshettiwar
        </Typography>
        <Typography varinat='h3' component='h3' className={classes.headerTitle}>
          I'm a <span style={{ paddingRight: "5px" }}></span>
          <Typed
            strings={[" Learner,", " Web Developer,"]}
            typeSpeed={30}
            backSpeed={50}
            loop
          />
        </Typography>
        

        {Decorator({
          label: "About Us",
          withIcon: true,
          Icon: <ArrowDownwardRoundedIcon />,
        })}
      </Box>
    </Box>
  );
}
