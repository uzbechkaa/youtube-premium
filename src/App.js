import './App.css';
import { Button, ButtonGroup, Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Channel from './components/Channel/Channel';
import VideoDetail from './components/VideoDetail/VideoDetail';
import Search from './components/Search/Search';

function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/channel/:id' element={<Channel/>}/>
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/search/:id' element={<Search/>}/>
    </Routes>
   </div>
  );
}

export default App;
