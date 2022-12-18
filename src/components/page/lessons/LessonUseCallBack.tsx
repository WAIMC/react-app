import React, { useState, useCallback } from 'react'
import ToggleMemo from './ToggleMemo'
import DemoCallBack from './DemoCallBack'

/**
 * 1. when mount, useCallBack with array null deps will init one time call back func outside func component
 * useCallBack will not create new func when use
 * 2. when mount, useCallBack with deps will init call back func outside func component
 * useCallBack will create new func when use if deps change every re-render
 */

function LessonUseCallBack() {
  const [testIncrease, setTestIncrease] = useState<number>(0)
  const [isShowMemo, setIsShowMemo] = useState<boolean>(false)
  const [depsMemoChange, setDepsMemoChange] = useState<number>(0)

  // every re-render will create new handleUseCallBack
  // function handleUseCallBack() {
  //   setDepsMemoChange(depsMemoChange + 10)
  //   console.log('re-render call back deps')
  // }

  const handleUseCallBack = useCallback(() => {
    setDepsMemoChange(prev => prev + 10)
  }, [])

  console.log('re-render parent component')

  return (
    <>
      <div>
        <h2>demo ReactJS.memo with dependencies</h2>
        <span>show result input : {depsMemoChange}</span>
      </div>

      <div>
        <DemoCallBack onHandleUseCallBack={handleUseCallBack} />
      </div>

      <br />
      <br />
      <br />
      <br />

      <h4>not affect any component : {testIncrease}</h4>
      <button onClick={() => setTestIncrease(testIncrease + 1)}>
        increase
      </button>

      <br />
      <br />
      <br />
      <br />

      <div>
        <h3>demo ReactJS.memo not dependencies </h3>
        <button onClick={() => setIsShowMemo(!isShowMemo)}>toggle memo</button>
        {isShowMemo && (
          <>
            <ToggleMemo />
          </>
        )}
      </div>
    </>
  )
}

export default LessonUseCallBack
