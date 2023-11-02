import React from 'react'

const Navbar = () => {
    return (
        <div className='p-7'>
            <div className='flex items-center justify-around'>
                <nav className=''>
                    <ul className='flex items-center'>
                        <li className='mx-2 font-extrabold text-4xl'>
                            <svg width="21" height="41" viewBox="0 0 21 41" class="Logo_Mark__ubH3x" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6087 41V0C9.20309 0 0 9.15457 0 20.5C0 31.8454 9.20309 41 20.6087 41Z" fill="currentColor"></path>
                            </svg>
                        </li>
                        <li className='mx-2'>
                            <svg width="74" height="37" viewBox="0 0 74 37" class="Logo_Title__kN4iU Logo_Title_upraise__tz8M2" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation"><path d="M10.9647 29.4476C8.85232 29.4476 6.99651 28.9811 5.39932 28.0471C3.80011 27.1132 2.55752 25.8291 1.6675 24.1909C0.77849 22.5537 0.333984 20.6938 0.333984 18.6102C0.333984 16.5266 0.771417 14.6467 1.64729 12.9684C2.52317 11.2911 3.7597 9.97891 5.3579 9.0309C6.9561 8.08391 8.8109 7.61041 10.9233 7.61041C12.6185 7.61041 14.147 7.93544 15.5098 8.58449C16.8706 9.23355 17.9758 10.1404 18.8244 11.3041C19.672 12.4678 20.1933 13.8341 20.3872 15.4031H15.8432C15.5926 14.1852 15.0441 13.2051 14.1965 12.4608C13.3489 11.7164 12.2578 11.3442 10.9233 11.3442C9.67263 11.3442 8.59572 11.6693 7.69256 12.3183C6.78941 12.9674 6.10144 13.8341 5.62865 14.9155C5.15586 15.998 4.91946 17.2158 4.91946 18.5681C4.91946 19.9204 5.15485 21.0981 5.62865 22.1805C6.10144 23.263 6.78941 24.1157 7.69256 24.7376C8.59572 25.3606 9.67263 25.6716 10.9233 25.6716C12.174 25.6716 13.3135 25.3265 14.1753 24.6363C15.037 23.9461 15.6068 23.0332 15.8846 21.8966H20.3872C20.1923 23.3583 19.6851 24.6634 18.8658 25.813C18.0455 26.9637 16.9615 27.8565 15.6138 28.4915C14.2652 29.1265 12.7165 29.4455 10.9657 29.4455L10.9647 29.4476ZM23.9726 28.8386V0.550049H28.3913V28.8396L23.9726 28.8386ZM39.4818 29.3262C37.9805 29.3262 36.6945 29.0483 35.6247 28.4945C34.5548 27.9398 33.7416 27.1894 33.1859 26.2424C32.6293 25.2954 32.3525 24.2531 32.3525 23.1175C32.3525 21.1423 33.1375 19.5863 34.7074 18.4497C36.2773 17.3131 38.4665 16.7453 41.2739 16.7453H46.0685V14.9597C46.0685 13.8783 45.6786 12.9914 44.9017 12.3013C44.1228 11.6111 43.053 11.266 41.6912 11.266C40.3293 11.266 39.2666 11.577 38.5018 12.1999C37.7371 12.8229 37.2855 13.6475 37.1471 14.6758H32.7283C32.8667 13.1881 33.3395 11.916 34.1457 10.8607C34.9508 9.80536 36.0146 9.00081 37.335 8.44605C38.6544 7.89129 40.1212 7.61442 41.7336 7.61442C43.5399 7.61442 45.0957 7.9254 46.4029 8.54838C47.7091 9.17135 48.7103 10.0301 49.4053 11.1255C50.0994 12.221 50.4469 13.5001 50.4469 14.9607V28.8416H46.0695V25.5944C45.429 26.7039 44.5481 27.6037 43.4217 28.2939C42.2963 28.9841 40.983 29.3292 39.4828 29.3292L39.4818 29.3262ZM40.6072 25.9164C41.6629 25.9164 42.6084 25.6726 43.4419 25.1861C44.2764 24.6995 44.9219 24.0294 45.3805 23.1767C45.8392 22.324 46.0685 21.3981 46.0685 20.3969V19.5041H42.0659C40.3425 19.5041 39.0231 19.7819 38.1048 20.3357C37.1885 20.8905 36.7289 21.7091 36.7289 22.7915C36.7289 23.7385 37.0895 24.4959 37.8128 25.0647C38.5362 25.6325 39.4666 25.9174 40.6062 25.9174L40.6072 25.9164ZM57.9499 36.55L61.2433 28.6761L52.6553 8.26046H57.2407L63.5366 23.7244L69.7485 8.26046H74.334L62.5354 36.55H57.9489H57.9499Z" fill="currentColor"></path></svg>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className='flex items-center'>
                        <li className='mx-6 text-2xl font-normal'>Work</li>
                        <li className='mx-6 text-2xl font-normal'>Client</li>
                        <li className='mx-6 text-2xl font-normal'>Services</li>
                        <li className='mx-6 text-2xl font-normal'>About</li>
                        <li className='mx-6 text-2xl font-normal'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar