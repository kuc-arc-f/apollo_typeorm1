const {gql} = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

const scheme = {
  getTypeDefs : function(){
    return gql`
    type Task {
      id: Int!
      title: String
    }
    ${GQL_QUERY}
    ${GQL_MUTATION}
  `;
  }
}
export default scheme;
