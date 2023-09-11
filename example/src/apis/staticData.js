export const cityData = {
  url: '/jsonFiles/common/city.json', cache: 'city-data', transformResponse: ({data}) => {
    return {
      data: {
        code: 200, results: data
      }
    };
  }
};

export const functionData = {
  url: '/jsonFiles/common/function.json', cache: 'function-data', transformResponse: ({data}) => {
    return {
      data: {
        code: 200, results: data
      }
    };
  }
};

export const industryData = {
  url: '/jsonFiles/common/industry.json', cache: 'industry-data', transformResponse: ({data}) => {
    return {
      data: {
        code: 200, results: data
      }
    };
  }
};

export const countryData = {
  url: '/jsonFiles/common/country.json', cache: 'country-data', transformResponse: ({data}) => {
    return {
      data: {
        code: 200, results: data
      }
    };
  }
};

const apis = {cityData, functionData, industryData, countryData};

export default apis;
