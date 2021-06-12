import React from "react";
import { FORM_ICON } from "../config/ServerKey";
import Amenities from "./Amenities";
import Banner from "./Banner";
import { CountryCode } from "./CountryCode";
import DownloadBrochure from "./DownloadBrochure";
import FloorPlan from "./FloorPlan";
import Gallery from "./Gallery";
import Location from "./Location";
import Overview from "./Overview";
import PricePlan from "./PricePlan";
import ProjectHighlight from "./ProjectHighlight";

export default function HomePage({article}) {
  console.log(article)
  return (
    <div>
      <Banner article={article}/>
      <section class="">
        <div class="container-section" style={{ marginBottom: "50px" }}>
          <div
            class="row justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <div class="col-lg-8 col-md-7 col-12 psection-left">
              <ProjectHighlight />
              <Overview />
              <Amenities />
              <FloorPlan />
              <PricePlan/>
              <Gallery/>
              <DownloadBrochure />
              <Location/>
            </div>
            <div
              class="modal fade bd-example-modal"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div class="modal-body">
                    <div id="eformcdiv">
                      <div class="loaderc-sd">
                        <img
                          src="https://www.prestigeconstructions.com/loader-with-text.gif"
                          alt="loader"
                          style={{ maxWidth: "80px" }}
                        />
                        <p style={{ padding: "5px 0px", margin: "5px 0px" }}>
                          Loading! Please wait!!
                        </p>
                      </div>
                      <form id="ecform" name="ecform" method="post">
                        <div class="form-group position-relative">
                          <label>Name</label>
                          <i data-feather="user" class="fea icon-sm icons"></i>
                          <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user fea icon-sm icons"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                          <input
                            type="text"
                            name="cname"
                            id="cname"
                            class="form-control pl-5"
                            pattern="[a-zA-Z ]+"
                            minlength="3"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div class="form-group position-relative">
                          <label>Mobile no</label>
                          <div className="row no-gutters">
                          <div className="col-md-4">
                          <select
                          name="countrycode"
                          className="form-control countrycode"
                          required=""
                          id="dropAnEnquiry_countrycode"
                          onChange={(e) => handleChange(e)}
                          value="countrycode"
                        >
                          <CountryCode />
                        </select>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="tel"
                            name="cmobile"
                            id="cmobile"
                            class="form-control pl-5"
                            placeholder="Your mobile"
                            required
                          />
                          </div>
                          </div>
                        </div>
                        <div class="form-group position-relative">
                          <label>
                            Email ID <span class="text-danger">*</span>
                          </label>
                          <i data-feather="mail" class="fea icon-sm icons"></i>
                          <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail fea icon-sm icons"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                          <input
                            name="cemail"
                            id="cemail"
                            type="email"
                            class="form-control pl-5"
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div class="form-group form-radio flexd">
                          <label class="left">Request a Site Visit</label>
                          <div class="radio">
                            <label>
                              <input
                                type="radio"
                                name="csitevisit"
                                value="1"
                                required
                              />
                              <i class="helper"></i>Yes
                            </label>
                          </div>
                          <div class="radio">
                            <label>
                              <input type="radio" name="csitevisit" value="0" />
                              <i class="helper"></i>No
                            </label>
                          </div>
                        </div>
                        <div class="button-container">
                          <input
                            type="submit"
                            name="sendcotp"
                            id="sendcotp"
                            class="button btn btn-info rounded"
                            value="Enquire"
                          />
                        </div>
                      </form>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-5 col-12 d-md-block psection-left"
              id="enform"
            >
              <div class="shadow sticky-bar">
                <div id="eformdiv">
                  <form id="eform">
                    <div class="form-group position-relative">
                      <label>Name</label>
                      <i data-feather="user" class="fea icon-sm icons"></i>
                      <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user fea icon-sm icons"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                      <input
                        type="text"
                        name="aname"
                        id="aname"
                        class="form-control pl-5"
                        pattern="[a-zA-Z ]+"
                        minlength="3"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div class="form-group position-relative">
                      <label>Mobile no</label>
                      <div className="row no-gutters">
                      <div className="col-md-4">
                      <select
                          name="countrycode"
                          className="form-control countrycode"
                          required=""
                          id="dropAnEnquiry_countrycode"
                          onChange={(e) => handleChange(e)}
                          value="countrycode"
                        >
                          <CountryCode />
                        </select>
                        </div>
                        <div className="col-md-8">
                      <input
                        type="tel"
                        name="amobile"
                        id="amobile"
                        class="form-control pl-5"
                        placeholder="Your mobile"
                        required
                      />
                      </div>
                      </div>
                     </div>
                    <div class="form-group position-relative">
                      <label>
                        Email ID <span class="text-danger">*</span>
                      </label>
                      <i data-feather="mail" class="fea icon-sm icons"></i>
                      <svg
                      xmlns={FORM_ICON}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-mail fea icon-sm icons"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                   
                      <input
                        name="aemail"
                        id="aemail"
                        type="email"
                        class="form-control pl-5"
                        placeholder="Your email"
                        required
                      />
                    </div>
                     <div class="form-group form-radio flexd">
                      <label class="left">Request a Site Visit</label>
                      <div class="radio">
                        <label>
                          <input
                            type="radio"
                            name="asitevisit"
                            value="1"
                            required
                          />{" "}
                          <i class="helper"></i>Yes
                        </label>
                      </div>
                      <div class="radio">
                        <label>
                          <input type="radio" name="asitevisit" value="0" />
                          <i class="helper"></i>No
                        </label>
                      </div>
                    </div>
                    <div class="button-container">
                      <input
                        type="submit"
                        name="sendotp"
                        id="sendotp"
                        class="button btn btn-info rounded"
                        value="Enquire"
                      />
                    </div>
                  </form>
                   </div>
              </div>
            </div>
          </div>
          <div class="enquire-fixed">
            <a
              href="javascript:void(0)"
              style={{ color: "#fff" }}
              class="btn btn-info rounded w-100"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i class="uil uil-envelope pr-2"></i> Make an enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
