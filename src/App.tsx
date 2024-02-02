import "./App.css";
import { Application } from "./components/application/application";
// import { CounterTwo } from './components/counter-two/counter-two'
import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui-mode";
import { Skills } from "./components/skills/skills";
// import { Users } from './components/users/userssers'
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["HTML", "CSS"]} /> */}
        {/* <Counter /> */}
        {/* <CounterTwo count={1} /> */}
        {/* <Users /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
