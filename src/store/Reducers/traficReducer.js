
// define initial state variables
const initState ={
    signalStatus: ""
}

// define reducer for state update on the basis of action type.
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