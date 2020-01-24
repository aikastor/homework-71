import React, {Component, Fragment} from 'react';
import Navigation from "../../components/UI/Navigation/Navigation";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import MenuItem from "../../components/MenuItem/MenuItem";
import {deleteItem, editItem, getMenu} from "../../store/actions/menuActions";
import {connect} from "react-redux";
import MenuList from "../../components/MenuList/MenuList";
import CircularProgress from "@material-ui/core/CircularProgress";
import {withRouter} from "react-router";

class AdminPage extends Component {

  componentDidMount() {
    this.props.loadMenu();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params !== prevProps.match.params) {
  //     return this.props.loadMenu();
  //   }
  // }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.props.match.params !== nextProps.match.params) {
  //     return this.props.loadMenu();
  //   }
  // }

  render() {
    return (
        <Fragment>
          <Navigation/>
          <Container maxWidth='md'>
              <Grid container item xs={12} justify="space-between" direction="row" style={{marginTop: '10px'}}>
                <Grid item xs={6}>
                  <Typography>
                    MENU
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{textAlign: 'right'}}>
                  <Button
                      variant="contained" color="secondary"
                      component={NavLink} to="/add"
                  >ADD NEW ITEM
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <MenuList>
                    {Object.keys(this.props.menuItems) &&
                      Object.keys(this.props.menuItems).length > 0 &&
                      this.props.loading ? <CircularProgress color="secondary" />
                      :
                          Object.keys(this.props.menuItems).map(item=> (
                              <MenuItem
                                  key={item}
                                id={item}
                                item={this.props.menuItems[item]}
                                delete={this.props.deleteItem}
                                edit={this.props.editItem}
                                />
                                ))
                    }
                  </MenuList>
                </Grid>
            </Grid>
          </Container>
        </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  menuItems: state.menu.menu,
  loading: state.menu.loading,
});
const mapDispatchToProps = dispatch => ({
  loadMenu: () => dispatch(getMenu()),
  editItem: (id, item) => dispatch(editItem(id, item)),
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminPage));