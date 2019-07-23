import React from 'react';

export const VibesContext = React.createContext();

class VibesProvider extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        playerName: '',
        handleChange: this.handleChange
      };
  }

  handleChange = (name, value) => {
    this.setState(() => ({[name]: value }));
  }

  render(){
    return(
      <VibesContext.Provider value={this.state}>
        {this.props.children}
      </VibesContext.Provider>
    );
  }
}

export default VibesProvider;