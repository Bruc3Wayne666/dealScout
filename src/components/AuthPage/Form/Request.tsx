import React, {ChangeEvent, FC} from "react";
import cls from "./Form.module.scss";

interface RestoreProps {
    isLoading: boolean
    email: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setType: (v: string) => void
}

const Request: FC<RestoreProps> = ({
                                       isLoading,
                                       email,
                                       handleChange,
                                       setType
                                   }) => {
    return (
        <>
            <h3>Reset Password</h3>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    type="email"
                    placeholder='Email'
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    <p onClick={() => setType('login')}>Continue authorizing</p>
                </div>
                <button type='submit' disabled={isLoading}>
                    {
                        isLoading
                            ? <img
                                src={require('../../../assets/images/svg/spinner.svg').default}
                                alt="Loading..."
                                height={20}
                                width={20}
                            />
                            : 'Get Code'
                    }
                </button>
            </div>
        </>
    )
}

export default Request
