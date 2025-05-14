// pages/users/[id].js
import { useState, useEffect } from 'react';
import { useNavigate,useParams  } from 'react-router-dom';
import { Card, Row, Col, Table, Badge, Button } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageMetaData from '@/components/PageTitle';
import { usersList } from '../data';

const UserDetail = () => {
const navigate = useNavigate();
 const { userId } = useParams(); 
   const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    if (userId) {
      // Find user from mock data
      const foundUser = usersList.find(u => u.id === userId);
      if (foundUser) {
        setUser(foundUser);
      }
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <>
        <Card>
          <Card.Body className="text-center p-5">
            <IconifyIcon icon="solar:user-broken" className="fs-48 text-danger mb-3" />
            <h3>User Not Found</h3>
            <p className="text-muted">The user you're looking for doesn't exist or has been removed.</p>
            <Button 
              variant="primary" 
              className="mt-3"
              onClick={() => navigate('/users/all')}
            >
              Back to All Users
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }

  return (
    <>
      <PageMetaData title={`User Details - ${user.name}`} />
      
      <Row>
        <Col lg={4}>
          <Card>
            <Card.Body className="text-center p-4">
              <div className="avatar-xl mx-auto mb-3 bg-light rounded-circle flex-center">
                <span className="fw-bold text-dark fs-24">{user.name.charAt(0)}</span>
              </div>
              <h4>{user.name}</h4>
              <p className="text-muted mb-1">{user.email}</p>
              <Badge bg={user.variant} className="mb-3">
                {user.status}
              </Badge>
              
              <div className="d-flex justify-content-center gap-2 mt-4">
                <Button 
                  variant={user.status === 'Active' ? 'soft-danger' : 'soft-success'}
                  size="sm"
                >
                  {user.status === 'Active' ? 'Block User' : 'Unblock User'}
                </Button>
                <Button variant="soft-primary" size="sm">
                  Edit Profile
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">User Information</h5>
            </Card.Header>
            <Card.Body>
              <Table className="table-borderless mb-0">
                <tbody>
                  <tr>
                    <th width="25%" className="ps-0">User ID</th>
                    <td className="text-muted">{user.id}</td>
                  </tr>
                  <tr>
                    <th className="ps-0">Full Name</th>
                    <td className="text-muted">{user.name}</td>
                  </tr>
                  <tr>
                    <th className="ps-0">Email</th>
                    <td className="text-muted">{user.email}</td>
                  </tr>
                  <tr>
                    <th className="ps-0">Role</th>
                    <td>
                      <Badge bg="light" text="dark">
                        {user.role}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0">Status</th>
                    <td>
                      <Badge bg={user.variant}>
                        {user.status}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th className="ps-0">Joined Date</th>
                    <td className="text-muted">{user.joinDate}</td>
                  </tr>
                  <tr>
                    <th className="ps-0">Last Login</th>
                    <td className="text-muted">{user.lastLogin}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          
          <Card className="mt-4">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Recent Activity</h5>
              <Button variant="soft-primary" size="sm">View All</Button>
            </Card.Header>
            <Card.Body>
              <div className="timeline-alt pb-0">
                <div className="timeline-item">
                  <i className="timeline-icon bg-info-subtle text-info">
                    <IconifyIcon icon="solar:login-bold" className="fs-16" />
                  </i>
                  <div className="timeline-item-info">
                    <h5 className="mt-0 mb-1">Login</h5>
                    <p className="text-muted fs-14">
                      Logged in from <span className="fw-semibold">192.168.1.10</span>
                    </p>
                    <p className="text-muted mb-0 fs-12">{user.lastLogin}</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <i className="timeline-icon bg-primary-subtle text-primary">
                    <IconifyIcon icon="solar:pen-bold" className="fs-16" />
                  </i>
                  <div className="timeline-item-info">
                    <h5 className="mt-0 mb-1">Profile Updated</h5>
                    <p className="text-muted fs-14">Updated profile information</p>
                    <p className="text-muted mb-0 fs-12">12 days ago</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <i className="timeline-icon bg-success-subtle text-success">
                    <IconifyIcon icon="solar:user-plus-bold" className="fs-16" />
                  </i>
                  <div className="timeline-item-info">
                    <h5 className="mt-0 mb-1">Account Created</h5>
                    <p className="text-muted fs-14">New account registered</p>
                    <p className="text-muted mb-0 fs-12">{user.joinDate}</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserDetail;