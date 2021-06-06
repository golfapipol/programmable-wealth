import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import Dashboard from './Dashboard'
import Logo from './assets/logo.svg'

function Menu() {
  return (<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <img className="h-64 w-64" src={Logo} alt="Workflow" />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link className="px-3 py-2 rounded-md text-sm font-medium" to="/">Home</Link>
          <Link className="px-3 py-2 rounded-md text-sm font-medium" to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">
        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-900 text-white block px-3 py-2 rounded-full text-base font-medium" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">ปรึกษาผ่านช่องทางออนไลน์</span>
              ปรึกษาผ่านช่องทางออนไลน์
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="-mr-2 flex md:hidden">
      <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</div>)
}

function MobileMenu() {
  return (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <Link className="block px-3 py-2 rounded-md text-base font-medium" to="/">Home</Link>
      <Link className="block px-3 py-2 rounded-md text-base font-medium" to="/dashboard">Dashboard</Link>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="mt-3 px-2 space-y-1">
          <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" to="/">ปรึกษาผ่านช่องทางออนไลน์</Link>
        </div>
      </div>
    </div>
  </div>)
}

function App() {
  return (
    <Router>
      <nav className="bg-white">
        <Menu />
        <MobileMenu />
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
