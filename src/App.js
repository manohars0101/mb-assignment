import { Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import AddUser from './components/users/AddUser';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCollegesStart } from './redux/actions';
import UserDetails from './pages/UserDetails';

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadCollegesStart())
  }, [])
  
  const [isAddUser, setIsAddUser] = useState(false)

  const showModalHandler = () => setIsAddUser(true)
  const hideModalHandler = () => setIsAddUser(false)

  return (
          <Layout onShowModal={showModalHandler}>
              <Switch>
                <Route path="/" exact >
                  <Redirect to="/users" />
                </Route>
                <Route path="/users" exact > 
                  <Users />
                 { isAddUser &&  <AddUser  onHideModal={hideModalHandler}/> }
                </Route>
                <Route path="/users/:userId" >
                    <UserDetails />
                    { isAddUser &&  <AddUser  onHideModal={hideModalHandler}/> }
                </Route>
                <Route path="*">
                  <NotFound />]
                  { isAddUser &&  <AddUser  onHideModal={hideModalHandler}/> }
                </Route>
              </Switch>

           </Layout>
  );
}

export default App;
