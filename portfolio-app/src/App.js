import './App.css';
import Header from './Header.js';
import WorkExperience from './WorkExperience';
import Education from './Education';
import TechSummary from './TechSummary';

function App() {
  return (
    <div className="App">
    <Header />
    <main className="container">
        <div className="row mt-3">
          <WorkExperience />
          <Education />
        </div>
        <div className="row mt-3">
            <TechSummary/>
        </div>
    </main>
    
      
    </div>
  );
}

export default App;
