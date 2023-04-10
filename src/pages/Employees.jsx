import mock from '../services/data.json'
import { EmployeesForm } from '../components/EmployeesForm'
import { EmployeesTable } from '../components/EmployeesTable'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import './Employees.css'
import { setEmployeesThunk, setEmployeeEditingThunk, setIsEditingThunk } from '../redux/actions'
import { deleteEmployee, postEmployee, putEmployee } from '../services'
import Modal from '../components/Modal'


const mockData = mock.data


export const Employess = () => {
    
    const dispatch = useDispatch()

    // Setting initial state
    const employeesList = useSelector(state => state.employees)
    const isEditingEmployee = useSelector(state => state.isEditing)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employeeDeleting, setEmployeeDeleting] = useState({});
    const defaultEmployeesValues = {id: null, employee_name:'',employee_salary: null,employee_age: null}
    
    // Importing hook-form functions
    const { reset , register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(setEmployeesThunk())
    }, [])

    const onSubmit = (employee) => {
        if(isEditingEmployee){
        const data = {
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
        }

        putEmployee(employee.id, data);
        dispatch(setIsEditingThunk(false))
        dispatch(setEmployeesThunk())
        reset(defaultEmployeesValues)
        }
        else{
        const data = {
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
        }
        postEmployee(data);
        reset(defaultEmployeesValues)
        dispatch(setEmployeesThunk())
        }
      }

    const handleDelete = (employee)=>{
        setEmployeeDeleting(employee)
        setIsModalOpen(true);
    }

    const handleUpdate = (employee)=>{
        console.log("editing~>", employee)
        reset({id: employee.id, employee_name: employee.employee_name, employee_salary: employee.employee_salary, employee_age: employee.employee_age})
        dispatch(setEmployeeEditingThunk(employee))
        dispatch(setIsEditingThunk(true))
    }  

    const handleClean = () => {
        console.log("Cleaning")
        reset(defaultEmployeesValues)
        dispatch(setIsEditingThunk(false))
    }

    const handleCloseModal = () => {
        setEmployeeDeleting({})
        setIsModalOpen(false);
    };
  
    const handleConfirmModal = () => {
        deleteEmployee(employeeDeleting.id)
        setEmployeeDeleting({})
        setIsModalOpen(false);
        dispatch(setEmployeesThunk())
    };


    return(
        <div className='em-box'>
            <div className='em-box-h'>
                <p className='em-box-h-txt'>
                    Empleados
                </p>
                <div className='em-box-h-btn-box'>
                    <div className='em-box-h-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </div>
                    <div className='em-box-h-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                        </svg>
                    </div>
                    <div className='em-box-h-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='em-box-b'>
                <section className='em-box-b-sec left-sect'>
                    <EmployeesTable 
                        title="ACTIVE EMPLOYEE" 
                        data= {employeesList}
                        onDelete = {handleDelete}
                        onUpdate = {handleUpdate}
                    />
                </section>
                <section className='em-box-b-sec'>                    
                    <EmployeesForm 
                        title="SAVE EMPLOYEE" 
                        handleSubmit={handleSubmit} 
                        onSubmit={onSubmit} 
                        register={register}
                        onClean={handleClean}
                    />
                </section>
            </div>
            <Modal
              title="Confirmar acción"
              message="¿Estás seguro de que quieres realizar esta acción?"
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onConfirm={handleConfirmModal}
            />
        </div>
    )
}