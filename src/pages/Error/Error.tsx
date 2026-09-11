import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './Error.css'

export type ErrorPageProps = {
    statusCode?: number;
    message?: string;
    description?: string;
}

export const Error = ({
    statusCode = 404, message = 'Page Not Found',
    description = 'The page you are looking for might have been removed or is temporarily unavailable.' }
    : ErrorPageProps) => {

    const navigate = useNavigate();

    return (
        <div className="error-container">
            <div className="error-content">
                <div className="error-code">{statusCode}</div>

                <h1 className="error-heading">{message}</h1>

                <p className="error-description">
                    {description}
                </p>

                <div className="error-actions">
                    <button
                        className="error-btn error-btn-primary"
                        onClick={() => navigate('/')}>

                        <Home size={18} />
                        Go to Home
                    </button>

                    <button
                        className="error-btn error-btn-secondary"
                        onClick={() => navigate(-1)}>
                            
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>

                <div className="error-footer">
                    <p>Error ID: {Date.now()}</p>
                </div>
            </div>
        </div>
    )
}