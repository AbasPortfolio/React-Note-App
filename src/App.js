import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';
import { useEffect, useState } from 'react';

function App() {
  const[notes,setNotes] = useState(JSON.parse(localStorage.getItem('myNotes')) ||[])

  useEffect(()=>{

      localStorage.setItem('myNotes', JSON.stringify(notes))
  }, [notes])
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes notes={notes}/>}/>
          <Route path='/edit-note/:id' element={<EditNote setNotes={setNotes} notes={notes}/>}/>
          <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>}/>
        </Routes>
     </BrowserRouter>
    </main>
  );
}

export default App;