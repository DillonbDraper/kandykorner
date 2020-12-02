import React from "react"
import "./Employees.css"

export const Employee = ({employee, Location}) => (
    <div className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="store__served">Works at: {Location.address}</p>
        <p className="full__time">Employee is full time: {booleanConverter(employee.fullTime)}</p>
        <p className="manager__status">Employee is a manager: {booleanConverter(employee.manager)}</p>
        <p className="hourly__pay">Employee makes {employee.hourlyRate}$ per hour</p>
    </div>
)

const booleanConverter = boolean => {
    if (boolean === true) {
        return "true"
    }

    if (boolean === false) {
        return  "false"
    }
}