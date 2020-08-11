import React from 'react'
import '../assets/styles/Components/Coverpage.scss';
import cover from '../assets/styles/img/cover.png';
import { Container } from 'react-bootstrap';


const Coverpage = () => {
    return (
        <Container> 
        <div className= "cover">
            
            <div className= "text"> 
            <p> Find your next </p>
            <p> REMOTE DEV JOB </p>
            </div>
            
            <img  className= "cover__img" src={cover}/>
        
          
        </div>
        </Container>
    )
}

export default Coverpage
