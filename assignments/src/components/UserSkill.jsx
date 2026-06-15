
const UserSkill = ({skills}) => {
    
    return (
        <div className="bg-cyan-400 flex-col align-middle justify-items-center">
            <h2>User Skills</h2>
           {
            skills.map((s,i)=> (
                <p key={i+1}>{s}</p>
            ))
           }
        </div>
    )
}
export default UserSkill