import { Fragment } from 'react';
import User from './User';
import classes from './UserList.module.css';

const UserList = (props) => {

  return (
    <Fragment>
      
      { props.users.length === 0 && <p style={{textAlign:'center'}}>No Data Found! Please Add Users</p>}
      
      { props.users.length > 0 && <ul className={classes.list}>
        {props.users.map((user, index) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            phone={user.phone}
            email={user.email}
            gender={user.gender}
          />
        ))}
      </ul> }
    </Fragment>
  );
};

export default UserList;
