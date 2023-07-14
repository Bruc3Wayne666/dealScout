import React, {ReactNode} from 'react';
import cls from './Content.module.scss'
import {useAppSelector} from "../../../hooks/redux";
import Deals from "./Deals/Deals";
import {SideBarOptions} from "../Sidebar/SideBarMenu/SideBarMenu";
import Settings from "./Settings/Settings";
import Dashboard from "./Dashboard/Dashboard";
import {Route} from "react-router";

// type Content = Record<SideBarOptions, ReactNode>

// const content: Content = {
//     'Dashboard': <Dashboard/>,
//     'My Deals': <Deals/>,
//     'Settings': <Settings/>,
//     'Activity History': <></>
// }

const Content = ({theme}: { theme: string }) => {
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    //TODO: MAKE AS ROUTES
    return (
        <div className={`${cls.content} ${cls[theme]}`}>
            {
                currentOption === SideBarOptions.DASHBOARD ? <Dashboard/>
                    : currentOption === SideBarOptions.MY_DEALS ? <Deals/>
                        : currentOption === SideBarOptions.SETTINGS ? <Settings/>
                            : <h1>HISTORY</h1>
            }
        </div>
    );
};

export default Content;
