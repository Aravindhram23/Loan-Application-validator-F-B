import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';
import { getLoanApplication } from '@/components/service/validateLoanApplication';// Adjust the import path as necessary

const Details = () => {
    const [loanApplications, setLoanApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLoanApplications = async () => {
            try {
                const data = await getLoanApplication();
                setLoanApplications(data);
            } catch (err) {
                console.error('Error getting loan application:', err);
                setError('Failed to fetch loan applications');
            } finally {
                setLoading(false);
            }
        };

        fetchLoanApplications();
    }, []);

    const handleValidate = (id: string) => {
        // Implement API call to validate application
        console.log('Validate application with ID:', id);
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:8080/api/loan-applications/${id}`);
            console.log('Deleted application with ID:', id);
            setLoanApplications(loanApplications.filter(app => app.id !== id)); // Remove deleted item from list
        } catch (err) {
            console.error('Failed to delete application:', err);
        }
    };

    const handleUpdate = (id: string) => {
        // Redirect to update page or show a form to update
        console.log('Update application with ID:', id);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">All Loan Applications</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Information</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Social Security Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Income</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Score</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanApplications.map((application) => (
                            <tr key={application.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.fullName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.address}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.dateOfBirth}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.contactInformation}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.socialSecurityNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.incomeVerification}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{application.creditScore}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleValidate(application.id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                    >
                                        Validate
                                    </button>
                                    <button
                                        onClick={() => handleDelete(application.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(application.id)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-2"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Details;