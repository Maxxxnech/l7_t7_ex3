
import React, { PureComponent } from "react";

export default class SearchPlugin extends PureComponent {             
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
                        
    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
    onTextChanged(e){
        var text = e.target.value.trim();  
        this.props.filter(text); 
    }
}