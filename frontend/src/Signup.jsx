import React from 'react'

const style = {
    leftWrapper: 'flex w-full flex-col justify-center  bg-white text-black h-screen',
    input: `peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600`,
    label: `absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm`,
    button: `mt-10 px-4 py-2 rounded bg-[purple] hover:bg-rose-400 text-white font-semibold text-center block focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer`,
    link: `mt-4 block text-sm text-center font-medium text-[purple] hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500`,
    svg: `relative h-80 bg-[purple] rounded-bl-4xl`,
    title: `text-4xl font-semibold text-gray-900 text-center`,
    inputContainer: `mt-10 relative`,
}

const Signup = () => {
    return (

        <div className={style.leftWrapper}>
            <div className='h-screen'>
                <div className={style.svg}>
                    <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <h1 className={style.title}>Sign up!</h1>
                <form class="mt-20">
                    <div className={style.inputContainer}>
                        <input name="text" className={style.input} />
                        <label className={style.label}>Name</label>
                    </div>
                    <div className={style.inputContainer}>
                        <input type="text" className={style.input} />
                        <label className={style.label}>Email address</label>
                    </div>
                    <div className={style.inputContainer}>
                        <input type="password" className={style.input} />
                        <label className={style.label}>Password</label>
                    </div>
                    <button className={style.button}>Signup</button>
                </form>
                <a className={style.link}> Already have an account? </a>
            </div>
        </div>

    )
}

export default Signup