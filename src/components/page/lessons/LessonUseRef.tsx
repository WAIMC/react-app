import React, { useEffect, useRef, useState } from 'react'

// useRef lookLike useState : init value on out function component
// re-render not change value
// difference useRef can use in dom node. now useRef has value property of dom node

function LessonUseRef() {
  const [countDown, setCountDown] = useState<number>(60)
  // const [numID, setNumID] = useState<number>(-1)

  const IDInterval = useRef<number>()
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const handleStart = () => {
    /* use state value default */
    // setNumID((): any => {
    //   return setInterval(() => {
    //     setCountDown(prev => prev - 1)
    //   }, 1000)
    // })

    /** use ref set value default*/
    IDInterval.current = window.setInterval(() => {
      setCountDown(prev => prev - 1)
    }, 1000)
  }

  const handleStop = () => {
    // clearInterval(numID)
    // setNumID(-1)

    clearInterval(IDInterval.current)
  }

  useEffect(() => {
    console.log('dom element :', h1Ref.current)
  }, [])

  console.log('render ')

  return (
    <>
      <h1 ref={h1Ref}>Count down : {countDown}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  )
}

export default LessonUseRef
