import React, {useState, useEffect} from 'react';
import  '../assets/styles/Components/App.scss'
import Header from '../Components/Header';
import Coverpage from '../Components/Coverpage';
import Search from '../Components/Search';
import CardJob from '../Components/CardJob';
import axios from 'axios';
import Footer from '../Components/Footer';




const Main = () => {

    const [cards, setCards]= useState([])

    const getCard = ()=>{


        const URL = `https://jobs.github.com/positions.json?description=python&location=new+york`;
        axios.get(URL)
             .then( response => setCards(response.data.data.data))
             .catch( error => console.log(error));
          
    }        

    useEffect(()=>{
       getCard();
     }, []);

    return (
        <div>
            <Header/>
            <div> 
            <Coverpage/>
            </div>
            <div>
            <Search  getCard= {getCard}/>

           
            {cards.map(card => {
                return (
                    <CardJob 
                    key= {card.id}
                    type= {card.type}
                    title = {card.title}
                    url= {card.url}
                    company = {card.company}
                    location = {card.location}
                    description = {card.description}
                    company_logo = {card.company_logo}
                    />
                    
                )
            })} 

            <Footer />
            
            </div>
           
        </div>

       
        
    )
}

export default Main;
