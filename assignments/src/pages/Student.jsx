const Student = () => {
    const StudentProfile = {
        Name:"Sowbakiya",
        Course:"MERN",
        City:"chennai",
        Institute:"SLA"
    };

    return (
        <>
        <div>
            <h2>Student Profile</h2>
            <h3>Student Name : {StudentProfile.Name}</h3>
            <h3>Student Course : {StudentProfile.Course}</h3>
            <h3>Student city : {StudentProfile.City}</h3>
            <h3>Institute Name : {StudentProfile.Institute}</h3>

        </div>
        </>
    )
}
export default Student