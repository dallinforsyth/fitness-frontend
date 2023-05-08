import { WorkoutsIndex } from "./WorkoutsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

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
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
