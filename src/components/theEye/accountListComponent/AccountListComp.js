import React from 'react';
import { Link } from 'react-router-dom';

import MeetingSpaceEntry from '../../entry/MeetingSpaceEntry/MeetingSpaceEntry'
import useSWR from 'swr';
import { Box } from '@material-ui/core';
import { getEyeAccountFetcher } from '../../../api/eyeAccount';

const EyeAccountList = (props) => {

  const [endpoint, fetcher] = getEyeAccountFetcher()
  const { data, error, isValidating } = useSWR(endpoint, fetcher)

  //In the event we have an error
  if (error !== undefined) {
    return (<Box>
      Error fetching eye account list
    </Box>)
  }

  // In the event we fetched but no headmates were found
  if (data === []) {
    return (<Box>
      No eye account found
    </Box>)
  }

  // In the event we are initially loading the users headmates
  if (!data && isValidating) {
    return (<Box>
      Loading...
    </Box>)
  }

  return <div className="account-list" > {data.map((account) => {
    return (  
      <Link to="/theEye/login" className="link account-item" key={account.id}>
        <MeetingSpaceEntry
        subText={account.spaceTitle}
        text={account.name}
        onClick={() => {
          console.log(account.name, account.spaceTitle)
        }}
        /> 
      </Link> 
    )
  })}
  </div>;
}

export default EyeAccountList;