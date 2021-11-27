import {ADD_PERSON} from '../constant';
const initState =[{id:'001',name:'hjp',age:20}]
/* export default personReducer = (preState=initState,action) => {
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
} */
export default function personReducer(preState=initState,action){
    //console.log('@@@')
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState
    }
}