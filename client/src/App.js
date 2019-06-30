import React, { useState, useEffect, Fragment } from 'react'
import ReadString from "./ReadString";
import SetString from "./SetString";

const App = props => {
  const [drizzleReadinessState, setDrizzleReadinessState] = useState({drizzleState: null, loading: true})
  const { drizzle } = props

  useEffect( 
    () => {
      const unsubscribe = drizzle.store.subscribe( () => {
        // every time the store updates, grab the state from drizzle
        const drizzleState = drizzle.store.getState()
        // check to see if it's ready, if so, update local component state
        if (drizzleState.drizzleStatus.initialized) {
          setDrizzleReadinessState({drizzleState: drizzleState, loading: false})
        }
      })
      return () => {
        unsubscribe()
      }
    }, [drizzle.store, drizzleReadinessState]
  )
  
  return (
    drizzleReadinessState.loading ? 
      "Loading Drizzle..." 
      :
      <Fragment>
        <ReadString drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} />
        <SetString drizzle={drizzle} drizzleState={drizzleReadinessState.drizzleState} />
      </Fragment>
  )
}

export default App
