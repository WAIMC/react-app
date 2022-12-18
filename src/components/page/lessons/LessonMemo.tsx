import React, { useState } from 'react'
import ToggleMemo from './ToggleMemo'

/**
 * memo wrap function component and only re-render this component
 * when props dependencies of component parent change
 * **/

function LessonMemo() {
  const [showMemo, setIsShowMemo] = useState<boolean>(false)
  const [notDepsChange, setNotDepsChange] = useState<string>('')
  console.log('render parent')

  return (
    <>
      <h1>memo</h1>
      <span>show input : {notDepsChange}</span>
      <br />
      <input
        type='text'
        value={notDepsChange}
        onChange={e => setNotDepsChange(e.target.value)}
      />

      <br />
      <button onClick={() => setIsShowMemo(!showMemo)}>toggle memo</button>
      <div>
        {showMemo && (
          <>
            <ToggleMemo />
          </>
        )}
      </div>
    </>
  )
}

export default LessonMemo
