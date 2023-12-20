import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#702CF9';
      showAlert("Dark mode is Enabled", "Success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enabled", "Success");
    }
  }
  return (
    <>
      <Router>
        <div>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert Alert={alert} />
          <div className="container"  >
            <Switch>
              <Route exact path="/about">
                <About mode={mode} />
              </Route>
              <Route exact path="/">
                <Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />
              </Route>
            </Switch>  
          </div>

        </div>
      </Router>
    </>
  );
}

export default App;
