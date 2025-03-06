import { Outlet } from "react-router-dom"
import { Footers } from "../UI/Footers"
import { Headers } from "../UI/Headers"

export const AppLayout = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footers />
        </>
    )
}
