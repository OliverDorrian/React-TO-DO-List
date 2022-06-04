import React from 'react';

function MainContent(){
    return (
        <div id="main-content">
            <Buttons/>
        </div>
    );
}

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            numbers: []
            };
    }

    updateInputValue(evt){
        this.setState({
          value: evt.target.value,
          numbers: this.state.numbers.concat([evt.target.value])
        });
    }

    loadList(){
        this.state.numbers.push(this.state.value);
        
    }

    render () {

        return(
            <div>
                <div id="row-buttons">          
                    <div id="row-buttons-left">
                        <input type="text" onChange={evt => this.updateInputValue(evt)} value={this.state.value} class="search-box" id="search-box"></input>
                    </div>
                    <div id="row-buttons-right">
                        <button type="click" onClick={this.loadList()} class="button" id="task-create">Add Item</button>
                    </div>
                </div>
                <div id="list-of-items">
                    {this.state.listItems}
                </div>                 
            </div>
     
              
        )        
    }
}


export default MainContent;