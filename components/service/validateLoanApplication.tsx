import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/loan-application';

interface LoanApplication {
    id: number;
    fullName: string;
    address: string;
    dob: string;
    contactInfo: string;
    ssn: string;
    income: number;
    creditScore: number;
}

interface ValidationResult {
    isValid: boolean;
    errors?: string[];
}

// Define AxiosError type manually
interface AxiosError extends Error {
    config: any;
    code?: string;
    request?: any;
    response?: any;
    isAxiosError: boolean;
    toJSON: () => object;
}

const isAxiosError = (error: any): error is AxiosError => {
    return error.isAxiosError === true;
};

export const validateLoanApplication = async (loanApplication: LoanApplication): Promise<ValidationResult> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/validate`, loanApplication);
        return response.data as ValidationResult;
    } catch (error) {
        console.error('Error validating loan application:', error);
        if (isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            }
        }
        throw error;
    }
};

export const createLoanApplication = async (loanApplication: LoanApplication) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/submit`, loanApplication);
        return response.data;
    } catch (error) {
        console.error('Error creating loan application:', error);
        if (isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            }
        }
        throw error;
    }
};

export const getLoanApplication = async (): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/details`);
        return response.data;
    } catch (error) {
        console.error('Error getting loan application:', error);
        if (isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            }
        }
        throw error;
    }
};

export const getLoanApplicationById = async (id: string): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/details/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error getting loan application by id:', error);
        if (isAxiosError(error)) {
            console.error('Axios error message:', error.message);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            }
        }
        throw error;
    }
};