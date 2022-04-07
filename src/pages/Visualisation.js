import React from 'react';
import { Container } from '../styles/center'
import plot1 from "../images/plot1.png";
import plot2 from "../images/plot2.png";
import plot3 from "../images/plot3.png";
import plot4 from "../images/plot4.png";
import plot5 from "../images/plot5.png";
import plot6 from "../images/plot6.png";
import plot7 from "../images/plot7.png";

const Viz = () => {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot1}
        alt=""
        />
        <br/><br/>

        <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot2}
        alt=""
        /><br/><br/>
    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot3}
        alt=""
        /><br/><br/>
    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot4}
        alt=""
        /><br/><br/>
    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot5}
        alt=""
        /><br/><br/>
    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot6}
        alt=""
        /><br/><br/>
    <img
        class="img-fluid rounded mb-4 mb-lg-0"
        src={plot7}
        alt=""
        />
    </div>
</div>
        </div>

    )
}

export default Viz;
