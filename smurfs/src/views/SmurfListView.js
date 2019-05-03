import React from "react";
import { connect } from "react-redux";
import SmurfList from "../components/SmurfList";
import { getSmurfs, addNewSmurf } from '../actions'

class SmurfListView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           item: {
                name: '',
                age: '',
                height: '',
                id: '',
                isLoading: false,
                error: null
             }
        }
    }
    
    componentDidMount() {
        console.log("CDM fired")
        this.props.getSmurfs()
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.activeItem &&
            prevProps.activeItem !== this.props.activeItem
        ) {
            this.setState({
                item: this.props.activeItem
            });
        }
    }

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'age' || 'id') {
            value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                [ev.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
      
         this.props.addSmurf(e, this.state);
        
        this.setState({
            item: {
                name: '',
                age: '',
                height: '',
                id: '',
                isLoading: false,
                error: null
            }
        })
    }
    
    // fetchSmurf = e => {
    //   e.preventDefault();
    //   this.props.getSmurfs();
    // };
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        // this.setState({ item: e.target.value });
    };

    addSmurf = e => {
        e.preventDefault();
        console.log(e);
        // this.props.addNewSmurf(e, this.state.addNewSmurf);
        this.props.addNewSmurf(this.state);
        this.setState({         
          
                name: '',
                age: '',
                height: '',
                id: ''
            
        });
    }
    
    render() {
        if (this.props.fetching) {
            return (
                <p>loading, please wait....</p>
                )
            }
            return (
                <div className="smurfs_List_wrapper">
            <h1>SmurfVille</h1>
                <SmurfList smurfs={this.props.smurfs} />

              <form onSubmit={this.addSmurf}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    
                />
                <div className="baseline" />

                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />
                <div className="baseline" />

                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                    
                />
                <div className="baseline" />

                <input
                    type="text"
                    name="id"
                    placeholder="id"
                    value={this.state.id}
                    onChange={this.handleChange}
                    
                />
                <div className="baseline" />
                <button>add smurf</button>
                {/* <button onClick={this.addSmurf}>Add smurf</button> */}
                {/* <button onClick={this.handleSubmit}>Add smurf</button> */}
                </form>
                </div>
            );
            }
}

const mapStateToProp = state => {
    console.log(state)
    return {
        smurfs: state.smurfReducer.smurfs,
        isLoading: state.smurfReducer.isLoading,
        error: state.smurfReducer.error,
        name: state.smurfReducer.name,
        age: state.smurfReducer.age,
        height: state.smurfReducer.height,
        id: state.smurfReducer.id,
        item: state.smurfReducer.item
    }
}

export default connect(
    mapStateToProp, 
    { getSmurfs, addNewSmurf }
    )(SmurfListView);
            