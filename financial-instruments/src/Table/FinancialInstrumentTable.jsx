import React from 'react';
import { headerNames } from '../Helpers/CommonHelper';
import './FinancialInstrumentTable.css'
import { AssetClass } from '../Components/AssetClass';

const FinancialInstrumentTable = ({ tableData = [], sortBy, sortField }) => {
    const tableHeaders = tableData.length > 0 ? Object.keys(tableData[0]).map(header => header) : []
    const renderTableData = () => {
        return (
            tableData.map(item => {
                return (
                    <tr>
                        {Object.keys(item).map((el, index) => {
                            return (
                                <td key={index}><AssetClass assetName={el} assetValue={item[el]}>{item[el]}</AssetClass></td>
                            )
                        })}
                    </tr>
                )
            })
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    {tableHeaders.map((item, index) => {
                        return (
                            <th data-testid='header' key={item} onClick={() => sortBy(item)}>
                                <div>
                                    {headerNames[item]}
                                    {item === sortField &&
                                        <i className={'sortitems'}></i>}
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
