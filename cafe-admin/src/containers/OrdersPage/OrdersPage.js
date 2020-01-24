import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import Navigation from "../../components/UI/Navigation/Navigation";
import {Container, Paper} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import {completeOrder, getOrders} from "../../store/actions/ordersActions";

class OrdersPage extends Component {
  componentDidMount() {
    this.props.loadOrders()
  }


  render() {
    let itemPrices = {};
    let prices = {};

    for(let price in this.props.menu) {
      prices[price] = parseInt(this.props.menu[price].price);
    }

    for (let key in this.props.orders) {
      for(let ke2 in this.props.orders[key].order) {

        let price = parseFloat(this.props.orders[key].order[ke2]) * parseFloat(prices[ke2]);

        if (itemPrices.hasOwnProperty(key)) {
          itemPrices[key] += price;
        } else {
          itemPrices[key] = price;
        }
      }
    }

    return (
        <Fragment>
          <Navigation/>
          <Container maxWidth={'md'}>
            {Object.keys(this.props.orders).length > 0 &&
            this.props.loading ? <CircularProgress color="secondary" />
                :
                Object.keys(this.props.orders).map(itemm=> (
                    <Fragment key={itemm}>
                      <Paper style={{marginTop: '5px'}}>
                        {Object.keys(this.props.orders[itemm].order).map(i => {
                            return ( <Fragment key={i}>
                                      <div style={{listStyleType: 'none'}}>
                                        <div>
                                          <p style={{width: '100%', margin: 0, padding: 0}}>
                                            <b>{`${this.props.menu[i].name }- x ${this.props.orders[itemm].order[i]}`}</b>
                                            <br/>
                                            <span>
                                              <i>{'price: ' + this.props.menu[i].price * this.props.orders[itemm].order[i] + ' KGS'}</i>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                </Fragment>
                                )
                            })
                        }
                        <div>
                          Total Price (including delivery fee 150 KGS) : {itemPrices[itemm] + 150} KGS
                          <IconButton edge="end" onClick={()=>this.props.deleteOrder(itemm)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                        </Paper>
                    </Fragment>
                ))
            }
          </Container>
        </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  menu: state.menu.menu,
  orders: state.orders.orders,
  loading: state.orders.loading,
});

const mapDispatchToProps = dispatch => ({
  loadOrders: ()=> dispatch(getOrders()),
  deleteOrder: (orderID)=> dispatch(completeOrder(orderID)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
