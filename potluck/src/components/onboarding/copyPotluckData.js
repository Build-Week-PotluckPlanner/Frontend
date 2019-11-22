

/*
/*const PotluckCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`; */


const App = () => {

  const [data, setData] = useState([]);
  //const [page, setPage] = useState(1);
//{headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…TE0fQ.6zmeXzxah3OU-ywspt-zbHEuqrQSpKUdSgmo3u652bs" } }


  const fetchData = () => {
    axios.get(`https://potluck-planner-backend.herokuapp.com/potlucks`, {headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ…Tg2fQ.eSgfCLLguN93nWPNFEZPE8VRvVj24g5dK7VuWpSEe0Y" } })
    .then(response => {
      setData(response.data)
    })
    .catch(error =>{console.log('Sorry! There is an error in the API request!')})
  }


  useEffect(fetchData)

  console.log(data);

  /*
  return (
    <div className="App">
      <h1 className="Header">Potlucks</h1>
      <PotluckCard>
        {data.map((potluck) => {
          return <
            Potlucks
            name={potluck.name} 
            key={potluck.id} 
            date={potluck.date}
            time={potluck.time}
            location={potluck.location}
            />
        })}
      </PotluckCard>
        

      
    </div>
  );
}

return (
    <section className="potluck-list"> 
       
        <Container>
                <div >
                <Row>
                {data.map(potluck => {
            return (
         <Col xs="12" md="6" xl="4">
            <Potlucks
                {...potluck}
                />
        </Col>
     )
    })}
     </Row>
        </div>
         </Container>
        </section>
    );
}

export default App;

*/




const CharCard = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;


const App = () => {

    const [data, setData] = useState([]);
   
  
    const fetchData = () => {
        axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
        .then(response => {
          setData(response.data.results)
        })
        .catch(error =>{console.log('Sorry! There is an error in the API request!')})
      }
  
  
    useEffect(fetchData)
  
    console.log(data);
  
    return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          <CharCard>
            {data.map((starwars, index) => {
              return <
                Characters 
                name={starwars.name} 
                key={index} 
                birthday={starwars.birth_year} 
                gender={starwars.gender}
                />
            })}
          </CharCard>
          
        </div>
      );
    }

export default App;