import React, {useReducer} from "react";

export default (reducer, actions, intialState) => {
    const Context = React.createContext();

    const Provider = ({childern}) => {
        const [state, dispatch] = useReducer(reducer, intialState);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{ state, ...boundActions }}>
            {childern}
        </Context.Provider>
    }

    return { Context, Provider };
};