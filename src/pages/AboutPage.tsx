import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">About Us</h1>
        <p className="text-gray-600 mb-6">Coming Soon</p>
        <Link 
          to="/" 
          className="inline-block text-primary hover:text-primary/80 underline transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

