import React from 'react'
import AvisoPrivacidad from '../pages/policy';
import { Link, Router, Routes } from "react-router-dom";


function FooterA() {
    return (
       

            <footer className="rounded-lg shadow m-4 dark:bg-gray-800 mt-10">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">EntrenAT™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6"><Link to="/policy">quienes somos</Link></a>
                        </li>
                        <li>
                            <a className="hover:underline me-4 md:me-6"><Link to="/policy">Políticas de privacidad</Link></a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                       
                    </ul>
                </div>
            </footer>


    
    )
}

export default FooterA;