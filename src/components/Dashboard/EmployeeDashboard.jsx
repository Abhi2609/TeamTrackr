import PropTypes from 'prop-types'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} firstName={props.data.firstName} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  firstName: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default EmployeeDashboard
