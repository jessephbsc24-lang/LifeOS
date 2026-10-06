import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TaskCard from "./components/TaskCard";
import GoalCard from "./components/GoalCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="lifeos">

      <Header />

      <Navigation />

      <main className="main-content" id="home">

        <Hero />

        <section className="content-grid">

          <TaskCard title="Tasks" />

          <GoalCard
            title="Goals"
            description="Set goals and keep yourself focused."
          />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;