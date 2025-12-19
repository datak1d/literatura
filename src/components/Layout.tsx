const Layout = ({ children }) => {
    return <div className="layout">
        {children}
    </div>
}

Layout.Header = ({children}) => <header>{children}</header>
Layout.Content = ({children}) => <main className="content">{children}</main>
Layout.Footer = ({children}) => <footer className="bg-sky-300">{children}</footer>

export default Layout;