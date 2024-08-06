/**
 * Function to report web vitals metrics.
 * 
 * Web vitals are a set of performance metrics that are crucial for understanding the user experience
 * on your web application. This function imports the `web-vitals` library and uses it to report these metrics
 * to an external logging function provided as a parameter.
 * 
 * @param {Function} onPerfEntry - A callback function to handle performance metrics. It will be called with
 *                                 the performance metrics from the `web-vitals` library.
 * 
 * @example
 * // Usage example
 * reportWebVitals(console.log);
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call each web vital metric with the provided callback function
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
