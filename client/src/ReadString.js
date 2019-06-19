import React, { useState, useEffect } from "react"

const Readstring = props => {
  const [dataKey, setDataKey] = useState(null)
  const { drizzle, drizzleState } = props
  const { MyStringStore } = drizzleState.contracts

  useEffect( 
    () => {
      const contract = drizzle.contracts.MyStringStore
      // let drizzle know we want to watch the `myString` method
      const dataKey = contract.methods["myString"].cacheCall()
      // save the `dataKey` to local component state for later reference
      setDataKey(dataKey)
    }, [dataKey, drizzle.contracts.MyStringStore])
    
  const myString = MyStringStore.myString[dataKey]

  return (
    // if it exists, then we display its value
    <p>My stored string: {myString && myString.value}</p>
  )
}

export default Readstring