import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeContent } from "../components/HomeContent";


import '../styles/home.scss'

export function Home(){
    return(
        <div className="homepage">
            <Header />
            <HomeContent />
            <Footer />
        </div>
    );
}