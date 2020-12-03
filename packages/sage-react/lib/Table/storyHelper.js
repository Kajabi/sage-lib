export const sample1 = {
  rows: [
    {
      id: 1,
      avatar: {
        initials: 'PS',
        color: 'sage',
      },
      name: 'Phil Schanely',
      age: 36,
      email: 'philschanely@gmail.com',
      birthday: 'May 5, 1984',
      isMember: true,
    },
    {
      id: 2,
      avatar: {
        initials: 'KS',
        color: 'purple',
      },
      name: 'Karen Schanely',
      age: 35,
      email: 'kschanely@gmail.com',
      birthday: 'March 14, 1985',
      isMember: true,
    },
    {
      id: 3,
      avatar: 'ES',
      name: 'Ethan Schanely',
      age: 10,
      email: 'eschanely@gmail.com',
      birthday: 'Sep 15, 2010',
      isMember: false,
    },
    {
      id: 4,
      avatar: 'AS',
      name: 'Abby Schanely',
      age: 8,
      email: 'aschanely@gmail.com',
      birthday: 'Nov 17, 2012',
      isMember: false,
    }
  ],
  schema: {
    avatar: {
      label: '',
      dataType: 'avatar',
    },
    name: {
      label: 'Name',
      dataType: 'string',
    },
    age: {
      label: 'Age',
      dataType: 'number',
    },
    email: {
      label: 'Email',
      dataType: 'string',
      className: 't-sage--truncate',
      style: {
        maxWidth: '100px',
      }
    },
    birthday: {
      label: 'Birthday',
      dataType: 'date',
    },
    isMember: {
      label: 'Member?',
      dataType: 'boolean',
    },
  }
};
