import { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";

export function YourAccount() {
  const getUser = () => {
    axios.get("http://localhost:3000/users/2.json").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getUser();
  });

  const [workouts, setWorkouts] = useState([]);

  return (
    <footer>
      <p> {user.name} </p>
      <p> {user.email} </p>
      <p>Copyright 2022</p>
    </footer>
  );
}
