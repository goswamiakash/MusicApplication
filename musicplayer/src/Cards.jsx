import React from 'react'


const Cards = (props) => {
  console.log(props,"rrrrr");
  return (
    <>
    <div className='cards'>
      <div className='card'>
        <img src="img\Music_new.jpg" alt="myPic" className="card_img"/>
        <div className='card_info'>
          <span className='card__category'>{props.title}</span>
          <h3 className='card__8title'>{props.category}</h3>
          <a href=""target="_blank"
          >
            <button>Listen Now</button>
          </a>
        </div>
      </div>   
    </div>
    </>
  )
}

export default Cards