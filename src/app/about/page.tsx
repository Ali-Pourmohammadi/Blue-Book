import React from 'react';

export default function Page() {
  return (
    <div className="h-full w-full bg-gradient-to-l from-gray-200 to-blue-500 p-5 relative">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-10">Our Story</h1>
        <p className="text-lg text-center my-5 text-gray-100">
          Our journey began with a simple idea: to create a platform that not only performs exceptionally but also offers ease of customization and top-notch security. We are committed to delivering the best user experience by constantly innovating and improving our services.
        </p>
        <div className="flex justify-around w-full mb-10">
          <div className="column bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.293 15.707l5-5a1 1 0 00-1.414-1.414L11 12.586V3a1 1 0 00-2 0v9.586L6.121 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.586-.293z" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Fast Performance</h2>
            <p>Our website is optimized for speed, ensuring a smooth user experience.</p>
          </div>
          <div className="column bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center mx-4">
            <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Easy Customization</h2>
            <p>We offer easy-to-use customization options to personalize your experience.</p>
          </div>
          <div className="column bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <svg className="w-16 h-16 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Secure</h2>
            <p>Your security is our priority, with top-notch protection measures in place.</p>
          </div>
        </div>
      
      </div>

      <div className="absolute top-100 left-1/2 transform -translate-x-1/2 w-11/12 md:w-2/3 text-center p-8 rounded-lg shadow-lg border border-gray-300 bg-slate-200">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">More About Our Website</h2>
        <p className="text-gray-700 mb-2">
          Our platform is designed to cater to all your needs with unparalleled performance and customization options. 
          We prioritize security to ensure your data is always safe. Whether you're a business or an individual, our tools 
          and services are crafted to provide the best possible experience. Our team is dedicated to pushing the boundaries 
          of innovation, consistently integrating the latest advancements in technology to keep our platform ahead of the curve. 
          With a focus on user-friendly interfaces and seamless integration, we strive to make your interaction with our platform 
          as intuitive as possible. Our customer support is always ready to assist you with any queries or issues, ensuring that 
          you have a smooth and satisfactory experience. Join us on this journey to explore the limitless possibilities that our 
          platform offers, and let us help you achieve your goals with efficiency and confidence.
          <br/><br/>
          We believe in the power of customization, giving you the freedom to tailor our services to fit your unique needs. 
          Our development team works tirelessly to ensure that the platform is always up-to-date with the latest features and 
          improvements, providing you with a cutting-edge experience. We also place a strong emphasis on community feedback, 
          listening to our users and incorporating their suggestions to enhance our offerings.
          <br/><br/>
     
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <svg className="w-16 h-16 text-blue-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21H3V11h18v10z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Discord Community</h3>
            <p className="text-gray-700">Join our community on Discord for discussions and updates.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <svg className="w-16 h-16 text-blue-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Blog</h3>
            <p className="text-gray-700">Read our latest articles and insights on our blog.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <svg className="w-16 h-16 text-blue-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11v10m0-10l9 8m4-4l4-4m-4 4l-4 4" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Newsletter Subscription</h3>
            <p className="text-gray-700">Subscribe to our newsletter for updates and special offers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
