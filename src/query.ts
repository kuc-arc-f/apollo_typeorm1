
export const GQL_QUERY = `
  type Query {
    hello: String
    task(id: Int): Task
    tasks: [Task]    
  }
`;