import Dashboard from "../components/Dashboard";
import Meals from "../components/Meals";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <Dashboard />
      <Meals />
    </div>
  );
}

export default Home;