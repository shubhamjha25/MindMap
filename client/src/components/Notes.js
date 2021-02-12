import React from 'react';
import Navbar from './Navbar';
import NotesHome from './NotesHome';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import {BrowserRouter, Route} from 'react-router-dom';

function Notes({setIsLogin}) {
    return(
        <BrowserRouter>
            <div className="notes-page">
                <Navbar setIsLogin={setIsLogin} />
                <section>
                    <Route path="/" component={NotesHome} exact />
                    <Route path="/create" component={CreateNote} exact />
                    <Route path="/edit/:id" component={EditNote} exact />
                </section>
            </div>
        </BrowserRouter>
    ); 
}

export default Notes;