import styled from 'styled-components';

export const TransactionsBoard = styled.table`
  width: 434px;
  margin: 0 auto;
  border-collapse: collapse;
`;
export const TransactionRow = styled.tr``;
export const TransactionsBody = styled.tbody``;
export const TableHeader = styled.thead``;
export const DataHeader = styled.th`
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.secondary};
`;
export const TransactionData = styled.td`
  text-align: center;
  border: solid 1px black;
  padding: 16px;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.muted};
  color: ${p => p.theme.colors.text};
  font-size: bold;
  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
