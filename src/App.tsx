import './App.css';
import { Divider } from 'antd';
import { Test } from '$src/components/Test.tsx';

const App = () => {
  return (
    <>
      <h1>Vite + React + AntD</h1>
      <Divider />
      <Test name={'Patrik 2'} />
    </>
  );
};

export default App;
