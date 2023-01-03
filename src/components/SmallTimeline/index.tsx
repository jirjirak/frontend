// ** Third Party Imports
import { ApexOptions } from 'apexcharts'
import { FC } from 'react'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface Props {}

const SmallTimeline: FC<Props> = () => {
  // ** Hook

  const series = [
    // George Washington
    {
      name: 'George Washington',
      data: [
        {
          x: 'President',
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()]
        }
      ]
    },
    {
      name: 'John Adams',
      data: [
        {
          x: 'President',
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()]
        }
      ]
    },
    {
      name: 'Thomas Jefferson',
      data: [
        {
          x: 'President',
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()]
        }
      ]
    }
  ]

  const options: ApexOptions = {
    chart: {
      animations: {
        enabled: false
      },
      selection: {
        enabled: false
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    grid: {
      show: false,
      yaxis: {
        lines: {
          show: false
        }
      },
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        show: false
      }
    },
    xaxis: {
      type: 'datetime',
      floating: true,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      min: new Date(1789, 3, 30).getTime(),
      labels: {
        show: false
      }
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
        rangeBarGroupRows: true
      }
    },
    fill: {
      type: 'solid',
      colors: ['#00E396', '#FF4560', '#775DD0']
    },
    legend: {
      show: false
    }
  }

  return (
    <>
      <ReactApexcharts type='rangeBar' height={45} width='100%' options={options} series={series} />
    </>
  )
}

export default SmallTimeline
