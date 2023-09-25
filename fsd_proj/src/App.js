// // // import logo from './logo.svg';
// // // import './App.css';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }

// // // export default App;




// import React from 'react';
// import Start from './components/Start';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
// import { DataProvider } from './context/dataContext';

// function App() {
//   return (
//     <DataProvider>
//       {/* Welcome Page */}
//       <Start/>

//       {/* Quiz Page */}
//       <Quiz/>

//       {/* Result Page */}
//       <Result/>

//     </DataProvider>
//   );
// }
// export default App;
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Gallery
 from './gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div>
      <center>
        <h2>Gallery Snapshot</h2><br></br>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" onChange={changeHandler} value={search}/><br /><br />
          <input type="submit" name="Search" />
        </form>
        <br />
        {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
      </center>
    </div>
  )
}
export default App;