import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      
    }
  }
`;

class componentName extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default componentName
