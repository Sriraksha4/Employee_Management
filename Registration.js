import { useState } from "react";

const Register = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        hobbies: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});


    // handle change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        setErrors((prev) => ({
            ...prev,
            [e.target.name]: ""
        }));
    };


    // validation (same like sir)
    const validate = () => {

        const nextErrors = {};

        const firstname = form.firstname.trim();
        const lastname = form.lastname.trim();
        const gender = form.gender.trim();
        const hobbies = form.hobbies.trim();
        const email = form.email.trim();
        const password = form.password.trim();


        if (!firstname) nextErrors.firstname = "Firstname is required.";
        if (!lastname) nextErrors.lastname = "Lastname is required.";
        if (!gender) nextErrors.gender = "Gender is required.";
        if (!hobbies) nextErrors.hobbies = "Hobbies is required.";

        if (!email) {
            nextErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nextErrors.email = "Enter valid email.";
        }

        if (!password) {
            nextErrors.password = "Password is required.";
        } else if (password.length < 6) {
            nextErrors.password = "Minimum 6 characters required.";
        }

        return nextErrors;
    };


    // submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const nextErrors = validate();
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) return;

        console.log("Registration Data:", form);
    };


    return (
        <form onSubmit={handleSubmit} noValidate>

            <h2>Registration Form</h2>

            <div>
                <label>First Name</label>
                <input name="firstname" value={form.firstname} onChange={handleChange} />
                {errors.firstname && <div className="error">{errors.firstname}</div>}
            </div>

            <div>
                <label>Last Name</label>
                <input name="lastname" value={form.lastname} onChange={handleChange} />
                {errors.lastname && <div className="error">{errors.lastname}</div>}
            </div>

            <div>
                <label>Gender</label>
                <input name="gender" value={form.gender} onChange={handleChange} />
                {errors.gender && <div className="error">{errors.gender}</div>}
            </div>

            <div>
                <label>Hobbies</label>
                <input name="hobbies" value={form.hobbies} onChange={handleChange} />
                {errors.hobbies && <div className="error">{errors.hobbies}</div>}
            </div>

            <div>
                <label>Email</label>
                <input name="email" value={form.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} />
                {errors.password && <div className="error">{errors.password}</div>}
            </div>

            <button type="submit">Register</button>

        </form>
    );
};

export default Register;
