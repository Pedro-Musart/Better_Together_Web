import Header from "../header"
import Footer from "../footer"

export default function Layout(props) {
    return (
        <div className="h-full w-full">
            <Header/>
            <main className="pt-[110px] pb-10 px-5 lg:px-10"> {props.children} </main>
            <Footer/>
        </div>
    )
}