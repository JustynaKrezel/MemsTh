import React, { useReducer, useContext, createContext } from "react";

const HotMemsContext = createContext()
const HotDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.item]
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const HotProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <HotDispatchContext.Provider value={dispatch}>
            <HotMemsContext.Provider value={state}>
                {children}
            </HotMemsContext.Provider>
        </HotDispatchContext.Provider>
    )
}

export const useHot = () => useContext(HotMemsContext)
export const useDispatchCtx = () => useContext(HotDispatchContext)