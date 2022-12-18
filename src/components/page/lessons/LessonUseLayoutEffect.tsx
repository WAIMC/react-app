import React, { useState, useEffect, useLayoutEffect } from 'react'

/**
 * flow useEffect
 * 1/ mount or re-render
 * 2/ read func call back useEffect, run cleanup function before
 * 3/ update dom (mutated)
 * 4/ render UI
 * 5/ execute call back func useEffect
 */

/**
 * flow useLayoutEffect
 * 1/ mount or re-render
 * 2/ read func call back useEffect, run cleanup function before
 * 3/ update dom (mutated)
 * 4/ execute call back function
 * 5/ render UI
 */
function LessonUseLayoutEffect() {
  const [increase, setIncrease] = useState<number>(0)

  useLayoutEffect(() => {
    setIncrease(increase > 5 ? 0 : increase)
    console.log('call back useLayoutEffect')
    return () => {
      console.log('cleanup useLayoutEffect')
    }
  })
  useEffect(() => {
    // setIncrease(increase > 5 ? 0 : increase)
    console.log('call back useEffect')
    return () => {
      console.log('cleanup useEffect')
    }
  })

  console.log('render')

  return (
    <>
      <>{console.log('dom')}</>
      <h1>increase bigger 5 will reset : {increase}</h1>
      <button onClick={() => setIncrease(increase + 1)}>increase</button>
    </>
  )
}

export default LessonUseLayoutEffect
