import React from 'react'

export default function Gallery({article}) {
   const {galleryImages}=article.fields;
    return (
        <div>
                <div className="pi-section" id="Gallery">
                        <h4>Project Gallery</h4>
                        <div className="gallery-item-filter">
                            <span className="tab active" data-category=".item">All</span>
                            <span className="tab" data-category="#External">External View</span>
                            <span className="tab" data-category="#Internal">Internal View</span>
                        </div>
                        <div className="row gallery-items gallery-masonry">
                        {
                            galleryImages.map((item,i)=>(
                                <div className="col-md-4 item" id={galleryImages[i].fields.title} key={i}>
                                <a href={galleryImages[i].fields.file.url}>
                                    <img src={galleryImages[i].fields.file.url} alt="Gallery_Image" />
                                </a>
                            </div>
                            ))

                        }
                        </div>
                    </div>
    
        </div>
    )
}
