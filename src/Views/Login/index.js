import {useCallback, useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import './style.css'
import InputFieldCustom from "../../components/InputFieldCustom";
import {useAuth} from "../../hooks/useAuth";
import {Header} from "../../components/Header";

const LoginContainer = () => {
    const {register, handleSubmit, formState, setFocus} = useForm();
    const {errors, isDirty, dirtyFields, submitCount, isValid} = formState;

    const  { login } = useAuth();

    const onSubmit = data => {
        login(data);
    };

    return (
        <>
            <div className="container__auth">
                <form onSubmit={handleSubmit(onSubmit)} className="box__auth">
                    <h1 className="title__auth">Login</h1>

                    <div className="form__group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form__control" id="email"
                               placeholder="Enter email" {...register("email", {required: true, minLength: 5})} />
                        {errors.email && <span className="text__danger">This field is required</span>}
                    </div>

                    <div className="form__group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form__control" id="password"
                               placeholder="Password" {...register("password", {required: true, minLength: 5})} />
                        {errors.password && <span className="text__danger">This field is required</span>}
                    </div>

                    <button type="submit" className="btn btn__primary">Submit</button>
                </form>
            </div>
        </>
    )
}

const inputStyle = {
    inputContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginBottom: 30,
        backgroundColor: "transparent",
        zIndex: 2,
    },
    padding: "0 10px",
    height: 30,
}

export default LoginContainer