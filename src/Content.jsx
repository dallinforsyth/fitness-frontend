import { WorkoutsIndex } from "./WorkoutsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { WorkoutsShow } from "./WorkoutsShow";

export function Content() {
  const [workouts, setWorkouts] = useState([]);
  const [isWorkoutsShowVisible, setIsWorkoutsShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutsShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWorkoutsShowVisible(false);
  };

  useEffect(handleIndexWorkouts, []);

  return (
    <div>
      <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} />
      <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
        <WorkoutsShow workout={currentWorkout} />{" "}
      </Modal>
    </div>
  );
}
