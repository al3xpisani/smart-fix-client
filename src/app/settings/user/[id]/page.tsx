import { getUserById } from '@/app/lib/getUserSetting';

const UserById = async ({ params }: { params: { id: string } }) => {
  const { id, name, username } = await getUserById(params.id);
  return (
    <div className='text-2xl font-bold'>
      <h3>User id : {id}</h3>
      <h3>name: {name}</h3>
      <h3>Username: {username}</h3>
    </div>
  );
};
export default UserById;
