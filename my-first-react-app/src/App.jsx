import { useEffect, useState } from "react"

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(()=>{
    console.log('${title} has been liked: ${hasLiked}');
  })
  return (
    <div className='card' onClick={()=>setCount((prevState)=>prevState+1)}>
      <h2>{title} - {count}</h2>

      <button onClick={()=>{setHasLiked(!hasLiked)}}>
        {hasLiked? "❤︎" : "♡︎"}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Stranger Things" />
      <Card title="The Boys" />
    </div>
  )
}

export default App
