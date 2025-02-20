import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useAuth } from "@/context/AuthProvider";

const SuccessPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/dashboard"), 3000); // Redirect after 3s
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">Payment Successful! 🎉</h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
      {user && (
        <p className="mt-4 text-lg font-semibold">
          Remaining Credits: <span className="text-blue-600">{user.credits}</span>
        </p>
      )}
      <p className="text-gray-500 mt-2">Redirecting to dashboard...</p>
    </div>
  );
};

export default SuccessPage;