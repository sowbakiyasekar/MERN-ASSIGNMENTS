
const UserCard = ({userdata}) => {
    const {name,phone,email,city}= userdata
    return (
        <div className="bg-cyan-400 flex-col align-middle justify-items-center">
            <h2>User Information</h2>
            <h3>name:{name}</h3>
            <h3>city:{city}</h3>
            <h3>phone:{phone}</h3>
            <h3>email:{email}</h3>

        </div>
    )
}
export default UserCard