import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts1, getProducts2 } from '../../store/site-data/selectors';
import { ProductKey } from '../../types';
import { addKey, getProduntsNames, getProductsIds } from '../../utils/utils';
import './main-screen.css';
import TableSummaryRow from '../../components/table-summary-row';
import CancelModal from '../../components/cancel-modal/cancel-modal';
import { cancelOrderAction } from '../../store/api-actions';

function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const productsList1 = useAppSelector(getProducts1);
  const productsList2 = useAppSelector(getProducts2);
  const [productsList, setProductsList] = useState<ProductKey[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortedInfo, setSortedInfo] = useState<SorterResult<ProductKey>>({});

  // Получение данных с сервера. Объединение данных в один массив
  // Добавление ключа 'key' каждому объекту для корректной работы таблицы
  useEffect(() => {
    if (productsList1.length !== 0 && productsList2.length !== 0) {
      setProductsList(addKey([...productsList1, ...productsList2]));
      setLoading(false);
    }
  }, [productsList1, productsList2]);

  // Обработчик отправки запроса отмены на эндпоинт '/cancel'. Удаление позиций из общего массива и,
  // соответственно, из таблицы
  const onClickCancelBtnHandler = (): void => {
    dispatch(cancelOrderAction({ productsIds: getProductsIds(productsList, selectedRowKeys) }));
    setProductsList(productsList.filter((product) => !selectedRowKeys.includes(product.key)));
    setSelectedRowKeys([]);
  };

  // Обработчик изменения состояния чекбоков
  const onSelectChange = (newSelectedRowKeys: React.Key[]): void => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  // Обработчик нажатий на поля заголовков
  const handleChange: TableProps<ProductKey>['onChange'] = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter as SorterResult<ProductKey>);
  };

  // Настройка параметров колонок таблицы
  const columns: ColumnsType<ProductKey> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name > b.name ? 1 : a.name === b.name ? 0 : -1),
      sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
      sortOrder: sortedInfo.columnKey === 'quantity' ? sortedInfo.order : null,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      sorter: (a, b) => (a.currency > b.currency ? 1 : a.currency === b.currency ? 0 : -1),
      sortOrder: sortedInfo.columnKey === 'currency' ? sortedInfo.order : null,
    },
    {
      title: 'Delivery date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
      sorter: (a, b) => (a.deliveryDate > b.deliveryDate ? 1 : a.deliveryDate === b.deliveryDate ? 0 : -1),
      sortOrder: sortedInfo.columnKey === 'deliveryDate' ? sortedInfo.order : 'ascend',
    },
  ];

  return (
    <>
      <Table
        style={{ paddingTop: 15 }}
        pagination={false}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={productsList}
        loading={loading}
        onChange={handleChange}
        bordered
        // eslint-disable-next-line react/no-unstable-nested-components
        summary={(data) => <TableSummaryRow data={[...data]} />}
      />

      <CancelModal disable={hasSelected} productsNames={getProduntsNames(productsList, selectedRowKeys)} cancelSubmit={onClickCancelBtnHandler} />
    </>
  );
}

export default MainScreen;
