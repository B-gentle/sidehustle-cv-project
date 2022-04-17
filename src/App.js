import './App.css';
import Name from './Components/GenInfo/Name';
import OtherDetails from './Components/GenInfo/OtherDetails';
import EduHistory from './Components/EduExp/EduHistory';
import WorkExp from './Components/WorkExp/workExp';

function App() {
  return (
    <div className="App">
      <Name />
      <OtherDetails /> <hr />
      <EduHistory />
      <WorkExp />
    </div>
  );
}

export default App;
