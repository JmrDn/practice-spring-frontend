import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const EditUserPage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const editUser = async (newUser) => {
        try{
            const res = await fetch(`http://localhost:8080/users/${id}`, {
                method:'PUT',
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
                navigate('/');
            }

        }catch(error){
            console.log(`Failed to edit user with ID ${id}`, error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            username,
            email,
        };

        editUser(newUser);

    }

    useEffect(()=>{
        const fetchUser = async () =>{
            try{
                const res = await fetch(`https://practice-spring-backend-production.up.railway.app/users/${id}`);
                const data = await res.json();
                setName(data.name);
                setEmail(data.email);
                setUsername(data.username);
            } catch(error){
                console.log(`Failed to fetch user with id ${id}`, error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className='w-screen h-screen max-h-[800px]'>
            <div className='container mx-auto h-full mt-[120px]'>
                <div className='max-w-[600px] min-w-[300px] w-full shadow-md bg-slate-300 mx-auto p-8 rounded-lg'>
                    <div className='text-center text-3xl font-semibold mb-8'>Edit User</div>
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

export default EditUserPage
