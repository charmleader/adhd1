import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-lg text-muted-foreground mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>🏠 홈으로 돌아가기</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="/checklist" className="btn-secondary">자가진단</a>
            <a href="/quiet-adhd" className="btn-secondary">조용한 ADHD</a>
            <a href="/faq" className="btn-secondary">자주 묻는 질문</a>
            <a href="/ask" className="btn-secondary">질문하기</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
