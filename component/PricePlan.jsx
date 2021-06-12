import React from 'react'

export default function PricePlan() {
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
                        <tr>
                            <td data-th="Typology">1 BHK Joy</td>
                            <td data-th="Carpet Area">430 Sq. Ft.</td>
                            <td data-th="Price"> ₹ 37.5 Lakhs*</td>
                            <td data-th="Price Sheet">
                                <button className="btn alert-danger" data-toggle="modal" open-modal="PricePlan">Request Here</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-th="Typology">1 BHK Joy</td>
                            <td data-th="Carpet Area">430 Sq. Ft.</td>
                            <td data-th="Price"> ₹ 37.5 Lakhs*</td>
                            <td data-th="Price Sheet">
                                <button className="btn alert-danger" data-toggle="modal" open-modal="PricePlan">Request Here</button>
                            </td>
                        </tr>
                
                    </tbody>
                </table>
            </div>  
        </div>
    )
}
