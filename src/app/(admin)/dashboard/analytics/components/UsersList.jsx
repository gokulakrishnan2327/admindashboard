import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, Table, Badge, ButtonGroup, Form } from 'react-bootstrap';
import { usersList } from '../data';

const UsersList = () => {
  const [filter, setFilter] = useState('All');
  const [displayedUsers, setDisplayedUsers] = useState(usersList);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    
    if (selectedFilter === 'All') {
      setDisplayedUsers(usersList);
    } else if (selectedFilter === 'Blocked') {
      setDisplayedUsers(usersList.filter(user => user.status === 'Blocked'));
    } else if (selectedFilter === 'Active') {
      setDisplayedUsers(usersList.filter(user => user.status === 'Active'));
    } else {
      // Filter by role
      setDisplayedUsers(usersList.filter(user => user.role === selectedFilter));
    }
  };

  const handleStatusToggle = (userId) => {
    const updatedUsers = usersList.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'Active' ? 'Blocked' : 'Active';
        const newVariant = newStatus === 'Active' ? 'success' : 'danger';
        return { ...user, status: newStatus, variant: newVariant };
      }
      return user;
    });
    
    // Update both the full list and the filtered list
    setDisplayedUsers(updatedUsers.filter(user => {
      if (filter === 'All') return true;
      if (filter === 'Blocked') return user.status === 'Blocked';
      if (filter === 'Active') return user.status === 'Active';
      return user.role === filter;
    }));
  };

  return (
    <Card className="card-height-100">
      <CardHeader className="d-flex align-items-center justify-content-between gap-2">
        <CardTitle as="h4" className="flex-grow-1">
          Users List
        </CardTitle>
        <div>
          <Form.Select 
            size="sm" 
            className="me-2 d-inline-block" 
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
              <th className="text-muted py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user, idx) => (
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
    </Card>
  );
};

export default UsersList;