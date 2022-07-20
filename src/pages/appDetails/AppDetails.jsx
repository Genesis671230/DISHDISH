import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Area from '../Charts/Area';
import Financial from '../Charts/Financial';
import Line from '../Charts/Line';
import Pie from '../Charts/Pie';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
  Category,
} from '@syncfusion/ej2-react-charts';
// import {
//   lineCustomSeries,
//   LinePrimaryXAxis,
//   LinePrimaryYAxis,
// } from '../../data/dummy';

import { checksContext } from '../../context/ContextProvider';

const AppDetails = () => {
  const { state } = useLocation();

  const lineChartData = [
    [
      { x: new Date(2015, 0, 1), y: 21 },
      { x: new Date(2016, 0, 1), y: 24 },
      { x: new Date(2017, 0, 1), y: 36 },
      { x: new Date(2018, 0, 1), y: 38 },
      { x: new Date(2019, 0, 1), y: 54 },
      { x: new Date(2020, 0, 1), y: 57 },
      { x: new Date(2021, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2015, 0, 1), y: 28 },
      { x: new Date(2016, 0, 1), y: 44 },
      { x: new Date(2017, 0, 1), y: 48 },
      { x: new Date(2018, 0, 1), y: 50 },
      { x: new Date(2019, 0, 1), y: 66 },
      { x: new Date(2020, 0, 1), y: 78 },
      { x: new Date(2021, 0, 1), y: 84 },
    ],

    [
      { x: new Date(2015, 0, 1), y: 10 },
      { x: new Date(2016, 0, 1), y: 20 },
      { x: new Date(2017, 0, 1), y: 30 },
      { x: new Date(2018, 0, 1), y: 39 },
      { x: new Date(2019, 0, 1), y: 50 },
      { x: new Date(2020, 0, 1), y: 70 },
      { x: new Date(2021, 0, 1), y: 100 },
    ],
  ];

  const timeTable = [
    { month: 'Jan', MRR: '60' },
    { month: 'Feb', MRR: '30' },
    { month: 'Mar', MRR: '50' },
    { month: 'Apr', MRR: '80' },
    { month: 'May', MRR: '40' },
    { month: 'Jun', MRR: '30' },
    { month: 'Jul', MRR: '40' },
    { month: 'Aug', MRR: '70' },
    { month: 'Sep', MRR: '90' },
    { month: 'Oct', MRR: '120' },
    { month: 'Nov', MRR: '80' },
    { month: 'Dec', MRR: '70' },
  ];

  const lineCustomSeries = [
    {
      dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line',
    },
  ];

  const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };

  const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  const { currentMode } = checksContext();

  const ordersData = [
    {
      id: 10248,
      appName: 'SHOPIRED',

      BillingIssues: 32.38,
      Refundevents: 'Fresh Tomato',
      RefundMoney: 'USA',
      MRR: '456',
      ARR: '#FB9678',
      ARRPPU: '12312',
      ActiveSubscribers: '12312',
      NewSubscribers: '12312',
      Subcriptionrenewalscancelled: '12312',
      expiredsubcriptions: '12312',
      activeTrials: '12312',
      newTrials: '12312',
      trialrenewalscancelled: '12312',
      expiredtrials: '12312',
    },

    {
      id: 10248,
      appName: 'SHOPIRED',

      BillingIssues: 32.38,
      Refundevents: 'Fresh Tomato',
      RefundMoney: 'USA',
      MRR: '456',
      ARR: '#FB9678',
      ARRPPU: '12312',
      ActiveSubscribers: '12312',
      NewSubscribers: '12312',
      Subcriptionrenewalscancelled: '12312',
      expiredsubcriptions: '12312',
      activeTrials: '12312',
      newTrials: '12312',
      trialrenewalscancelled: '12312',
      expiredtrials: '12312',
    },

    {
      id: 10248,
      appName: 'SHOPIRED',

      BillingIssues: 32.38,
      Refundevents: 'Fresh Tomato',
      RefundMoney: 'USA',
      MRR: '456',
      ARR: '#FB9678',
      ARRPPU: '12312',
      ActiveSubscribers: '12312',
      NewSubscribers: '12312',
      Subcriptionrenewalscancelled: '12312',
      expiredsubcriptions: '12312',
      activeTrials: '12312',
      newTrials: '12312',
      trialrenewalscancelled: '12312',
      expiredtrials: '12312',
    },
    {
      id: 10248,
      appName: 'SHOPIRED',

      BillingIssues: 32.38,
      Refundevents: 'Fresh Tomato',
      RefundMoney: 'USA',
      MRR: '456',
      ARR: '#FB9678',
      ARRPPU: '12312',
      ActiveSubscribers: '12312',
      NewSubscribers: '12312',
      Subcriptionrenewalscancelled: '12312',
      expiredsubcriptions: '12312',
      activeTrials: '12312',
      newTrials: '12312',
      trialrenewalscancelled: '12312',
      expiredtrials: '12312',
    },
    {
      id: 10248,
      appName: 'SHOPIRED',

      BillingIssues: 32.38,
      Refundevents: 'Fresh Tomato',
      RefundMoney: 'USA',
      MRR: '456',
      ARR: '#FB9678',
      ARRPPU: '12312',
      ActiveSubscribers: '12312',
      NewSubscribers: '12312',
      Subcriptionrenewalscancelled: '12312',
      expiredsubcriptions: '12312',
      activeTrials: '12312',
      newTrials: '12312',
      trialrenewalscancelled: '12312',
      expiredtrials: '12312',
    },
  ];
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      {/* <div className=" ">
        <ChartComponent
          id="line-chart"
          height="320px"
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div> */}

      <div className="p-10">
        <ChartComponent
          width="90%"
          title="Monthly Performance"
          primaryXAxis={{ valueType: 'Category', title: 'month' }}
          primaryYAxis={{ title: 'Ranking' }}
        >
          <Inject services={[LineSeries, Category, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Line"
              dataSource={timeTable}
              xName="month"
              yName="MRR"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>{' '}
      </div>

      {/* <Line /> */}
      <Area />
      <Pie />
      <Financial />
    </div>
  );
};

export default AppDetails;
