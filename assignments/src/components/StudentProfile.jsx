
const StudentProfile = ({studentData}) => {
    const {name,age,course,city}= studentData
    return (
        <div className="bg-cyan-400 flex-col align-middle justify-items-center">
            <h2>studentData</h2>
            <h3>name:{name}</h3>
            <h3>age:{age}</h3>
            <h3>course:{course}</h3>
            <h3>city:{city}</h3>

        </div>
    )
}
export default StudentProfile