import React, { useState, createContext } from 'react'
import DemoContextB from '../demo/DemoContextB'

// eg: Component A => component B => component C
// component C need prop of component A
// let use need fill prop via component B
// but component B not use this prop

/***
 * context can get prop from any component grandfather and not via parent component
 *  let use follow steps below
 *  1/ create context in component parent
 *  2/ provider : wrap func component parent let child component can use
 *  3/ consumer : get props from parent component
 *    3.1/ can export props. In component need uses only import and useContext
 */

export const GetContext = createContext<string>('')

function LessonContext() {
  const [toggleColor, setToggleColor] = useState<string>('dark')
  const [getProp, setGetProp] = useState<string>('prop from parent')

  function handleToggle() {
    setToggleColor(toggleColor === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <GetContext.Provider value={getProp}>
        <br />
        <button onClick={handleToggle}>toggle color</button>
        <br />
        <DemoContextB toggleColor={toggleColor} />
      </GetContext.Provider>
    </>
  )
}

export default LessonContext
