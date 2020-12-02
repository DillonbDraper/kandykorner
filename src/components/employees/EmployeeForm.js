import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employees.css"

export const EmployeeForm = props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const hourly = useRef(null)
    const fullTime = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const createEmployee = () => {
        const locationId = parseInt(location.current.value)
        const hourlyRate = parseInt(hourly.current.value)
        let isManager = true
        let isFullTime = true
        console.log(locationId, hourlyRate, isManager, isFullTime)
        console.log(name.current.value)

        if (manager.current.value === "2") {
            isManager = false
        }

        if (fullTime.current.value === "2") {
            isFullTime = false
        }

        if (name === null || locationId === 0 || hourlyRate === null || fullTime.current.value === "0" || manager.current.value === "0") {
            window.alert("Please ensure that all fields have been filled out before submitting employee information")
        } else {
            addEmployee({
                name: name.current.value,
                locationId,
                manager: isManager,
                fullTime: isFullTime,
                hourlyRate
            })
            .then(() => props.history.push("/employees"))
        }

    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.address}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime"> Is Employee Full Time? </label>
                    <select defaultValue="" name="fullTime" ref={fullTime} id="employeeFullTime" className="form-control" >
                        <option value="0">Please Choose an Option</option>
                        <option value="1">Full Time</option>
                        <option value="2">Part Time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager"> Is Employee a Manager? </label>
                    <select defaultValue="" name="manager" ref={manager} id="employeeManager" className="form-control" >
                        <option value="0">Manager?</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Employee hourly rate: </label>
                    <input type="text" id="employeePay" ref={hourly} className="form-control" placeholder="15$" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>

    )
}

