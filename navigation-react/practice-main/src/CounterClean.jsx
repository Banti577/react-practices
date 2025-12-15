import { useEffect, useState } from "react";

const CounterClean = () => {
  const [c, setC] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timer =setInterval(() => {
      setCounter((count) => count + 1);
    },2000);
    return(() =>{
        clearInterval(timer)
    })
  }, [c]);
  return(
  <div className="w-[5%] m-auto">
    <h2>{counter}</h2>
    <button className="border-2 p-2" onClick={() => setC((c) => (c + 1))}>{c} incre</button>
  </div>
  );
};
export default CounterClean;
