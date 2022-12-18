import React, { memo, useRef } from 'react'

function DemoCallBack(props: any) {
  console.log('demo call back and memo with deps')
  const { onHandleUseCallBack } = props
  const funcProps = useRef(onHandleUseCallBack)

  // check props init only 1 time to use avoid re-render child component doesn't need
  /**
   * if props current is props init one time will re-render child component
   * else props current is new props will not re-render child component
   */
  if (funcProps === onHandleUseCallBack) {
    console.log('init props one time')
  } else {
    console.log('create new func props')
  }

  return (
    <>
      <span>demo callBack and memo with dependencies</span>
      <br />
      <button onClick={onHandleUseCallBack}>click</button>
    </>
  )
}

export default memo(DemoCallBack)
