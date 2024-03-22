import {useEffect, useRef, useState} from "react";

export default  function Form()
{
    const inputNameRef = useRef();
    const inputAgeRef = useRef();
    const inputConditionsRef = useRef();
    const inputCountryRef = useRef();
    useEffect(() => {
        inputNameRef.current.value = 'Marouane';
        inputAgeRef.current.value = '29';
        inputCountryRef.current.value = 'MA';
        inputConditionsRef.current.checked = true;
    }, []);
    const [formValues, setFormValues] = useState( []/*{
        name:"",
        age:"",
        Conditions:false,
        country:"MA"
    }*/);


   // const handelInputChange = (e)=>{
   //    let id = e.currentTarget.id;
   //     let value =  e.currentTarget.type === 'checkbox' ?
   //         e.currentTarget.checked :
   //         e.currentTarget.value;
   //    setFormValues(prevState => {
   //        return ({...prevState, ...{[id] : value}});
   //    })
   //  }

    function handelSubmit(e) {
        e.preventDefault();
        setFormValues({
                name: inputNameRef.current.value,
                age: inputAgeRef.current.value,
                country: inputCountryRef.current.value,
                conditions : inputConditionsRef.current.checked
            })
    }

    useEffect(()=>{
        console.log(formValues);
    }, [formValues])

    return <div>
        {/*{JSON.stringify(formValues)}*/}
        <form >
            <input type="text" id='name' ref={inputNameRef} placeholder={'Name'}/>
            <input type="text" id='age' ref={inputAgeRef} placeholder={'Age'}/>
            <input type="checkbox" id='Conditions' ref={inputConditionsRef} />
            <select  ref={inputCountryRef} name="country" id="contry">
                <option value="" disabled selected>Select Option</option>
                <option value="MA">Morocco</option>
                <option value="JZ">Algeria</option>
                <option value="TN">Tunisia</option>
            </select>
            <button type="submit" onClick={handelSubmit}>Submit</button>
        </form>
    </div>
}