import React from 'react'

export default function DownloadBrochure() {
    return (
        <div>
                   <div class="pi-section" id="brochure">
                <div
                  class="media flexxdr align-items-center shadow rounded p-4 features"
                  style={{ background: " #f9f9f9" }}
                >
                  <div class="icons m-0 rounded h2 text-primary text-center px-3">
                    <i class="uil uil-envelope-check"></i>
                  </div>
                  <div class="content media flexxd ml-4">
                    <div>
                      <h5 class="mb-1">
                        <a href="javascript:void(0)" style={{ color: "#222" }}>
                          Need more info !
                        </a>
                      </h5>
                      <p class="mb-0">
                        Don't hesitate to download the brochure to
                        <br /> know more details of this project.
                      </p>
                    </div>
                    <div class="mt-2">
                      <a
                        href="javascript:void(0)"
                        style={{ color: " #fff" }}
                        class="btn alert-danger rounded"
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
