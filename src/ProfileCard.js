function ProfileCard({ title, username, image }) {
  // console.log(title, username);
  return (
    <div>
      <img src={image} alt="pda logo" />
      <div>{title}</div>
      <div>{username}</div>
    </div>
  );
}

export default ProfileCard;
