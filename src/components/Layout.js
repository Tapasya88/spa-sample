import React  from 'react';
import {Route,Link,Switch} from 'react-router-dom'

import {Home} from './Home'
import {Customers} from './Customers'
import {Greet} from './Greet'
import {Login} from './Login'
import Cars from './Cars'

//passing params
const extraProps ={name:'Tapasya'}

export const Layout = ()=>{
    return(
    <div>
        <span>
            <Link className='nav' exact to='/'>Home</Link>
            <Link className='nav' exact to='/users'>Customers</Link>
            <Link className='nav' exact to='/cars'>Cars</Link>
            <Link className='nav' exact to='/login'>Login</Link>
            <Link className='nav' exact to='/greet/Tapasya/Hyderabad'>Greet</Link>
        </span>
        <main className="container">
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/users' exact component={Customers}/>
            <Route path='/cars' exact component={Cars}/>
            <Route path='/login' exact component={Login}/>
            <Route path='/greet/:username/:city' render={(props)=> (<Greet {...props} username={extraProps}/>)}/>
            <Route path='/greet/:username/:city' render={(props)=> (<Greet {...props}/>)}/>
            <Route path='/greet/:username/:city' component={Greet}/>
            <Route component={NotFound}/>
        </Switch>
        </main>
    </div>
    )
    const NotFound=()=> <div> Sorry Page not found</div>
}

export default Layout;