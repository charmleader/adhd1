import React, { useState } from "react";
import { Link } from "react-router-dom";
import QnaChatSearch from "../components/QnaChatSearch";
import QnaCardSlider from "../components/QnaCardSlider";
import { cardDataSet } from "../data/cardDataSet";
import { qnaList } from "../data/qnaList";
import { ArrowLeft } from "lucide-react";

const AskPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSelect = (questionId) => {
    setSelectedId(questionId);
    const question = qnaList.find(q => q.id === questionId);
    setSelectedTitle(question ? question.title : "");
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
            
            {selectedId && (
              <button 
                onClick={() => {
                  setSelectedId(null);
                  setSelectedTitle("");
                }}
                className="btn-secondary text-sm"
              >
                새로운 질문하기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="py-8">
        {!selectedId ? (
          <QnaChatSearch onSelect={handleSelect} />
        ) : (
          <QnaCardSlider 
            cards={cardDataSet[selectedId]} 
            title={selectedTitle}
          />
        )}
      </div>

      {/* 추가 도움 섹션 */}
      {selectedId && (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-accent/10 to-primary/5 p-6 rounded-xl border border-primary/10">
            <h3 className="text-lg font-semibold text-center mb-4">
              🔍 더 많은 도움이 필요하신가요?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checklist" className="btn-primary text-center">
                자가진단 체크하기
              </Link>
              <Link to="/quiet-adhd" className="btn-secondary text-center">
                조용한 ADHD 알아보기
              </Link>
              <Link to="/faq" className="btn-secondary text-center">
                모든 Q&A 보기
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 전문가 상담 안내 */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-warning/10 border border-warning/20 p-6 rounded-lg">
          <div className="text-center">
            <h4 className="font-semibold text-warning mb-2">⚠️ 전문가 상담이 필요한 경우</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              이 앱의 정보는 참고용이며 의학적 진단을 대체할 수 없습니다. 
              아이의 증상이 지속되거나 일상생활에 지장을 준다면 반드시 소아정신과, 발달센터 등에서 전문가와 상담하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskPage;