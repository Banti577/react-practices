
import Form from "./Form";
import Result from "./Result";

const Post = ({ users, setUserData }) => {

  return (
    <div className="">
      <div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1"
          alt=""
          srcSet=""
        />
        <h3>TOday i am feeling well</h3>
        <h5>14/05/2002</h5>
      </div>
      <div className="flex justify-around">
        <Form setUserData={setUserData} />
        <Result users={users} />
      </div>
    </div>
  );
};
export default Post;
