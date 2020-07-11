import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from './Project/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Project/home';
import About from './Project/about';
import Post from './Project/post';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Project/context/reduxReducer';
import PostIdLink from './Project/home_post_details'

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post' component={Post} />
        <Route exact path='/:postId' component={PostIdLink} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//import Meteran from './Quiz2_6';
/*import Converter from './Day 10_1';
import Timbangan from './Day 10_2';*/
/*<Converter />
    <br/><br/>
    <Timbangan />
    <br/><br/>*/

/*const nama = ['nama1', 'nama2', 'nama3'];
const pekerjaan = ['karyawan', 'dokter', 'petani'];
const hobi = ['memancing', 'bermain layangan', 'bernyanyi'];*/

/*<List nama={nama} pekerjaan={pekerjaan} hobi={hobi} />*/


/*import Interface from './Day 12_2/Interface';
import ModeChange from './Day 12_2/Context';

<ModeChange>
<Interface />
</ModeChange>*/

//import ReactRouterV2 from './Day 13/Day 13';
//import Home from './Day 13/Home';
//import About from './Day 13/About';
//import Contact from './Day 13/Contact';

/*<BrowserRouter>
  <ReactRouterV2 />
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</BrowserRouter>*/

/*<Provider store={store}>
    <CountButton />
</Provider>*/

/* import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import counter from './Day 14/reducer';
import CountButton from './Day 14/redux';
import thunk from 'redux-thunk'; */


/* const store = createStore(counter, applyMiddleware(thunk));*/

