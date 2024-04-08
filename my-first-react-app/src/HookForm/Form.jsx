import React, { useEffect } from 'react';
import {Alert, Button, Form} from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

function MyForm() {


    const schema = Yup.object().shape({
        fullName: Yup.string().required('Name is required').min(6),
        email: Yup.string().required('Email is required').email('Please enter a valid email address'),
        age: Yup.number().required('please inter a valid age').max(120).min(18),
        country: Yup.string().required('please select your country'),
        password :  Yup.string().required('password required').test('value', 'invalid Password',
            value => {
            return value === '123456789'
            }),
    });

    const { register, handleSubmit, formState:{errors, isSubmitted, isValid}, control, setValue } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const user = await response.json();
                setValue('fullName', user.name);
                setValue('email', user.email);
                setValue('country', 'MA');
                setValue('age', Math.floor(Math.random() * 21 + 20));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [setValue]);
    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <>
            {isValid && isSubmitted && <Alert className={'w-50'}>Form is Submitted</Alert>}
            <h1 className={'text-warning-emphasis'}>Create User </h1>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group controlId="formName" >
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" {...register("fullName"
                        // {
                        // required: "Name is required",
                        // minLength: {
                        //     value: 6,
                        //     message: "Name must be at least 6 characters"
                        // }}

                    )} />
                    {errors.fullName && <li className={'text-danger mt-3 w-50'}>{errors.fullName.message}</li>}
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email"
                        // {
                        // required: true,
                        // minLength: 6,
                        // pattern: {
                        //     value: /^\w+@\w+\.\w+$/,
                        //     message : "Please enter a valid email address"
                        // }},
                    )} />
                    {errors.email && <li className={'text-danger mt-3 w-50'}>{errors.email.message}</li>}
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" {...register("password"
                        // {
                        // required: true,
                        // minLength: 6,
                        // pattern: {
                        //     value: /^\w+@\w+\.\w+$/,
                        //     message : "Please enter a valid password address"
                        // }},
                    )} />
                    {errors.password && <li className={'text-danger mt-3 w-50'}>{errors.password.message}</li>}
                </Form.Group>

                <Form.Group controlId="formCountry">
                    <Form.Label>Country:</Form.Label>
                    <Form.Select aria-label="Select country" {...register("country"
                    //     {
                    //     required: true,
                    // }
                    )}>
                        <option value={''}>Select country</option>
                        <option value="DJ">Algeria</option>
                        <option value="EJ">Egypt</option>
                        <option value="MA">Morocco</option>
                    </Form.Select>
                </Form.Group>
                {errors.country && <li className={'text-danger mt-3 w-50'}>{errors.country.message}</li>}


                <Form.Group controlId="formAge">
                    <Form.Label>Age:</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" {...register("age"
                        // {
                        // required: true,
                        // type: 'number',
                        // min: 19,
                        // max: 39}
                    )} />
                    {errors.age && <li className={'text-danger mt-3 w-50'}>{errors.age.message}</li>}
                </Form.Group>

                <Button disabled={!isValid} variant="outline-dark" className={'mt-3'} type="submit">
                    Submit
                </Button>
            </Form>
            <DevTool control={control} />
        </>
    );
}

export default MyForm;
