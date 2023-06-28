import React, {FC} from 'react';
import cls from './SideBarMenuOption.module.scss'

interface SidebarMenuProps {
    title: string
    isActive: boolean
    handlePress: (val: string) => void
    theme: string
}

const SideBarMenuOption: FC<SidebarMenuProps> = ({
                                                     title,
                                                     isActive,
                                                     handlePress,
                                                     theme
                                                 }) => {
    return (
        <div
            onClick={() => handlePress(title)}
            className={`${cls.option} ${cls[theme]} ${isActive && cls.active}`}
        >
            {
                isActive
                    ? <img
                        src={require(`../../../assets/images/svg/dark/${title.toLowerCase()}.svg`)}
                        alt={title}
                    />
                    : <img
                        src={require(`../../../assets/images/svg/${theme}/${title.toLowerCase()}.svg`)}
                        alt={title}
                    />
            }

            <span>{title}</span>
        </div>
    );
};

export default SideBarMenuOption;
