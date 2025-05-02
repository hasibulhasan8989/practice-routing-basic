import { useLoaderData, useNavigate } from "react-router-dom";




const ShowPosts = () => {
   
  
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1)
    }
    
    const showPost=useLoaderData()
    const {id,title,body}=showPost
    return (
        <div className="text-center border-4 border-[#FE4F2D]
        p-12 rounded-2xl flex flex-col gap-4 bg-[#F6F0F0]">
           <h1 className="text-3xl font-black">{id}</h1>
           <p className="text-xl font-bold">{title}</p>
           <p className="text-sm font-semibold w-[420px]">{body}</p>
           <button onClick={handleBack} className="btn bg-[#AC1754] text-white ">Back</button>
          
        </div>
    );
};

export default ShowPosts;