 import { uuid as uuidv4 } from 'uuidv4';   

const movieList= [
    {
      id:uuidv4(),
      title :"Godzilla vs Kong" ,
      description : "In the film, Godzilla and Kong are on a collision course in a spectacular battle for the ages as the shady corporation Monarch embarks on a perilous mission into uncharted terrain and unearths clues to the Titans’ origins.",
      posteURL: "https://img.filmsactu.net/datas/films/g/o/godzilla-vs-kong/xl/godzilla-vs-kong-600ac743ef1b7.jpg",
      backImg:'https://boyertownstatetheatre.com/wp-content/uploads/2021/03/kon-1024x576.jpg',
      trailer :'https://www.youtube.com/embed/odM92ap8_c0',
      producer:'Adam Wingard',
      type:'Action',
      years:'2021',
      rate:5,
      
     },

  {  
      id:uuidv4(),
      title :"Raya et le dernier dragon",
      description : "Ce nouveau long-métrage d'animation, réalisé par Don Hall et Carlos Lopez Estrada, met en scène une jeune femme qui part à l'aventure pour retrouver le dernier dragon afin de ramener l'équilibre au royaume légendaire de Kumandra",
      posteURL: "https://www.lequotidienducinema.com/wp-content/uploads/2021/03/rayaetledernierdragon.jpg",
      backImg:'https://www.hellodisneyplus.com/wp-content/uploads/2021/03/raya-et-le-dernier-dragon-21-avril.jpeg',
      trailer :'https://www.youtube.com/embed/dwNumyXq-yA',
      producer:'Don Hall',
      type:'Adventure',
      years:'2021',
      rate: 5, 
  },

  {
      id:uuidv4(),
      title :"The father",
      description : "Anthony est retraité. Il vit seul dans son appartement de Londres et refuse toutes les aides-soignantes que sa fille, Anne, tente de lui imposer. Cette dernière y voit une nécessité d’autant plus grande qu’elle ne pourra plus passer le voir tous les jours.",
      posteURL: "https://i.pinimg.com/originals/1d/36/3d/1d363d84df0c6885de96cb8748ebbba5.jpg",
      backImg:"https://upload.wikimedia.org/wikipedia/en/a/ab/The_Father_2020_poster.jpg",
      trailer :'https://www.youtube.com/embed/4TZb7YfK-JI',
      producer:'Florian Zeller',
      type:'Drame',
      years:'2021',
      rate: 4,
     
  },

  {  
      id:uuidv4(),
      title :"Disney's Cruella",
      description : "Cruella se déroule à Londres dans les années 1970, en pleine révolution punk, et suit une jeune arnaqueuse nommée Estella et les événements qui la poussent à explorer son côté obscur pour devenir Cruella, une femme égocentrique et vengeresse.",
      posteURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu7iP_KMzn-ls_3LX_T3ASK8qSf0yLTrPoKh-axC1Ox2E15SWj25x9I_PktYWQMhqaa6Q&usqp=CAU",
      backImg:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Disney_Cruella_poster__1__1200x768.jpeg?8mw8gIaR8DKOOd_Ws1l2sstq3zNybTR0&size=770:433",
      trailer :'https://www.youtube.com/embed/gmRKv7n2If8',
      producer:'Craig Gillespie',
      type:'comedie',
      years:'2021',
      rate: 3,
    
  },
  {  
    id:uuidv4(),
    title :"Dolittle",
    description : "John Dolittle, a prodigious doctor, capable of speaking with animals, lived with many of them and his beloved wife Lily in the reserve of wonders that the Queen of England had offered him as a gift. But a shipwreck has taken Lily forever and since then Dolittle has never wanted to meet her fellow men, has closed the hospital doors and given up everything. ",
    posteURL: "https://movies.universalpictures.com/media/dolittle-5da4b60a57abe-1.jpg",
    backImg:"https://i.dailymail.co.uk/1s/2020/02/06/14/24393540-7973991-image-a-28_1581000798177.jpg",
    trailer :'https://www.youtube.com/embed/FEf412bSPLs',
    producer:'Stephen Gaghan',
    type:'Comedie',
    years:'2020',
    rate: 2,   
}, 
 {  
    id:uuidv4(),
    title :"The Good Doctor",
    description : "Atteint du syndrome d’Asperger, le jeune chirurgien Shaun Murphy rejoint un prestigieux hôpital de Boston. Isolé, Shaun a des difficultés à s’intégrer à l’équipe. Mais en mettant son incroyable don au service de ses patients, il suscite l’admiration de ses collègues, même des plus sceptiques.",
    posteURL: "https://static1.tribute.ca/poster/660x980/the-good-doctor-129526.jpg",
    backImg:"https://lacritiqueriemauranienne.files.wordpress.com/2017/10/the-good-doctorio.jpg",
    trailer :'https://www.youtube.com/embed/msJggy8xtmI',
    producer:'ABC Studios',
    type:'Drame',
    years:'2017',
    rate: 2,   
},
]
export default movieList; 
