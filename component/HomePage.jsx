import React from "react";
import Amenities from "./Amenities";
import Banner from "./Banner";
import DownloadBrochure from "./DownloadBrochure";
import FloorPlan from "./FloorPlan";
import Gallery from "./Gallery";
import Location from "./Location";
import ModalForm from "./ModalForm";
import Overview from "./Overview";
import PricePlan from "./PricePlan";
import ProjectHighlight from "./ProjectHighlight";
import StickyModal from "./StickyModal";

export default function HomePage({ article }) {
  return (
    <div>
      <Banner article={article} />
      <section className="">
        <div className="container-section" style={{ marginBottom: "50px" }}>
          <div
            className="row justify-content-center"
            style={{ marginBottom: "40px" }}
          >
            <div className="col-lg-8 col-md-7 col-12 psection-left">
              <ProjectHighlight article={article} />
              <Overview article={article} />
              <Amenities article={article} />
              <FloorPlan article={article} />
              <PricePlan article={article} />
              <Gallery article={article} />
              <DownloadBrochure article={article} />
              <Location article={article} />
            </div>
            <ModalForm  article={article} />
            <div
              className="col-lg-4 col-md-5 col-12 d-md-block psection-left"
              id="enform"
            >
             <div className="shadow sticky-bar">
                <div id="eformdiv"></div>
            <StickyModal/>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
