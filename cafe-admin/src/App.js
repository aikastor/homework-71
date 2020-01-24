import React from 'react';
import {Route, Switch} from "react-router";

import AdminPage from "./containers/AdminPage/AdminPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import AddMenuItem from "./containers/AddMenuItem/AddMenuItem";

const App = () => {
  return (
          <Switch>
            <Route path='/' exact component={AdminPage}/>
            <Route path='/orders/' exact component={OrdersPage}/>
            <Route path='/add/' exact component={AddMenuItem}/>
          </Switch>
  );
};

export default App;