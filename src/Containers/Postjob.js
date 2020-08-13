import React from "react";
import CreateJob from "../Components/CreateJob";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";
import { Container } from "react-bootstrap";

const Postjob = () => {
  const history = useHistory();

  const createJob = (
    company_name,
    description,
    email,
    job_title,
    website_url
  ) => {
    const URL = "https://remoteunicorns.firebaseio.com/job.json";

    let newJob = {
      company_name: company_name,
      description: description,
      email: email,
      job_title: job_title,
      website_url: website_url,
    };
    axios
      .post(URL, newJob)
      .then((res) => history.push("/"))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <Container fluid={true}>
        <div>
          <Header />
        </div>
        <div className="container pt-4">
          <CreateJob createJob={createJob} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Postjob;
