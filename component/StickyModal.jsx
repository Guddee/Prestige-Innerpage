import React,{useState} from 'react';
import { FORM_ICON } from '../config/ServerKey';
import { CountryCode } from "./CountryCode";
import { useRouter } from 'next/router';
import { saveLead } from '../config/Sendobject';
import { postApi } from '../config/CustomApi';

export default function StickyModal() {
  let initialData=
  {
      name: "",
      email: "",
      number: "",
      CountryCode: "+91",
  }
  const router = useRouter();
  const [ModalData,setModalData]=useState(initialData);
  const handleChange = (e) => {
      const { name, value } = e.target;
      setModalData({ ...ModalData, [name]: value });
    };
  const handleSubmit=async (e)=>
  {
      e.preventDefault();
      let obj=await saveLead(ModalData)
      alert("Thank you")
      postApi(obj);
      router.push("/thankyou");
  }
    return (
        <div>
           
             
                  <form id="eform">
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
                        id="aname"
                        className="form-control pl-5"
                        pattern="[a-zA-Z ]+"
                        minLength="3"
                        placeholder="Your name"
                        onChange={(e) => handleChange(e)}
                        value={ModalData.name}
                        required
                      />
                    </div>
                    <div className="form-group position-relative">
                      <label>Mobile no</label>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <select
                            name="countrycode"
                            className="form-control countrycode"
                            required=""
                            id="dropAnEnquiry_countrycode"
                            onChange={(e) => handleChange(e)}
                            value={ModalData.CountryCode}
                          >
                            <CountryCode/>
                          </select>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="tel"
                            name="number"
                            id="amobile"
                            className="form-control pl-5"
                            placeholder="Your mobile"
                            onChange={(e) => handleChange(e)}
                            value={ModalData.number} 
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
                        type="email"
                        className="form-control pl-5"
                        placeholder="Your email"
                        onChange={(e) => handleChange(e)}
                        value={ModalData.email}
                        required
                      />
                    </div>
                    <div className="form-group form-radio flexd">
                      <label className="left">Request a Site Visit</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="asitevisit"
                            value="1"
                            onChange={(e) => handleChange(e)}
                            required
                          />{" "}
                          <i className="helper"></i>Yes
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="asitevisit"
                            value="0"
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
                        onClick={(e)=>handleSubmit(e)}
                      />
                    </div>
                  </form>
                </div>
           
         
    )
}
