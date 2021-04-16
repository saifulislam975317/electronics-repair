import React from 'react';
import featured from '../../../images/whyChooseUs.jpg'
const FeaturedService = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5">
            <h1 className="text-center mb-5">WHY CHOOSE US</h1>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2>QUALITY GUARANTEE</h2>
                        <p className="text-secondary my-5">Nunc non tortor tincidunt, rutrum nibh in, gravida leo. Sed pulvinar lectus vitae sem consequat, lobortis sodales neque tincidunt. Nullam vel erat urna. Ut tincidunt facilisis ipsum a ullamcorper.</p>
                        <button className="btn btn-danger">Learn more</button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeaturedService;