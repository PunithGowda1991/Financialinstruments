import style from 'styled-components'

export const AssetClass = style.div`
    border-radius: 100px;
    width: 100px;
    height: 20px;
    padding-left: 20px;
    background: white;
    background: ${(props) => props.color}
`