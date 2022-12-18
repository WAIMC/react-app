import React, { useState } from 'react'
const listCheckBox = [
  {
    id: 1,
    value: 'check box 1'
  },
  {
    id: 2,
    value: 'check box 2'
  },
  {
    id: 3,
    value: 'check box 3'
  }
]
function LessonsUseState() {
  const [increase, setIncrease] = useState<number>(0)
  const [inputText, setInputText] = useState<string>('')
  const [listChecked, setListChecked] = useState<number[]>([1])

  function handleIncrease() {
    console.log('increase :', increase)

    /**test if call multiple set state fill param is current value of state*/
    // setIncrease(increase + 1);
    // console.log('increase :', increase);
    // setIncrease(increase + 1);
    // console.log('increase :', increase);
    // setIncrease(increase + 1);
    // console.log('increase :', increase);

    /**test if call multiple set state call back func fill param is prev value of state*/
    // setIncrease(prevValue => {
    //   console.log('prev value : ', prevValue);

    //   return prevValue + 1;
    // });
    // setIncrease(prevValue => {
    //   console.log('prev value : ', prevValue);

    //   return prevValue + 1;
    // });
    setIncrease(prevValue => {
      console.log('prev value : ', prevValue)

      return prevValue + 1
    })
  }

  function twoWayBinding(params: string) {
    setInputText(params)
  }

  function handleCheckBox(params: number) {
    setListChecked((prev: number[]): number[] => {
      return prev.includes(params)
        ? [...prev.filter(el => el !== params)]
        : [...prev, params]
    })
  }

  return (
    <>
      <h3>lesson state</h3>
      <div>
        <h1>increase : {increase}</h1>
        <button onClick={handleIncrease}>increase</button>
      </div>

      <div>
        <h1>value : {inputText}</h1>
        <input
          type='text'
          onChange={e => twoWayBinding(e.target.value)}
          value={inputText}
        />
      </div>

      <div>
        {listCheckBox.map((el, inx) => (
          <div key={inx}>
            <label>
              <input
                type='checkbox'
                value={el.id}
                checked={listChecked.includes(el.id)}
                onChange={e => handleCheckBox(+e.target.value)}
              />
              {el && el.value}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export default LessonsUseState
