import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
import AllSales from "./pages/Admin/AllSales";
import Layout from "./pages/Admin/Layout";
import List from "./pages/Admin/List";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import AddProduct from "./pages/Admin/AddProduct";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const DetailsProductPage = lazy(() => import("./pages/DetailsProductPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/signin" component={LoginPage} />
          <Route exact path="/signup" component={RegisterPage} />
          {/* User */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route
            exact
            path="/products/details/:id"
            component={DetailsProductPage}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/payment" component={PaymentPage} />
          {/* Admin  */}
          <Layout>
            <Switch>
              <Route exact path="/admin" component={List} />
              <Route exact path="/admin/add" component={AddProduct} />
              <Route exact path="/admin/sales" component={AllSales} />
              <Route
                exact
                path="/admin/product/:id"
                component={UpdateProduct}
              />
            </Switch>
          </Layout>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
