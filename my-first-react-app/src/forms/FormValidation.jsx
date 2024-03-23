import {useEffect, useRef, useState} from "react";

export default function FormValidation()
{
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const conditions = useRef();
    const [errors, setErrors] = useState([]);
    const [isFormSubmited, setisFormSubmited] = useState(false);

    const checkInput = (input) => {
        let  isFormValid = true;
        if (input.current.type === 'checkbox'){
            if (!input.current.checked) {
                setErrors(prevState => [...prevState, { [input.current.id]: ['field required'] }]);
                isFormValid = false;
            }
        }else if((input.current.value).trim() === '') {
            setErrors(prevState => [...prevState, { [input.current.id]: ['field required'] }]);
            isFormValid = false;
        }else if (input.current.id === 'email'){
            if (!input.current.value.match(/^\S+@\S+\.\S+$/)){
                setErrors(prevState => [...prevState, { [input.current.id]: ['Invalid Email'] }]);
                isFormValid = false;
            }
        }
        return isFormValid;
    };

    const resetForm = ()=>{
            name.current.value = ''
            email.current.value = ''
            message.current.value = ''
            conditions.current.checked = false;
    }
    function handelSubmit(e) {

        e.preventDefault();
            setErrors([]);
            let  checkValid;
            const refs =[name, email, message, conditions]
            for (let i = 0; i < refs.length ;i++){
               checkValid =  checkInput(refs[i]);
            }
            if (checkValid){
                setisFormSubmited(true)
                resetForm();
            }

    }

    function displayErrors() {
      return   errors.map((error)=>{
            return <li key={Object.keys(error)[0]}> {Object.keys(error)}   :  {error[Object.keys(error)[0]]} </li>
        })
    }

    return <div className="container mt-3">
        {isFormSubmited ? <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Success !!</h4>
            <p></p>
            <p className="mb-0">Form Submited successfuly !!</p>
        </div> : ''}
        {errors.length > 0 ?
            <div className="alert alert-danger" role="alert">
                <h4 className="alert-heading">Errors</h4>
                <ul>
                    {displayErrors()}
                </ul>
            </div> : ''}
        <h1>Validation Form:</h1>
        <form onSubmit={handelSubmit}>
            <div className="form-group mb-2">
                <label htmlFor="name">Name:</label>
                <input ref={name} type="text" name="name" id="name" className="form-control"
                       placeholder="Enter Your name" aria-describedby="nameHelp"/>
                <small id="nameHelp" className="text-muted">Please enter a valid name</small>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="email">Email:</label>
                <input ref={email} type="text" name="email" id="email" className="form-control"
                       placeholder="Enter Your email" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="text-muted">Please enter a valid  </small>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="message">Message:</label>
                <textarea ref={message} name="message" id="message" className="form-control"
                          placeholder="Enter Your message" aria-describedby="messageHelp"></textarea>
                <small id="messageHelp" className="text-muted">Please enter a valid message</small>
            </div>
            <div className="form-group mb-2 d-flex align-items-center">
                <input ref={conditions} type="checkbox" id="Conditions"/>
                <label htmlFor="Conditions" className="text-muted mx-2">Terms and conditions</label>
            </div>
            <div className="form-group mb-2 d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-info w-100">Send</button>
            </div>
        </form>
    </div>
}