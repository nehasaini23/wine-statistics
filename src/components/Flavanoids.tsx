/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import wineData from '../data/wineData'
import { calculateMean, calculateMedian, calculateMode } from '../utils/statistics'
import StatisticsTable from './StatisticsTable'

function Flavanoids() {
    const unique = [...new Set(wineData.map((item) => item.Alcohol))];// Find the unique values of "Alcohol" in the wineData
    const [data, setData] = useState<any>([])
    useEffect(() => {
        // we calculate statistics for each unique "Alcohol" value
        const updatedData = unique.map((alcohol) => {
          // Filter wineData to get only the data points with the current "Alcohol" value,
          // and then extract the "Flavanoids" values from those data points.
          const arr = wineData
            .filter((item) => item.Alcohol === alcohol)
            .map((item) => Number(item.Flavanoids));

          const mean = calculateMean(arr).toFixed(3);// Calculate the mean of "Flavanoids" for the current "Alcohol" value and round it to 3 decimal places.
          const median = calculateMedian(arr).toFixed(3);// Calculate the median of "Flavanoids" for the current "Alcohol" value and round it to 3 decimal places.
          const mode = calculateMode(arr).toFixed(3);// Calculate the mode of "Flavanoids" for the current "Alcohol" value and round it to 3 decimal places.
          // Return an object containing the calculated statistics for the current "Alcohol" value.
          return {
            mean,
            median,
            mode,
          };
        });
        // Update the "data" state with the calculated statistics for all unique "Alcohol" values.
        setData(updatedData);
      }, []);

    return (
        // Render a StatisticsTable component with "cls" (unique Alcohol values), "data" (mean, median, and mode of Flavanoids for each Alcohol), and "propertyName".
        <StatisticsTable cls={unique} data={data} propertyName="Flavanoids" />
    )
}

export default Flavanoids