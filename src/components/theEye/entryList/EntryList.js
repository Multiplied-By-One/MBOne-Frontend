import React, { useContext } from 'react';

import useSWR from 'swr';
import { Box } from '@material-ui/core';
import { getEntriesFetcher } from '../../../api/entries';

import Timestamp from '../../timestamp/Timestamp'
import Container from '../../generic/container/Container'

import { myContext } from '../../../pages/theEyePages/reducer/eyeReducer';


export default function EntryList(props) {

    const { state, dispatch } = useContext(myContext);
    const journalId = state.journal.id;
    const [endpoint, fetcher] = getEntriesFetcher()
    const { data, error, isValidating } = useSWR([endpoint, journalId], fetcher)


    if (error !== undefined) return <Box> Error fetching entry list </Box>
    if (data === []) return <Box> No entry found </Box>
    if (!data && isValidating) return <Box> Loading... </Box>

    props.firstEntry(data[0])
    console.log("data: ", data)



    return (
        <Container style={{ marginTop: "16px", height: "calc(100vh - 96px)", flex: "1" }} >

            {data.map((entry) =>
                <Timestamp
                    key={entry.id}
                    date={entry.date}
                    year={entry.year}
                    title={entry.title}
                    style={{ margin: "3%" }}
                    onClick={() => {
                        dispatch({ type: 'clickEntry', entryData: entry });
                    }}
                />
            )}
        </Container>
    )
}