import {Component} from 'react'
import {Bg, Button, Card, Heading, Input, Para} from './styledComponent'
import './App.css'

// Replace your code here

class App extends Component {
  state = {
    displayInput: true,
    text: '',
  }

  onClickSaveOrEdit = () => {
    this.setState(prevState => ({displayInput: !prevState.displayInput}))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {displayInput, text} = this.state
    const buttonText = displayInput ? 'Save' : 'Edit'
    return (
      <Bg>
        <Card>
          <Heading>Editable Text Input</Heading>
          <div>
            {displayInput ? (
              <Input value={text} type="text" onChange={this.onChangeText} />
            ) : (
              <Para>{text}</Para>
            )}
            <Button type="button" onClick={this.onClickSaveOrEdit}>
              {buttonText}
            </Button>
          </div>
        </Card>
      </Bg>
    )
  }
}

export default App
