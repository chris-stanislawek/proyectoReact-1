import React, { useState } from "react";
import "../assets/styles/Components/App.scss";
import Header from "../Components/Header";
import Coverpage from "../Components/Coverpage";
import Search from "../Components/Search";
import CardJob from "../Components/CardJob";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
import useFetchJobs from "../Hooks/UseFetchJobs";

const Main = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  function handleParamChange(e){
    const param= e.target.name
    const value= e.target.value
    setPage(1)
    setParams(prevParams =>{
        return {...prevParams, [param]: value }
    })
  }

  return (
    <div>
      <Header />
      <div>
        <Coverpage />
      </div>
      <div>
        <Search params= {params} onParamChange={handleParamChange} />
        <Container className="my-4">
            <h1 className="mb-4"> Trabajos Remotos: </h1>
          {loading && <h1> Loading...</h1>}
          {error && <h1>Error, try again</h1>}
          {jobs.map(job =>{
              return <CardJob
                      key={job.id} 
                      job= {job}

                             />
          })}
          
        </Container>




        

        <Footer />
      </div>
    </div>
  );
};

export default Main;
