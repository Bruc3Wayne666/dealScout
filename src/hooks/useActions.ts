import {useAppDispatch} from "./redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import ActionCreators from "../store/actions";

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
