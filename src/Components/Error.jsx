import React from 'react';
import { Navigate, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error=useRouteError()
    console.log(error.status)
    const  navigate=useNavigate()
    const handleBack=()=>{
        navigate('/')
    }
    return (
        <div className='flex flex-col gap-3 justify-center items-center h-screen'>
            <h1 className="text-8xl">Oops!!!!</h1>
            <h1 className="text-5xl mt-3">{error.status}</h1>
            {
                error.status===404 && <div>
                    <h1>Not a valid request back to home..</h1>
                </div>
            }
            <button onClick={handleBack} className='btn '>Back</button>
        </div>
    );
};

export default Error;