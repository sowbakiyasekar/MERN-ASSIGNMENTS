
const SchoolCard = ({school,handleDetails}) => {
  return (
    <div onClick={()=>handleDetails(school)} 
    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 justify-items-center">
        <h2>{school.name}</h2>
        <h3>{school.city}</h3>
        <h3>{school.principal}</h3>
        <h3>{school.students}</h3>
        <h3>{school.teachers}</h3>
    </div>
  )
}

export default SchoolCard

