import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import { MdClose } from 'react-icons/md' 
import { Link } from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import Avatar from '../components/assets/noteHero.png'

const Notes = ({notes}) => {
  const [showSearch,setShowSearch] = useState(false)
  const [text,setText] = useState('')
  const [filteredNotes,setFilteredNotes] = useState(notes)

  const handleSearch = () =>{
        setFilteredNotes(notes.filter(note => {
          if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
            return note;
          }
        }))
  }
  useEffect(()=>{
    handleSearch()
  },[text])
  return (
    <section>
        <header className="notes__header">
            {!showSearch &&<h2>My notes</h2>}
            {showSearch &&<input type="text" autoFocus placeholder='Keyword...' value={text} onChange={(e)=>{setText(e.target.value); handleSearch()}} />}
            <button className='btn' onClick={()=> setShowSearch(prevState => !prevState)}>{showSearch ? <MdClose/> : <CiSearch/>}</button>
        </header>
        <div className="notes__container">
                {filteredNotes.length == 0 && <div className='empty_list'><img src={Avatar} /> <p className='empty__notes'>Note not found</p></div>}
                {
                    filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
                }

        </div>
        <Link className='btn add__btn' to={'/create-note'}><BsPlusLg/></Link>
    </section>
  )
}

export default Notes