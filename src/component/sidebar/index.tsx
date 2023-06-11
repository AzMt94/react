// import React, { useEffect, useState } from 'react';
// import { useStyles } from './styles';
// import {
//     Box, 
//     Drawer, 
//     Divider, 
//     IconButton, 
//     List, 
//     ListItem, 
//     ListItemButton, 
//     ListItemIcon, 
//     ListItemText, 
//     Typography, 
//     useTheme,
// } from '@mui/material'
// import {
//     ChevronLeftOutlined, 
//     ChevronRightOutlined,
//     LoginOutlined,
//     Logout
// } from '@mui/icons-material'

// import { useLocation, useNavigate } from 'react-router-dom';
// import FlexBetween from '../flex-between';
// import { navMenu } from '../../common/moks/navigate';
// import { tokens }  from '../../theme';
// import LogoWhite from '../../assets/images/sidebar/LogoWhite.png'
// import LogoBlack from '../../assets/images/sidebar/Logo.png'

// const SidebarComponent = (props: any) => {
//     const [active, setActive] = useState('')
//     const {isNonMobile, drowerWidth, isOpen, setIsOpen} = props
//     const classes = useStyles();
//     const {pathname} = useLocation();
//     const navigate = useNavigate();
//     const theme = useTheme()
//     const colors = tokens(theme.palette.mode)

//     useEffect(() => {
//         setActive(pathname.substring(1))
//     }, [pathname])

//     const renderNavMenu = navMenu.map((element): JSX.Element => {
//         return(
//             <ListItem key={element.id}>
//                 <ListItemButton  className={classes.navItem} onClick={() => navigate(`${element.path}`)}>
//                     <ListItemIcon>
//                         {element.icon}
//                     </ListItemIcon>
//                     <ListItemText>
//                         <Typography variant={'body1'}>{element.name}</Typography>
//                     </ListItemText>
//                 </ListItemButton>
//             </ListItem>
//         )
//     })

//     return (
//         <Box component='nav'>
//             {isOpen && (
//                 <Drawer 
//                 open={isOpen}
//                 onClose={() => setIsOpen(false)}
//                 variant='persistent'
//                 anchor='left'
//                 sx={{
//                     width:drowerWidth,
//                     '& .MuiDrawer-paper': {
//                         color: theme.palette.secondary.main,
//                         backgroundColor: theme.palette.primary.main,
//                         boxSizing: 'border-box',
//                         width: drowerWidth
//                     }
//                 }}
//                 >
//                     <Box width='100%' sx={{ borderBottom: `1px solid ${colors.borderColor}`}}>
//                         <Box>
//                             <FlexBetween>
//                                 <Box className={classes.brand}>
//                                     {theme.palette.mode === 'dark' ? <img src={LogoWhite} alt='LogoW'/> : <img src={LogoBlack} alt='LogoB'/>}
//                                 </Box>
//                                 {!isNonMobile && (
//                                     <IconButton onClick={() => setIsOpen(!isOpen)}>
//                                         <ChevronLeftOutlined />
//                                     </IconButton>
//                                 )}
//                             </FlexBetween>
//                         </Box>
//                         <List
//                             sx={{marginBottom: '55px'}}
//                         > 
//                             {renderNavMenu} 
//                         </List>
//                     </Box>
//                     <Box width='100%'>
//                         <List>
//                             <ListItem>
//                                 <ListItemButton className={classes.navItem}>
//                                     <ListItemIcon>
//                                         <Logout />
//                                     </ListItemIcon>
//                                     <ListItemText>
//                                         <Typography>Logout</Typography>
//                                     </ListItemText>
//                                 </ListItemButton>
//                             </ListItem>
//                         </List>
//                     </Box>
//                 </Drawer>
//             )}
//         </Box>
//     );
// };

// export default SidebarComponent;

import React, {useEffect, useState, FC} from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';
import {
    ChevronLeftOutlined,
    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between";
import {navMenu} from "../../common/moks/navigate";
import LogoWhite from '../../assets/images/sidebar/LogoWhite.png'
import LogoBlack from '../../assets/images/sidebar/Logo.png'
import { ISidebarProps } from '../../common/types/sidebar';


const SidebarComponent: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const renderNavMenu = navMenu.map((element): JSX.Element => {
        return (
            <ListItem key={element.id}>
                <ListItemButton onClick={() => navigate(`${element.path}`)} className={active === element.path ? `${classes.navItem} ${classes.active}` : classes.navItem}>
                    <ListItemIcon>
                        {element.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>{element.name}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                {theme.palette.mode === 'dark' ? <img src={LogoWhite} alt='LogoW'/> : <img src={LogoBlack} alt='LogoB'/>}
                                </Box>
                                {!isNonMobile && (
                                <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined />
                                </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography>Login</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;