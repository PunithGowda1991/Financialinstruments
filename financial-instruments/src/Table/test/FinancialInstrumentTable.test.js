import { fireEvent, render } from '@testing-library/react';
import FinancialInstrumentTable from '../FinancialInstrumentTable';

describe('When using FinancialInstrumentTable', () => {
  const mockData = [
    {
      ticker: 'ALPHA',
      price: 3150.67,
      assetClass: 'Credit'
    },
    {
      ticker: 'BETA',
      price: 3791.37,
      assetClass: 'Equities'
    },
  ]
  const wrapper = ({ tableData, sortField, sortBy }) => render(<FinancialInstrumentTable tableData={tableData} sortField={sortField} sortBy={sortBy} />)

  it('should render FinancialInstrumentTable with data', () => {
    wrapper({ tableData: mockData, sortField: 'assetClass' })
  })

  it('should render FinancialInstrumentTable without data', () => {
    wrapper({ sortField: 'assetClass' })
  })

  it('Callback function', () => {
    const { queryAllByTestId } = wrapper({ tableData: mockData, sortField: 'assetClass', sortBy: jest.fn() })
    fireEvent.click(queryAllByTestId('header')[0])
    expect(queryAllByTestId('header')).not.toBeNull()
  })

})
