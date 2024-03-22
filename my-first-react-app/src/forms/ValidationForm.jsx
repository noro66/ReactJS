import {useEffect, useRef, useState} from "react";
import {validate} from "uuid";

export  default function ValidationForm()
{

    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputMessageRef = useRef();
    const inputConditionsRef = useRef();
    const inputCountryRef = useRef();
    const [errors, setErrors] = useState([]);
    function validateForm() {
      const nameValue =  inputNameRef.current.value ;
      const emailValue =  inputEmailRef.current.value ;
      const countryValue =  inputCountryRef.current.value;
      const messageValue =  inputMessageRef.current.value;
      const conditionValue =  inputConditionsRef.current.checked;
      let formIsValidate = false;

      if (nameValue.trim() === ''){
          setErrors(prevState => {
              return [...prevState, 'Name field is required !']
          })
          formIsValidate = false;
      }
      if (emailValue.trim() === ''){
          setErrors(prevState => {
              return [...prevState, 'Email field is required !']
          })
          formIsValidate = false;
      }
      if (messageValue.trim() === ''){
          setErrors(prevState => {
              return [...prevState, 'Message field is required !']
          })
          formIsValidate = false;
      }
      if (countryValue.trim() === ''){
          setErrors(prevState => {
              return [...prevState, 'Name field is required !']
          })
          formIsValidate = false;
      }
      if (!conditionValue){
          setErrors(prevState => {
              return [...prevState, 'Conditoins shold be checked!']
          })
          formIsValidate = false;
      }

    }
    useEffect(()=>{
        console.log(errors)
    }, [errors])
    function handelSubmit(e) {
        e.preventDefault();
        setErrors([]);
        validateForm();

    }

    return <div className="container mt-3">
        {errors.length > 0 ?
        <ul className=" text-bg-danger">
            {errors.map((error, key) => <li>{error}</li>)
            }
        </ul>
            : ''
        }
        <h1>Validation Form : </h1>
    <form onSubmit={handelSubmit}>
        <div className="form-group mb-2">
            <label htmlFor="name">Name</label>
            <input ref={inputNameRef} type="text" name="name" id="name" className="form-control" placeholder="Enter Your name" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Please enter a Valid name</small>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="email">Email : </label>
            <input ref={inputEmailRef} type="email" name="email" id="email" className="form-control" placeholder="Enter Your email" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Please enter a Valid email</small>
        </div> <div className="form-group mb-2">
            <label htmlFor="message">Message : </label>
        <textarea type="text" ref={inputMessageRef} name="message" id="message" className="form-control" placeholder="Enter Your message" aria-describedby="helpId"></textarea>
                <small id="helpId" className="text-muted">Please enter a Valid message</small>
        </div>
        <div className="form-group mb-2">
            <label htmlFor="message">Country : </label><br/>
            <select ref={inputCountryRef}  name="country" id="contry">
            <option value="" disabled selected> Select Option</option>
            <option value="MA">Morocco</option>
            <option value="JZ">Algeria</option>
            <option value="TN">Tunisia</option>
            </select>
            <small id="helpId" className="text-muted mx-2">Please Select Your country</small>
        </div>

        <div className="form-group mb-2 d-flex align-items-center">
            <input ref={inputConditionsRef} type="checkbox" id='Conditions' />
            <label  htmlFor="Conditions" id="helpId" className="text-muted mx-2">Terms and conditions</label>
        </div>
        <div className="form-group mb-2 d-flex align-items-center justify-content-center">
        <button type="submit" className="btn btn-info w-100 ">Send</button>
        </div>
    </form>
</div>
}