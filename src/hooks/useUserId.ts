import { useParams } from 'react-router-dom';

export function useUserId() {
  const { id } = useParams<{ id: string }>();

  const getUserId = () => {
    return id?.split('=')[1] || '';
  };

  return getUserId();
}
