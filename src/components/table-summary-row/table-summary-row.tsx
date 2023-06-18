import React from 'react';
import { Table, Typography } from 'antd';
import { ProductKey } from '../../types';

const { Text } = Typography;

type TableSummaryRowProps = {
  data: ProductKey[];
};

function TableSummaryRow({ data }: TableSummaryRowProps): JSX.Element {
  let total = 0;

  data.forEach((item) => {
    total += item.quantity;
  });
  return (
    <Table.Summary.Row>
      <Table.Summary.Cell index={0}>Общее количество</Table.Summary.Cell>
      <Table.Summary.Cell index={1} />
      <Table.Summary.Cell index={2}>
        <Text type="danger">{total}</Text>
      </Table.Summary.Cell>
      <Table.Summary.Cell index={3} />
      <Table.Summary.Cell index={4} />
    </Table.Summary.Row>
  );
}

export default TableSummaryRow;
