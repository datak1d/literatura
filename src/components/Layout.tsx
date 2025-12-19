const Layout = ({ children }) => {
    return <div className="flex flex-col h-screen justify-between">
        {children}
    </div>
}

Layout.Header = ({children}) => <header className="flex justify-between items-center p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">{children}</header>
Layout.Content = ({children}) => <main className="mb-auto">{children}</main>
Layout.Footer = ({children}) => <footer className="flex p-5 bg-blue-500 text-stone-100 align-middle justify-center">{children}</footer>

export default Layout;