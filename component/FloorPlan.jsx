import React from 'react'

export default function FloorPlan({article}) {
    const {floorPlanImages}=article.fields;
    return (
        <div>
              <div className="pi-section" id="FloorPlan">
                        <h4>Master/Unit Plans</h4>
                        <div className="gallery-item-filter">
                            <span className="tab active" data-category=".item">All</span>
                            <span className="tab" data-category="#MasterPlan">Masterplan</span>
                            <span className="tab" data-category="#UnitPlan">UnitPlan</span>
                            <span className="tab" data-category="#FloorPlan">FloorPlan</span>
                        </div>
                        <div className="row gallery-items gallery-masonry">
                           {floorPlanImages.map((item,i)=>(
                            <div className="col-md-4 item" key={i} id={floorPlanImages[i].fields.title}>
                                <a href={floorPlanImages[i].fields.file.url}>
                                    <img src={floorPlanImages[i].fields.file.url} alt="FloorPlan" />
                                    <p> {floorPlanImages[i].fields.title}</p>
                                </a>
                            </div>
                           ))}
                            </div>
                    </div>
        </div>
    )
}
