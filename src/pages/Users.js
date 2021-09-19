import { useSelector } from 'react-redux';
import UserList from '../components/users/UserList';


const Users = () => {

    const users = useSelector(state => state.app.users);
    
    return <UserList users={users}/>
}
export default Users;