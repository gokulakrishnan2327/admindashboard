import { currency } from '@/context/constants';

export const countries = [
  {
    icon: 'circle-flags:us',
    name: 'United States',
    value: 82.5,
    amount: 659,
    variant: 'secondary'
  },
  {
    icon: 'circle-flags:ru',
    name: 'Russia',
    value: 70.5,
    amount: 485,
    variant: 'info'
  },
  {
    icon: 'circle-flags:cn',
    name: 'China',
    value: 65.8,
    amount: 355,
    variant: 'warning'
  },
  {
    icon: 'circle-flags:ca',
    name: 'Canada',
    value: 55.8,
    amount: 204,
    variant: 'success'
  }
];

export const userRoleDistribution = [
  {
    name: 'Investors',
    percentage: '32.5%',
    amount: 3250,
    variant: 'secondary'
  },
  {
    name: 'Startups',
    percentage: '41.8%',
    amount: 4180,
    variant: 'info'
  },
  {
    name: 'Mentors',
    percentage: '15.2%',
    amount: 1520,
    variant: 'warning'
  },
  {
    name: 'Advisors',
    percentage: '10.5%',
    amount: 1050,
    variant: 'success'
  }
];

export const userStatData = [
  {
    title: 'Total Users',
    icon: 'solar:users-group-two-rounded-bold-duotone',
    stat: '10,000',
    change: '12.3%',
    variant: 'success'
  },
  {
    title: 'Investors',
    icon: 'solar:wallet-money-bold-duotone',
    stat: '3,250',
    change: '8.1%',
    variant: 'success'
  },
  {
    title: 'Startups',
    icon: 'solar:rocket-bold-duotone',
    stat: '4,180',
    change: '15.3%',
    variant: 'success'
  },
  {
    title: 'Matches Made',
    icon: 'solar:check-circle-bold-duotone',
    stat: '1,245',
    change: '7.6%',
    variant: 'success'
  }
];

export const usersList = [
  {
    id: 'USR001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Investor',
    joinDate: '2023-05-10',
    status: 'Active',
    lastLogin: '2023-10-15',
    variant: 'success'
  },
  {
    id: 'USR002',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'Startup',
    joinDate: '2023-06-22',
    status: 'Active',
    lastLogin: '2023-10-14',
    variant: 'success'
  },
  {
    id: 'USR003',
    name: 'Michael Chen',
    email: 'mchen@example.com',
    role: 'Investor',
    joinDate: '2023-04-15',
    status: 'Blocked',
    lastLogin: '2023-09-30',
    variant: 'danger'
  },
  {
    id: 'USR004',
    name: 'Emma Wilson',
    email: 'emma.w@example.com', 
    role: 'Startup',
    joinDate: '2023-07-05',
    status: 'Active',
    lastLogin: '2023-10-16',
    variant: 'success'
  },
  {
    id: 'USR005',
    name: 'David Park',
    email: 'dpark@example.com',
    role: 'Mentor',
    joinDate: '2023-08-12',
    status: 'Active',
    lastLogin: '2023-10-10',
    variant: 'success'
  }
];

export const userActivityData = {
  series: [{
    name: 'New Users',
    type: 'bar',
    data: [34, 45, 56, 75, 65, 80, 50, 55, 45, 60, 75, 85]
  }, {
    name: 'Active Users',
    type: 'area',
    data: [80, 95, 87, 118, 110, 143, 95, 102, 90, 115, 125, 150]
  }],
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const userConversionData = {
  series: [68.5],
  labels: ['User Retention']
};

// Preserve original data for backward compatibility
export const browsers = [
  { name: 'Chrome', percentage: 62.5, amount: 5.06 },
  { name: 'Firefox', percentage: 12.3, amount: 1.5 },
  { name: 'Safari', percentage: 9.86, amount: 1.03 },
  { name: 'Brave', percentage: 3.15, amount: 0.3 },
  { name: 'Opera', percentage: 3.01, amount: 1.58 },
  { name: 'Falkon', percentage: 2.8, amount: 0.01 },
  { name: 'Other', percentage: 6.38, amount: 3.6 }
];

export const pagesList = [
  { path: '/dashboard/analytics', views: 4265, avgTime: '09m:45s', exitRate: 20.4, variant: 'danger' },
  { path: '/apps/chat', views: 2584, avgTime: '05m:02s', exitRate: 12.25, variant: 'warning' },
  { path: '/auth/sign-in', views: 3369, avgTime: '04m:25s', exitRate: 5.2, variant: 'success' },
  { path: '/apps/email', views: 985, avgTime: '02m:03s', exitRate: 64.2, variant: 'danger' },
  { path: '/apps/social', views: 653, avgTime: '15m:56s', exitRate: 2.4, variant: 'success' }
];

export const statData = [
  { title: 'Page View', icon: 'solar:leaf-bold-duotone', stat: '13, 647', change: '2.3%', variant: 'success' },
  { title: 'Clicks', icon: 'solar:cpu-bolt-line-duotone', stat: '9, 526', change: '8.1%', variant: 'success' },
  { title: 'Conversions', icon: 'solar:layers-bold-duotone', stat: '976', change: '0.3%', variant: 'danger' },
  { title: 'New Users', icon: 'solar:users-group-two-rounded-bold-duotone', stat: `${currency}123.6k`, change: '10.6%', variant: 'danger' }
];

export const onlineUsers = [
  { name: 'Chrome', percentage: '62.5%', amount: 5000 },
  { name: 'Firefox', percentage: '9.86', amount: 1030 },
  { name: 'Safari', percentage: '12.3%', amount: 1500 },
  { name: 'Opera', percentage: '2.8%', amount: 9900 },
  { name: 'Web', percentage: '1.05%', amount: 2500 },
  { name: 'Other', percentage: '6.38%', amount: 3600 }
];

export const topPages = [
  { path: 'rasket/dashboard', views: 4265, avgTime: '09m:45s', exitRate: 20.4, variant: 'danger' },
  { path: 'rasket/chat', views: 2584, avgTime: '05m:02s', exitRate: 12.25, variant: 'warning' },
  { path: 'rasket/auth-login', views: 3369, avgTime: '04m:25s', exitRate: 5.2, variant: 'success' },
  { path: 'rasket/email', views: 985, avgTime: '02m:03s', exitRate: 64.2, variant: 'danger' },
  { path: 'rasket/social', views: 653, avgTime: '15m:56s', exitRate: 2.4, variant: 'success' }
];
// import { currency } from '@/context/constants';
// export const countries = [{
//   icon: 'circle-flags:us',
//   name: 'United States',
//   value: 82.5,
//   amount: 659,
//   variant: 'secondary'
// }, {
//   icon: 'circle-flags:ru',
//   name: 'Russia',
//   value: 70.5,
//   amount: 485,
//   variant: 'info'
// }, {
//   icon: 'circle-flags:cn',
//   name: 'China',
//   value: 65.8,
//   amount: 355,
//   variant: 'warning'
// }, {
//   icon: 'circle-flags:ca',
//   name: 'Canada',
//   value: 55.8,
//   amount: 204,
//   variant: 'success'
// }];
// export const browsers = [{
//   name: 'Chrome',
//   percentage: 62.5,
//   amount: 5.06
// }, {
//   name: 'Firefox',
//   percentage: 12.3,
//   amount: 1.5
// }, {
//   name: 'Safari',
//   percentage: 9.86,
//   amount: 1.03
// }, {
//   name: 'Brave',
//   percentage: 3.15,
//   amount: 0.3
// }, {
//   name: 'Opera',
//   percentage: 3.01,
//   amount: 1.58
// }, {
//   name: 'Falkon',
//   percentage: 2.8,
//   amount: 0.01
// }, {
//   name: 'Other',
//   percentage: 6.38,
//   amount: 3.6
// }];
// export const pagesList = [{
//   path: '/dashboard/analytics',
//   views: 4265,
//   avgTime: '09m:45s',
//   exitRate: 20.4,
//   variant: 'danger'
// }, {
//   path: '/apps/chat',
//   views: 2584,
//   avgTime: '05m:02s',
//   exitRate: 12.25,
//   variant: 'warning'
// }, {
//   path: '/auth/sign-in',
//   views: 3369,
//   avgTime: '04m:25s',
//   exitRate: 5.2,
//   variant: 'success'
// }, {
//   path: '/apps/email',
//   views: 985,
//   avgTime: '02m:03s',
//   exitRate: 64.2,
//   variant: 'danger'
// }, {
//   path: '/apps/social',
//   views: 653,
//   avgTime: '15m:56s',
//   exitRate: 2.4,
//   variant: 'success'
// }];
// export const statData = [{
//   title: 'Page View',
//   icon: 'solar:leaf-bold-duotone',
//   stat: '13, 647',
//   change: '2.3%',
//   variant: 'success'
// }, {
//   title: 'Clicks',
//   icon: 'solar:cpu-bolt-line-duotone',
//   stat: '9, 526',
//   change: '8.1%',
//   variant: 'success'
// }, {
//   title: 'Conversions',
//   icon: 'solar:layers-bold-duotone',
//   stat: '976',
//   change: '0.3%',
//   variant: 'danger'
// }, {
//   title: 'New Users',
//   icon: 'solar:users-group-two-rounded-bold-duotone',
//   stat: `${currency}123.6k`,
//   change: '10.6%',
//   variant: 'danger'
// }];
// export const onlineUsers = [{
//   name: 'Chrome',
//   percentage: '62.5%',
//   amount: 5000
// }, {
//   name: 'Firefox',
//   percentage: '9.86',
//   amount: 1030
// }, {
//   name: 'Safari',
//   percentage: '12.3%',
//   amount: 1500
// }, {
//   name: 'Opera',
//   percentage: '2.8%',
//   amount: 9900
// }, {
//   name: 'Web',
//   percentage: '1.05%',
//   amount: 2500
// }, {
//   name: 'Other',
//   percentage: '6.38%',
//   amount: 3600
// }, {
//   name: 'Safari',
//   percentage: '9.86',
//   amount: 1.03
// }, {
//   name: 'Web',
//   percentage: '1.05%',
//   amount: 2500
// }, {
//   name: 'Other',
//   percentage: '6.38%',
//   amount: 3600
// }, {
//   name: 'Safari',
//   percentage: '9.86',
//   amount: 1.03
// }, {
//   name: 'Web',
//   percentage: '1.05%',
//   amount: 2500
// }, {
//   name: 'Other',
//   percentage: '6.38%',
//   amount: 3600
// }, {
//   name: 'Safari',
//   percentage: '9.86',
//   amount: 1.03
// }];
// export const topPages = [{
//   path: 'rasket/dashboard',
//   views: 4265,
//   avgTime: '09m:45s',
//   exitRate: 20.4,
//   variant: 'danger'
// }, {
//   path: 'rasket/chat',
//   views: 2584,
//   avgTime: '05m:02s',
//   exitRate: 12.25,
//   variant: 'warning'
// }, {
//   path: 'rasket/auth-login',
//   views: 3369,
//   avgTime: '04m:25s',
//   exitRate: 5.2,
//   variant: 'success'
// }, {
//   path: 'rasket/email',
//   views: 985,
//   avgTime: '02m:03s',
//   exitRate: 64.2,
//   variant: 'danger'
// }, {
//   path: 'rasket/social',
//   views: 653,
//   avgTime: '15m:56s',
//   exitRate: 2.4,
//   variant: 'success'
// }];