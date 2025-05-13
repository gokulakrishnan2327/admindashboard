import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { toAlphaNumber } from '@/utils/change-casing';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap';
import { Fragment } from 'react';
import { userRoleDistribution } from '../data';

const UserDistribution = () => {
  const roleIcons = {
    'Investors': 'solar:wallet-money-bold-duotone',
    'Startups': 'solar:rocket-bold-duotone',
    'Mentors': 'solar:user-check-bold-duotone',
    'Advisors': 'solar:shield-user-bold-duotone'
  };

  return (
    <Card>
      <div className="d-flex card-header justify-content-between align-items-center border-bottom border-dashed">
        <h4 className="card-title">User Distribution</h4>
        <Dropdown>
          <DropdownToggle as={'a'} role="button" className="arrow-none btn btn-sm btn-outline-light icons-center gap-2">
            Export Data <IconifyIcon icon="bx:chevron-down" className="fs-16" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem href="">Excel</DropdownItem>
            <DropdownItem href="">CSV</DropdownItem>
            <DropdownItem href="">PDF</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <CardBody className="p-0">
        <SimplebarReactClient className="px-3" style={{
          maxHeight: 350,
          height: 'auto',
          overflow: 'hidden, scroll'
        }}>
          <div className="p-3">
            {userRoleDistribution.map((role, idx) => (
              <Fragment key={idx}>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">
                    <IconifyIcon icon={roleIcons[role.name] || 'solar:user-bold-duotone'} className="fs-16 align-middle me-1" /> 
                    <span className="align-middle">{role.name}</span>
                  </p>
                </div>
                <Row className={`align-items-center ${userRoleDistribution.length - 1 === idx ? '' : 'mb-3'}`}>
                  <Col>
                    <ProgressBar variant={role.variant} now={parseFloat(role.percentage)} 
                      className="progress progress-soft progress-sm" />
                  </Col>
                  <Col xs="auto">
                    <p className="mb-0 fs-13 fw-semibold">{toAlphaNumber(role.amount)}</p>
                  </Col>
                </Row>
              </Fragment>
            ))}
            
            <div className="mt-4">
              <h5 className="fs-16">Role Distribution Overview</h5>
              <p className="text-muted mb-3">
                The platform shows a healthy distribution of user roles, with startups making up the 
                largest segment at 41.8%, followed by investors at 32.5%.
              </p>
              
              <div className="d-flex justify-content-between mb-2">
                <div>
                  <h6 className="mb-0">Total Active Users</h6>
                  <p className="text-muted fs-12">Across all roles</p>
                </div>
                <h5 className="mb-0">9,450</h5>
              </div>
              
              <div className="d-flex justify-content-between">
                <div>
                  <h6 className="mb-0">Blocked Users</h6>
                  <p className="text-muted fs-12">All roles</p>
                </div>
                <h5 className="mb-0">550</h5>
              </div>
            </div>
          </div>
        </SimplebarReactClient>
        <div className="text-center p-3">
          <button type="button" className="btn btn-light shadow-none w-100">
            View Detailed Analytics
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserDistribution;