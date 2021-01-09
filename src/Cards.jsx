import React from 'react'
import './Cards.css';

function Cards(props) {
    return (
        
            <div className="cards">
                <div className="card">
                    <img src={props.simg} alt=" pic missing" className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.sname}</h3>
                        <a href={props.link} >
                            <button className="btn">Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        
    )
}

export default Cards
