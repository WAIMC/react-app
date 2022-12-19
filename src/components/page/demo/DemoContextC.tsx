import React, { useState, useContext } from 'react'
import { GetContext } from '../lessons/LessonContext'

function DemoContextC({ toggleColor }: { toggleColor: string }) {
  const getProp = useContext(GetContext)
  console.log('get context :', GetContext)

  return (
    <>
      <span
        style={
          toggleColor === 'dark'
            ? { background: 'darkgrey', color: 'white' }
            : {}
        }
      >
        this is component C
      </span>
      <br />
      <span>get prop : {getProp}</span>
    </>
  )
}

export default DemoContextC
