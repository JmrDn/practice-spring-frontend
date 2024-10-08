import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { getApiUrl } from '../Util';

const AddUserPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const API_URL = getApiUrl();

    const addJob = async (newUser) => {
        try{
            const res = await fetch(`${API_URL}/user`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(newUser)
            });

            if (!res.ok){
                console.log('Failed to add new user');
               
            }
            else{
                console.log("Success to add new user");
                setName('');
                setUsername('');
                setEmail('');
            }

            navigate('/');
        }catch(error){
            console.log("Failed to add new user", error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            username,
            email,
        };

        addJob(newUser);

    }

    return (
        <div className='w-screen h-screen max-h-[800px]'>
            <div className='container mx-auto h-full mt-[120px]'>
                <div className='max-w-[600px] min-w-[300px] w-full shadow-md bg-slate-300 mx-auto p-8 rounded-lg'>
                    <div className='text-center text-3xl font-semibold mb-8'>Add User</div>
                    <form onSubmit={onSubmit}>
                        <div className='w-full h-[50px] my-4'>
                            <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Enter name' className='w-full h-full px-4 rounded-md border active:ring- focus:outline-none focus:border-green-500 hover:outline-none hover:border-green-500' />
                        </div>
                        <div className='w-full h-[50px] my-4'>
                            <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder='Enter username' className='w-full h-full px-4 rounded-md border active:ring- focus:outline-none focus:border-green-500 hover:outline-none hover:border-green-500' />
                        </div>
                        <div className='w-full h-[50px] my-4'>
                            <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder='Enter email' className='w-full h-full px-4 rounded-md border active:ring- focus:outline-none focus:border-green-500 hover:outline-none hover:border-green-500' />
                        </div>

                        <div className='flex justify-end'>
                            <button type='submit' className='p-3 mx-2 bg-green-500 rounded-md text-white'>Submit</button>
                            <NavLink to="/" className='p-3 ml-2 rounded-md text-red-500'>Cancel</NavLink>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddUserPage
