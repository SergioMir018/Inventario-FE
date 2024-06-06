import { useEffect, useState } from "react"
import { fetchUser } from "../../api/user";
import { useParams } from 'react-router-dom';

export default function UserCard() {
  const [name, setName] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const getUser = async (id: string) => {
      try {
        const formatedId = id.split('=')[1]
        const userData = await fetchUser(formatedId);
        setName(userData.name);
      } catch (error) {
        console.error(error);
      }
    }

    getUser(id as string);
  }, [id])

  return (
    <div className="flex">
      <h4 className="ml-6 font-gabarito-medium text-3xl">
        {name}
      </h4>
    </div>
  )
}
