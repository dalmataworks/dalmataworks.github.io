import dalmataworksLogo from './assets/dalmataworkssvg.svg'
import './App.css'
import { Link } from 'react-router-dom';

function Home() {
    const year = (new Date).getFullYear()

    return (
        <div className="App">
            <a href="https://github.com/dalmataworks" className="flex justify-center">
            <img src={dalmataworksLogo} className="logo pt-0" alt="DalmataWorks logo" />
            </a>
        <h1 className="text-xl">DalmataWorks</h1>
        <div className="card p-4 text-base">
            <button className="p-3">
            Leader in next-gen web technologies.
            </button>
        </div>
        <Link to={"/paperwork"}>
            <div className="card p-4 text-base">
                <button className="p-3">
                PaperWork &copy; <a>Clique para Ver</a>
                </button>
            </div>
        </Link>
        <p className="read-the-docs">
            &copy; {year} DalmataWorks &middot; Based on <a href="https://vitejs.dev">Vite Getting Started 😂</a> &middot; <a href="https://github.com/dalmataworks/dalmataworks.github.io">Repo on Github</a>
        </p>
        </div>
    )
}

export default Home;