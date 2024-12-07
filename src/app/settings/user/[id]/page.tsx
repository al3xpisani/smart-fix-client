import { getUserById } from '@/app/lib/getUserSetting';

interface ParamsProps {
  params: Promise<{ id: string }>;
}

const UserById = async ({ params }: ParamsProps) => {
  const { id } = await params;
  const { name, username } = await getUserById(id);
  return (
    <div className='text-2xl font-bold'>
      <h3>User id : {id}</h3>
      <h3>name: {name}</h3>
      <h3>Username: {username}</h3>
    </div>
  );
};
export default UserById;
