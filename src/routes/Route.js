import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../providers/Auth";

export const Route = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { authToken } = useAuth(); //mudar de acordo com o provider Auth

    return (
        <ReactRoute
            {...rest}
            render={() =>
                isPrivate === !!authToken ? (
                    <Component />
                ) : (
                    <Redirect to={isPrivate ? "/" : "/recipes"} />
                )
            }
        />
    );
};
