import {useState, useEffect} from "react"
export default function First(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(() =>{
            setCount((c)=> (c+1))
        },2000)
    },[])
  return<>
<div> {count} me fiest hu bhai</div>
  </>
}

