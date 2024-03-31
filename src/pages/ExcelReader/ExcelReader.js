import { Typography } from '@mui/material';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelReader = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet is the one you want to read
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to an array of objects
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Extract headers (assuming the first row contains headers)
        const headers = sheetData[0];

        // Convert each row to an object
        const rowData = sheetData.slice(1).map((row) => {
          const obj = {};
          headers.forEach((header, index) => {
            obj[header] = row[index];
          });
          return obj;
        });

        // Update state with the array of objects
        setExcelData(rowData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {/* <pre>{JSON.stringify(excelData, null, 2)}</pre> */}
      {
        excelData.map((item, idx) => {
            return(
                <Typography key={idx}>
                    {item.Acc}
                </Typography>
            )
        })
      }
    </div>
  );
};

export default ExcelReader;
