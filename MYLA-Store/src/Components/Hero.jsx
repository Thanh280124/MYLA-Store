import React from 'react'

function Hero() {
  return (
    <section>
        <div className='bg-custom-gradient pb-15'>
            <div className='container mx-auto px-5 py-20 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Chào mừng đến với MYLA Store</h1>
                <p className='text-lg md:text-2xl w-auto text-white mb-8 mt-8'>Nơi bạn tìm thấy những đồ ăn tốt nhất cho cuộc sống hàng ngày, ngon bổ rẻ! Hãy mua ngay</p>
                <button className='bg-green-600 text-white text-xl px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300'>Khám Phá Ngay</button>
            </div>
        </div>
    </section>
  )
}

export default Hero
