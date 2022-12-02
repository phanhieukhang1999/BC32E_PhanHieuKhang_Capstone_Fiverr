import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100 py-36">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 mt-5">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl mb-5">Xin lỗi, trang đang trong quá trình phát triển !</p>
                        {/* <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p> */}
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold text-white rounded bg-green-500 dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
