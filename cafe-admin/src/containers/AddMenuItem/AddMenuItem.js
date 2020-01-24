import React, {Component, Fragment} from 'react';
import Navigation from "../../components/UI/Navigation/Navigation";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";

import {addItem} from "../../store/actions/addItemActions";
import {deleteItem} from "../../store/actions/menuActions";

class AddMenuItem extends Component {
  state={
    name: '',
    price: '',
    image: '',
    loading: false,
  };
  submitDish = async (e)=>{
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      price: this.state.price,
      image: this.state.image
    };

    await this.props.addItem(newItem);
  };

  handleChange = (e)=> this.setState({[e.target.name]: e.target.value});

  render() {
    let form = (<form onSubmit={e=>this.submitDish(e)}>
      <TextField required name="name"
                 label="Enter item name"
                 value={this.state.name}
                 onChange={this.handleChange}/>
                 <br/>
      <TextField
          required name="price"
          label="Enter item price"
          type="number"
          value={this.state.price}
          onChange={this.handleChange}/>
          <br/>
      <TextField
          required name="image"
          label="Enter URL to image"
          value={this.state.image}
          onChange={this.handleChange}/>
          <br/>
      <Button type='submit' variant="contained" color="primary">ADD</Button>
    </form>);

    return (
        <Fragment>
          <Navigation/>
          <Container>
            {this.props.loading ?
                <CircularProgress color="secondary" />
                :
                form
            }
          </Container>
        </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.addItem.loading
});
const mapDispatchToProps = dispatch => ({
  addItem : (item) => dispatch(addItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddMenuItem);