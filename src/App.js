import logo from './logo.svg';
import './App.css';
import CharacterWidget from "./components/CharacterWidget";
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <CharacterWidget></CharacterWidget>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
