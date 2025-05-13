import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { userActivityData, userConversionData } from '../data';
import { Fragment, useState } from 'react';

const UserConversions = () => {
  const [chartType, setChartType] = useState('monthly');

  const activityChartOptions = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: [0, 3]
    },
    plotOptions: {
      bar: {
        columnWidth: '40%'
      }
    },
    colors: ['#556ee6', '#34c38f'],
    dataLabels: {
      enabled: false
    },
    labels: userActivityData.categories,
    xaxis: {
      type: 'category',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: false
    },
    grid: {
      borderColor: '#f1f1f1',
      padding: {
        bottom: 10
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " users";
          }
          return y;
        }
      }
    }
  };

  // User Retention Chart - Radial
  const retentionChartOptions = {
    chart: {
      height: 150,
      type: 'radialBar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    colors: ['#556ee6'],
    labels: ['User Retention']
  };

  return (
    <Card>
      <div className="d-flex card-header justify-content-between align-items-center border-bottom border-dashed">
        <h4 className="card-title mb-0">User Activity & Retention</h4>
        <Dropdown>
          <DropdownToggle as={'a'} role="button" className="arrow-none btn btn-sm btn-outline-light">
            <span className="text-muted">{chartType === 'monthly' ? 'Monthly' : 'Weekly'}</span> <IconifyIcon icon="bx:chevron-down" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem href="#" onClick={() => setChartType('weekly')}>Weekly</DropdownItem>
            <DropdownItem href="#" onClick={() => setChartType('monthly')}>Monthly</DropdownItem>
            <DropdownItem href="#" onClick={() => setChartType('yearly')}>Yearly</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="card-body pt-0">
        <Row>
          <Col lg={8}>
            <div className="p-3">
              <h5 className="mb-3">User Activity Trends</h5>
              <Chart 
                options={activityChartOptions} 
                series={userActivityData.series} 
                type="line" 
                height={320} 
                className="apex-charts" 
              />
              <div className="mt-3">
                <Row className="text-center">
                  <Col xs={4}>
                    <div className="mt-2">
                      <p className="text-muted mb-0">This Month</p>
                      <h5 className="fw-normal">834</h5>
                      <span className="text-success fs-13 icons-center">
                        <IconifyIcon icon="bxs:up-arrow" className="fs-12" />
                        <span>8.2%</span>
                      </span>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="mt-2">
                      <p className="text-muted mb-0">Last Month</p>
                      <h5 className="fw-normal">758</h5>
                      <span className="text-danger fs-13 icons-center">
                        <IconifyIcon icon="bxs:down-arrow" className="fs-12" />
                        <span>1.7%</span>
                      </span>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="mt-2">
                      <p className="text-muted mb-0">Avg. Growth</p>
                      <h5 className="fw-normal">13.6%</h5>
                      <span className="text-success fs-13 icons-center">
                        <IconifyIcon icon="bxs:up-arrow" className="fs-12" />
                        <span>3.1%</span>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="border-start p-3 h-100 d-flex flex-column">
              <h5 className="mb-4">User Analytics</h5>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-sm flex-centered rounded-circle bg-soft-primary me-3">
                    <IconifyIcon icon="solar:user-check-bold-duotone" className="fs-24 text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-0">User Retention</h5>
                    <p className="text-muted mb-0">Current {chartType}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Chart 
                    options={retentionChartOptions} 
                    series={userConversionData.series} 
                    type="radialBar" 
                    height={150} 
                  />
                </div>
                <div className="text-center mt-3">
                  <h6>68.5% Retention Rate</h6>
                  <p className="text-muted fs-13 mb-0">
                    {chartType === 'monthly' ? '5.2% higher than last month' : '3.7% higher than last week'}
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <h6 className="mb-0">New User Conversion</h6>
                    <p className="text-muted fs-12">From signup to active</p>
                  </div>
                  <h5 className="mb-0">42.8%</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h6 className="mb-0">Investor-Startup Matches</h6>
                    <p className="text-muted fs-12">Success rate</p>
                  </div>
                  <h5 className="mb-0">27.5%</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default UserConversions;