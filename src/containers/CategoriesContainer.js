import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {deleteCategory, checkedCategory} from 'actions'
import {TodoCategories} from 'components'

const mapDispatchToProps = dispatch => ({
  deleteCategory: bindActionCreators(deleteCategory, dispatch),
  checkedCategory: bindActionCreators(checkedCategory, dispatch)
})

const mapStatetoProps = state => ({
  categories: state.categories
})

const CategoriesContainer = connect(mapStatetoProps, mapDispatchToProps)(TodoCategories)

export default CategoriesContainer
