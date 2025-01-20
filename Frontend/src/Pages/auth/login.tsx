import Header from '../../Components/login/Header';
import Form from '../../Components/login/Form';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="bg-[var(--color-gray)] min-h-screen flex flex-col">
            <Header />
            <main className="flex flex-grow justify-center items-center">
                <div className="w-full max-w-md mx-auto">
                    <Form />
                    <div className='flex justify-center py-4 mt-4'>
                        <h3 className='font-normal text-[var(--color-white)]'>¿Aún no tienes una cuenta? <Link to='/register' ><a href="" className='text-blue-500 underline'>Registrate</a></Link></h3>
                    </div>
                </div>
            </main>
        </div>
    );
}