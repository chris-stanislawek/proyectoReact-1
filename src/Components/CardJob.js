import React from 'react';
import useFetchJobs from '../Hooks/UseFetchJobs';
import { Container } from 'react-bootstrap';


const CardJob = () => {

  const {jobs, loading , error} = useFetchJobs()
  return (
    
    <Container>
      {loading && <h1> Loading...</h1>}
      {error && <h1>Error, try again</h1>}
        <h1> jobs.length </h1>

    </Container>

  )


 
}

export default CardJob;
