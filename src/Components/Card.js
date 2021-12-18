import React from 'react';

const Card = (props) => {
        return(
            <div className='tc bg-light-green baskerville i dib br1 pa1 ma3 grow bw2 shadow-5'>
                
                <img alt='robots' src={`https://robohash.org/${ props.id }10*10`}/>
                <h2>{ props.name }</h2>
                <h3>{props.email}</h3>
            
            </div>
        );
}

export default Card;