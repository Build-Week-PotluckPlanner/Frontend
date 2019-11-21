import React, { useState } from 'react';

const NewApiList = ({ submitInfo }) => {
const [touched, setTouched] = useState({firstName: "",
                                        lastName: "",
                                        name: "",
                                        location: "",
                                        time: "",
                                        date: "",
                                        guests: ""});
const handleChange = event => {
    setTouched({...touched, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    submitInfo(touched);
    };
    
return (
        <form onSubmit={handleSubmit}>
            <input name='firstName'
                    placeholder="firstName"
                    value={touched.firstName}
                    onChange={handleChange} />
            <input name='lastName'
                    placeholder="lastName"
                    value={touched.lastName}
                    onChange={handleChange} />
            <input name='name'
                    placeholder="name"
                    value={touched.name}
                    onChange={handleChange} />
            <input name='location'
                    placeholder="location"
                    value={touched.location}
                    onChange={handleChange} />
            <input name='time'
                    placeholder="time"
                    value={touched.time}
                    onChange={handleChange} />
            <input name='date'
                    placeholder="date"
                    value={touched.date}
                    onChange={handleChange} />
            <input name='guests'
                    placeholder="guests"
                    value={touched.guests}
                    onChange={handleChange} />     
            <button type='submit'>Add</button>
        </form>
    );
};

export default NewApiList;