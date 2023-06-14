import { createBrowserRouter } from "react-router-dom";
import Index from "./Index.jsx";
import Main from '../layouts/Main.jsx'
import SignIn from "./SignIn.jsx";
/* import Register from "./Register" */

const router = createBrowserRouter([  
    {path: '/', 
    element: <Main/>, 
    children:[
       {path: '/', element: <Index/>},
       {path: '/index', element: <Index/>},
       {path: '/signin', element: <SignIn/>}, 
  /*      {path: '/register', element: <Register/>}  */
    ]}/* ,{
        path: '/admin',
        element: <MainAdmin/>,
        children:[

        ]
    } */
    
])

export default router 