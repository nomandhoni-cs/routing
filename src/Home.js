import React from 'react'
import { useReducer } from 'react'

const Home = () => {
  const initialState = {count: 0}
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {count: state.count + 1}
      case 'DECREMENT':
        return {count: state.count - 1}
      default:
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h4>Home Page</h4>
    <button onClick={() => dispatch({type: 'INCREMENT'})}>Increase</button>
    <h2>{state.count}</h2>
    <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrease</button>
    </>


  )
}

export default Home