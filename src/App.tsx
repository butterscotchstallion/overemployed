import { ExperienceDisplay } from './components/experience/ExperienceDisplay';

function App() {
  return (
    <>
      <div style={{ width: '50%' }}>
        <ExperienceDisplay gainedExperience={10500} />
      </div>
    </>
  );
}

export default App;
