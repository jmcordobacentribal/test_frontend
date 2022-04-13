const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HERO":
      return {
        ...state,
        hero: [...state.hero, action.payload],
      };

      case 'SET_LIST_HERO': 
      return {
          ...state,
          heroList:[...state.heroList, action.payload],
      };
      case 'SET_CURRENT_HEROES': 
      return {
          ...state,
          currentHeroes:[...state.currentHeroes, action.payload],
      };
      case 'SET_CAN_FLY': 
      return {
        ...state,
        back: action.payload
    };
    case "FILTER":
      return {
        ...state,
        hero: state.hero.filter((items) => false),
      };
      case 'DELETE_HERO':
        return {
            ...state,
            hero: state.hero.filter(
                (index) => false ,
            ),
        };

    default:
      return state;
  }
};
export default reducer;
