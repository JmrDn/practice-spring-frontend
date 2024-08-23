import React, { useEffect, useState } from 'react'
import UserRow from './UserRow';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await fetch('https://practice-spring-backend-production.up.railway.app/users');
      const data = await res.json();
      const sortedData = data.sort((a, b) => a.id - b.id);
      setUsers(sortedData);
      
    } catch (error) {
      console.log("Failed to fetch data of users", error);
    }
  }


  useEffect(() => {

    fetchUser();
  }, []);
  return (
    <div className='container mx-auto mt-[120px] '>
      <table className='w-full text-black shadow-sm'>
        <thead>
          <tr className='font-semibold bg-green-600 text-white border-b-2 border-gray-800 text-center '>
            <th className='p-2'>ID</th>
            <th className='p-2'>Name</th>
            <th className='p-2'>Username</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>
            <UserRow key={index} user={user}/>)} 
        </tbody>
      </table>

    </div>
  )
}

export default UserTable
