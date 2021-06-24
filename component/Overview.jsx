import React from 'react'

export default function Overview({article}) {
    const {projectOverview,projectName}=article.fields;
    return (
        <div>
             <div className="pi-section" id="Overview">
                        <h4>About {projectName}</h4>
                        <p>{projectOverview.content[0].content[0].value}</p>
                          </div> 
        </div>
    )
}
