import { useUser } from "@/context/UserContext";
import axios from "axios";
import { User } from "lucide-react"
import { useEffect, useState } from "react"
import { TopBar } from "./top-bar";

// const users = [
//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Brown" },
//   { id: 4, name: "Diana Miller" },
//   { id: 5, name: "Ethan Davis" },
// ]


export function Sidebar() {

  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const { selectedUser, setSelectedUser } = useUser();
  useEffect(() => {
    axios.get('/api/users',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(data => {
      setUsers(data.data.users)
      
    })
    .catch(err => console.log(err))
  }
  ,[])

  useEffect(() => {
    if (selectedUser) {
      console.log(selectedUser);
      
    //   axios.get(`/api/users/${selectedUser}`)
    //   .then(data => {
    //     console.log(data.data)
    //   })
    //   .catch(err => console.log(err))
    }
  },[selectedUser])

  return (
    <aside className="w-64 bg-gray-100 overflow-y-auto">
        {/* <TopBar/> */}
        <header className="flex items-center justify-between px-6 py-4 ">
      <h1 className="text-2xl font-bold">ChatApp</h1>
    </header>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Users</h2>
        <ul className="space-y-2">
          {users ? users.length > 0 ?  users?.map((user) => (
            <li
              key={user.id}
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer ${selectedUser?.id === user.id ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
              onClick={() => setSelectedUser(user)}
            >
              <User className="h-6 w-6" />
              <span>{user.name}</span>
            </li>
          )):  <p>No users</p> : <p>Loading...</p>}
        </ul>
      </div>
    </aside>
  )
}

