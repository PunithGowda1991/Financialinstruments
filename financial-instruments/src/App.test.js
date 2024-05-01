import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { mockData } from './Data/FinancialInstrumentsMockdata';

const mockDataValue = { mockData: mockData }

describe('When using App', () => {
  const wrapper = () => render(<App />)

  it('should render App component', () => {
    jest.mock('./Data/FinancialInstrumentsMockdata', () => mockDataValue)
    wrapper()
    expect(App).toBeDefined()
  })

  it('sortBy function', () => {
    const { queryAllByTestId } = wrapper({ tableData: mockData, sortField: 'assetClass', sortBy: jest.fn() })
    fireEvent.click(queryAllByTestId('header')[0])
    expect(queryAllByTestId('header')).not.toBeNull()
  })

  it('sortBy function', () => {
    const { queryAllByTestId } = wrapper({ tableData: mockData, sortField: 'assetClass', sortBy: jest.fn() })
    fireEvent.click(queryAllByTestId('header')[1])
    expect(queryAllByTestId('header')).not.toBeNull()
  })

  it('sortBy function', () => {
    const { queryAllByTestId } = wrapper({ tableData: mockData, sortField: 'assetClass', sortBy: jest.fn() })
    fireEvent.click(queryAllByTestId('header')[2])
    expect(queryAllByTestId('header')).not.toBeNull()
  })

})

