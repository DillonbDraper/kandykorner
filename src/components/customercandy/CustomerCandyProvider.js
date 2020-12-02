import React, { useState } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {
    const [CustomerCandies, setCustomerCandies] = useState([])

    const getCustomerCandies = () => {
        return fetch("http://localhost:8088/customerCandy")
            .then(res => res.json())
            .then(setCustomerCandies)
    }

    const addCustomerCandy = CustomerCandy => {
        return fetch("http://localhost:8088/customerCandy", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(CustomerCandy)
          })
          .then(getCustomerCandies)
    }

    return (
        <CustomerCandyContext.Provider value={{CustomerCandies, getCustomerCandies, addCustomerCandy}}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}