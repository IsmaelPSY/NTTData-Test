import { actions } from "../actions";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const INITIAL_STATE = {
    employees: [],
    editingEmployee: {},
    isEditing: false,
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.employeesSetAll:
            return {
                ...state,
                employees: action.payload 
            }
        case actions.employeeSetEditing:
            return {
                ...state,
                editingEmployee: action.payload
            }
        case actions.isEditingSet:
            return {
                ...state,
                isEditing: action.payload
            }
        default:
            return state;
    }
}

export const store = createStore(rootReducer, applyMiddleware(thunk))