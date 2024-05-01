import { useEffect, useState } from 'react';

import { mockData } from './Data/FinancialInstrumentsMockdata'
import { compareBy } from './Helpers/CommonHelper';
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

  return (
    <div>
      {renderData.length > 0 &&
        <FinancialInstrumentTable tableData={renderData} sortBy={sortBy} sortField={sortField} />}
    </div>
  );
}

export default App;
