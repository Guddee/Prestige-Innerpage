import React, {useState,useEffect}  from "react";
import Carousel from "react-bootstrap/Carousel";
import { getApi } from "../pages";

export default function Banner({article}) {
  const {banner,projectLogo,projectName,projectLocation,priceButton,locationLink}=article.fields;

  const [data, setData] = useState(null);
  useEffect(() => {
    getApi().then((data) => {
      setData(data);
    });
  }, []);
  const phone_no = data?.phone;
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
                            href={locationLink} target="_new"
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
                              href="/#"
                              style={{ pointerEvents: "none" }}
                            >
                              <div
                                className="alert alert-dark alert-pills"
                                role="alert"
                              >
                                <span className="alert-content">
                                {priceButton}  
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-8 text-md-right text-center p-0">
                        <ul className="list-inline mb-0 mt-2">

                          <li className="list-inline-item watch-video vt-brochure">
                            <a
                              href="/#"
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
                                <span className="alert-content">Download Brochure</span>
                              </div>
                            </a>
                          </li>

                          <li className="list-inline-item">
                            <a
                              href={"tel:" + `${phone_no}`}
                              className="btn-call"
                              id="contactno"
                            >
                              <div
                                className="alert alert-danger alert-pills alert-btn"
                                role="alert"
                              >
                                <i className="uil uil-phone"></i>{" "}
                                <span className="alert-content">
                                  {phone_no}
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
