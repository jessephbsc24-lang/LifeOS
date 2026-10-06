function GoalCard({ title, description }) {
  return (
    <article className="card" id="goals">
      <h2>{title}</h2>
      <p>{description}</p>

      <button>
        View Goals
      </button>
    </article>
  );
}

export default GoalCard;