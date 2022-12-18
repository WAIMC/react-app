import React, { useState } from 'react'
import ToggleMount from './ToggleMount'

function MountAndUnmount() {
  const [isShowComponent, setIsShowComponent] = useState<boolean>(false)
  return (
    <>
      <h3>lesson mount and unmount</h3>
      <button onClick={() => setIsShowComponent(!isShowComponent)}>
        toggle mount
      </button>

      {isShowComponent && <ToggleMount />}
    </>
  )
}

export default MountAndUnmount
