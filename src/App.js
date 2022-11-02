import { LandingImage, Story } from "./comtainers";
import { NavBar } from "./components";

function App() {
  console.log("app");
  return (
    <>
      <NavBar />
      <LandingImage />
      <Story />
    </>
  );
}

export default App;

var climbStairs = function (n) {
  const arr = [0, 1, 2];
  if (n < 3) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
