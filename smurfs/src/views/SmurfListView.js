import React from "react";
import { connect } from "react-redux";
import SmurfList from "../components/SmurfList";
import { getSmurfs, addNewSmurf } from '../actions'

class SmurfListView extends React.Component {
    // constructor(props) {
    //   super(props);
      state = {
          item: this.props.activeItem || {
            name: "",
            age: null,
            height: null,
            id: null
             }
        }
    // }
    componentDidMount() {
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
      
         this.props.addSmurf(e, this.state.item);
        
        this.setState({
            item: {
                name: "",
                age: null,
                height: "",
                id: null
            }
        })
    }
    
    // fetchSmurf = e => {
    //   e.preventDefault();
    //   this.props.getSmurfs();
    // };
    
    handleChange = e => {
        this.setState({ newSmurf: e.target.value });
    };

    addSmurf = e => {
        e.preventDefault();
        this.props.addNewSmurf(e, this.state.addNewSmurf);
        this.setState({         
            item: {
                name: "",
                age: null,
                height: "",
                id: null
            }
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

              <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="name"
                    value={this.state.item.name}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="age"
                    value={this.state.item.age}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="height"
                    onChange={this.changeHandler}
                    placeholder="height"
                    value={this.state.item.height}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="id"
                    onChange={this.changeHandler}
                    placeholder="id"
                    value={this.state.item.id}
                />
                <div className="baseline" />
                <button onClick={this.activeItem}>Add smurf</button>
                {/* <button onClick={this.handleSubmit}>Add smurf</button> */}
                </form>
                </div>
            );
            }
}

const mapStateToProp = state => ({
    smurfs: state.smurfReducer.smurfs,
    isLoading: state.smurfReducer.isLoading,
    error: state.smurfReducer.error,
    
})

export default connect(
    mapStateToProp, 
    { getSmurfs, addNewSmurf }
    )(SmurfListView);
            