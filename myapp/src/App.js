import './App.css';
import {Card, Navigation, Toggle} from './stories/website'

const menu = [
  {
    name:'About',
    link:'',
  },
  {
    name:'LinkedIn',
    link:'https://www.linkedin.com/in/melissaflee02/',
  },
  {
    name:'Github',
    link:'https://github.com/melissaflee02',
  },
  {
    name:'Email',
    link:'mailto: mlee24@stanford.edu',
  }
]

const App = () => (
  <div className="wrapper">
    <Navigation id="menu" menu={menu} />
  </div>
)

export default App;
