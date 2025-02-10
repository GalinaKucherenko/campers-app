// import { fetchCampersWithTopic } from '../../campers-api'
import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import CampersList from '../CampersList/CampersList'
// import { useState, useEffect } from 'react'


export default function App() {
  // const [campers, setCampers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchCampers() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchCampersWithTopic('react');
  //       setCampers(data);
  //     } catch (error) {
  //       setError(true);
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchCampers()
  // }, []);
 
  // const handleSearch = async (topic) => {
  //   try {
  //     setCampers([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await fetchCampersWithTopic(topic);
  //     setCampers(data);
  //   } catch (error) {
  //     setError(true);
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/campers' element={ <CampersList /> } />
        
      </Routes>
     

      
      {/* <SearchBar onSearch={handleSearch}/> */}

      {/* {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {campers.length > 0 && <CampersList items={campers}/>} */}
       
    </div>
  )
}
