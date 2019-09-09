import React from 'react';

export default function Portfolio() {

    return(

        <div>
            <a name="portfolio"></a>

            <section className="portfolio">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-2 section-index wow fadeInUp" data-wow-delay="0.3s">03</div>
                        <div className="col-md-8 section-heading wow fadeInUp" data-wow-delay="0.4s">Portfolio</div>
                    </div>

                    <div className="row thumbnails">

                        <div className="col-md-4"></div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-object">
                                <div className="thumbnail-img portfolio-one"></div>
                            </div>
                            <div className="portfolio-title">
                                <h5>Polestar1</h5>
                                <span>Concept Website</span>
                            </div>
                        </div>

                        <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-object">
                                <div className="thumbnail-img portfolio-two"></div>
                            </div>
                            <div className="portfolio-title">
                                <h5>Coming Soon</h5>
                                <span>Coming Soon</span>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )

}