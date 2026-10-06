import Hero from "../components/Hero";
import TaskCard from "../components/TaskCard";
import GoalCard from "../components/GoalCard";
import EffectInfo from "../components/EffectInfo";

function Home() {
  return (
    <>
      <Hero />

      <EffectInfo />

      <section className="content-grid">
        <TaskCard title="Tasks" />

        <GoalCard
          title="Goals"
          description="Set goals and keep yourself focused."
        />
      </section>
    </>
  );
}

export default Home;
