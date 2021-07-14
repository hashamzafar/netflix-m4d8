import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Component/Navbar';
import Header from './Component/Header';
import RowOfMovies from './Component/RowOfMovies';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import ShowDetail from './Component/ShowDetail'
function App() {
  return (
    <Router>
      <>

        <CustomNavbar />
        <Header />
        <Route path="/" exact render={() => <RowOfMovies title='Star Wars' />} />
        <Route path="/" exact render={() => <RowOfMovies title='Harry Potter' />} />
        <Route path="/" exact render={() => <RowOfMovies title='The lord of the rings' />} />
        {/* <Route path='/showDetail:' /> */}
        {/* <Route path='/'exact conponent={ShowDetail}/> */}
        {/* <ShowDetail /> */}
      </>
    </Router>
  );
}

export default App;