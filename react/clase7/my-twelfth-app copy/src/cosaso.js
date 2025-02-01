{
    path: "/users/:userId",    
    element: <User />,
    loader: userLoader,
    action: userAction,
},



export async function userLoader({ params }) {
  
    console.log(params.userId);
    return null;
  }
  
