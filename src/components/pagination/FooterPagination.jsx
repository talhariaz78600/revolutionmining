"use client"
import React, { useState, useEffect } from 'react';
import { useRouter} from 'next/navigation';
// import { useNavigate } from 'react-router-dom';

const FooterPagination = ({ stoped, pagelength, pageno, pagename }) => {
    const [back, setBack] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const div = Math.floor(stoped / pagelength);
        const rem = stoped % pagelength;
        if (rem !== 0) {
            setBack(div + 1);
        } else {
            setBack(div);
        }
    }, [pageno, pagelength, stoped]);

    const handleNextPage = async (i) => {
        router.push(`${pagename}/${i}`);
    };

    const renderArrayElements = () => {
        const elements = [];
        if (pageno <= 2) {
            for (let i = 1; i <= pageno + 1; i++) {
                elements.push(
                    <button
                        key={i}
                        className={`items-center justify-center px-3 py-4 text-lg leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${i === pageno ? 'bg-primary' : ''} ${back === 1 || (i - 1) * pagelength >= stoped ? 'hidden' : ''}`}
                        onClick={() => { handleNextPage(i); }}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            elements.push(
                <button key={1} className="items-center justify-center px-3 py-4 text-lg leading-tight  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white " onClick={() => { handleNextPage(1); }}>
                    1
                </button>,
                <button key={pageno - 0.1} className="items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">
                    ...
                </button>,
                <button
                    key={pageno - 1}
                    className={`items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
                    onClick={() => { handleNextPage(pageno - 1); }}
                >
                    {pageno - 1}
                </button>,
                <button key={pageno} className={`items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `} onClick={() => { handleNextPage(pageno); }}>
                    {pageno}
                </button>,
                <button
                    key={pageno + 1}
                    className={`items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${(pageno) * pagelength >= stoped ? 'hidden' : ''}`}
                    onClick={() => { handleNextPage(parseInt(pageno) + 1); }}
                >
                    {parseInt(pageno) + 1}
                </button>
            );
        }
        return elements;
    };

    return (
        <div className='' style={{ float: 'right',color:"white", border:"1px solid white" }}>
            {renderArrayElements()}
            <button className={`${back === 1 ? 'hidden' : ''} items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}>...</button>
            <button className={`items-center justify-center px-3 py-4 text-lg leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  ${pageno === back ? 'hidden' : ''}`} onClick={() => { handleNextPage(back || 0); }}>
                {back}
            </button>
        </div>
    );
};

export default FooterPagination;










