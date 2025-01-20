import logo from '../../assets/image/usuario.png'

export default function Header() {
    return(
        <>
        <header>
            <nav className='flex items-center px-5 py-5 gap-3'>
                <img src={logo} alt="logo" className='h-8 text-white'/>
                <h2 className='font-bold text-[var(--color-white)]'>Registro</h2>
            </nav>
            <div className='bg-[var(--color-white)] py-px ml-5 mr-5'>
            </div>
        </header>
        </>
    )
}