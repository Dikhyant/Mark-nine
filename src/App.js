import './App.css';
import GenreTag from './Components/GenreTag';
import PageContent from './Components/PageContent';

import DataForCards from './Assets/DataForCards';

import { BrowserRouter as Router , Switch , Link , Route } from "react-router-dom";

function App() {

  const paths = [
    "fps" , 
    "open-world" ,
    "horror"
  ];

  const GenreTagLinks = paths.map( (path)=>{
    return (
      <Link to={"/" + path}>
        <GenreTag title={path} />
      </Link>
    )
  } )

  const Routes = paths.map( (path)=>{
    

    var dataForPage = DataForCards.map( (data)=>{
      if(data.genreTag === path) {
        return (data);
      } else {
        return (null);
      }
    } )


    dataForPage = dataForPage.filter( (data)=>( data !== null ) );

    return (
      <Route path={"/" + path}>
        <PageContent data={dataForPage} />
      </Route>
    )
  } )

  return (
    <Router>
    <div className="App">
      <div className="nav-bar">
        <Link to="/">
        <div className="page-title">
          Games you must play
        </div>
        </Link>

        <div style={{flex: 1}}></div>

        <div className="genre-tag-list">
          {GenreTagLinks}
        </div>

        <div style={{flex: 1}}></div>
      </div>

      <Switch>
        {Routes}

        <Route path="/">
          <img src={require("./Assets/Images/Far_cry_5.jpg").default} style={{
            position: 'relative',
            top: "-23rem",
            left: "0rem",
            opacity: 0.7 , 
            width: "24rem"
            }}  />
          <img src={require("./Assets/Images/Witcher 3.png").default} style={{
            position: 'relative',
            top: "1rem",
            left: "29rem",
            opacity: 0.3 , 
            width: "40rem"
            }}  />
            <img src={require("./Assets/Images/Uncharted 4.jpg").default} style={{
            position: 'absolute',
            top: "0rem",
            left: "0rem",
            opacity: 1 , 
            width: "95rem",
            zIndex: -1
            }}  />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
