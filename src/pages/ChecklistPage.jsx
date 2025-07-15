import React, { useState } from "react";
import AdhdChecklist from "../components/AdhdChecklist";
import ChecklistResult from "../components/ChecklistResult";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ChecklistPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({ score: 0, answers: [] });

  const handleComplete = (score, answers) => {
    setResult({ score, answers });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setResult({ score: 0, answers: [] });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>홈으로 돌아가기</span>
            </Link>
            
            {submitted && (
              <button 
                onClick={handleReset}
                className="btn-secondary text-sm"
              >
                다시 체크하기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      {!submitted ? (
        <AdhdChecklist onComplete={handleComplete} />
      ) : (
        <ChecklistResult
          name="익명 보호자"
          score={result.score}
          answers={result.answers}
        />
      )}
      
      {/* 추가 링크 섹션 */}
      {submitted && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-accent/10 to-primary/5 p-6 rounded-xl border border-primary/10 text-center">
            <h3 className="text-lg font-semibold mb-4">
              🔍 더 자세히 알아보기
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiet-adhd" className="btn-primary text-center">
                조용한 ADHD 정보 보기
              </Link>
              <Link to="/ask" className="btn-secondary text-center">
                전문가에게 질문하기
              </Link>
              <Link to="/faq" className="btn-secondary text-center">
                자주 묻는 질문 보기
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChecklistPage;