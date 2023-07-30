import { useState } from "react";

export function GoalForm({ onSubmit }) {
  const [goal, setGoal] = useState({
    title: "",
    description: "",
    targetDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal({ ...goal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(goal);
    setGoal({ title: "", description: "", targetDate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={goal.title} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={goal.description} onChange={handleChange} />
      </div>
      <div>
        <label>Target Date:</label>
        <input type="date" name="targetDate" value={goal.targetDate} onChange={handleChange} />
      </div>
      <button type="submit">Set Goal</button>
    </form>
  );
}
