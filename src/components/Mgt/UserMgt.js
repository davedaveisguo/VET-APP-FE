import { Row,Col,Space, Button,Popconfirm,message   } from 'antd'
import React from 'react'
import Transition from '../Static/Transition'
import { Table } from 'antd';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from '../Api/request';
import moment from 'moment';


const UserMgt = () => {

      const [userData, setuserData] = useState([]);

      let history = useHistory();

      const data = [];

      useEffect(() => {
        axios.get("api/user/getalluser")
        .then(res=>{
          setuserData(res.data.data);  
        })
      }, [])

      userData.map(ud=>{
        data.push({
            ...ud,
            key:ud.id,
            dob: moment(ud.dob).format('YYYY/MM/DD'),
            createdAt:moment(ud.createdAt).format('YYYY/MM/DD'),
            role:ud.roles[0].roleName
          })
      });




    

      function confirm(e) {
        message.success('Click on Yes');
      }
      
      function cancel(e) {
        message.error('Click on No');
      }


      function editUser(key) {
         history.push(`/userMgt/${key}/edit`)
      };


    const columns = [
        {
          title: 'username',
          dataIndex: 'username',
        },
          {
            title: 'DOB',
            dataIndex: 'dob',
          },
        {
          title: 'Role',
          dataIndex: 'role',
        },
        {
          title: 'Created_At',
          dataIndex: 'createdAt',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button onClick={() => editUser(record.key)}>Edit</Button>
                <Popconfirm
                        title="Are you sure to delete this record?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                   <Button>Delete</Button>
                </Popconfirm>
                <Button>Block</Button>
              </Space>
            ),
        },
      ];

 


    return (
        <React.Fragment>
        <Row>
        <Col span={4} style={{marginTop:"-80px"}}>
        <Transition></Transition>
        </Col>
        <Col span={16} style={{marginTop:"20px"}}>
           <h1>User Management</h1>
           <Table bordered columns={columns} dataSource={data} />
        </Col>
        </Row>
        </React.Fragment>
    )
}


export default UserMgt;
