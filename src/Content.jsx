import { WorkoutsIndex } from "./WorkoutsIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [workouts, setWorkouts] = useState([]);

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };

  useEffect(handleIndexWorkouts, []);

  return (
    <div>
      <WorkoutsIndex workouts={workouts} />
    </div>
  );
}
