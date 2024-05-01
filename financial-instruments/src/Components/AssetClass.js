import style from 'styled-components'
import { ASSET_CLASS, BLUE, PRICE, RED } from '../Helpers/CommonHelper'
import { assetClassColorMapping } from '../Helpers/CommonHelper'

export const AssetClass = style.div`
    border-radius: 100px;
    max-width: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 20px;
    padding-top: 9px;
    background: ${(props) => {
        switch(props.assetName){
            case PRICE :
                return props.assetValue > 0 ? BLUE : RED
            case ASSET_CLASS :
                return assetClassColorMapping[props.assetValue]
        }
    }}
`