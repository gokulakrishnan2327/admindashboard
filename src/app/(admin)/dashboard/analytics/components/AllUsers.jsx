import { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, Table, Badge, ButtonGroup, Form, Pagination, Row, Col } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageMetaData from '@/components/PageTitle';
import { usersList } from '../data';

const USERS_PER_PAGE = 10;

const AllUsers = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(usersList);
  
  // Apply filters to the user list
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(1); // Reset to first page when changing filters
    
    if (selectedFilter === 'All') {
      setFilteredUsers(usersList);
    } else if (selectedFilter === 'Blocked') {
      setFilteredUsers(usersList.filter(user => user.status === 'Blocked'));
    } else if (selectedFilter === 'Active') {
      setFilteredUsers(usersList.filter(user => user.status === 'Active'));
    } else {
      // Filter by role
      setFilteredUsers(usersList.filter(user => user.role === selectedFilter));
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const indexOfLastUser = currentPage * USERS_PER_PAGE;
  const indexOfFirstUser = indexOfLastUser - USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle status toggle
  const handleStatusToggle = (userId) => {
    const updatedUsers = usersList.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'Active' ? 'Blocked' : 'Active';
        const newVariant = newStatus === 'Active' ? 'success' : 'danger';
        return { ...user, status: newStatus, variant: newVariant };
      }
      return user;
    });
    
    // Update filtered list based on current filter
    if (filter === 'All') {
      setFilteredUsers(updatedUsers);
    } else if (filter === 'Blocked') {
      setFilteredUsers(updatedUsers.filter(user => user.status === 'Blocked'));
    } else if (filter === 'Active') {
      setFilteredUsers(updatedUsers.filter(user => user.status === 'Active'));
    } else {
      setFilteredUsers(updatedUsers.filter(user => user.role === filter));
    }
  };

  return (
    <>
      <PageMetaData title="All Users" />
      
      <Card>
        <CardHeader className="d-flex align-items-center justify-content-between gap-2">
          <CardTitle as="h4" className="flex-grow-1">
            All Users
          </CardTitle>
          <div className="d-flex align-items-center">
            <Form.Select 
              size="sm" 
              className="me-2" 
              style={{ width: 'auto' }}
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All Users</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
              <option value="Investor">Investors</option>
              <option value="Startup">Startups</option>
              <option value="Mentor">Mentors</option>
            </Form.Select>
            <Button variant="soft-primary" size="sm">
              Add User
            </Button>
          </div>
        </CardHeader>
        
        <div className="table-responsive">
          <Table className="table-hover table-nowrap table-centered m-0">
            <thead className="bg-light bg-opacity-50">
              <tr>
                <th className="text-muted py-1">User</th>
                <th className="text-muted py-1">Role</th>
                <th className="text-muted py-1">Status</th>
                <th className="text-muted py-1">Last Login</th>
                <th className="text-muted py-1">Join Date</th>
                <th className="text-muted py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-xs me-2 flex-center bg-light rounded-circle">
                        <span className="fw-semibold text-dark">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <span className="fw-medium d-block">{user.name}</span>
                        <small className="text-muted">{user.email}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="fw-medium">{user.role}</span>
                  </td>
                  <td>
                    <Badge bg={user.variant} className="badge-soft-${user.variant}">
                      {user.status}
                    </Badge>
                  </td>
                  <td>
                    <span className="text-muted">{user.lastLogin}</span>
                  </td>
                  <td>
                    <span className="text-muted">{user.joinDate}</span>
                  </td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button variant="soft-secondary">
                        <IconifyIcon icon="solar:eye-bold" className="fs-16" />
                      </Button>
                      <Button 
                        variant={user.status === 'Active' ? 'soft-danger' : 'soft-success'}
                        onClick={() => handleStatusToggle(user.id)}
                      >
                        {user.status === 'Active' ? (
                          <IconifyIcon icon="solar:lock-bold" className="fs-16" />
                        ) : (
                          <IconifyIcon icon="solar:unlock-bold" className="fs-16" />
                        )}
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        
        {/* Pagination */}
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center p-3">
              <div>
                <span className="text-muted">
                  Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
                </span>
              </div>
              <Pagination size="sm">
                <Pagination.First 
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                
                {/* Show ellipsis for larger page counts */}
                {totalPages > 5 && currentPage > 3 && (
                  <>
                    <Pagination.Item onClick={() => handlePageChange(1)}>1</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                  </>
                )}
                
                {/* Generate page numbers */}
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  // Show current page and 1 page before and after
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <Pagination.Item 
                        key={i} 
                        active={pageNum === currentPage}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </Pagination.Item>
                    );
                  }
                  return null;
                })}
                
                {/* Show ellipsis for larger page counts */}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </Pagination.Item>
                  </>
                )}
                
                <Pagination.Next 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last 
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default AllUsers;