import React,{ useState } from 'react';
import people from './data'; 


const Review = () => {
    const [index, setIndex] = useState(0);
    const {name,age,text,image } = people[index];

    const checkNumber = (number) => {
        if (number > people.length -1){
            return 0;
        }
        if (number < 0 ){
            return people.length -1;
        }
        return number
    }
    const nextPerson = ( ) => {
        setIndex((index)=> {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = ( ) => {
        setIndex((index)=> {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };

    const randomPerson = () => {

        let randomNumber = Math.floor(Math.random()* people.length);
        
        if (randomNumber === index){
             randomNumber = index + 1;
        }

        setIndex(checkNumber(randomNumber));

        //REPEATING  Images
        // function getRandomInt (min, max){
        //      min = Math.ceil(0);
        //      max = Math.floor(people.length);
        //     return Math.floor(Math.random() * (max - min)+ min);
        // }
        // if (getRandomInt === index){
        //     return getRandomInt + 2 ;
        // };

        // setIndex ((index) => {
        //     let newIndex = index - getRandomInt();
        //     return checkNumber(newIndex);
        // });
    }  
    

    return (
        <div className="contain">
        <article className="review">
            <div className="img-container">
                <img src={image} alt={''} className="person-img"></img>
            </div>
            <h4><b>NAME :</b> {name}</h4>
            <p><b>AGE : </b>{age}</p>
            <p ><b>REVIEW : </b>{text}</p>

            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}> 
                Prev
                </button>
                <button className="next-btn" onClick={nextPerson}> 
                Next
                </button><br />
                <button className="random-btn" onClick={randomPerson}>Surprise Me</button>
            </div>

        </article>
        </div>
    )
}

export default Review
