import React, { useState, useEffect } from "react";
import "../assets/styles/Components/App.scss";
import Header from "../Components/Header";
import Coverpage from "../Components/Coverpage";
import Search from "../Components/Search";
import CardJob from "../Components/CardJob";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import { Container } from "react-bootstrap";
import useFetchJobs from "../Hooks/UseFetchJobs";
import axios from "axios";

const Main = () => {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const [FbJobs, setFbJobs] = useState([]);

  function getJobs() {
    const URL = "https://remoteunicorns.firebaseio.com/job.json";
    axios
      .get(URL)
      .then((res) => setFbJobs(res.data))
      .catch((error) => alert(error));
  }

  function handleButton() {
    console.log("si funciono");
  }

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  useEffect(() => {
    console.log("Soy useEffect");
    getJobs();
  }, []);

  return (
    <Container fluid={true}>
      <div>
        <Header />
      </div>

      <div>
        <Coverpage />
      </div>
      <Container>
       <div>{/* <Buttons handleButton={handleButton} /> */}</div>

        <div>
          {/* <Search params={params} onParamChange={handleParamChange} /> */}
          <Container className="my-4">
            <h1 className="mb-4 ml-3"> Trabajos Remotos: </h1>
            {Object.keys(FbJobs).map((fireb, i) => {
              return <CardJob key={i} job={FbJobs[fireb]} />;
            })}
            {loading && <h1> Loading...</h1>}
            {error && <h1> Error, try again</h1>}
            {/* {console.log("Jobs:", jobs)} */}
            {jobs.map((job) => {
              return <CardJob key={job.id} job={job} />;
            })}
          </Container>
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default Main;
