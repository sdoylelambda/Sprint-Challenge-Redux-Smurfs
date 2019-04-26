import React from "react";
import { connect } from "react-redux";
import { SmurfList } from "../components";
import { getSmurfs, addNewSmurf } from '../actions'

class SmurfListView extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
          newSmurf: ""
      }

    }
    
    // function = () => fetchSmurf = e => {
    //   e.preventDefault();
    //   props.getSmurfs();
    // };
    componentDidMount() {
      this.props.getSmurfs()
    }

    handleChange = e => {
        this.setState({ newSmurf: e.target.value });
    };

    addSmurf = e => {
        e.preventDefault();
        this.props.addNewSmurf(this.state.newSmurf);
        this.setState({ newSmurf: "" });
    };
    
    
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

            <input
                style={{ marginBottom: 20 }}
                type="text"
                value={this.state.newSmurf}
                placeholder="Add Smurf to the village..."
                onChange={this.handleChange}
                />
               <button onClick={this.addSmurf}>Add Smurf</button>
               {/* <button onClick={fetchSmurf}>Fetch Smurfs!</button> */}
        </div>
      );
    }
}

const mapStateToProp = state => ({
    smurfs: state.smurfReducer.smurfs.results,
    error: state.smurfReducer.error,
    isLoading: state.smurfReducer.isLoading,
    
})

export default connect(
    mapStateToProp, 
    { getSmurfs }
    )(SmurfListView);
            