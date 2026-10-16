import Rating from '@mui/material/Rating';
function UserCard({ user })
 {


  return (
    
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
       <Rating
        name="simple-controlled"
        value={3}
      />
    </div>
  );
}

export default UserCard;