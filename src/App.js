import Row from "./Row"
import requests from "./requests"
import Banner from "./Banner"
import Navbar from "./Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
<Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    </div>

  );
}

export default App;
