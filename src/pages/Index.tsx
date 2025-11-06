import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Zomato Drive Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Streamlined analytics and insights for Key Account Managers
        </p>
        <Button 
          size="lg" 
          onClick={() => navigate("/kam-analytics")}
          className="mt-8"
        >
          View KAM Analytics
        </Button>
      </div>
    </div>
  );
};

export default Index;
