import React from 'react';
import cls from './SideBarMenu.module.scss'
import SideBarMenuOption from "./SideBarMenuOption";
import { useAppSelector} from "../../../hooks/redux";
import {useActions} from "../../../hooks/useActions";


export enum SideBarOptions {
    DASHBOARD = 'Dashboard',
    ACTIVITY_HISTORY = 'Activity History',
    MY_DEALS = 'My Deals',
    SETTINGS = 'Settings'

}

const options = [
    {title: SideBarOptions.DASHBOARD},
    {title: SideBarOptions.ACTIVITY_HISTORY},
    {title: SideBarOptions.MY_DEALS},
    {title: SideBarOptions.SETTINGS}
]

const SideBarMenu = ({theme}: {theme: string}) => {
    const {setCurrent} = useActions()
    const {currentOption} = useAppSelector(state => state.sidebarSlice)

    const handleSetCurrentOption = (val: string) => {
        setCurrent(val)
    }

    return (
        <div className={`${cls.menu} ${cls[theme]}`}>
            {
                options.map(({title}, index) => (
                    <SideBarMenuOption
                        key={index}
                        title={title}
                        isActive={title === currentOption}
                        handlePress={handleSetCurrentOption}
                        theme={theme}
                    />
                ))
            }
        </div>
    );
};

export default SideBarMenu;
