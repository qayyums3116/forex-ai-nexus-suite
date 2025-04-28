
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <h1 className="text-2xl font-bold">Loading Forex AI Nexus Suite...</h1>
      </div>
    </div>
  );
};

export default Index;
