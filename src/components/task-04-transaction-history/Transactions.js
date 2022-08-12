import PropTypes from 'prop-types';
import {
  TransactionsBoard,
  TransactionRow,
  TransactionsBody,
  TableHeader,
  DataHeader,
  TransactionData,
} from './TransactionsStyled';

export function TransactionHistory({ items }) {
  return (
    <TransactionsBoard className="transaction-history">
      <TableHeader>
        <TransactionRow>
          <DataHeader>Type</DataHeader>
          <DataHeader>Amount</DataHeader>
          <DataHeader>Currency</DataHeader>
        </TransactionRow>
      </TableHeader>
      <TransactionsBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow key={id}>
            <TransactionData>{type}</TransactionData>
            <TransactionData>{amount}</TransactionData>
            <TransactionData>{currency}</TransactionData>
          </TransactionRow>
        ))}
      </TransactionsBody>
    </TransactionsBoard>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
