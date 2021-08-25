import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner";

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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route
            exact
            path="/products/details/:id"
            component={DetailsProductPage}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" component={LoginPage} />
          <Route exact path="/signup" component={RegisterPage} />
          <Route exact path="/payment" component={PaymentPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
