import { Outlet } from "react-router-dom"
import { ContentWrapper } from "../ui/components/ContentWrapper"
import { Header } from "../ui/components/Header"
import { Footer } from "../ui/components/Footer"

export const Layout = () => {
    return <>
        <Header name="Ankit Sharma" />
        <main>
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
        </main>
        <Footer />
    </>
}