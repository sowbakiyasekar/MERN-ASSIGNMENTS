import SchoolCard from "../components/SchoolCard"

const SchoolList = ({presentation,handleDetails}) => {
    const data = presentation
    console.log(data);
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            data.map((school)=> (
                <SchoolCard key={school.id} school = {school} handleDetails ={handleDetails}/>
            ))
        }
    </div>
  )
}

export default SchoolList