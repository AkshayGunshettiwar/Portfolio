import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './SkillStyle';
import html from '../images/html5.png'
import css from '../images/css3.png'
import bootstrap from '../images/bootstrap.png'
import javascript from '../images/jspic.png'
import react from '../images/react.jpg'
import java from '../images/java.jpg'
import spring from '../images/spring.png' 
import mysql from '../images/mysql.png'
import github from '../images/git.png'

function Skill() {

    const classes=useStyles();
    return (
        <Box Container className={classes.skillCont} id="Skill">
        <Grid container>
                <Grid item xs={12}><h2 className={classes.title}>My Skills</h2></Grid>
            </Grid>

            <Grid className={classes.container} container justify="center" spacing={4}>
        
                <Grid  item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={html} alt="" />
                    <p className={classes.name}>HTML 5</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={css} alt="" />
                    <p className={classes.name}>CSS 3</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={bootstrap} alt="" />
                        <p className={classes.name}>Bootstrap</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={javascript} alt="" />
                        <p className={classes.name}>JavaScript</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={react} alt="" />
                        <p className={classes.name}>React</p>
                    </Box>
                </Grid>
                {/*<Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={node} alt="" />
                        <p className={classes.name}>Node.js</p>
                    </Box>
                </Grid>*/}
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={java} alt="" />
                        <p className={classes.name}>Java</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={spring} alt="" />
                        <p className={classes.name}>Spring</p>
                    </Box>
                </Grid>
                
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={github} alt="" />
                        <p className={classes.name}>Git/Github</p>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Box display="flex"  flexDirection="column" alignItems='center'>
                        <img className={classes.icon} src={mysql} alt="" />
                        <p className={classes.name}>MySql</p>
                    </Box>
                </Grid>
            {/*<Grid item xs={4} sm={2}>
                <Box display="flex"  flexDirection="column" alignItems='center'>
                    <img className={classes.icon} src={mongo} alt="" />
                    <p className={classes.name}>MongoDB</p>
                </Box>
                </Grid>*/}
                
            </Grid>
        
        </Box>
    );
}

export default Skill;