import NavBar from "./navbar"

const Layout = ({ children }: any) => {
    return (
        <div className="root">
            <NavBar />
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default Layout