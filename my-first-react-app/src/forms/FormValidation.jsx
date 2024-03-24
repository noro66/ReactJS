import { useEffect, useRef, useState } from "react";
import {validate} from "uuid";

export default function FormValidation() {
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const conditions = useRef();
    const [errors, setErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isSubmited,setIsSubmited] = useState(false);

    const checkInput = (input) => {
        let validationFailed = false;

        if (input.current.type === 'checkbox') {
            if (!input.current.checked) {
                input.current.style.border = "1px solid red";
                setErrors(prevState => ({ ...prevState, [input.current.id]: 'conditions must be checked' }));
                validationFailed = true;
            } else {
                input.current.style.border = "1px solid green";
            }
        } else if ((input.current.value).trim() === '') {
            input.current.style.border = "1px solid red";
            setErrors(prevState => ({ ...prevState, [input.current.id]: 'field required' }));
            validationFailed = true;
        } else if (input.current.id === 'email') {
            if (!input.current.value.match(/^\S+@\S+\.\S+$/)) {
                input.current.style.border = "1px solid red";
                setErrors(prevState => ({ ...prevState, [input.current.id]: 'Invalid Email' }));
                validationFailed = true;
            } else {
                input.current.style.border = "1px solid green";
            }
        } else {
            input.current.style.border = "1px solid green";
        }

        return validationFailed;
    }

    function validateForm() {
        setIsFormSubmitted(false);
        setErrors({});
        let formIsValid = true;

        const refs = [name, email, message, conditions];
        refs.forEach(ref => {
            if (checkInput(ref)) {
                formIsValid = false;
            }
        });
        return formIsValid;
    }

    function handelSubmit(e) {
        setIsSubmited(true)
        e.preventDefault();
        if (validateForm()) {
            setIsFormSubmitted(true);
            setIsSubmited(false);
            resetForm();
        }
    }

    useEffect(() => {
        if (isSubmited){
            validateForm();
        }
    }, [errors]);
    const resetForm = () => {
        name.current.value = '';
        email.current.value = '';
        message.current.value = '';
        conditions.current.checked = false;
    }

    return (
        <div className="container mt-3">
            {isFormSubmitted ? (
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Success !! </h4>
                    <p className="mb-0">Form Submitted successfully !!</p>
                </div>
            ) : ''}
            {Object.keys(errors).length > 0 && (
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Errors</h4>
                    <ul>
                        {Object.entries(errors).map(([key, value]) => (
                            <li key={key}>{key} : {value}</li>
                        ))}
                    </ul>
                </div>
            )}
            <h1>Validation Form:</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="name">Name:</label>
                    <input ref={name} type="text" name="name" id="name" className="form-control"
                           placeholder="Enter Your name" aria-describedby="nameHelp"/>
                    <small id="nameHelp" className="text-muted"> { errors.name  ? <span className="text-danger">Name :  {errors.name} </span> : "Please enter a valid name"} </small>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email">Email:</label>
                    <input ref={email} type="text" name="email" id="email" className="form-control"
                           placeholder="Enter Your email" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="text-muted"> {errors.email  ? <span className="text-danger">Email :  {errors.email} </span> : "Please enter a valid" } </small>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="message">Message:</label>
                    <textarea ref={message} name="message" id="message" className="form-control"
                              placeholder="Enter Your message" aria-describedby="messageHelp"></textarea>
                    <small id="messageHelp" className="text-muted"> { errors.message  ? <span className="text-danger">message :  {errors.message} </span> : "Please enter a valid message"}</small>
                </div>
                <div className="form-group mb-2 d-flex align-items-center">
                    <input ref={conditions} type="checkbox" id="conditions"/>
                    <label htmlFor="conditions" className="text-muted mx-2">Terms and conditions : <span className="text-danger"> { errors.conditions ?? '' } </span> </label>
                </div>
                <div className="form-group mb-2 d-flex align-items-center justify-content-center">
                    <button type="submit" className="btn btn-info w-100">Send</button>
                </div>
            </form>
        </div>
    );
}
