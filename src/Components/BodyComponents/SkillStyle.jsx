import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../Theme";

export const useStyles=makeStyles((theme)=>({
       
    skillCont:{
        backgroundColor:Theme.colors.primary1,
        overflowX: 'hidden',
        color:'white'
    },

    title: {
        textAlign: 'Center',
        marginTop: '50px',
        marginBottom: '50px',
    },
    icon: {
        height: '50px',
    },
    name: {
        textAlign: 'Center',
    },
    container: {
        marginBottom: '100px',
        paddingLeft: '15%',
        paddingRight: '15%',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
            marginBottom: '75px', 
            
        },
    },
    


}))