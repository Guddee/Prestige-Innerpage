import React from "react";

export default function PricePlan({ article }) {
  const { priceTable } = article.fields;
  return (
    <div>
      <div className="pi-section" id="PricePlan">
        <h4>Pricesheet Configuration</h4>
        <table className="rwd-table">
        <tbody>
            <tr>
              <th className="ColorGold">Typology</th>
              <th className="ColorGold">Carpet Area</th>
              <th className="ColorGold">Price All-In</th>
              <th className="ColorGold">Price Sheet</th>
            </tr>
            </tbody>
            {priceTable.data.map((item, i) => (
              <tr key={i}>
                <td data-th="Typology">
                  {item["typology"] != undefined ? (
                    `${item["typology"]}`
                  ) : (
                    <button
                      className="btn alert-danger"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Request Here
                    </button>
                  )}
                </td>
                <td data-th="Carpet Area">
                  {item["carpet_area"] != undefined ? (
                    ` ${item["carpet_area"]}`
                  ) : (
                    <button
                      className="btn alert-danger"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Request Here
                    </button>
                  )}
                </td>
                <td data-th="Price All-In">
                  {item["price_all_in"] != undefined ? (
                    `${item["price_all_in"]}`
                  ) : (
                    <button
                      className="btn alert-danger"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Request Here
                    </button>
                  )}
                </td>
                <td data-th="Price Sheet">
                  <button
                    className="btn alert-danger"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Request Here
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
