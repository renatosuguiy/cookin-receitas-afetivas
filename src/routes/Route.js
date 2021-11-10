// import { Redirect, Route as ReactRoute } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export const Route = ({
//     isPrivate = false,
//     component: Component,
//     ...rest
// }) => {
//     const { accessToken } = useAuth(); //mudar de acordo com o provider Auth

//     return (
//         <ReactRoute
//             {...rest}
//             render={() =>
//                 isPrivate === !!accessToken ? (
//                     <Component />
//                 ) : (
//                     <Redirect to={isPrivate ? "/" : "/dashboard"} />
//                 )
//             }
//         />
//     );
// };
