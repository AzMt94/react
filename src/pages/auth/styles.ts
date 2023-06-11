import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minWidth: '300px'
    },
    form: {
        flex: 1,
        marginTop: '50px'
    },
    incitingText: {
        color: '#1900d5',
        marginLeft: '10px',
        cursor: 'pointer'
    }
})