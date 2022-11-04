import { LandingImage, Story, List } from "./comtainers";
import { NavBar } from "./components";

function App() {
  console.log("app");
  return (
    <>
      <NavBar />
      <LandingImage />
      <Story />
      <List />
    </>
  );
}

export default App;
