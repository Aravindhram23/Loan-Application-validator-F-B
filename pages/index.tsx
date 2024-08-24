// pages/index.tsx
import Layout from '@/components/Layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-8">
        
        <div className="flex justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">LOAN APPLICATION</h2>
            <form className="space-y-2">
              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="1234 Elm Street"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Contact Information */}
              <div>
                <label htmlFor="contact-info" className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                <input
                  type="text"
                  id="contact-info"
                  name="contact-info"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Phone or Email"
                />
              </div>

              {/* Social Security Number */}
              <div>
                <label htmlFor="ssn" className="block text-sm font-medium text-gray-700 mb-1">Social Security Number</label>
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="XXX-XX-XXXX"
                />
              </div>

              {/* Income Verification */}
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1">Income Verification</label>
                <input
                  type="text"
                  id="income"
                  name="income"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Annual Income"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <Link href="/details">
                <span className="text-blue-500 hover:text-blue-700">Go to Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
