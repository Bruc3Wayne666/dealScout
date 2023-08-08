import React, {ReactNode} from 'react';
import cls from './Content.module.scss'
import {useAppSelector} from "../../../hooks/redux";
import Deals from "./Deals/Deals";
import {SideBarOptions} from "../Sidebar/SideBarMenu/SideBarMenu";
import Settings from "./Settings/Settings";
import Dashboard from "./Dashboard/Dashboard";
import Favorites from "./Deals/Favorites";


const content: Record<SideBarOptions, ReactNode> = {
    'Dashboard': <Dashboard/>,
    'My Deals': <Deals/>,
    'Favorite Deals': <Favorites/>,
    'Settings': <Settings/>,
    'Activity History': <h1>HISTORY</h1>,
}

const Content = ({theme}: { theme: string }) => {
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    //TODO: MAKE AS ROUTES
    return (
        <div className={`${cls.content} ${cls[theme]}`}>
            {
                //TODO: LOOKS STRANGE, CHANGE IF POSSIBLE
                content[currentOption as keyof typeof content]
            }
        </div>
    );
};

export default Content;
