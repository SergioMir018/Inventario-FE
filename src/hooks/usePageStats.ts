import { useMemo } from 'react';
import { Order, Visit } from '../types/http-types';

export function usePageStats(orders: Order[], visits: Visit[]) {
  const getWeekNumber = (date: Date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - startOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const currentWeekNumber = getWeekNumber(new Date()) - 1;
  const previousWeekNumber = currentWeekNumber - 1;

  const totalSales = useMemo(() => {
    let totalSales = 0;

    orders.map((order) => {
      totalSales += order.totalPayment;
    });

    return totalSales;
  }, [orders]);

  const {
    currentWeekOrders,
    previousWeekOrders,
    currentWeekVisits,
    previosWeekVisits,
  } = useMemo(() => {
    const currentWeekOrders: Order[] = [];
    const previousWeekOrders: Order[] = [];
    const currentWeekVisits: Visit[] = [];
    const previosWeekVisits: Visit[] = [];

    orders.forEach((order) => {
      const orderWeekNumber = getWeekNumber(new Date(order.creationDate));

      if (orderWeekNumber === currentWeekNumber) {
        currentWeekOrders.push(order);
      } else if (orderWeekNumber === previousWeekNumber) {
        previousWeekOrders.push(order);
      }
    });

    visits.forEach((visit) => {
      const visitWeekNumber = getWeekNumber(new Date(visit.date));

      if (visitWeekNumber === currentWeekNumber) {
        currentWeekVisits.push(visit);
      } else if (visitWeekNumber === previousWeekNumber) {
        previosWeekVisits.push(visit);
      }
    });

    return {
      currentWeekOrders,
      previousWeekOrders,
      currentWeekVisits,
      previosWeekVisits,
    };
  }, [orders, visits, currentWeekNumber, previousWeekNumber]);

  const totalSalesPreviousWeek = useMemo(() => {
    return previousWeekOrders.reduce(
      (acc, order) => acc + order.totalPayment,
      0
    );
  }, [previousWeekOrders]);

  const totalSalesCurrentWeek = useMemo(() => {
    return currentWeekOrders.reduce(
      (acc, order) => acc + order.totalPayment,
      0
    );
  }, [currentWeekOrders]);

  const totalOrdersCurrentWeek = useMemo(
    () => currentWeekOrders.length,
    [currentWeekOrders]
  );

  const totalOrdersPreviousWeek = useMemo(
    () => previousWeekOrders.length,
    [previousWeekOrders]
  );

  const totalVisitsCurrentWeek = useMemo(
    () => currentWeekVisits.length,
    [currentWeekVisits]
  );

  const totalVisitsPreviousWeek = useMemo(
    () => previosWeekVisits.length,
    [previosWeekVisits]
  );

  const salesChange =
    totalSalesPreviousWeek !== 0
      ? ((totalSalesCurrentWeek - totalSalesPreviousWeek) /
          totalSalesPreviousWeek) *
        100
      : totalSalesPreviousWeek > 0
      ? 100
      : 0;

  const ordersChange =
    totalOrdersPreviousWeek !== 0
      ? ((totalOrdersCurrentWeek - totalOrdersPreviousWeek) /
          totalOrdersPreviousWeek) *
        100
      : totalOrdersCurrentWeek > 0
      ? 100
      : 0;

  const visitsChange =
    totalVisitsPreviousWeek !== 0
      ? ((totalVisitsCurrentWeek - totalVisitsPreviousWeek) /
          totalVisitsPreviousWeek) *
        100
      : totalVisitsCurrentWeek > 0
      ? 100
      : 0;

  return {
    totalSales,
    totalOrdersCurrentWeek,
    totalOrdersPreviousWeek,
    totalSalesCurrentWeek,
    totalSalesPreviousWeek,
    totalVisitsCurrentWeek,
    totalVisitsPreviousWeek,
    salesChange,
    ordersChange,
    visitsChange,
  };
}
