import React, {ChangeEvent, FC} from "react";
import cls from "./Form.module.scss";

interface RestoreProps {
    isLoading: boolean
    pin: string | number
    password: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Restore: FC<RestoreProps> = ({
                                       isLoading,
                                       pin,
                                       password,
                                       handleChange,
                                   }) => {
    return (
        <>
            <h3>Enter PIN</h3>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={pin}
                    name='pin'
                    type='text'
                    placeholder='Enter PIN here'
                    disabled={isLoading}
                />
            </div>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    type='password'
                    placeholder='Your new password'
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <button type='submit' disabled={isLoading}>
                    {
                        isLoading
                            ? <img
                                src={require('../../../assets/images/svg/spinner.svg').default}
                                alt="Loading..."
                                height={20}
                                width={20}
                            />
                            : 'Continue'
                    }
                </button>
            </div>
        </>
    )
}

export default Restore
