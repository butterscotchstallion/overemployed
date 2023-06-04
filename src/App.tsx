import { ExperienceDisplay } from './components/experience/ExperienceDisplay';

function App() {
  return (
    <>
      <div style={{ width: '50%' }}>
        <ExperienceDisplay gainedExperience={~~(Math.random() * 500000)} />
      </div>
    </>
  );
}

export default App;
