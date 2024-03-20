import {useState} from "react";

export default  function Form()
{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

   const handelNameInputChange = ()=>{
       const name = document.getElementById('name').value;
       setName(name);
    }
    const handelAgeInputChange = ()=>{
       const age = document.getElementById('age').value;
       setAge(age);
    }
    const handelSubmit = (e)=>{
       e.preventDefault();
       console.log(name, age)
    }
    return <div>
        <form >
            <input type="text" id='name' onChange={handelNameInputChange} placeholder={'Name'}/>
            <input type="text" id='age' onChange={handelAgeInputChange} placeholder={'Age'}/>
            <button type="submit" onClick={handelSubmit}>Submit</button>
        </form>
    </div>
}