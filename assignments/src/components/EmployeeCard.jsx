
const EmployeeCard = ({data}) => {
    const {name,id,dept,salary,exp}= data
    return (
        <div className="bg-cyan-400 flex-col align-middle justify-items-center">
            <h2>Employee Data</h2>
            <h3>name:{name}</h3>
            <h3>empID:{id}</h3>
            <h3>department:{dept}</h3>
            <h3>salary:{salary}</h3>
            <h3>experience:{exp}</h3>

        </div>
    )
}
export default EmployeeCard