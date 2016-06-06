import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTask} from 'actions'
import {TodoCreator} from 'components'

const mapDispatchToProps = dispatch => ({
  addTask: bindActionCreators(addTask, dispatch)
})

const CreatorContainer = connect(undefined, mapDispatchToProps)(TodoCreator)

export default CreatorContainer
