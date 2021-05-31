import React from 'react';
import './trailerStyle.css';

const Trailer = ({match, movies,history}) => {

     const detailsMovies=movies.find(movie=>movie.id == match.params.id)

    return (
        <div className="video">
            <iframe className="frame" src={detailsMovies.trailer} width="100%" height="600px"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
            </iframe>

            <div className="btn_go">
              
              {/* button go home */}
              <div class="wrapGo">
                 <button class="buttonGo btnHome" onClick={()=>history.push('/')}>Go Home</button>
              </div>

               {/* button go back */}
               <div class="wrapGo">
                 <button class="buttonGo" onClick={()=>history.goBack()}>Go Back</button>
              </div>
            </div>
            </div>
        
    )
}

export default Trailer;
