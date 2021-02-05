import React from "react";
import PropTypes from "prop-types";
import CastCard from "./CastCard";
import { Grid } from 'semantic-ui-react'
import {HashLoader} from "react-spinners";

const CastList = ({casts}) => {
    console.log("CastList.js -> casts -> ", casts);

    const emptyList = (
      <p>There are no casts yet.</p>
    );

    const castList = (
      <div>
          <HashLoader
              color={"#36bdb3"}
              loading={casts.fetching}/>
          {
              casts.error.response ?
                  <h3>Error retrieving data!</h3> :
                  <Grid stackable columns={3}>
                      {
                          casts.castList.map(cast =>
                              <CastCard
                                  key={cast.id}
                                  cast={cast}/>
                          )
                      }
                  </Grid>
          }
      </div>
    );

    return (
        <div>
            {
                casts.length === 0 ? emptyList : castList
            }
        </div>
    )
};

CastList.propTypes = {
    cast: PropTypes.shape({
        castList: PropTypes.array.isRequired
    }).isRequired
}

export default CastList;

/*
    1) Create Stateless Component
    2) propTypes
    3) console.log
    4) emptyList and castList const
    5) casts.castList.map
    6) <h3>Error retrieving data!</h3>
    7) HashLoader
*/