 import React from 'react'
import Rate from './stars/Rate'
import './descSryle.scss';
import { Link } from 'react-router-dom';

const Description = ({match, movies,history}) => {

    const detailsMovies=movies.find(movie=>movie.id == match.params.id)
    console.log(movies,match.params.id)
    
    return (
        <div>

        <div className="movie_cards">
          
          <div className="container">
            
             <img src={detailsMovies.posteURL} alt="cover" className="postURL" />  
                
              <div className="backgound" style={{backgroundImage:`url(${ detailsMovies.backImg})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}}>
                    
                 <div className="detail">
        
                   <span className="title">{detailsMovies.title}</span>
        
                  <div className="heading heading--stroke-shadow"> {detailsMovies.producer}</div>    
                
                  <div className="rate" >
                      <Rate rate={detailsMovies.rate}/>
                  </div>
                
                </div> 
              
              </div>
              <div className="description">
         
               <div className="column1">
                  <span className="tag">{detailsMovies.type}, { detailsMovies.years}</span>
               </div> 
               <div className="container-fluid">
                 <div className="row">
                       <div className="col-md-8 desc"> 
                         <div className="column2">
                           <p> {detailsMovies.description} </p>
                         </div> 

                           {/* Link for trailer  watch movie */}
                         <div className="col-md-4 ">

                           <Link to={`/Trailer/${detailsMovies.id}`} style={{textDecoration:'none'}}>
                           
                               <h2 className="trailerBTN" style={{marginleft: "130px",  width: "300px"}}>Watch trailer<span>>>>></span> </h2>
                           
                           </Link>

                         </div>
                       </div>
    
                
                  </div> 
               </div> 
              </div> 
             </div> 

                   <div class="wrap2 btn">
                    <button class="button2" onClick={()=>history.push('/')}>Go home</button>
              </div> 
                  
        <div>
          
        </div>
    
      </div>
    </div>   
                      
                  
    )
}

export default Description;
 