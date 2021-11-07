import React from 'react';

import SystemMapEntry from '../entry/SystemMapEntry/SystemMapEntry'
import useSWR from 'swr';
import { Box } from '@material-ui/core';
import { getHeadMateFetcher } from '../../api/headMate';

function HeadmateList() {
  const [endpoint, fetcher] = getHeadMateFetcher()
  const { data, error, isValidating } = useSWR(endpoint, fetcher)

  //In the event we have an error
  if (error !== undefined) {
    return (<Box>
      Error fetching headmates
    </Box>)
  }

  // In the event we fetched but no headmates were found
  if (data === []) {
    return (<Box>
      No headmates found
    </Box>)
  }

  // In the event we are initially loading the users headmates
  if (!data && isValidating) {
    return (<Box>
      Loading...
    </Box>)
  }

  console.log(data)

  return <div> {data.map((mate) => {
    return (
      <SystemMapEntry
        age={mate.age}
        img={mate.image}
        subText={mate.gender}
        text={mate.name}
      />
    )
  })}
  </div>;

}
export default HeadmateList;