import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../../utilities/AxiosWithAuth';
import NewApiList from './NewApiList';
import { Link } from 'react-router-dom';


const initialState = {
    name: "",
    location: "",
    time: "",
    date: "",
  };

  const PotluckList = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
      getInfo();
  }, []);

const getInfo = () => {
    axiosWithAuth()
    .get('https://potluck-planner-backend.herokuapp.com/potlucks')
    .then(res => {
        console.log('get request', res)
        setInfo(res.data.posts);
    })
    .catch(err => console.log(err.response));
}

const addInfo = event => {
    axiosWithAuth().post('https://potluck-planner-backend.herokuapp.com/potlucks', event)
    .then(() => {
        console.log('success post')
        getInfo();
    })
    .catch(err => console.log(err.response));
}

const deleteInfo = id => {
    // console.log(id);
    axiosWithAuth().delete(`https://potluck-planner-backend.herokuapp.com/potlucks/${id}`)
        .then(res => {

        axiosWithAuth().get('https://potluck-planner-backend.herokuapp.com/potlucks')
        .then(res => {
            setInfo(res.data.posts);
            console.log('updating data');
          })
          .catch(err => console.log(err.response))
      
              })
      .catch(err => console.log(err.response));
}


return(
 <div>

<h2>Information</h2>
<NewApiList submitInfo={addInfo} />
{info.map(props=>{
    return (<div>
        <p>{props.name}</p>
        <button onClick= {()=>deleteInfo(props.id)}>Delete</button>
        <Link to={`edit/${props.id}`}>Edit</Link>
        </div>
    );
})}

</div> 

)};

export default PotluckList;
