import { useSelector } from "react-redux"
import './EmployeesForm.css'

export const EmployeesForm = ({title, handleSubmit, onSubmit, register, onClean}) => {

    const isEditingEmployee = useSelector(state => state.isEditing)


    return (
        <>
        <h4>
            {title}
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="em-box-b-sec-form">
            {
                isEditingEmployee &&    
                <>
                    <div className='em-box-b-sec-form-div'>
                        <label className='em-box-b-sec-form-label' htmlFor="id"> ID</label>
                        <input className='em-box-b-sec-form-input' {...register("id")} id="id" readOnly placeholder="ID" type="number" disabled/>
                    </div>
                </>
            }
            <div className='em-box-b-sec-form-div'>
                <label className='em-box-b-sec-form-label' htmlFor="name"> Name</label>
                <input className='em-box-b-sec-form-input' {...register("employee_name")} id="name" placeholder="Name" type="text" required/>
            </div>
            <div className='em-box-b-sec-form-div'>
                <label className='em-box-b-sec-form-label' htmlFor="salary"> Salary</label>
                <input className='em-box-b-sec-form-input' {...register("employee_salary")} id="salary" placeholder="Salary" type="number" min="0" required/>
            </div>
            <div className='em-box-b-sec-form-div'>
                <label className='em-box-b-sec-form-label' htmlFor="age"> Age</label>
                <input className='em-box-b-sec-form-input' {...register("employee_age")} id="age" placeholder="Age" type="number" min="18" max="90" required/>
            </div>
            <div className='em-box-b-sec-form-div submit-sect'>
                <input className='em-box-b-sec-form-input-submit' readOnly type="submit" value="Save" />
                <input className='em-box-b-sec-form-input-submit' readOnly value="Clean" onClick={()=> onClean()}/>
            </div>
        </form>
        </>
        
    )
}