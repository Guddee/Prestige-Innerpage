import React,{useState} from 'react';
import { FORM_ICON } from '../config/ServerKey';
import { CountryCode } from "./CountryCode";
import { useRouter } from 'next/router';
import { saveLead } from '../config/Sendobject';
import { postApi } from '../config/CustomApi';

export default function ModalForm() {
    let initialData=
    {
        name: "",
        email: "",
        number: "",
        CountryCode: "+91",
    }
    const router = useRouter();
    const [FormData,setFormData]=useState(initialData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
      };
    const handleSubmit=async (e)=>
    {
        e.preventDefault();
        let obj=await saveLead(FormData)
        alert("Thank you")
        postApi(obj);
        router.push("/thankyou");
    }
    return (
        <div>
             <div
              className="modal fade bd-example-modal"
              id="exampleModalCenter"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body">
                    <div id="eformcdiv">
                      <form id="ecform" name="ecform" method="post">
                        <div className="form-group position-relative">
                          <label>Name</label>
                          <i data-feather="user" className="fea icon-sm icons"></i>
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
                            name="name"
                            id="cname"
                            className="form-control pl-5"
                            pattern="[a-zA-Z ]+"
                            minLength="3"
                            placeholder="Your name"
                            onChange={(e) => handleChange(e)}
                            value={FormData.name}
                            required
                          />
                        </div>
                        <div className="form-group position-relative">
                          <label>Mobile no</label>
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <select
                                name="CountryCode"
                                className="form-control countrycode"
                                required=""
                                id="dropAnEnquiry_countrycode"
                                onChange={(e) => handleChange(e)}
                                value={FormData.CountryCode}
                              >
                                <CountryCode/>
                              </select>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="tel"
                                name="number"
                                id="cmobile"
                                className="form-control pl-5"
                                placeholder="Your mobile"
                                onChange={(e) => handleChange(e)}
                                value={FormData.number}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group position-relative">
                          <label>
                            Email ID <span className="text-danger">*</span>
                          </label>
                          <i data-feather="mail" className="fea icon-sm icons"></i>
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
                            name="email"
                            id="cemail"
                            type="email"
                            className="form-control pl-5"
                            placeholder="Your email"
                            onChange={(e) => handleChange(e)}
                            value={FormData.email}
                            required
                          />
                        </div>
                        <div className="form-group form-radio flexd">
                          <label className="left">Request a Site Visit</label>
                          <div className="radio">
                            <label>
                              <input
                                type="radio"
                                name="1"
                                value="1"
                                required
                                onChange={(e) => handleChange(e)}
                              />
                              <i className="helper"></i>Yes
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="csitevisit" value="0" 
                                onChange={(e) => handleChange(e)}
                              />
                              <i className="helper"></i>No
                            </label>
                          </div>
                        </div>
                        <div className="button-container">
                          <input
                            type="submit"
                            className="button btn btn-info rounded"
                            onClick={(e) => handleSubmit(e)}
                              data-dismiss="modal"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
        </div>
    )
}
