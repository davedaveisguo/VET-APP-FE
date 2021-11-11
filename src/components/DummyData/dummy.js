import moment from "moment";

const data = [
    {
      key: '1',
      fname:'John',
      lname:'Brown',
      dob: moment(new Date('10-31-1990'),'mm/dd/yyyy'),
      role: 'Admin',
      crk: '2020-01-01',
      phone:'1111111',
      email:"ddddd@gmail.com"
    },
    {
      key: '2',
      fname:'John2',
      lname:'Brown',
      dob: moment(new Date(),'mm/dd/yyyy'),
      role: 'Admin',
      crk: '2020-01-01',
      phone:'2222222',
      email:"ddddd2@gmail.com"
    },
    {
      key: '3',
      fname:'John3',
      lname:'Brown',
      dob: moment(new Date(),'mm/dd/yyyy'),
      role: 'Admin',
      crk: '2020-01-01',
      phone:'33333',
      email:"ddddd3@gmail.com"
    },
  ];


  const roleData =[
      {
          id:'1',
          roleName:'Admin'
      },
      {
        id:'2',
        roleName:'Amimal Care Attendants'
    },
    {
        id:'3',
        roleName:'Teaching Technicians'
    },
    {
        id:'4',
        roleName:'Animal Health Technicians'
    },
    {
        id:'5',
        roleName:'Student'
    },
  ]

  export const userdata = data;

  export const roledata = roleData;