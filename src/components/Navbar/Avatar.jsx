import avatar from "../../assets/react.svg";

const Avatar = () => {
  //   const { user } = useContext(AuthContext);
  const user = true;
  return (
    <img
      src={user && user?.photoURL ? user?.photoURL : avatar}
      alt="profile"
      height="30"
      width="30"
      className="rounded-full"
    />
  );
};

export default Avatar;
