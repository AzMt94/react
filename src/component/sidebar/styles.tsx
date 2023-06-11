// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles({
//     brand: {
//         display: 'flex',
//         alignItems: 'center', 
//         paddingTop: '10px',
//         paddingLeft: '50px',
//         marginBottom: '20px',
//         cursor: 'pointer'
//     },
//     navItem: {
//         '&:hover': {
//             backgroundColor: '#1900d5 !important',
//             color: '#fff',
//             borderRadius: '5px'
//         }
//     }
// })

import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return (
        {
            navBlock: {
                width: '100%',
                borderBottom: `1px solid ${colors.borderColor}`
            },
            brand: {
                display: 'flex',
                alignItems: 'center', 
                paddingTop: '10px',
                paddingLeft: '50px',
                marginBottom: '20px',
                cursor: 'pointer'
            },
            brandTitle: {
                color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT}`
            },
            navList: {
                marginBottom: '55px'
            },
            navItem: {
                '&:hover': {
                    backgroundColor: '#1900D5 !important',
                    color: '#fff',
                    borderRadius: '4px',
                    '& .MuiSvgIcon-root': {
                        color: `${colors.white.DEFAULT} !important`
                    }
                },
            },
            active: {
                backgroundColor: '#1900D5 !important',
                color: '#fff !important',
                borderRadius: '4px !important',
            }
        }
    )
})