// pages/details.tsx
import { useRouter } from 'next/router';
import Layout from '@/components/layout';

const Details = () => {
  const router = useRouter();
  const { fullName, address, dateOfBirth, contactInformation, socialSecurityNumber, incomeVerification, creditScore } = router.query;

  const handleValidate = () => {
    // Implement API call to validate application
    console.log('Validate application');
  };

  const handleDelete = () => {
    // Implement API call to delete application
    console.log('Delete application');
  };

  const handleUpdate = () => {
    // Implement API call to update application
    console.log('Update application');
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Application Details</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Date of Birth:</strong> {dateOfBirth}</p>
        <p><strong>Contact Information:</strong> {contactInformation}</p>
        <p><strong>Social Security Number:</strong> {socialSecurityNumber}</p>
        <p><strong>Income Verification:</strong> {incomeVerification}</p>
        <p><strong>Credit Score:</strong> {creditScore}</p>
        <div className="mt-4 flex gap-4">
          <button
            onClick={handleValidate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Validate
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Update
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
