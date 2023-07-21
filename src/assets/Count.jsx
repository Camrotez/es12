import { useState } from "react"
function Count(){
    const [count, setCount] = useState(0)
    useState(() =>{
        const num = setInterval(() => {
            setCount((i) => i + 1)
        }, 1000);
        return() =>{
            clearInterval(num)
        }
    })
    return(
        <h1>{count}</h1>
    )
}

export default Count