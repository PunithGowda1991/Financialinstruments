import style from 'styled-components'

export const AssetClass = style.div`
    border-radius: 100px;
    width: 100px;
    height: 20px;
    padding-left: 30px;
    padding-top: 9px;
    background: ${(props) => props.color}
`