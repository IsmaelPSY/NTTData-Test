import { getEmployees } from "../../services"

export const actions =  {
    employeesSetAll : "@employees/setAll",
    employeeSetEditing: "@employee/setEditing",
    isEditingSet: "@employee/isEditing"
}

//! const dispatch = useDispatch()
//? dispatch({type: "@employees/setAll", payload: data})
//* dispatch(employeesSetAll(data))

export const employeesSetAll = (data) => ({
    type : actions.employeesSetAll,
    payload: data
})

export const employeeSetEditing = (data) => ({
    type: actions.employeeSetEditing,
    payload: data
})

export const isEditingSet = (data) => ({
    type: actions.isEditingSet,
    payload: data
})

export const setEmployeesThunk = () => {
    return (dispatch) => {
        getEmployees()
            .then((res) => {
                dispatch(employeesSetAll(res.data))
            })
    }
}

export const setEmployeeEditingThunk = (employee) => {
    return (dispatch) => {
        dispatch(employeeSetEditing(employee))
    }
}

export const setIsEditingThunk = (value) => {
    return (dispatch) => {
        dispatch(isEditingSet(value))
    }
}