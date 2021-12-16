import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import JournalEntry from '../../entry/JournalEntry/JournalEntry'
import useSWR from 'swr';
import { Box } from '@material-ui/core';
import { getJournalFetcher } from '../../../api/journal';

import { myContext } from '../../../pages/theEyePages/reducer/eyeReducer.js'

const EntryList = (props) => {

  const { state, dispatch } = useContext(myContext);

  const eyeAccountListId = state.id;
  // const params = useMemo(() => ({ eyeAccountListId }), [eyeAccountListId]);
  const [endpoint, fetcher] = getJournalFetcher()
  const { data, error, isValidating } = useSWR([endpoint, eyeAccountListId], fetcher)


  //In the event we have an error
  if (error !== undefined) { return (<Box> Error fetching journal list </Box>) }

  // In the event we fetched but no headmates were found
  if (data === []) { return (<Box> No journal found </Box>) }

  // In the event we are initially loading the users headmates
  if (!data && isValidating) { return (<Box> Loading... </Box>) }

  return (
    <div className="journal-list" >
      {data.map((journal) =>
        <Link to="/theEye/space/edit" className="link journal-item" key={journal.id}>
          <JournalEntry
            text={journal.label}
            onClick={() => {
              dispatch({ type: 'clickJournal', journalData: journal });
            }} />
        </Link>
      )}
    </div>
  )
}

export default EntryList;