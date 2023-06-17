import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType, SorterResult } from 'antd/es/table/interface';
import { useAppSelector } from '../../hooks';
import { getProducts1, getProducts2 } from '../../store/site-data/selectors';
import { ProductKey } from '../../types';
import { addKey } from '../../utils/utils';
import './main-screen.css';

function MainScreen(): JSX.Element {
  const productsList1 = useAppSelector(getProducts1);
  const productsList2 = useAppSelector(getProducts2);
  const [productsList, setProductsList] = useState<ProductKey[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortedInfo, setSortedInfo] = useState<SorterResult<ProductKey>>({});

  // Получение данных с сервера. Объединение данных в один массив
  useEffect(() => {
    if (productsList1.length !== 0 && productsList2.length !== 0) {
      setProductsList(addKey([...productsList1, ...productsList2]));
      setLoading(false);
    }
  }, [productsList1, productsList2]);

  // Обработчик очистки всех чекбоксов
  const handleClear = (): void => {
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
      <Button type="primary" onClick={handleClear} disabled={!hasSelected}>
        Reload
      </Button>

      <Table style={{ paddingTop: 15 }} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={productsList} loading={loading} onChange={handleChange} />
    </>
  );
}

export default MainScreen;
