class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  
}
  // add handleChange() and submitMessage() methods here
  handleChange(e) {
    //console.log(this.state.input);
    console.log(e.target.name, e.target.value)
    //const { name, value } = e.target;
    this.setState({ });
  };

  submitMessage(e) {
    e.preventDefault();
    this.setState({
      messages: this.concat(e.value),
      input: ''
      });
  };

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input type='text'
        name='input'
        value={ this.state.input } 
        onChange={ this.handleChange } />
        <button 
        type='submit'
        onClick={ this.submitMessage }>
        Submit
        </button>
        <ul>
        { this.state.messages.map(msg => {
            <li>{ msg }</li>
           })
        }
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
}