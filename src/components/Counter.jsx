import { useState } from "react"

const Counter =(props) => {

    const [num, setNum] = useState(0)

    const sumar = () => {
        setNum(num + 1)
    }

    const restar = () => {
        setNum(num - 1)
    }   

    return (
        <div>
            <button onClick={restar}>Restar</button>
            Counter {num}
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}

export default Counter