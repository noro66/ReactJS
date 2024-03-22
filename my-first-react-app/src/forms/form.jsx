import {useState} from "react";

export default  function Form()
{
    const [formValues, setFormValues] = useState({
        "name":"",
        "age":"",
        "Conditions":false,
        "contry":"MA"
    });


   const handelInputChange = (e)=>{
      let id = e.currentTarget.id;
       let value =  e.currentTarget.type === 'checkbox' ?
           e.currentTarget.checked :
           e.currentTarget.value;
      setFormValues(prevState => {
          return ({...prevState, ...{[id] : value}});
      })
    }

    return <div>
        {JSON.stringify(formValues)}
        <form >
            <input type="text" id='name' onChange={handelInputChange} placeholder={'Name'}/>
            <input type="text" id='age' onChange={handelInputChange} placeholder={'Age'}/>
            <input type="checkbox" id='Conditions' onChange={handelInputChange} />
            <select  onChange={handelInputChange} name="country" id="contry">
                <option value="" disabled selected>Select Option</option>
                <option value="MA">Morocco</option>
                <option value="JZ">Algeria</option>
                <option value="TN">Tunisia</option>
            </select>
            <button type="submit" onClick="">Submit</button>
        </form>
    </div>
}