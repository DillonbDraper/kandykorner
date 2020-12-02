import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Employee } from "./Employee"
import "./Employees.css"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeList = props => {
    const {employees, getEmployees } = useContext(EmployeeContext)
    const {locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations().then(getEmployees)
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>

            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employeeList">
                {
                    employees.map(employee => {
                        const loc = locations.find(loca => employee.locationId === loca.id)
                        return <Employee key={employee.id} employee={employee} Location={loc} />
                    })
                }
            </article>
        </div>


    )

}