import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master'
import Header from './components/Header'
import './index.css';

ReactDOM.render(
<Router history={createBrowserHistory()}>
  <Switch>
      <Route exact={true} path='/' render={() => <Header> <App /></Header>} />
      <Route path='/jokes' render={() => <Header> <Jokes /> </Header>}/>
      <Route path='/music-master' render={() => <Header> <MusicMaster /> </Header>} />
  </Switch>
</Router>,
 document.getElementById('root'));

// setTimeout (() => {
//     console.log('Bears');
// }, 2000);

// console.log('Beets');
// console.log('Battlestar Galactica');

// new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Bears');
//         resolve();
//     }, 2000)
// })
//  .then(() => {
//      console.log('Beets');
//      console.log('Battlestar Galactica');
//  })
