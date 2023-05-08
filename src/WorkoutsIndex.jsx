export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.name}</h2>
          <img src={workout.img} />
        </div>
      ))}
    </div>
  );
}
