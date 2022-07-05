import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { decrement, increment } from "../redux/counterSlice";

export default function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <section>
            <button onClick={() => dispatch(increment())}>PLUS</button>
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement())}>MINUS</button>
        </section>
    )
}