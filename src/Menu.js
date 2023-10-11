import React, { Fragment } from 'react';
import './Menu.css';
import Search from './Search';
import PanelAdd from './PanelAdd';


class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItemPanel: false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    add(){
     this.setState({newItemPanel: true});   
    }

    onCancel(){
        this.setState({newItemPanel: false});   
    }


    render(){
        return(
            
                <div className="container">                
                            <div className="subcontainer">
                            <div className="logo" >{this.props.title}
                    </div>
                <div className="search">
                            <Search onsearch={this.props.onsearch} />
                    </div>
                <div className="actions">
                            <button onClick={this.add} className="button btn-blue">+ Agregar Item</button>
                            <a id="whatsapp" href="https://api.whatsapp.com/send?phone=5493764331313">
                            <img src="img/whatsapplogo.svg" alt="whatsapp" width={"100px"}></img></a>
                        
                    </div>
                    <div>
                    
                    </div>

                    
                    
                    </div>
                    {(this.state.newItemPanel)?
                    <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                    : 
                    ''
                    }
                
                </div>
            

        );
    }
}

export default Menu;