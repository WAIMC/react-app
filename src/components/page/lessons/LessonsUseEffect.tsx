/**
 * 1/ use effect auto run when mount or re-render UI
 * 2/ use effect execute synchronized, but call back func execute after render UI
 * 3/ use effect when mount run call back first, after run clean function
 * 4/ clean func execute after re-render or unmount
 */

/**
 * flow useEffect when mount:
 *  1.mount -> 2.read func useEffect -> 3.render UI -> 4.execute call back func
 *  -> 5.fill clean func to call back (execute re-render or unmount)
 *
 * flow useEffect when re-render:
 *  1.read func useEffect -> 2.execute clean func before -> 3.render UI
 *  4. execute call back func
 *
 * flow when unmount : 1.call clean func recent
 */

/**
 * type useEffect:
 * 1/ useEffect((callback)) : run call back func when mount or re-render
 * 2/ useEffect((callback), []): run call back func when mount
 * 3/ useEffect((callback), [deps]): run call back when mount or deps change
 */

import React, { useState, useEffect } from 'react'

const listType = ['posts', 'comments', 'albums']

function LessonsUseEffect() {
  const [title, setTitle] = useState<string>('')
  const [user, setUser] = useState<[]>([])
  const [types, setTypes] = useState<string>('posts')
  const [list, setList] = useState<string[]>([])
  const [goToTop, setGoToTop] = useState<boolean>(false)
  const [countDown, setCountDown] = useState<number>(180)
  const [isStartCountDown, setIsStartCountDown] = useState<boolean>(false)

  function handleChangeTitle(params: string) {
    setTitle(params)
  }

  // use effect not dependencies
  useEffect(() => {
    // console.log('mounted');
    document.title = title
    return () => {
      // console.log('unmount');
    }
  })

  // use effect with null array dependencies
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  }, [])

  // use effect with dependencies
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then(res => res.json())
      .then(json => setList(json))
  }, [types])

  // use effect with clean func
  /**
   * note when use dom event listeners on browser
   * 1/ event listeners will remove when close tab on browser
   * 2/ whenever create new event listeners same name event listeners exist before
   * browser will create duplicate event listeners => memory leak
   * 3/ need remove event listeners when doesn't use => avoid memory leak
   */

  // check exist event listeners create on browser
  // check on tab console of browser : getEventListeners(window)
  useEffect(() => {
    const positionScroll = () => {
      setGoToTop(window.scrollY >= 150)
    }
    window.addEventListener('scroll', positionScroll)
    // console.log('add event listeners');

    // cleanup function execute when unmount or re-render
    return () => {
      // console.log('remove event listeners');
      window.removeEventListener('scroll', positionScroll)
    }
  }, [])

  // use effect with clean func for timer
  useEffect(() => {
    const timerID = isStartCountDown
      ? setInterval(() => {
          setCountDown(prev => prev - 1)
        }, 1000)
      : undefined

    // clean count down
    return () => {
      console.log('clean interval')

      clearInterval(timerID)
    }
  }, [isStartCountDown])

  console.log('render ')

  return (
    <>
      <div>
        <h3>count down : {countDown}</h3>
        <button onClick={() => setIsStartCountDown(!isStartCountDown)}>
          toggle start
        </button>
      </div>

      <div>
        <h1>set title</h1>
        <input type='text' onChange={e => handleChangeTitle(e.target.value)} />
      </div>

      <ul>
        {user.map((el: any, ind) => (
          <li key={ind}>{el && el.name}</li>
        ))}
      </ul>

      <div>
        {listType.map((el, inx) => (
          <button key={inx} onClick={() => setTypes(el)}>
            {el}
          </button>
        ))}
      </div>

      <ul>
        {list.map((el: any) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>

      <div>
        {goToTop && (
          <button style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
            got to top
          </button>
        )}
      </div>
    </>
  )
}

export default LessonsUseEffect
