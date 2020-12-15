import React from 'react';
import './Journal.css';
import SearchBar from '../../components/SearchBar';
import MatGird from '@material-ui/core/Grid';
//Journals Homepage: on click of the journals menu icon in the Dashboard Homepage by member</span >

const JournalHome = () => {
    return (
        <div className='grid-container'>
           
            <div>
                <MatGird>
                    <MatGird >
                        <SearchBar />
                        <h1>journal</h1>
                    </MatGird>
                    <MatGird >
                        <h1> welcome to journals page</h1>
                       
                    </MatGird>
                </MatGird> 
            
            
        </div>
        </div>
    );
};

export default JournalHome;
