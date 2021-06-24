import React from "react";

export default function Location({ article }) {
  const { locationLink, projectName, locationContent } = article.fields;
  return (
    <div className="pi-section" id="Location">
      <h4>Prestige {projectName}</h4>
      <div className="row">
        <iframe src={locationLink} width="100%" height="300"></iframe>
      </div>
      <div className="row">
        <ul className="amenities list-unstyled">
          {locationContent.map((item, i) => (
            <li key={i}>
              <span className="text-primary h5 mr-2">
                <i className="uim uim-check-circle"></i>
              </span>{" "}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
