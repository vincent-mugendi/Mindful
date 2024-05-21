import React from "react";

const SignupForm = () => {
    return (
        <section>
            <form>
                <h2>Create Account</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </section>
    );
}

export default SignupForm;
