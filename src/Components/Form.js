import React from "react";

const Form = () => {
    return (
        <div>
            <form className="form">
                <section className="general">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone"/>
                </section>
                <section className="education">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school"/>
                    <label htmlFor="major">Major</label>
                    <input type="text" id="major"/>
                    <label htmlFor="yearCompleted">Year Completed</label>
                    <input type="text" id="yearCompleted"/>
                </section>
                <section className="experience">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company"/>
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position"/>
                    <label htmlFor="tasks">Tasks</label>
                    <input type="text" id="tasks"/>
                    <label htmlFor="yearStarted">Year Started</label>
                    <input type="text" id="yearStarted"/>
                    <label htmlFor="yearEnded">Year Ended</label>
                    <input type="text" id="yearEnded"/>
                </section>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
    
}

export default Form;