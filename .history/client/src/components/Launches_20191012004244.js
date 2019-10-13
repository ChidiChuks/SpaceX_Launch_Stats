import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_date_local
      launch_success
    }
  }
`;

class componentName extends Component {
  render() {
    return (
      <div>
        <h1></h1>
      </div>
    )
  }
}

export default componentName
