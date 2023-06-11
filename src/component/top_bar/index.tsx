import React, {FC, useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode, DarkMode, Search, NotificationsNone, MenuOutlined} from '@mui/icons-material';
import {ColorModeContex} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from '../flex-between';
import { ITopBarProps } from '../../common/types/top-bar';


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContex)
    const classes = useStyles()
    const {isOpen, setIsOpen} = props

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant='h3'>Добро пожаловать, Alex</Typography>
                </FlexBetween>
                <Box display='flex'>
                <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
                    <IconButton className={classes.themeIcon}>
                        {theme.palette.mode === 'dark' ? (<DarkMode />) : (<LightMode />)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNone />
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <Search />
                    </IconButton>
                    <InputBase className={classes.searchInput} placeholder='Поиск'/>
                </Grid>
            </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.root} sx={{ flexGrow: 1 }}>
        //     
            
        // </Box>
    );
};

export default TopBarComponent;