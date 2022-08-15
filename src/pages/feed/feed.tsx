import React, { useEffect } from 'react';


import { OrdersList } from '../../components/orders-list/orders-list';
import { OrdersInfo } from '../../components/orders-info/orders-info';
import { wsAllOrdersConnectionClosed, wsAllOrdersConnectionStart } from '../../providers/actions/ws';

import styles from './feed.module.css';
import { useDispatch } from 'src/utils/hooks';

export function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsAllOrdersConnectionStart());

    return () => {
      dispatch(wsAllOrdersConnectionClosed());
    };
  }, [dispatch]);

  return (
    <article className={styles.container}>
      <OrdersList />
      <OrdersInfo />
    </article>
  );
}
