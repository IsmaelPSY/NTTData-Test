export const sortEmployeesList = (data) => {
    data.sort((a,b) => {
        const nameA = a.employee_name.toLowerCase()
        const nameB = b.employee_name.toLowerCase()
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })
}