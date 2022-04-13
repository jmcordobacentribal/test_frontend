const reducer = (state,action) => {
    switch(action.type) {
        case 'SET_HERO': 
    return {
        ...state,
        hero:[...state.hero, action.payload],
    };
            case 'FILTER':
                return {
                    ...state,
                    hero: state.hero.filter(
                        (items) => false,
                    ),
                };
               
                  
    default : 
    return state;
    }
    
}
export default reducer