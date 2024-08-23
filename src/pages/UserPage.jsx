import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`https://practice-spring-backend-production.up.railway.app/users/${id}`);
                const data = await res.json();

                if (res.status === 500){
                    navigate('*');
                }
                setUser({...data});
            }catch(error){
                console.log("Failed to fetch user");
                navigate('*');
            }
        }
        fetchUser();
    }, []);
    return (
        <div className='w-screen h-screen max-h-[800px]'>
            <div className='container mx-auto mt-[120px] '>
                <div className='w-[400px] bg-slate-200 p-8 mx-auto rounded-lg shadow-md'>
                    <div className='text-xl my-4'>Name: <span className='font-semibold'>{user.name}</span></div>
                    <div className='text-xl my-4'>Username: <span className='font-semibold'>{user.username}</span></div>
                    <div className='text-xl my-4'>Email: <span className='font-semibold'>{user.email}</span></div>
                </div>
            </div>

        </div>
    )
}

export default UserPage
