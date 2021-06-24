import React from 'react'

export default function ProjectHighlight({article}) {
    const {projectHighlights}=article.fields;
    return (
        <div>
          <div className="pi-section" id="Highlights">
                        <div className="scrollbar-dynamic">
                            <h4>Project Highlights </h4>
                           
                         
                            {
                                Object.keys(projectHighlights).reverse().map((item,i)=>
                                <table key={i}> 
                                <tbody>
                                <tr>
                                <th className="text-capitalize">{item}</th>
                                <td className="text-capitalize">{projectHighlights[item]}</td>
                                </tr>
                                </tbody>
                                </table>
                                )
                             
                            }
                            
                        </div>
                    </div>
        </div>
    )
}
