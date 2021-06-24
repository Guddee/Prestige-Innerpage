import React from "react";
import { FA_ICON } from "../config/ServerKey";

export default function Amenities({ article }) {
  const { amenities } = article.fields;
  return (
    <div>
      <div className="pi-section" id="Amenities">
        <h4>Amenities</h4>
        <ul className="amenities list-unstyled">
          {amenities.map((item, i) => (
            <li className="mb-0" key={i}>
              <span className="text-primary h5 mr-2">
                <i className={FA_ICON}></i>
              </span>
              {amenities[i]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
