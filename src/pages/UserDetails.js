import { Fragment } from "react";
import { useSelector } from 'react-redux';

import { Route, useParams } from "react-router-dom";

const UserDetails = (props) => {

    const params = useParams()

    const userId = params.userId;

    const users = useSelector(state => state.app.users)

    const [user] = users.filter((user) => user.id === userId)

    if(!user){
        return <p>Error! No User Found With id {userId}</p>
    }

    return <Fragment>
            <Route path={`/users/${userId}`} exact>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <th>Name : </th>
                        <td>{ user.name}</td>
                    </tr>
                    <tr>
                        <th>Email : </th>
                        <td> { user.email}</td>
                    </tr>
                    <tr>
                        <th>Phone No : </th>
                        <td> { user.phone}</td>
                    </tr>
                    <tr>
                        <th>Gender : </th>
                        <td> { user.gender}</td>
                    </tr>
                    <tr>
                        <th>Date Of Birth : </th>
                        <td> { user.dob}</td>
                    </tr>
                    <tr>
                        <th>Address : </th>
                        <td> { user.address}</td>
                    </tr>
                    <tr>
                        <th>College : </th>
                        <td> { user.college}</td>
                    </tr>
                    <tr>
                        <th>Hobbies : </th>
                        <td> { user.hobbies}</td>
                    </tr>
                    </tbody>
                 </table>
                   
            </Route>
    </Fragment>
}
export default UserDetails;