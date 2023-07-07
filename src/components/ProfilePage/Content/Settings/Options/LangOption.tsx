import React, {FC} from 'react';
import cls from './Option.module.scss'

interface LangOptionProps {
    theme: string
    cb: (val: string) => void
    lang: string
}

const langs = [
    {value: 'es', title: 'Español'},
    {value: 'en', title: 'English'},
    {value: 'fr', title: 'Français'},
    {value: 'de', title: 'Deutsch'},
    {value: 'ru', title: 'Русский'}
]
const initLang = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    de: 'Deutsch',
    ru: 'Русский'
}

const LangOption: FC<LangOptionProps> = ({theme, cb, lang}) => {
    return (
        <select

            onChange={e => cb(e.currentTarget.value)}
            className={`${cls.option} ${cls[theme]} ${cls.select}`}
        >
            <option value="" selected disabled hidden>
                {
                    //@ts-ignore
                    initLang[lang]
                }
            </option>
            {
                langs.map(({title, value}) => <option value={value}>{title}</option>)
            }
        </select>
    );
};

export default LangOption;
