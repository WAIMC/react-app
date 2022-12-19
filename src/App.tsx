import React, { useState } from 'react'
import LessonsUseState from './components/page/lessons/LessonsUseState'
import MountAndUnmount from './components/page/lessons/MountAndUnmount'
import LessonsUseEffect from './components/page/lessons/LessonsUseEffect'
import LessonUseLayoutEffect from './components/page/lessons/LessonUseLayoutEffect'
import LessonUseRef from './components/page/lessons/LessonUseRef'
import LessonMemo from './components/page/lessons/LessonMemo'
import LessonUseCallBack from './components/page/lessons/LessonUseCallBack'
import LessonUseMemo from './components/page/lessons/LessonUseMemo'
import LessonContext from './components/page/lessons/LessonContext'

const listLesson = [
  {
    module: <LessonsUseState />,
    name: 'lesson state'
  },
  {
    module: <MountAndUnmount />,
    name: 'lesson mount and unmount'
  },
  {
    module: <LessonsUseEffect />,
    name: 'lesson use effect'
  },
  {
    module: <LessonUseLayoutEffect />,
    name: 'lesson use layout effect'
  },
  {
    module: <LessonUseRef />,
    name: 'lesson use ref'
  },
  {
    module: <LessonMemo />,
    name: 'lesson memo'
  },
  {
    module: <LessonUseCallBack />,
    name: 'lesson use call back'
  },
  {
    module: <LessonUseMemo />,
    name: 'lesson use memo'
  },
  {
    module: <LessonContext />,
    name: 'lesson context'
  }
]

function App() {
  const [stateLesson, setStateLesson] = useState(listLesson[0].module)

  return (
    <div className='App'>
      <div>
        <h1>list lesson</h1>
        {listLesson.map((el, inx) => (
          <button key={inx} onClick={() => setStateLesson(el.module)}>
            {el.name}
          </button>
        ))}
      </div>

      <>{stateLesson}</>
    </div>
  )
}

export default App
