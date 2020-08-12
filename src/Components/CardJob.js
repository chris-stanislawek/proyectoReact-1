import React, { useState } from 'react';
import { Card, Badge, Button , Collapse, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import '../assets/styles/Components/CardJobs.scss';




const CardJob = ({ job }) => {
 
  const [open, setOpen] = useState(false)


  return (
    
    <Container className="prueba"> 
      
    <Card className="mb-3">
      <Card.Body>
        <div className='d-flex justify.content-between'> 
          <div>
            <Card.Title>
                {job.title} - <span className= "text-muted font-weight-light"> {job.company} </span>
            </Card.Title>
            <Card.Subtitle className= "text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type} </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style= {{ wordBreak: 'break-all'}}>
              <ReactMarkdown source={job.how_to_aply} />
            </div>
          </div>      
          <img  className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
        </div>
      <Card.Text>
        <Button onClick={()=> setOpen(prevOpen => !prevOpen )} 
        variant="warning" className="mt-3"> 
        { open? 'Ocultar detalles' : 'Ver  Detalles'} </Button>
      </Card.Text>
      <Collapse in={open}>
      <div className="mt-4">
        <ReactMarkdown source={job.description}/> 
      </div>
      </Collapse>     
      </Card.Body>
    </Card>
    </Container>
   

  )


 
}

export default CardJob;
