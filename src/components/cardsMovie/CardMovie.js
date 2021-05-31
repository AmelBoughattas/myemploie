import React from 'react';
import { Link } from 'react-router-dom';
import Rate from '../stars/Rate';
import './cardStyle.scss';

const CardMovie = ({el:{id,title,posteURL,description,rate,backImg,producer,type,years}}) => {


    return (
              /* Router */
              
       <Link to={`/Description/${id}`} style={{textDecoration:"none"}}>

        <div className="bd">
        {/******************************* card movie  ******************************/}
        
        <div className="movie_card" >
           
           <div className="info_section">

     
              {/****************************************display contenu movie******************************************/}
               <div className="movie_header">
                
                   <div className="title_rate" >
                     <h1>{title}</h1>
                     <img className="locandina" src={posteURL} alt=""/>
                     <div className="rate"  style={{marginTop:'-10px'}}>
                        <Rate rate={rate}/>
                     </div>
                   </div>
                   <h4>{years}</h4>
                   <div className="type">
                      <p>{type}</p>
                   </div> 
                  {/*  <div className="movie_desc"> */}
                     {/*  <p>{description}</p> */}
               {/*     </div> */}
               </div>

        {/**********************************icon social media with icon fonts awsome**************************************/}
               <div className="social" >
                 <div className="movie_social" >
                  <ul>
                    <li><i className="fas fa-share-alt styleicon"></i></li>
                    <li><i className="fas fa-heart styleHeart"></i></li>
                    <li><i className="fas fa-comment-alt styleicon"></i></li>
                  </ul>
                 </div >
               </div>
           </div>

        {/********************************* background card ********************************/}
           <div className="blur_back" style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat' ,height: '100%' }}></div>
           
       </div>
    </div>
    </Link>
    )
}

export default CardMovie
