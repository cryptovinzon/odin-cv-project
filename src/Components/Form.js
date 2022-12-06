import {Component} from "react";
import uniqid from "uniqid";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email: '',
            phone: ''
        }
    }

    render() {
        return (
            <div>
                <form className="form">
                    <section className="general">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"/>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone"/>
                    </section>
                    <section className="education">
                        <label htmlFor="school">School</label>
                        <input type="text" name="school"/>
                        <label htmlFor="major">Major</label>
                        <input type="text" name="major"/>
                        <label htmlFor="yearCompleted">Year Completed</label>
                        <input type="text" name="yearCompleted"/>
                    </section>
                    <section className="experience">
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company"/>
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position"/>
                        <label htmlFor="tasks">Tasks</label>
                        <input type="text" name="tasks"/>
                        <label htmlFor="yearStarted">Year Started</label>
                        <input type="text" name="yearStarted"/>
                        <label htmlFor="yearEnded">Year Ended</label>
                        <input type="text" name="yearEnded"/>
                    </section>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        )    
    }
}

export default Form;