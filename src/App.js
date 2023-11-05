import './App.css';
import TextEditor from './components/TextEditor';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import HomeScreen from './components/HomeScreen';
function App() {
  const [docId, setDocId] = useState('');
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen docId={docId} setDocId={setDocId} />
        </Route>
        <Route exact path="/rooms">
          <Redirect to={`/rooms/documents/${uuidV4()}`} />
        </Route>
        <Route path="/rooms/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
