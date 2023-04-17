import Header from "../header"
import Footer from "../footer"

export default function Layout(props) {
    return (
        <div className="h-full w-full">
            <Header/>
            <main className="pt-[110px]"> {props.children} </main>
            <Footer/>
        </div>
    )
}