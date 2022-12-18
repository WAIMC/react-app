import React, { memo } from 'react'

function ToggleMemo() {
  console.log('render toggle memo not deps')

  return (
    <>
      <h1>demo toggle memo not dependencies</h1>
    </>
  )
}

export default memo(ToggleMemo)
