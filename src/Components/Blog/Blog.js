import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <div className="qna_one px-3 md:px-0">
                <h1 className='text-3xl md:text-4xl font-semibold text-center pt-10 md:pt-20 pb-8'>What is the difference between JavaScript and NodeJS?</h1>
                <img className='w-full md:w-2/5 mx-auto' src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" />
                <div className="content py-10 ">
                    <blockquote className="p-4 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7">
                        <p >“JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node. js, on the other hand, is a server-side scripting language based on Google Chrome V8.”</p>
                    </blockquote>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/2">
                                        JavaScript
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-1/2">
                                        NodeJS
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Javascript is a programming language that is used for writing scripts on the website.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        NodeJS is a Javascript runtime environment.
                                    </th>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Javascript can only be run in the browsers.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        We can run Javascript outside the browser with the help of NodeJS.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        It is basically used on the client-side.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        It is mostly used on the server-side.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Javascript is capable enough to add HTML and play with the DOM.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Nodejs does not have capability to add HTML tags.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Javascript is used in frontend development.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Nodejs is used in server-side development.
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

            <div className="qna_one px-3 md:px-0">
                <h1 className='text-3xl md:text-4xl font-semibold text-center pt-10 md:pt-20 pb-8'>What is the difference between SQL and NoSQL?</h1>
                <img className='w-full md:w-2/5 mx-auto' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" alt="" />
                <div className="content py-10 ">
                    <blockquote className="p-4 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7">
                        <p >“SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.”</p>
                    </blockquote>


                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/2">
                                        SQL
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-1/2">
                                        NoSQL
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        These databases have fixed or static or predefined schema.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        They have dynamic schema.
                                    </th>

                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        These databases are not suited for hierarchical data storage.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        These databases are best suited for hierarchical data storage.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        These databases are best suited for complex queries.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        These databases are not so good for complex queries.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800 border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Vertically Scalable.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Horizontally scalable.
                                    </th>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Follows ACID property.
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                                        Follows CAP(consistency, availability, partition tolerance).
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

            <div className="qna_one px-3 md:px-0">
                <h1 className='text-3xl md:text-4xl font-semibold text-center pt-10 md:pt-20 pb-8'>What is the purpose of JWT and how does it work?</h1>
                <img className='w-full md:w-2/5 mx-auto' src="https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=1800/api/edpresso/shot/5200342017376256/image/5259990858727424.png" alt="" />
                <div className="content py-10 ">
                    <blockquote className="p-4 bg-gray-200 italic border-l-4 rounded-lg text-neutral-600 border-neutral-500 quote w-4/6 mx-auto mb-7">
                        <p >“JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.”</p>
                    </blockquote>

                    <div className='mt-10'>
                        <h1 className='text-2xl mb-2'>How does JWT works?</h1>
                        <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                        <ul className='list-disc mt-5 ml-5'>
                            <li>
                                User sign-in using username and password or google/facebook.
                            </li>
                            <li>
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                            </li>
                            <li>
                                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                            </li>
                            <li>
                                Resource server then verifies the authenticity of the token using the secret salt/ public key.
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blog;