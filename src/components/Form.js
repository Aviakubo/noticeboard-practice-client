import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      title:'',
      author:'',
      phone:''
    });

    useEffect(() => {
      if(props.notice) {
        const { title, author, phone, id } = props.notice;
        setFormState({
          title,
          author,
          phone,
          id
        })
      }
    }, [props.notice]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if (props.notice) {
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
      props.handleSubmit(formState);
    }
    // props.handleAdd(formState);
  }
    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="title"
          placeholder="Notice Title"
          type="text"
          value={formState.title}
          id="title"
         />
         <Input
           handleChange={handleChange}
           name="author"
           placeholder="Notice Author"
           type="text"
           value={formState.author}
           id="author"
        />
        <Input
          handleChange={handleChange}
          name="phone"
          placeholder="Notice Phone"
          type="text"
          value={formState.phone}
          id="phone"
       />
       <input type="submit" value={props.notice ? "update this notice" : "add a notice"}/>
      </form>
    );
  }

export default Form;
