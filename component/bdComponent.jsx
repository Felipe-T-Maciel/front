import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchProdutos = async () => {
  try {
    const response = await axios.get('http://localhost:8083/users/todos');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};

export default function MyComponent(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchProdutos();
      console.log(result)
      setUsers(result);
    };

    loadData();
  }, []);

  return (
    <>
        <div className='h-screen w-full bg-red-600'>
            {users?.map(user => (
                <div className='text-black' key={user.id}>Usuario: {user.nome}</div>
            ))}
        </div>
    </>
  );
};


