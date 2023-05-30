import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"

export default function Main({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
