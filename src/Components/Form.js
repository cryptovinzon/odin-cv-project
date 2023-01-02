import { useState } from "react";
import Display from "./Display";
// import uniqid from "uniqid";

export default function Form() {
  const [info, updateInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    school:"",
    major:"",
    yearCompleted:"",
    company:"",
    position:"",
    tasks:"",
    startYear:"",
    endYear:"",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    updateInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <form className="form">
        <section className="general">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            name="fullname"
            value={info.fullname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
          />
        </section>
        <section className="education">
          <label htmlFor="school">School</label>
          <input 
          type="text" 
          name="school"
          value={info.school}
          onChange={handleChange} 
          />
          <label htmlFor="major">Major</label>
          <input 
          type="text" 
          name="major"
          value={info.major}
          onChange={handleChange}           
          />
          <label htmlFor="yearCompleted">Year Completed</label>
          <input 
          type="text" 
          name="yearCompleted"
          value={info.yearCompleted}
          onChange={handleChange} 
          />
        </section>
        <section className="experience">
          <label htmlFor="company">Company</label>
          <input 
          type="text" 
          name="company"
          value={info.company}
          onChange={handleChange}
          />
          <label htmlFor="position">Position</label>
          <input 
          type="text" 
          name="position"
          value={info.position}
          onChange={handleChange}
          />
          <label htmlFor="tasks">Tasks</label>
          <input 
          type="text" 
          name="tasks"
          value={info.tasks}
          onChange={handleChange} 
          />
          <label htmlFor="yearStarted">Year Started</label>
          <input 
          type="text" 
          name="startYear"
          value={info.startYear}
          onChange={handleChange} 
          />
          <label htmlFor="yearEnded">Year Ended</label>
          <input 
          type="text" 
          name="endYear"          
          value={info.endYear}
          onChange={handleChange} />
        </section>
        <button type="submit">Confirm</button>
      </form>
      <Display info={info}/>
    </div>
  );
}
