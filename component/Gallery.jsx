import React from 'react'

export default function Gallery() {
    return (
        <div>
                <div class="pi-section" id="Gallery">
                        <h4>Project Gallery</h4>
                        <div class="gallery-item-filter">
                            <span class="tab active" data-category=".item">All</span>
                            <span class="tab" data-category=".master">External View</span>
                            <span class="tab" data-category=".1">Garden View </span>
                            <span class="tab" data-category=".2">Internal View</span>
                        </div>
                        <div class="row gallery-items gallery-masonry">
                            <div class="col-md-4 item master">
                                <a href="assest/img/gallery/1.jpg">
                                    <img src="assest/img/gallery/1.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                            <div class="col-md-4 item 1">
                            <a href="assest/img/gallery/2.jpg">
                                    <img src="assest/img/gallery/2.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                            <div class="col-md-4 item 2">
                            <a href="assest/img/gallery/3.jpg">
                                    <img src="assest/img/gallery/3.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                            <div class="col-md-4 item master">
                                <a href="assest/img/gallery/1.jpg">
                                    <img src="assest/img/gallery/1.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                            <div class="col-md-4 item 1">
                            <a href="assest/img/gallery/2.jpg">
                                    <img src="assest/img/gallery/2.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                            <div class="col-md-4 item 2">
                            <a href="assest/img/gallery/3.jpg">
                                    <img src="assest/img/gallery/3.jpg" alt="Gallery_Image" />
                                </a>
                            </div>
                        </div>
                    </div>
    
        </div>
    )
}
