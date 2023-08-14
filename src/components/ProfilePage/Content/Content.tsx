import React, {ReactNode} from 'react';
import cls from './Content.module.scss'
import {useAppSelector} from "../../../hooks/redux";
import {SideBarOptions} from "../Sidebar/SideBarMenu/SideBarMenu";
import Deals from "./Deals/Deals";
import Settings from "./Settings/Settings";
import Dashboard from "./Dashboard/Dashboard";
import Favorites from "./Deals/Favorites";
import History from "./History";



const content: Record<SideBarOptions, ReactNode> = {
    'Dashboard': <Dashboard/>,
    'My Deals': <Deals/>,
    'Favorite Deals': <Favorites/>,
    'Settings': <Settings/>,
    'Activity History': <History/>,
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
