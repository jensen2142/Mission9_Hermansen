import React from 'react';
import basketballInfo from './CollegeBasketballTeams.json';

interface BasketProps {
  school: string;
  name: string;
  city: string;
  state: string;
}
function Header() {
  return (
    <>
      <h1>NCAA College Mens Basketball</h1>
      <h3>Listed below is a list of all college basketball teams:</h3>
    </>
  );
}
function BasketballList() {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>Team Name</th>
          <th style={tableHeaderStyle}>Mascot</th>
          <th style={tableHeaderStyle}>City</th>
          <th style={tableHeaderStyle}>State</th>
        </tr>
      </thead>
      <tbody>
        {basketballInfo.teams.map((basketTeam) => (
          <Basketball {...basketTeam} />
        ))}
      </tbody>
    </table>
  );
}

// Chat GPT Helped me with my inline CSS to make this app look better
const tableHeaderStyle: React.CSSProperties = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};

class Basketball extends React.Component<BasketProps> {
  render() {
    const basketballInfo = this.props;

    return (
      <tr>
        <td style={tableCellStyle}>{basketballInfo.school}</td>
        <td style={tableCellStyle}>{basketballInfo.name}</td>
        <td style={tableCellStyle}>{basketballInfo.city}</td>
        <td style={tableCellStyle}>{basketballInfo.state}</td>
      </tr>
    );
  }
}
// Chat GPT did this part to make my app look better
const tableCellStyle: React.CSSProperties = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left',
};

function App() {
  return (
    <div className="App">
      <Header />
      <BasketballList />
    </div>
  );
}

export default App;
