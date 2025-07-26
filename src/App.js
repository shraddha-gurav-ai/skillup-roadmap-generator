import React, { useState } from 'react';
import './App.css';

function App() {
  const [interest, setInterest] = useState('');
  const [level, setLevel] = useState('');
  const [roadmap, setRoadmap] = useState('');

  const generateRoadmap = () => {
    if (!interest || !level) {
      setRoadmap('Please select your interest and skill level.');
      return;
    }

    let roadmapText = '';

    if (interest === 'web') {
      roadmapText += 'Learn HTML, CSS, JavaScript\n';
      if (level === 'beginner') roadmapText += '→ Focus on Frontend basics like React.js\n';
      if (level === 'intermediate') roadmapText += '→ Learn Git, APIs, and hosting on GitHub\n';
      if (level === 'advanced') roadmapText += '→ Deep dive into Next.js, CI/CD, and full-stack apps\n';
    }

    if (interest === 'data') {
      roadmapText += 'Learn Python, Excel, SQL\n';
      if (level === 'beginner') roadmapText += '→ Explore Data Visualization using Tableau or Power BI\n';
      if (level === 'intermediate') roadmapText += '→ Learn Pandas, NumPy, and Jupyter Notebooks\n';
      if (level === 'advanced') roadmapText += '→ Practice real-world projects and build dashboards\n';
    }

    if (interest === 'ai') {
      roadmapText += 'Learn Python and Math for ML\n';
      if (level === 'beginner') roadmapText += '→ Use scikit-learn for small ML models\n';
      if (level === 'intermediate') roadmapText += '→ Learn TensorFlow or PyTorch basics\n';
      if (level === 'advanced') roadmapText += '→ Contribute to open-source, work on real-world ML apps\n';
    }

    setRoadmap(roadmapText);
  };

  return (
    <div className="App">
      <h1>🚀 SkillUp – Career Roadmap Generator</h1>
      
      <div>
        <label>Choose your interest:</label><br />
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">--Select--</option>
          <option value="web">Web Development</option>
          <option value="data">Data Analytics</option>
          <option value="ai">AI & Machine Learning</option>
        </select>
      </div>

      <div>
        <label>Select your skill level:</label><br />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">--Select--</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button onClick={generateRoadmap}>Generate Roadmap</button>

      {roadmap && (
        <div className="roadmap-output">
          <h3>Your Personalized Roadmap:</h3>
          <pre>{roadmap}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
