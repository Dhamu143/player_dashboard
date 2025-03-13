import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CWidgetStatsA,
  CProgress,
  CProgressBar,
} from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import ReactApexChart from 'react-apexcharts'

const UserDashboard = () => {
  const [state, setState] = useState({
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
          columnWidth: '20%',
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
            return val + ' Total Deposits '
          },
        },
      },
    },
  })
  const [withdrawalPeriods, setWithdrawalPeriods] = useState({
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
          columnWidth: '20%',
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
            return val + ' Total Withdrawal'
          },
        },
      },
    },
  })

  const [alertHistory, setAlertHistory] = useState([
    { timestamp: '2024-11-20 10:00', message: 'Deposit Limit Exceeded' },
    { timestamp: '2024-11-21 14:30', message: 'Large Withdrawal Detected' },
  ])

  const [playerProfile, setPlayerProfile] = useState({
    name: 'John Doe',
    riskRating: 'Medium',
    riskScore: 65,
    historicalRisk: [
      { date: '2024-10-20', score: 20 },
      { date: '2024-10-25', score: 60 },
      { date: '2024-11-01', score: 50 },
    ],
  })

  const [gameplayPatterns, setGameplayPatterns] = useState({
    series: [
      {
        name: 'Session Duration (minutes)',
        data: [30, 60, 45, 90, 60, 30, 75, 60, 90, 120, 45, 60, 75, 30, 90],
      },
      {
        name: 'Betting Frequency (bets/hour)',
        data: [10, 20, 15, 30, 25, 10, 20, 15, 25, 35, 15, 20, 25, 10, 30],
      },
      {
        name: 'Loss-to-Win Ratio',
        data: [0.8, 0.5, 0.7, 1.2, 1.0, 0.9, 0.6, 0.8, 1.1, 1.5, 0.7, 0.9, 0.6, 0.8, 1.2],
      },
    ],
    options: {
      chart: { type: 'line', height: 350 },
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
      yaxis: [
        {
          title: {
            text: '',
          },
        },
      ],
      tooltip: {
        y: {
          formatter: (val, opts) => {
            const seriesIndex = opts.seriesIndex
            const seriesNames = [
              'Session Duration (minutes)',
              'Betting Frequency (bets/hour)',
              'Loss-to-Win Ratio',
            ]
            return `${val} ${seriesNames[seriesIndex]}`
          },
        },
      },
    },
  })

  const [responsibleGambling, setResponsibleGambling] = useState({
    series: [
      {
        name: 'Deposit Limit',
        data: [
          1000, 9000, 2000, 1000, 4000, 2000, 9000, 2000, 4000, 8000, 2000, 2000, 8000, 3000, 1000,
        ],
      },
      {
        name: 'Loss Limit',
        data: [
          2000, 1000, 5000, 3000, 1000, 9000, 5000, 4000, 1000, 1000, 2000, 3000, 1000, 7000, 5000,
        ],
      },
      {
        name: 'RG Triggers',
        data: [0.1, 0.4, 0.1, 0.9, 0.4, 0.2, 0.5, 0.9, 200.1, 0, 0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: { type: 'line', height: 350 },
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
      yaxis: [
        {
          title: {
            text: '',
          },
        },
      ],
      tooltip: {
        y: {
          formatter: (val, opts) => {
            const seriesIndex = opts.seriesIndex
            const seriesNames = ['Deposit Limit', 'Loss Limit', 'RG Triggers']
            return `${val} ${seriesNames[seriesIndex]}`
          },
        },
      },
    },
  })

  const widgetsData = [
    {
      color: 'primary',
      title: 'Total Deposits',
      value: '34,111.00',
    },
    {
      color: 'info',
      title: 'Total Withdrawals',
      value: '30,600.00',
    },
    {
      color: 'warning',
      title: 'Net Spend',
      value: '12,500.00',
    },
  ]

  const riskColor = (riskRating) => {
    switch (riskRating) {
      case 'Low':
        return 'success'
      case 'Medium':
        return 'warning'
      case 'High':
        return 'danger'
      default:
        return 'secondary'
    }
  }
  return (
    <>
      <CRow>
        {widgetsData.map((widget, index) => (
          <CCol sm={6} xl={4} key={index}>
            <CWidgetStatsA
              color={widget.color}
              title={widget.title}
              value={widget.value}
              className="pb-4 mb-4"
            />
          </CCol>
        ))}
      </CRow>
      <CRow>
        <CCol xs={12} className="mb-4">
          <CCard>
            <CCardHeader>Player Profile</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol md={4}>
                  <p>
                    <strong>Name:</strong> {playerProfile.name}
                  </p>
                  <p>
                    <strong>Risk Rating:</strong>
                    <span className={`text-${riskColor(playerProfile?.riskRating)}`}>
                      {playerProfile?.riskRating}
                    </span>
                  </p>
                  <p>
                    <strong>Risk Score:</strong> {playerProfile?.riskScore}
                  </p>

                  <CProgress
                    className="mb-4 text-dark rounded-4"
                    color={riskColor(playerProfile?.riskRating)}
                    value={playerProfile?.riskScore}
                    max={100}
                    height={25}
                  >
                    <CProgressBar className="text-dark fw-bold fs-6">
                      {`${playerProfile?.riskScore}%`}
                    </CProgressBar>
                  </CProgress>
                </CCol>
                <CCol md={8}>
                  <CCardHeader>Historical Risk Score</CCardHeader>

                  <CChartLine
                    data={{
                      labels: playerProfile.historicalRisk.map((item) => item.date),
                      datasets: [
                        {
                          label: 'Risk Score',
                          borderColor: 'blue',
                          data: playerProfile.historicalRisk.map((item) => item.score),
                        },
                      ],
                    }}
                    options={{ responsive: true, maintainAspectRatio: false }}
                  />
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow className="g-4">
        <CCol xs={12} md={6} lg={6} className="mb-4">
          <CCard className="d-flex flex-column h-100">
            <CCardHeader>AML Risk Score</CCardHeader>
            <CCardBody className="flex-grow-1 d-flex">
              {/* <CChartLine
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
              /> */}
              <CChartLine
                data={{
                  labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                  datasets: [
                    {
                      label: 'Customers score',
                      data: [5, 8, 15, 30, 45, 60, 75, 90, 120, 150, 180],
                      borderColor: 'black',
                      borderWidth: 2,
                      fill: false,
                      pointRadius: 0,
                      pointHoverRadius: 0,
                    },
                    {
                      label: 'High',
                      data: Array(11).fill(140),
                      borderColor: 'red',
                      borderWidth: 2,
                      fill: false,
                      pointRadius: 0,
                      pointHoverRadius: 0,
                    },
                    {
                      label: 'Medium',
                      data: Array(11).fill(80),
                      borderColor: 'yellow',
                      borderWidth: 2,
                      fill: false,
                      pointRadius: 0,
                      pointHoverRadius: 0,
                    },
                    {
                      label: 'Low',
                      data: Array(11).fill(40),
                      borderColor: 'green',
                      borderWidth: 2,
                      fill: false,
                      pointRadius: 0,
                      pointHoverRadius: 0,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        stepSize: 20,
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                  },
                }}
                style={{ width: '100%' }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} lg={6} className="mb-4">
          <CCard className="d-flex flex-column h-100">
            <CCardHeader>SG Risk Score</CCardHeader>
            <CCardBody className="flex-grow-1 d-flex">
              {/* <CChartLine
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
              /> */}
              <CChartLine
                data={{
                  labels: ['Low', 'Medium', 'High'],
                  datasets: [
                    {
                      label: 'Risk Score',
                      data: [87334, 0, 0],
                      borderColor: 'green',
                      borderWidth: 3,
                      fill: false,
                      pointRadius: 6,
                      pointHoverRadius: 8,
                      pointBackgroundColor: 'green',
                    },
                    {
                      label: 'Medium',
                      data: [0, 0, 0],
                      borderColor: 'orange',
                      borderWidth: 3,
                      fill: false,
                      pointRadius: 0,
                    },
                    {
                      label: 'High',
                      data: [0, 0, 0],
                      borderColor: 'red',
                      borderWidth: 3,
                      fill: false,
                      pointRadius: 0,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: true,
                      position: 'top',
                      labels: {
                        usePointStyle: true,
                      },
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function (tooltipItem) {
                          return ` ${tooltipItem.raw}`
                        },
                      },
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        stepSize: 20000,
                      },
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                  },
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
      <CRow>
        <CCol xs={12} md={6} className="mt-4">
          <CCard>
            <CCardHeader>Gameplay Patterns</CCardHeader>
            <CCardBody>
              <ReactApexChart
                options={gameplayPatterns.options}
                series={gameplayPatterns.series}
                type="line"
                height={350}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12} md={6} className="mt-4">
          <CCard>
            <CCardHeader>Responsible Gambling Indicators</CCardHeader>
            <CCardBody>
              <ReactApexChart
                options={responsibleGambling.options}
                series={responsibleGambling.series}
                type="line"
                height={350}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} className="mt-4">
          <CCard>
            <CCardHeader>Alert History</CCardHeader>
            <CCardBody>
              <ul>
                {alertHistory.map((alert, index) => (
                  <li key={index}>
                    {alert.timestamp}: {alert.message}
                  </li>
                ))}
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* <div>
        <h3>AML Risk Score</h3>
        <CChartLine
          data={{
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
              {
                label: 'Risk Score',
                data: [5, 8, 15, 30, 45, 60, 75, 90, 120, 150, 180],
                borderColor: 'black',
                borderWidth: 2,
                pointBackgroundColor: 'black',
                fill: false,
              },
              // High-risk threshold (Red)
              {
                label: 'High',
                data: Array(11).fill(140),
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
              },
              // Medium-risk threshold (Yellow)
              {
                label: 'Medium',
                data: Array(11).fill(80),
                borderColor: 'yellow',
                borderWidth: 2,
                fill: false,
              },
              // Low-risk threshold (Green)
              {
                label: 'Low',
                data: Array(11).fill(40),
                borderColor: 'green',
                borderWidth: 2,
                fill: false,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 20,
                },
              },
            },
          }}
        />
      </div> */}
    </>
  )
}

export default UserDashboard
