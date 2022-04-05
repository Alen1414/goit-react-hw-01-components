import Transaction from 'components/TransactionHistory/TransactionHistory';

import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

function TransactionHistory  ({items}) {

    return(
        <table className={css.transaction_history}>
        <thead>
          <tr className={css.tittle}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {items.map(({id,type,amount,currency})  =>
                <tr key ={id}>
                 <Transaction
                 type = {type}
                 amount={amount}
                 currency={currency}
                 />
             
           </tr>
            )}

         </tbody>
      </table>
    );
}
export default TransactionHistory;

TransactionHistory.propTypes ={
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    
    }))
};

