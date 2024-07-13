import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    SolarPanels: 2890,
    'Inverters': 2338,
  },
  {
    date: 'Feb 22',
    SolarPanels: 2756,
    'Inverters': 2103,
  },
  {
    date: 'Mar 22',
    SolarPanels: 3322,
    'Inverters': 2194,
  },
  {
    date: 'Apr 22',
    SolarPanels: 3470,
    'Inverters': 2108,
  },
  {
    date: 'May 22',
    SolarPanels: 3475,
    'Inverters': 1812,
  },
  {
    date: 'Jun 22',
    SolarPanels: 3129,
    'Inverters': 1726,
  },
  {
    date: 'Jul 22',
    SolarPanels: 3490,
    'Inverters': 1982,
  },
  {
    date: 'Aug 22',
    SolarPanels: 2903,
    'Inverters': 2012,
  },
  {
    date: 'Sep 22',
    SolarPanels: 2643,
    'Inverters': 2342,
  },
  {
    date: 'Oct 22',
    SolarPanels: 2837,
    'Inverters': 2473,
  },
  {
    date: 'Nov 22',
    SolarPanels: 2954,
    'Inverters': 3848,
  },
  {
    date: 'Dec 22',
    SolarPanels: 3239,
    'Inverters': 3736,
  },
];

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

export const CardEstadistic = () => {
    return (
      <div>
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Estadisticas</h3>
        <AreaChartUsageExample />
      </div>
    );
  };

export function AreaChartUsageExample() {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Empresa</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$64,874</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SolarPanels', 'Inverters']}
        colors={['red', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </>
  );
}