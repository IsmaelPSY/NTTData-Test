import { sortEmployeesList } from '../utils/utils'
import { EmployeeItem } from './EmployeeItem'
import './EmployeesTable.css'

export const EmployeesTable = ({title, data, onDelete, onUpdate}) => {

    sortEmployeesList(data)

    return (
        <>
            <h4 className=''>
                {title}
            </h4>
            <div className='em-box-b-t-wrapper'>
                <table className="em-box-b-t">
                    <thead>
                        <tr>
                            <th className='em-box-b-t-th'>ID</th>
                            <th className='em-box-b-t-th'>Name</th>
                            <th className='em-box-b-t-th'>Salary</th>
                            <th className='em-box-b-t-th'>Age</th>
                            <th className='em-box-b-t-th'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            data.map(em => 
                                <EmployeeItem 
                                    key={em.id} 
                                    employee={em} 
                                    onDelete={onDelete}
                                    onUpdate={onUpdate}
                                />)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}