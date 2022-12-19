import React, { useState } from 'react'
import DemoContextC from './DemoContextC'

interface props {
  toggleColor: string
}

/**
 * init interface with prop and set type for value
 * or duplicate props in func component and set type
 *
 */

function DemoContextB({ toggleColor }: { toggleColor: string }) {
  return (
    <>
      <span>this is component B</span>
      <br />
      <DemoContextC toggleColor={toggleColor} />
    </>
  )
}

export default DemoContextB
