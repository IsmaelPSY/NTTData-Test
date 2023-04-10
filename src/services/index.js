import axios from 'axios'
import mock from './data.json'

const URL = "https://dummy.restapiexample.com/api/v1"

const data = mock

export const getEmployees = async () => {
    const req = await axios.get(`${URL}/employees`)
    return req.data
}

export const postEmployee = async (data) => {
    console.log(
        "data~>:", data
    )
    const req = await axios.post(`${URL}/create`, data)
    return req.data
}

export const putEmployee = async (id, data) => {
    console.log(
        "id~>:", id,
        "data~>:", data
    )
    const req = await axios.put(`${URL}/update/${id}`, data)
    return req.data
}

export const deleteEmployee = async (id) => {
    console.log(
        "id~>:", id,
    )
    const req = await axios.delete(`${URL}/delete/${id}`)
    return req.data
}