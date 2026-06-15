
const CompanyInfo = () => {
    const company ={
        name:"abc",
        location:"chennai",
        founder:"rk",
        year:2022
    }
    return (
        <>
        <div>
            <h2>company Information</h2>
            <h3>company Name: {company.name}</h3>
            <h3>company Location: {company.location}</h3>
            <h3>founder Name: {company.founder}</h3>
            <h3>year of establishment: {company.year}</h3>

        </div>
        </>
    )
}

export default CompanyInfo