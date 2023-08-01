// import { useReducer } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// export function YourAccount() {
//   const getUser = () => {
//     axios.get("http://localhost:3000/users/2.json").then((response) => {
//       console.log(response.data);
//     });
//   };

//   useEffect(() => {
//     getUser();
//   });

//   // const [workouts, setWorkouts] = useState([]);

//   return (
//     <footer>
//       /* <p> {user.name} </p>
//       <p> {user.email} </p> */
//       <p>Copyright 2022</p>
//     </footer>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { GoalForm } from "./GoalForm";

export function YourAccount() {
  const [userData, setUserData] = useState(null);

  const handleGoalSubmit = (goalData) => {
    console.log("handleCreateWorkout", goalData);
    axios.post("http://localhost:3000/goals", goalData).then((response) => {
      console.log("Submitted Goal:", goalData, response);
    });
  };

  useEffect(() => {
    // Make the API call to fetch user data
    axios
      .get(`http://localhost:3000/users/2.json`)
      .then((response) => {
        setUserData(response.data); // Updated the state with user dataaaaaaaa
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <GoalForm onSubmit={handleGoalSubmit} />
    </div>
  );
}
