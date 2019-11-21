import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../../utilities/AxiosWithAuth';

const EditPost = (props) => {

    const [list, setList] = useState({});

    useEffect(() => {
        getChange();
    }, []);

    const id = Number(props.match.params.id);

    const getChange = () => {
    axiosWithAuth()
    .get('https://potluck-planner-backend.herokuapp.com/potlucks')
    .then(res => {
      const posts = res.data.posts;
      const post = posts.filter(post => {
          return post.id === id;
      })
      setList(post[0]);
  })
  .catch(err => console.log(err.response));
}

const editChange = (data) => {
    console.log(id);
    axiosWithAuth()
    .put(`https://potluck-planner-backend.herokuapp.com/potlucks/${id}`, data)
    .then(res => {
        console.log('updated', res);
        props.history.push('/dashboard')
        })
      .catch(err => console.log(err.response));
}

const handleOnChange = event => {
    setList({
        ...list,
        [event.target.name]: event.target.value
    })
}

const submit = event => {
    event.preventDefault();
    editChange(list);
}

console.log('list', list);

    return (
        <form onSubmit={submit}>
            <input 
            name='name' placeholder="name"
            value={list.name}
            onChange={handleOnChange}/>
            <input 
            name='location' placeholder="location"
            value={list.location}
            onChange={handleOnChange}/>
            <input 
            name='time' placeholder="time"
            value={list.time}
            onChange={handleOnChange}/>
            <input 
            name='date' placeholder="date"
            value={list.date}
            onChange={handleOnChange}/>
            
            <button onSubmit={submit}>Update</button>
        </form>
    )
}

export default EditPost;