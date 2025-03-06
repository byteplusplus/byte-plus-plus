import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold uppercase mb-4">Oops! An error occurred.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button className=
                    "border-1 border-indigo-200 text-indigo-400 mt-6 hover:border-transparent hover:bg-indigo-500 hover:text-white">
                    Go Home</button>
            </NavLink>
      </div>
    )
}
