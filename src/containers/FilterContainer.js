import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setVisibilityFilter} from 'actions'
import {TodoFilter} from 'components'

const getFilterMask = (filterName) => ({
  ALL_TASKS: filterName === 'ALL_TASKS',
  COMPLETE_TASKS: filterName === 'COMPLETE_TASKS',
  ACTIVE_TASKS: filterName === 'ACTIVE_TASKS'
})


const mapStateToProps = state => ({
  filterMask: getFilterMask(state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch)
})

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFilter)

export default FilterContainer
