import { LandingImage, Story, List, Bonus } from "./comtainers";
import { NavBar } from "./components";

function App() {
  console.log("app");
  return (
    <>
      <NavBar />
      <LandingImage />
      <Story />
      <List />
      <Bonus />
    </>
  );
}

export default App;
