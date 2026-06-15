const Employee = () => {
    const EmployeeProfile = {
        Name:"Sowbakiya",
        ID:1088,
        Department:"CRM",
        Salary:40000
    };

    return (
        <>
        <div>
            <h2>Employee Profile</h2>
            <h3>Employee Name : {EmployeeProfile.Name}</h3>
            <h3>Employee ID : {EmployeeProfile.ID}</h3>
            <h3>Employee Department : {EmployeeProfile.Department}</h3>
            <h3>Institute Salary : {EmployeeProfile.Salary}</h3>

        </div>
        </>
    )
}
export default Employee