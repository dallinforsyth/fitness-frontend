import { WorkoutsIndex } from "./WorkoutsIndex";

export function Content() {
  const workouts = [
    { id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 },
    { id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  ];

  return (
    <div>
      <WorkoutsIndex workouts={workouts} />
    </div>
  );
}
