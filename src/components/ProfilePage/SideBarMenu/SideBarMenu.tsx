import React from 'react';
import cls from './SideBarMenu.module.css'
import SideBarMenuOption from "./SideBarMenuOption";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setCurrent} from "../../../store/reducers/sidebar/sidebarSlice";

const options = [
    {title: 'Dashboard'},
    {title: 'Activity History'},
    {title: 'Settings'}
]

const SideBarMenu = ({theme}: {theme: string}) => {
    const dispatch = useAppDispatch()
    const {currentOption} = useAppSelector(state => state.sidebarSlice)

    const handleSetCurrentOption = (val: string) => {
        dispatch(setCurrent(val.toLowerCase()))
    }

    return (
        <div className={`${cls.menu} ${cls[theme]}`}>
            {
                options.map(({title}, index) => (
                    <SideBarMenuOption
                        key={index}
                        title={title}
                        isActive={title.toLowerCase() === currentOption}
                        handlePress={handleSetCurrentOption}
                        theme={theme}
                    />
                ))
            }
        </div>
    );
};

export default SideBarMenu;
