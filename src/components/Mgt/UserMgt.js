import { Row,Col,Space, Button,Popconfirm,message   } from 'antd'
import React from 'react'
import Transition from '../Static/Transition'
import { Table } from 'antd';
import { useHistory } from "react-router-dom";
import { userdata } from '../DummyData/dummy';
import moment from 'moment';


const UserMgt = () => {

      let history = useHistory();

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
          title: 'FName',
          dataIndex: 'fname',
        },
        {
            title: 'LName',
            dataIndex: 'lname',
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
          dataIndex: 'crk',
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

 

      const data = [];
      userdata.map(ud=>{
          data.push({
              ...ud,
              dob: moment(ud.dob).format('YYYY/MM/DD')
          })
      })
    return (
        <React.Fragment>
        <Row>
        <Col span={4} style={{marginTop:"-80px"}}>
        <Transition></Transition>
        </Col>
        <Col span={16} style={{marginTop:"20px"}}>
           <Table bordered columns={columns} dataSource={data} />
        </Col>
        </Row>
        </React.Fragment>
    )
}


export default UserMgt;
