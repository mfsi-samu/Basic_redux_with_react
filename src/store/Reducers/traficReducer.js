
const initState ={
    signalStatus: ""
}

const reducer =(state=initState, action)=>{

    
    switch(action.type)
    {
        case 'UPDATE_SIGNAL':
         return({
             ...state,
             signalStatus: action.signalStatus
         })
        break;
        default:
        return state;
    }

}

export default reducer;