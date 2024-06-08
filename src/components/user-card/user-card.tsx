import { useEffect, useState } from 'react';
import { fetchUser } from '../../api/user';
import { useUserId } from '../../hooks/useUserId';

export default function UserCard() {
  const [name, setName] = useState<string>('');
  const userId = useUserId();

  useEffect(() => {
    const getUser = async (id: string) => {
      try {
        const userData = await fetchUser(id);
        setName(userData.name);
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <div className='flex'>
      <h4 className='ml-6 font-gabarito-medium text-3xl'>{name}</h4>
    </div>
  );
}
