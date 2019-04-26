import React from "react";
import { connect } from "react-redux";
import { SmurfList } from "../components";
import { getSmurfs } from '../actions'

class SmurfListView extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.getSmurfs()
    }
  
    render() {
      if (this.props.fetching) {
        return (
        <p>loading, please wait....</p>
        )
      }
      return (
        <div className="smurfs_List_wrapper">
          <SmurfList smurfs={this.props.smurfs} />
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