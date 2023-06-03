import { useLocation } from "react-router-dom";
import { ILayout } from "../../common/types/layout";
import TopBarComponent from "../top_bar";
import { Box, useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useState } from "react";

const LayoutComponent = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation()
    const isNonMobile = useMediaQuery('min-width:600px')
    return (
        location.pathname === '/login' || location.pathname === '/register' 
            ? (
                <>
                    {children}
                </>
            ) : (
                <Box display={isNonMobile ? 'flex' : 'block'} width='100%' height='100%'>
                    <SidebarComponent 
                        isNonMobile={isNonMobile}
                        drowerWidth='250px'
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <Box>
                        <TopBarComponent />
                        {children}
                    </Box>
                </Box>
            )
    );
};

export default LayoutComponent;