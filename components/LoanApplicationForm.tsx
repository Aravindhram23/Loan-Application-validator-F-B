// src/components/LoanApplicationForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { validateLoanApplication, createLoanApplication } from '@/components/service/validateLoanApplication';
import Link from 'next/link';
 
interface LoanApplication {
    id : number;
    fullName : string;
    address : string;
    dob : string;
    contactInfo : string;
    ssn : string;
    income : number;
    creditScore : number;
}
 
const LoanApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<LoanApplication>({
    id: 0,
    fullName: '',
    address: '',
    dob: '',
    contactInfo: '',
    ssn: '',
    income: 0,
    creditScore: 0
  });
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate the loan application
      const validationResult = await validateLoanApplication(formData);
      console.log('Validation result:', validationResult);
 
      if (validationResult.isValid) {
        // Create the loan application if valid
        const createdApplication = await createLoanApplication(formData);
        console.log('Loan application created:', createdApplication);
      } else {
        console.error('Validation errors:', validationResult.errors);
      }
    } catch (error) {
      console.error('Error during loan application process:', error);
    }
  };
 
  return (
    <div className="min-h-screen bg-white py-8">
        
        <div className="flex justify-center">
          <div className="bg-white p-5 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">LOAN APPLICATION</h2>
            <form className="space-y-2" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>

    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Id</label>
    <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text"
        name="Id"
        value={formData.id}
        onChange={handleChange}
        placeholder="Id"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Full Name</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Address</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Date of Birth</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="date"
        name="dateOfBirth"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Contact Number</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        type="text"
        name="contactInformation"
        value={formData.contactInfo}
        onChange={handleChange}
        placeholder="Contact Information"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Social security number</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        type="text"
        name="socialSecurityNumber"
        value={formData.ssn}
        onChange={handleChange}
        placeholder="Social Security Number"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2">Income</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="number"
        name="income"
        value={formData.income}
        onChange={handleChange}
        placeholder="Income"
        required
      />
      <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 m-2`">Credit</label>
      <input
        className="block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="number"
        name="creditScore"
        value={formData.creditScore}
        onChange={handleChange}
        placeholder="Credit Score"
        required
      />
      <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 m-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
  );
};
 
export default LoanApplicationForm;