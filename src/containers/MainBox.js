import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
constructor (props) {
  super(props)
  this.state = {
  detailsToDisplay: 'profile'
  }
}

handleShow = (event) => {
  event.persist()
    if (event.target.id === 'photo') {
    this.setState({detailsToDisplay: 'photo'})
  } else if
    (event.target.id === 'cocktail') {
    this.setState({detailsToDisplay: 'cocktail'})
  } else if
    (event.target.id === 'pokemon') {
    this.setState({detailsToDisplay: 'pokemon'});
  } else {
    this.setState({detailsToDisplay: 'profile'})
  }
}


displayMenuItem = () => {
  if (this.state.detailsToDisplay === 'photo') {
    return <Photos />
  } else if (this.state.detailsToDisplay === 'cocktail') {
    return <Cocktails />
  } else if (this.state.detailsToDisplay === 'pokemon') {
    return <Pokemon />
  } else  {
    return <Profile />
}
}




    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */



render() {

    return (
      <div>
        <MenuBar handleShow={this.handleShow} />
        {this.displayMenuItem()}
      </div>
    )
  }
}




export default MainBox
