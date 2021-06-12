import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Banner({article}) {
  const {banner,projectLogo,projectName,projectLocation}=article.fields;
  return (
    <div>
      <section className="bg-profile w-100">
        <div className="row banner_imgs">
          <div className="w-100">
            <div className="">
              <Carousel>
              {
                 banner.map((item,i)=>(
                 <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={banner[i]?.fields?.file?.url}
                    alt={banner[i]?.fields?.title}
                  />
                   </Carousel.Item>
                  )) }
              </Carousel>
            </div>
          </div>
        </div>
        <div className="">
          <div className="card public-profile border-0 rounded shadow">
            <div className="card-body p-0">
              <div className="row align-items-center">
                <div className="project-header">
                  <div>
                    <img
                      src={projectLogo.fields.file.url}
                      className="avatar avatar-large rounded d-block mx-auto"
                      alt={projectLogo.fields.title}
                    />
                  </div>

                  <div>
                    <div className="row align-items-end">
                      <div className="col-md-12 text-md-left text-center mt-3 mt-sm-0">
                        <h4 className="title mb-0">{projectName} </h4>
                        <small className="text-muted h6 mr-2">
                          <span className="paddress">
                           {projectLocation}
                          </span>
                          <a
                            href="https://www.google.com/maps/place/Prestige+Courtyards/@12.8896438,80.2168904,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525bcd162e0feb:0x3367b736a2cdcc04!8m2!3d12.8896438!4d80.2190791"
                            target="_new"
                            className="Banner_below_Text"
                          >
                            <span>
                              <i className="uil uil-map-marker"></i>
                            </span>{" "}
                            <span> Get Directions </span>{" "}
                          </a>
                        </small>
                      </div>
                    </div>
                    <div className="row ctad">
                      <div className="col-md-4 text-md-left mt-sm-0">
                        <ul className="list-inline mb-0 mt-2">
                          <li className="list-inline-item mr-2">
                            <a
                              href="javascript:void(0)"
                              style={{ pointerEvents: "none" }}
                            >
                              <div
                                className="alert alert-dark alert-pills"
                                role="alert"
                              >
                                <span className="alert-content">
                                  {" "}
                                  38* Lakhs onwards{" "}
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-8 text-md-right text-center p-0">
                        <ul className="list-inline mb-0 mt-2">
                          <li className="list-inline-item watch-video">
                            <a
                              href="https://www.youtube.com/watch?v=vygSkW3kkBs"
                              target="_new"
                              className="video-play-icon watch text-dark mb-2"
                            >
                              <div
                                className="alert alert-dark alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil uil-play-circle"></i>{" "}
                                <span className="alert-content">
                                  Walkthrough Video
                                </span>
                              </div>
                            </a>
                          </li>

                          <li className="list-inline-item watch-video watch-vt">
                            <a
                              href="https://www.watchitvirtually.com/wp-content/uploads/VirtualTours/Prestige_Courtyard_iBrochure/index.htm"
                              target="_new"
                              className="video-play-icon watch text-dark mb-2"
                            >
                              <div
                                className="alert alert-dark alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil uil-rotate-360"></i>{" "}
                                <span className="alert-content">
                                  Virtual Tour
                                </span>
                              </div>
                            </a>
                          </li>

                          <li className="list-inline-item watch-video vt-brochure">
                            <a
                              href="javascript:void(0)"
                              style={{ color: " #fff;" }}
                              className="text-dark mb-2"
                              data-keyboard="false"
                              data-backdrop="static"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <div
                                className="alert alert-dark alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil-file-download"></i>{" "}
                                <span className="alert-content">Brochure</span>
                              </div>
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              href="tel:+91 44 4000 4800"
                              className="btn-call"
                              id="contactno"
                            >
                              <div
                                className="alert alert-danger alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil uil-phone"></i>{" "}
                                <span className="alert-content">
                                  +91 44 4000 4800
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
