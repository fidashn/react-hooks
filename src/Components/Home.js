import React, {useState }  from 'react';



function Home() {
const [count, setCount] = useState(0);
  return (
    <div className='home-container'>
      <h1>Counter</h1>
      <div className="counter">
        <button className='btn red' onClick={()=> setCount(count - 1)}>-</button>
        <div className='number'>{count}</div>
        <button className='btn green' onClick={()=> setCount(count + 1)}>+</button>
        </div>
      
      </div>
  )
}

export default Home