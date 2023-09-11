import React from 'react';


export default function Person({image, name, age}) {
  return (
    <article className='person'>
        <img src={image} alit={name} className="img"/>
        <div>
            <h4>{name}</h4>
            <p>{age}</p>
        </div>
    </article>
  )
}
