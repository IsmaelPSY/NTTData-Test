import './EmployeeItem.css'

export const EmployeeItem = ({employee, onDelete, onUpdate}) => {    
    return (
        <tr>
            <td className='em-box-b-t-td'>{employee.id}</td>
            <td className='em-box-b-t-td'>{employee.employee_name}</td>
            <td className='em-box-b-t-td'>{employee.employee_salary/100}</td>
            <td className='em-box-b-t-td'>{employee.employee_age}</td>
            <td className='em-box-b-t-td em-box-b-t-td-btn-sect'>
                <button className='em-box-b-t-td-btn edit' title='Editar' onClick={() => onUpdate(employee)}>Editar</button>
                <button className='em-box-b-t-td-btn delete' title='Eliminar' onClick={() => onDelete(employee)}>Eliminar</button>
            </td>
        </tr>
    )
}