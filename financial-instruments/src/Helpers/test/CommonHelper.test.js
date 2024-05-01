import { compareBy } from '../CommonHelper';

describe('When using Helper', () => {

    it('compareBy with ticker', () => {
        expect(compareBy('ticker')).toBeDefined()
    })
    it('scompareBy with price', () => {
        expect(compareBy('price')).toBeDefined()
    })
    it('compareBy with assetclass', () => {
        expect(compareBy('assetClass')).toBeDefined()
    })
    it('compareBy with default', () => {
        expect(compareBy('test')).toBeDefined()
    })

})

