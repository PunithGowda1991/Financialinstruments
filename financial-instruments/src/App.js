import { useEffect, useState } from 'react';

import { mockData } from './Data/FinancialInstrumentsMockdata'
import { TICKER, PRICE, ASSET_CLASS } from './Helpers/CommonHelper';

import FinancialInstrumentTable from './Table/FinancialInstrumentTable'

function App() {
  const [renderData, setRenderData] = useState([]);
  const [sortField, setSortField] = useState();

  useEffect(() => {
    setRenderData(mockData);
  }, [])

  const sortBy = (key) => {
    setSortField(key)
    let tableDataCopy = [...renderData];
    tableDataCopy.sort(compareBy(key));
    setRenderData(tableDataCopy);
  }

  const compareBy = key => {
    switch (key) {
      case TICKER:
        return (a, b) => {
          if (a[key] < b[key]) return -1;
          return 0;
        };
      case PRICE:
        return (a, b) => {
          if (a[key] < b[key]) return -1;
          return 0;
        };
      case ASSET_CLASS:
        const sortOrder = ['Commodities', 'Equities', 'Credit']
        return (a, b) => {
          return sortOrder.indexOf(a.assetClass) - sortOrder.indexOf(b.assetClass)
        };
      default:
        return 0
    }
  };

  return (
    <div>
      {renderData.length > 0 &&
        <FinancialInstrumentTable tableData={renderData} sortBy={sortBy} sortField={sortField} />}
    </div>
  );
}

export default App;
