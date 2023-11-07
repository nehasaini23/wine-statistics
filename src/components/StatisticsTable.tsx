/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/StatisticsTable.tsx
import React from "react";
import './style.css'

// Define the props interface for the StatisticsTable component
interface props {
    data: any[]; // An array of data that contains statistical information
    propertyName: string; // The property name for which statistics are being displayed (e.g., "Flavanoids" or "Gamma")
    cls: any; // An array of unique classes or categories (e.g., "Class 1", "Class 2")
  }

const StatisticsTable = ({ data, propertyName, cls} : props) => {
  return (
    <table className="table-box">
      <thead>
        <tr>
          <th>Measure</th>
          {/* Display the class names (e.g., "Class 1", "Class 2") in the table header */}
          {cls.map((item: any) => (
            <th key={item}>Class {item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{propertyName} Mean</td>
          {/* Display the mean values for each class */}
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.mean}</td>
          ))}
        </tr>
        <tr>
          <td>{propertyName} Median</td>
          {/* Display the median values for each class */}
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.median}</td>
          ))}
        </tr>
        <tr>
          <td>{propertyName} Mode</td>
          {/* Display the mode values for each class */}
          {Object.keys(data).map((item: any) => (
            <td key={item}>{data[item]?.mode}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticsTable;
