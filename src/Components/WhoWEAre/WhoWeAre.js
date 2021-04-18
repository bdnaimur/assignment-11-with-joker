import React from 'react';
import img from "../../image/homeBg.jpg"
const WhoWeAre = () => {
    return (
        <div className="container shadow mt-5 mb-5 p-3" >
            <div className="row">
                <h3>Who we Are</h3>
                <div className="col-md-6">
                    <img style={{width:"100%"}} src={img} alt=""/>
                </div>
                <div className="col-md-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum incidunt architecto blanditiis, eligendi, nostrum quidem quibusdam placeat soluta natus adipisci est iusto iure minima omnis quam accusantium quisquam. Neque necessitatibus repellendus veniam nihil fugit ipsam quod quisquam unde, minima vel voluptas voluptatem! Excepturi iusto nam inventore, corporis, quaerat architecto voluptates quidem earum aperiam sequi optio doloremque ipsa odit eveniet placeat deserunt culpa ad saepe. Necessitatibus id error voluptate! Eum corrupti tenetur quas exercitationem, voluptas alias maiores dolorum eveniet, consequatur suscipit ipsa ullam neque magnam dolorem eaque eius consectetur aspernatur modi adipisci? Nostrum ratione saepe vel eveniet cum dicta eius?</div>
            </div>
        </div>
    );
};

export default WhoWeAre;