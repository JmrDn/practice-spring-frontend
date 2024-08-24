import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getApiUrl } from '../Util'

const UserRow = ({user}) => {
  const API_URL = getApiUrl();
    const deleteUser = async () =>{
        try{
            const res = await fetch(`${API_URL}/users/${user.id}`,{
                method:'DELETE'
            });

            if (!res.ok){
                console.log(`Failed to delete user with ID ${user.id}`);
            }
            else{
                
            }
        }catch(error){
            console.log(`Failed to delete user with ID ${user.id}`);
        }
    }
    return (
        <tr className='bg-slate-200 text-center border-b-2 border-gray-300  '>
            <td className='p-2'>{user.id}</td>
            <td className='p-2'>{user.name}</td>
            <td className='p-2'>{user.username}</td>
            <td className='p-2'>{user.email}</td>
            <td className='p-2'>
                <NavLink to={`users/${user.id}`} className='px-4 py-2 mx-2 rounded-sm bg-blue-500 text-white'>View</NavLink>
                <NavLink to={`edit-user/${user.id}`} className='px-4 py-2 mx-2 rounded-sm text-blue-500 border-2 border-blue-500'>Edit</NavLink>
                <button onClick={deleteUser} className='px-4 py-2 mx-2 rounded-sm text-white bg-red-500'>Delete</button>
            </td>
        </tr>
    )
}

export default UserRow
