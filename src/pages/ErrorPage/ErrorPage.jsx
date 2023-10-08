import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">NOT FOUND 404!</h1>
                    <p className="py-6">The page you are searching for does not exist.<br></br>
                    Please go back</p>
                    <Link className="btn rounded-none" to="/">Go back</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;