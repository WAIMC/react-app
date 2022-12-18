import React, { useMemo, useState } from 'react'

/**
 * useMemo use for handle a logic
 * 1/ with
 * */

function LessonUseMemo() {
  const [valueItem, setValueItem] = useState<string>('')
  const [valueArr, setValueArr] = useState<number[]>([])

  const total = useMemo(() => {
    return valueArr.reduce((prevValue, currentValue) => {
      console.log('calculator again ... ')
      return prevValue + currentValue
    }, 0)
  }, [valueArr])

  console.log('render ')

  return (
    <>
      <input
        type='number'
        value={valueItem}
        onChange={e => setValueItem(e.target.value)}
      />
      <button onClick={() => setValueArr([...valueArr, +valueItem])}>
        add value
      </button>
      <h2>value arr : {valueArr}</h2>
      <h1>total value : {total}</h1>
    </>
  )
}

export default LessonUseMemo
