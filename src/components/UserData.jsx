import { useParams } from "react-router";

function UserData() {
  const params = useParams();
  console.log(params);
  return <h1>UserData</h1>;
}

export default UserData;
