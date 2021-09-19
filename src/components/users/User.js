import { Link } from 'react-router-dom';
import classes from './User.module.css';
import { useDispatch } from 'react-redux';
import { deleteUser} from '../../redux/actions'

const User = (props) => {

  const dispatch = useDispatch();

  const deleteUserHandler = (id) => {
    if (window.confirm("Are you sure? You want to delete this user.")) {
      dispatch(deleteUser(id))
    }
    return
  }

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.name}</p>
        </blockquote>
        <figcaption>{props.phone}</figcaption>
        <figcaption>{props.email}</figcaption>
      </figure>
      <Link to={`/users/${props.id}`} className='btn'>
         <i className="fa fa-eye"></i>
      </Link>
      <button className='btn' onClick={() => deleteUserHandler(props.id)}>
         <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default User;
