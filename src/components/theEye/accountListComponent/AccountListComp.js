import React, { useContext, useEffect } from "react";
import { Box } from '@material-ui/core';
import useSWR from 'swr';
import { getEyeAccountFetcher } from '../../../api/eyeAccount';
import { myContext } from "../../../pages/theEyePages/reducer/eyeReducer";
import MeetingSpaceEntry from '../../entry/MeetingSpaceEntry/MeetingSpaceEntry'
import client from "../../../api/client";

const EyeAccountList = (props) => {

  const [endpoint, fetcher] = getEyeAccountFetcher()
  const { data, error, isValidating } = useSWR(endpoint, fetcher)

  const { dispatch } = useContext(myContext);

  client.get("/headmates").then((v) => dispatch({ type: "getHeadmates", headmates: v.data }));

  useEffect(() => {
    dispatch({ type: "getAccounts", accounts: data })
  }, [data]);

  //In the event we have an error
  if (error !== undefined) {
    return (<Box>
      Error fetching eye account list
    </Box>)
  }

  // In the event we fetched but no eye account were found
  if (data === []) {
    return (<Box>
      No eye account found
    </Box>)
  }

  // In the event we are initially loading 
  if (!data && isValidating) {
    return (<Box>
      Loading...
    </Box>)
  }


  return <div className="account-list" > {data.map((account) => {
    return (
      <div className="account-item" key={account.id}>
        <MeetingSpaceEntry
          subText={account.spaceTitle}
          text={account.name}
          onClick={async () => {
            await dispatch({ type: "clickAccount", data: account });
            props?.history.push("/theEye/login");
          }}
        />
      </div>
    )
  })}
  </div>;
}

export default EyeAccountList;