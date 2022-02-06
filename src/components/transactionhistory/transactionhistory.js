import PropTypes from 'prop-types';
import s from './transactionhistory.module.css';


export default function TransactionHistory({ items }) { 
    return <table className={s.transactionHistory}>
    <thead>
        <tr>
            <th className={s.tableHedaer}>Type</th>
            <th className={s.tableHedaer}>Amount</th>
            <th className={s.tableHedaer}>Currency</th>
        </tr>
    </thead>

    {items.map(item =>
        <tbody key={item.id} className={s.tableLine}>
            <tr>
                <td className={s.tableType}>{item.type}</td>
                <td className={s.tableData}>{item.amount}</td>
                <td className={s.tableData}>{item.currency}</td>
            </tr>                        
        </tbody>)
    }

    </table>
}
    
TransactionHistory.propTypes = {
  items : PropTypes.array,
}

