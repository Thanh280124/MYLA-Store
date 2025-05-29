// src/Footer.jsx
import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaWhatsappSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
   <section className='bg-[#35DB4E] text-white py-10'>
    <div className='container mx-auto px-5 flex flex-col md:flex-row justify-around items-center gap-10'>
        <div className='text-2xl'>
           <p className='mb-2'>{t('email')}: <span>ThanhTran23@gmail.com</span></p>
            <p>{t('phone2')}: <span>033453563</span></p>
        </div>

        <div>
            <ul className='flex flex-row gap-4'>
                <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><AiFillFacebook size={50}/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaSquareInstagram size={50}/></a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare size={50}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size={50}/></a> 
                </li>
            </ul>
        </div>
    </div>
    <p className='text-2xl text-center mt-10 -mb-7 playwrite-ro'>{t('slogan')}</p>
   </section>
  )
}

export default Footer;