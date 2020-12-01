import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList  />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <ProductTypeProvider>
                    {/* Render the animal list when http://localhost:3000/animals */}
                    <Route path="/products" render={props => <ProductList {...props} />}
                        />
            
                </ProductTypeProvider>
            </ProductProvider>

            <LocationProvider>
                <EmployeeProvider>
                    <Route exact path="/employees" render={props => <EmployeeList {...props} />} />

                    <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />} />
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}