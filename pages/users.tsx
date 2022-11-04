type Props = {
  users: any;
};

const UserList = ({ users }: Props) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default UserList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
};
