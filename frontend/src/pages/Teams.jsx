import React, { useEffect, useState } from 'react';
import { getTeams, createTeam } from '../api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [formation, setFormation] = useState('');

  useEffect(() => {
    getTeams().then((response) => setTeams(response.data));
  }, []);

  const handleAddTeam = () => {
    createTeam({ teamName, formation }).then(() => {
      // Refresh the list after adding
      getTeams().then((response) => setTeams(response.data));
    });
  };

  return (
    <div>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.team_id}>{team.team_name} - {team.formation}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={teamName}
          placeholder="Team Name"
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          value={formation}
          placeholder="Formation"
          onChange={(e) => setFormation(e.target.value)}
        />
        <button onClick={handleAddTeam}>Add Team</button>
      </div>
    </div>
  );
}

export default Teams;
