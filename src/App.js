import './App.css';

import 'antd/dist/antd.css';
// import { Button } from 'antd';

import { Layout, Input} from 'antd';
import Tasklist from './tasklist';

function App() {
  return (
    <div className="App">
      <Layout.Header>
        <h1 style={{color: 'white'}}>A simple TODO app.</h1>
      </Layout.Header>

      <Layout.Content>
        <div style={{marginBottom: '16px'}}>
          <Input placeholder='Add task' />
        </div>

        <div>
          <Tasklist />
        </div>
      </Layout.Content>
      
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
