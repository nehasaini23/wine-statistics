/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import wineData from '../data/wineData'
import { calculateGamma, calculateMean, calculateMedian, calculateMode } from '../utils/statistics'
import StatisticsTable from './StatisticsTable'

function Gamma() {
    // Find the unique values of "Alcohol" in the wineData
    const unique = [...new Set(wineData.map((item) => item.Alcohol))];
    const [data, setData] = useState<any>([])
    useEffect(() => {
        // we calculate statistics for each unique "Alcohol" value
        const updatedData = unique.map((alcohol) => {
            // Filter wineData to get only the data points with the current "Alcohol" value,
            // and then extract the "Ash," "Hue," and "Magnesium" values from those data points.
            const arr = wineData
                .filter((item) => item.Alcohol === alcohol)
                .map((item) => {
                    return {
                        Ash: parseFloat(item.Ash),
                        Hue: parseFloat(item.Hue),
                        Magnesium: parseFloat(item.Magnesium),
                    }
                });
            
            const gammaList = calculateGamma(arr);// Calculate the "Gamma" values for the current "Alcohol" value using the provided formula.
            const mean = calculateMean(gammaList).toFixed(3);// Calculate the mean of "Gamma" for the current "Alcohol" value and round it to 3 decimal places.
            const median = calculateMedian(gammaList).toFixed(3);// Calculate the median of "Gamma" for the current "Alcohol" value and round it to 3 decimal places.
            const mode = calculateMode(gammaList).toFixed(3);// Calculate the mode of "Gamma" for the current "Alcohol" value and round it to 3 decimal places.
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
        // Render a StatisticsTable component with "cls" (unique Alcohol values), "data" (mean, median, and mode for each Alcohol), and "propertyName" set to "Gamma."
        <StatisticsTable cls={unique} data={data} propertyName="Gamma" />
    )
}

export default Gamma