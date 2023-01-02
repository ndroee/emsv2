import React, { useState } from 'react';
import Papa from 'papaparse';
import './upload_plan.css';

function Upload() {
  const [csvData, setCsvData] = useState([]);

  function handleChange(event) {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setCsvData(results.data);
        },
      });
    }
  }

  return (
    <div class = 'tabel'>
      <input type="file" id="file" accept=".csv" onChange={handleChange} />
      <table>
        <thead>
          <tr>
            {csvData[0] &&
              Object.keys(csvData[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Upload;
