// import { useEffect } from "react";
// import { useGlobalContext } from "./GlobalContext";
// import { Actions, useDispatcher } from "./action_dispatcher";

// const NotLoguedInRouteComponent = () => {
//     const dispatcher = useDispatcher();

//     useEffect(() => {
//         console.info('Not logued in route :: ', dispatcher)
//         dispatcher.dispatch(Actions.logout);       
//     }, []);
//     return <></>;
// };

// const privateRouteWrapper = (Component: any) => {
//     const { user } = useGlobalContext();

//     if (!user.isLoguedIn) return NotLoguedInRouteComponent;

//     const _WrapperComponent = (props: any) => {
//         return (
//             <Component {...props} />
//         );
//     }
//     return _WrapperComponent;
// };

// export default privateRouteWrapper;
