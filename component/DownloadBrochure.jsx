import React from 'react'

export default function DownloadBrochure() {
    return (
        <div>
                   <div className="pi-section" id="brochure">
                <div
                  className="media flexxdr align-items-center shadow rounded p-4 features"
                  style={{ background: " #f9f9f9" }}
                >
                  <div className="icons m-0 rounded h2 text-primary text-center px-3">
                    <i className="uil uil-envelope-check"></i>
                  </div>
                  <div className="content media flexxd ml-4">
                    <div>
                      <h5 className="mb-1">
                        <a href="/#" style={{ color: "#222" }}>
                          Need more info !
                        </a>
                      </h5>
                      <p className="mb-0">
                        Don't hesitate to download the brochure to
                        <br /> know more details of this project.
                      </p>
                    </div>
                    <div className="mt-2">
                      <a
                        href="/#"
                        style={{ color: " #fff" }}
                        className="btn alert-danger rounded"
                        data-keyboard="false"
                        data-backdrop="static"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        Download Brochure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                </div>
    )
}
