import PropTypes from 'prop-types'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTasks from '../Others/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser} />  
        <CreateTask />
        <AllTasks />
    </div>
  )
}

AdminDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
}

export default AdminDashboard
