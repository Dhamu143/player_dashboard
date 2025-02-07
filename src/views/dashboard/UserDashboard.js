import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CWidgetStatsA } from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import ReactApexChart from 'react-apexcharts'

const UserDashboard = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: '',
        data: [
          4000, 6000, 2000, 5000, 3000, 1000, 7000, 2000, 3000, 1500, 16000, 12000, 8000, 10000,
          9000,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '10%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '2024-09-17',
          '2024-09-18',
          '2024-09-19',
          '2024-09-20',
          '2024-09-21',
          '2024-10-01',
          '2024-10-10',
          '2024-10-15',
          '2024-10-20',
          '2024-10-25',
          '2024-11-01',
          '2024-11-05',
          '2024-11-10',
          '2024-11-15',
          '2024-11-20',
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' Total alerts'
          },
        },
      },
    },
  })
  const [withdrawalPeriods, setWithdrawalPeriods] = React.useState({
    series: [
      {
        name: '',
        data: [
          15000, 20000, 9000, 4000, 3000, 1000, 8000, 2000, 3000, 1500, 12000, 8000, 2500, 6000,
          1000,
        ],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '10%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '2024-09-17',
          '2024-09-18',
          '2024-09-19',
          '2024-09-20',
          '2024-09-21',
          '2024-10-01',
          '2024-10-10',
          '2024-10-15',
          '2024-10-20',
          '2024-10-25',
          '2024-11-01',
          '2024-11-05',
          '2024-11-10',
          '2024-11-15',
          '2024-11-20',
        ],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' Total alerts'
          },
        },
      },
    },
  })
  const widgetsData = [
    {
      color: 'primary',
      title: 'Successful Deposits',
      value: '34,111.00',
    },
    {
      color: 'info',
      title: 'Successful Withdrawals',
      value: '30,600.00',
    },
    {
      color: 'warning',
      title: 'Number of Deposit Days',
      value: '66',
    },
    {
      color: 'danger',
      title: 'Number of Bets',
      value: '37720',
    },
  ]
  return (
    <>
      <CRow>
        {widgetsData.map((widget, index) => (
          <CCol sm={6} xl={3} key={index}>
            <CWidgetStatsA
              color={widget.color}
              title={widget.title}
              value={widget.value}
              className="pb-4 mb-4"
            />
          </CCol>
        ))}
      </CRow>
      <CRow className="g-4">
        <CCol xs={12} sm={6} className="mb-4">
          <CCard className="d-flex flex-column h-100">
            <CCardHeader>AML Risk Score</CCardHeader>
            <CCardBody className="flex-grow-1 d-flex">
              <CChartLine
                data={{
                  labels: ['1M', '3M', '6M', '9M', '12M'],
                  datasets: [
                    {
                      label: 'Low Risk',
                      borderColor: 'green',
                      data: [50, 60, 70, 80, 90],
                    },
                    {
                      label: 'Medium Risk',
                      borderColor: 'orange',
                      data: [40, 50, 65, 75, 85],
                    },
                    {
                      label: 'High Risk',
                      borderColor: 'red',
                      data: [20, 30, 50, 60, 70],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                style={{ width: '100%' }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} sm={6} className="mb-4">
          <CCard className="d-flex flex-column h-100">
            <CCardHeader>SG Risk Score</CCardHeader>
            <CCardBody className="flex-grow-1 d-flex">
              <CChartLine
                data={{
                  labels: ['1M', '3M', '6M', '9M', '12M'],
                  datasets: [
                    {
                      label: 'Low Risk',
                      borderColor: 'green',
                      data: [25, 35, 45, 55, 65],
                    },
                    {
                      label: 'Medium Risk',
                      borderColor: 'orange',
                      data: [20, 29, 35, 49, 52],
                    },
                    {
                      label: 'High Risk',
                      borderColor: 'red',
                      data: [5, 10, 15, 20, 20],
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                style={{ width: '100%' }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="g-4">
        <CCol xs={12} md={6} lg={6}>
          <CCard>
            <CCardHeader>Deposits in periods</CCardHeader>
            <CCardBody>
              {/* <div style={{ width: "100%", height: "400px" }}> */}
              <ReactApexChart options={state.options} series={state.series} type="bar" />
              {/* </div> */}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} lg={6}>
          <CCard>
            <CCardHeader>Withdrawal in periods</CCardHeader>
            <CCardBody>
              {/* <div style={{ width: "100%", height: "400px" }}> */}
              <ReactApexChart
                options={withdrawalPeriods.options}
                series={withdrawalPeriods.series}
                type="bar"
              />
              {/* </div> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UserDashboard
