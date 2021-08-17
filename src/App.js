import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';

function App() {

  const [data, setData] = useState([])

  const getCovidData = async () => {
    const response = await fetch('https://data.covid19india.org/data.json')
    const actualData = await response.json();
    console.log(actualData.statewise);
    setData(actualData.statewise)
  }

  useEffect(() => {
    getCovidData();
  }, [])
  return (

    <div className="App">

      <div className="container-fluid">
        <div className="main-heading">
          <div className="mb-5"><h1 className="text-center"><b>India</b> Statewise Covid-19 Tracker Dastboard</h1></div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark dark">
              <tr>
              {/* heading names */}
                <th>State</th>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
                <td>Active</td>
                <td>Update</td>
              </tr>
            </thead>
            <tbody>
              {
                data.map((curElem, index) => {
                  return (
                    <tr key={index}>
                      <th> {curElem.state} </th>
                      <td> {curElem.confirmed} </td>
                      <td> {curElem.recovered} </td>
                      <td> {curElem.deaths} </td>
                      <td> {curElem.active} </td>
                      <td> {curElem.lastupdatedtime} </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
