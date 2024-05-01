export const headerNames = {
    ticker: 'Ticker',
    price: 'Price',
    assetClass: 'Asset Class'
}

export const TICKER = 'ticker'
export const PRICE = 'price'
export const ASSET_CLASS = 'assetClass'

export const assetClassColorMapping = {
    Credit: 'lightgreen',
    Equities: 'lightblue',
    Commodities: 'whitesmoke'
}

export const BLUE = 'lightblue'
export const RED = 'lightcoral'

export const compareBy = key => {
    switch (key) {
      case TICKER:
        return (a, b) => {
          if (a[key] < b[key]) return -1;
          return 0;
        };
      case PRICE:
        return (a, b) => {
          if (a[key] > b[key]) return -1;
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
