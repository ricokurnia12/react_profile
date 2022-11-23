import React from "react";
import "./education.css";

const Education = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Institute</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>SMA</td>
                <td>IPA</td>
                <td>SMAN 1 Slahung</td>
                <td>2013-2017</td>
              </tr>

              <tr>
                <td>BBA</td>
                <td>Accounting</td>
                <td>Gunadarma University</td>
                <td>2017-2022</td>
              </tr>
            </tbody>
        </table>
    );
};

export default Education;
