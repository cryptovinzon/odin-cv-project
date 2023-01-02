import React from "react";

export default function Display({info}) {
        return (
            <div className = "display no-border">                
                <section className="general">
                    <h1>{info.fullname}</h1>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                </section>
                <section className="education">
                    <h2>Education</h2>
                    <p>{info.school}</p>
                    <p>{info.major}</p>
                    <p>{info.yearCompleted}</p>
                </section>
                <section className="experience">
                    <h2>Experience</h2>
                    <p>{info.company}</p>
                    <p>{info.position}</p>
                    <p>{info.tasks}</p>
                    <p>{info.startYear}</p>
                    <p>{info.endYear}</p>
                </section>
            </div>
        )
    }        
