import React from 'react'
import { useState, createContext, useContext } from 'react'

const PopoverContext = createContext()

const usePopover = () => {
    return useContext(PopoverContext)
}

export const PopoverTrigger = ({children}) => {
    const {on} = usePopover()
    return on ? null : children
}

export const PopoverContent = ({children}) => {
    const {on} = usePopover()
    return on ? children : null
}

export const PopoverCloseButton = () => {
    const {popover} = usePopover()
    return <button className="btn btn-danger" onClick = {popover}> X </button>
} 

export const Popover = ({children}) => {
    const [on, setOn] = useState(false)
    const popover = () => (setOn(!on))

    return <PopoverContext.Provider value = {{on, popover}}>
        {children}
    </PopoverContext.Provider>
}