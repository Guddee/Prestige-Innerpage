import React from 'react'

export default function FloorPlan() {
    return (
        <div>
              <div class="pi-section" id="floorplans">
                        <h4>Master/Unit Plans</h4>
                        <div class="gallery-item-filter">
                            <span class="tab active" data-category=".item">All</span>
                            <span class="tab" data-category=".master">Masterplan</span>
                            <span class="tab" data-category=".1">UnitPlan</span>
                            <span class="tab" data-category=".2">FloorPlan</span>
                        </div>
                        <div class="row gallery-items gallery-masonry">
                            <div class="col-md-4 item master">
                                <a href="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/masterplan/masterplan.jpeg">
                                    <img src="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/masterplan/masterplan.jpeg" alt="Masterplan" />
                                    <p> Masterplan</p>
                                </a>
                            </div>
                            <div class="col-md-4 item 1">
                                <a href="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/unitplans/type-a1---1-bed---599-sq-ft.jpeg">
                                    <img src="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/unitplans/type-a1---1-bed---599-sq-ft.jpeg" alt="Type A1 - 1 Bed - 599 Sq Ft" />
                                    <p> Type A1 - 1 Bed - 599 Sq Ft - 1 BR</p>
                                </a>
                            </div>
                            <div class="col-md-4 item 2">
                                <a href="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/unitplans/type-a2---1-bed---602-sq-ft.jpeg">
                                    <img src="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-courtyards/unitplans/type-a2---1-bed---602-sq-ft.jpeg" alt="Type A2 - 1 Bed - 602 Sq Ft" />
                                    <p> Type A2 - 1 Bed - 602 Sq Ft - 1 BR</p>
                                </a>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
