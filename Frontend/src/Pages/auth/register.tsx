import { Link } from "react-router-dom";
import Form from "../../Components/register/Form";
import Header from "../../Components/register/Header";

export default function Register(){
    return(
        <div className="bg-[var(--color-gray)] min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-grow justify-center items-center">
            <div className="w-full max-w-md mx-auto">
            <Form />
                <div className='flex justify-center py-4 mt-4'>
                    <h3 className='font-normal text-[var(--color-white)]'>¿Ya tienes una cuenta? <Link to='/login' ><a href="" className='text-blue-500 underline'>Iniciar sesión</a></Link></h3>
                </div>
            </div>
        </main>
        </div>
    )
}