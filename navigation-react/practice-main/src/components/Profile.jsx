import { useParams } from "react-router-dom";

const Profile = ({ users }) => {
  const { id } = useParams();
    if (users.length === 0) {
    return <h2>Loading...</h2>;
  }

  console.log("id is", id);
  console.log('users is', users);

  const user = users.find((user) => user.id == id);

    if (!user) {
    return <h2>User not found</h2>;
  }
  console.log(user);
  return (
    <>
    <h1 className="text-center text-3xl">User Profile Section</h1>
  
 <div className="flex justify-between flex-wrap p-5 ">
  
            <div 
              key={user.id}
              className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs m-4 w-[30%]"
            >
              <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                {user.name}
              </h5>
              <p className="text-body mb-6">ZipCode: {user.address.zipcode}</p>
              <p className="text-body mb-6">Company name: {user.company.name}</p>
              <p className="text-body mb-6">{user.email}</p>


            </div>
    </div>
   </>
  );
};
export default Profile;
