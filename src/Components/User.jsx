import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const navigate=useNavigate()
    const handleShowDetails=()=>{
        navigate(`${id}`)
    }
    
    const {id,name,email}=user
    return (
        <div className="border-4  border-[#FE7743] p-12 rounded-xl text-center flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-[#85193C]"> {id} </h2>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm flex-grow">{email}</p>
            <button onClick={handleShowDetails} className="btn bg-[#E83F25] text-white rounded-2xl">show details</button>
            
        </div>
    );
};

export default User;