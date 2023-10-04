import { combineReducers } from "redux";
import productreducer from "./productreducer";
import studentreducer from "./StudenReducer/Studenreducer"

const mainreducer = combineReducers({

    productreducer,
    studentreducer
}

)

export default mainreducer