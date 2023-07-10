import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props)
{
    super(props);
    this.state={
        employees:[]
    }
} 
    componentDidMount(){  //lifecycle method, called after component is rendered

        EmployeeService.getEmployees().then((res => {

            this.setState({employees: res.data});

        }
        ));

    }
   render() {
        return (
            <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'></div>
                <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email Id</th>
                    <th> Employee Actions</th>
                    </tr>

                    <tbody>
                        { this.state.employees.map(
                            employee =>
                            <tr key = {employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                            </tr>

                        )}
                    </tbody>
                </thead>
                </table>
            </div>
        );
    }
}

export default ListEmployeeComponent;