import React from 'react'
import Quiz from './components/Quiz'
import {data} from './assets/data'
 import { ToastContainer, toast } from 'react-toastify';

function App() {
   const notify = () => toast.warning("Choose One Option");
  return (
    <div className='main h-screen w-full flex items-center justify-center'>
       <ToastContainer />
      <Quiz notify={notify} />
    </div>
  )
}

export default App
