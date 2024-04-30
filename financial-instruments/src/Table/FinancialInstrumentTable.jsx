import React from 'react';
import { headerNames, assetClassColorMapping } from '../Helpers/CommonHelper';
import './FinancialInstrumentTable.css'
import { AssetClass } from '../Components/AssetClass';

const FinancialInstrumentTable = ({ tableData = [], sortBy, sortField }) => {
    const tableHeaders = Object.keys(tableData[0]).map(header => header)

    const renderTableData = () => {
        return (
            tableData.map(item => {
                const { ticker, price, assetClass} = item
                return (
                    <tr>
                        <td><div>{ticker}</div></td>
                        <td><div>{price}</div></td>
                        <td><AssetClass color={assetClassColorMapping[assetClass]}>{assetClass}</AssetClass></td>
                    </tr>
                )
            })
        )
    }

    return (
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map(item => {
                            return (
                                <th key={item} onClick={() => sortBy(item)}>
                                    <div>
                                        {headerNames[item]}
                                        {item === sortField &&
                                        <i className={'sortitems'}></i> }
                                    </div>
                                    </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
    )
};

export default FinancialInstrumentTable;
