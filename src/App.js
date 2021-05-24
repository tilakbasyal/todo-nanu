import './App.css';

import 'antd/dist/antd.css';
// import { Button } from 'antd';

import { Layout, Input} from 'antd';

function App() {
  return (
    <div className="App">
      <Layout.Header>
        <h1 style={{color: 'white'}}>A simple TODO app.</h1>
      </Layout.Header>

      <Layout.Content>
        <div>
          <Input placeholder='Enter your task to do.' />
        </div>

        <div>List of task</div>
      </Layout.Content>
      
      {/* <Button type="primary">Primary Button</Button> */}
    </div>
  );
}

export default App;
