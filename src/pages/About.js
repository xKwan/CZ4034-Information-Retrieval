import React from 'react';
import { Container } from '../styles/center';
import depression from "../images/depression.png";
import stress from "../images/stress.png";
import anxiety from "../images/anxiety.png";

function About() {
    return (
        <div classNameName="about">
            <div className="container">
                <div className="row align-items-center my-5">
        
        <br/> 
        <br/>
        <h1 className="font-weight-light">Depression</h1>
        
        <img
        className="img-fluid rounded mb-4 mb-lg-0"
        src={depression}
        alt=""
        />
    </div>

    <br/>
    <h2>Key Facts</h2>
    <br/>
    <ol>
        <li>Depression is a common mental disorder. Globally, it is estimated that 5.0% of adults suffer from depression </li>
        <li>Depression is a leading cause of disability worldwide and is a major contributor to the overall global burden of disease.</li>
        <li>More women are affected by depression than men.</li>
        <li>Depression can lead to suicide.</li>
        <li>There is effective treatment for mild, moderate, and severe depression.</li>
    </ol>
        
    </div>
    <div className="container">
        <div className="row align-items-center my-5">

        <br/><br/>
        <h1 className="font-weight-light">Anxiety</h1>
  
        <img
        className="img-fluid rounded mb-4 mb-lg-0"
        src={anxiety}
        alt=""
        />
    </div>
    <br/>

    <br/>
    <h2>Key Facts</h2> 
    <br/>
    <ol>
        <li>Anxiety disorders are highly treatable, yet only 36.9% of those suffering receive treatment.</li>
        <li>Anxiety disorders are the most common mental illness in the U.S., affecting 40 million adults in the United States age 18 and older, or 18.1% of the population every year.</li>
        <li>Anxiety disorders develop from a complex set of risk factors, including genetics, brain chemistry, personality, and life events.</li>
    </ol> 
        
    </div>
    <div className="container">
        <div className="row align-items-center my-5">
            <br/><br/>
        
        <br/><br/>
        <h1 className="font-weight-light">Stress</h1>
       
        <br/><br/>
        <img
        className="img-fluid rounded mb-4 mb-lg-0"
        src={stress}
        alt=""
        />
        <br/>
    </div>

    <br/>
    <h2>Key Facts</h2>
    <br/> 
    <ol>
        <li>Stress is a hormonal response from the body</li>
        <li>Women appear more prone to stress than men</li>
        <li>You may feel jittery from stress</li>
        <li>Chronic headaches are sometimes attributed to stress</li>
        <li>Frequent stress decreases your immune system</li>
        <br/><br/>
    </ol>
</div>
           </div>
        
    );
}


export default About;
