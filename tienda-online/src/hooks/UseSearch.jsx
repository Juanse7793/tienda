import { useState, useEffect } from "react";

const useSearch = (data, searchTerm, keys) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      setFilteredData(
        data.filter((item) =>
          keys.some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedSearchTerm)
          )
        )
      );
    }
  }, [data, searchTerm, keys]);

  return filteredData;
};

export default useSearch;
