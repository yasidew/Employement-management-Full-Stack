import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent/>
            <div className="container">
              <switch> 
                <Route path = "/" component ={ListEmployeeComponent}></Route>
                <Route path = "/employees" component ={ListEmployeeComponent}></Route>
                <Route path = "/add-employee" component ={CreateEmployeeComponent}></Route>
                
              </switch> 
            </div>
            <FooterComponent/>
            
        </Router>
    </div>
  );
}

export default App;
