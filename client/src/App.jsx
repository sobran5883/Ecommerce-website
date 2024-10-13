import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import AdminLayout from './components/admin-view/Layout'
import AuthLogin from "./pages/auth/Login"
import AuthRegister from "./pages/auth/register"
import AdminDashboard from './pages/admin-view/Dashboard'
import AdminProducts from './pages/admin-view/Products'
import AdminFeatures from './pages/admin-view/Features'
import AdminOrders from './pages/admin-view/Orders'
import NotFound from "./pages/not-found"
import ShoppingListing from "./pages/shopping-view/Listing"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingAccount from "./pages/shopping-view/Account"
import ShoppingLayout from "./components/shopping-view/Layout"
import CheckAuth from "./components/common/Check-auth"
import UnauthPage from "./pages/unauth-page"


function App() {

  const isAuthenticated = false;
  const user = null;
  // const user = {
  //   name: 'sobran',
  //   role: 'admin'
  // }

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header component</h1>
      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path='login' element={<AuthLogin/>}/>
          <Route path='register' element={<AuthRegister/>}/>
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
        </Route>

        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
