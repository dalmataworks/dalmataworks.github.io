import dalmataworksLogo from './assets/dalmataworkssvg.svg'
import './App.css'
import { Link } from 'react-router-dom';

function PaperWork() {
    const year = (new Date).getFullYear()

    return (
        <div className="App">
            <Link to={"/"} className="flex justify-center">
                <img src={dalmataworksLogo} className="logo pt-0" alt="DalmataWorks logo" />
            </Link>
        <h1 className="text-xl">PaperWork &copy; &middot; Guia para design de Interfaces <Link to={"/"}>Voltar</Link></h1>
        <div className="card p-4 text-base">
            <div className="p-3 text-slate-200">
                PaperWork é uma especificação para design de interfaces desenvolvida pela DalmataWorks, representa nosso esforço e anos de desenvolvimento com foco em deixar interfaces mais humanas e amigáveis, se você chegou até aqui
                é porque possui interesse em entender como as interfaces PaperWork funcionam, abaixo você confere um pouco mais sobre a especificação.
            </div>
        </div>
        <div className="card p-4 text-base">
            <h2 className={"text-xl"}>Ações centralizada.</h2>
            <div className={"text-x text-slate-400"}>
                <span className='text-slate-300 font-bold'>Faça:</span> As interfaces precisam ter uma zona central onde o usuário possa realizar todas as ações.
            </div>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Não faça:</span> As interfaces possuem multiplas zonas centrais onde o usuário pode realizar as ações.
            </div>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Benefícios:</span> Menos Stress ao realizar ações que podem precisar de repetição.
            </div>
        </div>
        <div className="card p-4 text-base">
            <h2 className={"text-xl"}>DUOCOLOR &copy;.</h2>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Faça:</span> Uma paleta de cor dupla, cores leves são essenciais.
            </div>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Tenha cuidado:</span> Uma paleta de cor que possui além de 3 cores, cores não leves (útil para o tema noturno).
            </div>
        </div>
        <div className="card p-4 text-base">
            <h2 className={"text-xl"}>Open Spec &copy;.</h2>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Faça:</span> As interfaces são criadas seguindo o conceito de que você as cria mas o usuário quem escolhe
                como utiliza-las, interfaces leves e que oferecem funcionalidade.
            </div>
            <div className={"text-x text-slate-400"}>
            <span className='text-slate-300 font-bold'>Não faça:</span> O usuário possui apenas uma linha de criação ou de ação para uma determinada interface.
            </div>
        </div>
        <p className="read-the-docs">
            &copy; {year} DalmataWorks &middot; Based on <a href="https://vitejs.dev">Vite Getting Started 😂</a> &middot; <a href="https://github.com/dalmataworks/dalmataworks.github.io">Repo on Github</a>
        </p>
        </div>
    )
}

export default PaperWork;