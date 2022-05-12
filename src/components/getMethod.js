import axios from 'axios'
import React, { Component } from 'react'

export default class 
 extends Component {
      constructor(props) {
        super(props)
      
        this.state = {
            users:[],
            error:''
        }
      }
       componentDidMount=()=>
       {
           axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response=>{
                 this.setState({users:response.data})
             })
             .catch(error=>{
                this.setState({errorMsg:'Error Retriving Data'})
             })
                
       }
  render() {
     const {users,errorMsg}=this.state
     const id=users.map((users)=><p key={users.id}>{users.id}</p>)
     const name=users.map((users)=><p key={users.id}>{users.name}</p>)
     const username=users.map((users)=><p key={users.id}>{users.username}</p>)
     const email=users.map((users)=><p key={users.id}>{users.email}</p>)
    //  const address=users.map((users)=><small key={users.id}>{users.address.street.suite.city.zipcode.geo.lat.lng}
    //  </small>)
     const phone=users.map((users)=><p key={users.id}>{users.phone}</p>)
     const website=users.map((users)=><p key={users.id}>{users.website}</p>)
    //  const company=users.map((users)=><p key={users.id}>{users.company}</p>)
   return (
      <div>
          <table className="table table-bordered">
              <thead className="text-danger">
                  <tr>
                    <th>Serial Number</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    {/* <th>ADDRESS</th> */}
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    {/* <th>COMPANY</th> */}
                  </tr>
              </thead>
               <tbody>
                   <tr>
                       <th>{id}</th>
                       <th>{name}</th>
                       <th>{username}</th>
                       <th>{email}</th>
                        {/* <th>{address}</th>  */}
                       <th>{phone}</th>
                       <th>{website}</th>
                       {/* <th>{company}</th> */}
                   </tr>
               </tbody>
               {errorMsg?<div>{errorMsg}</div>:null}
          </table>
      </div>
    )
  }
}
