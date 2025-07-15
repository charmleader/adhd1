import React, { useState } from "react";
import { Link } from "react-router-dom";
import QnaCardSlider from "../components/QnaCardSlider";
import CardWrapper from "../components/CardWrapper";
import { cardDataSet } from "../data/cardDataSet";
import { qnaList } from "../data/qnaList";
import { ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";

const FaqPage = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleQuestionClick = (questionId, questionTitle) => {
    setSelectedId(questionId);
    setSelectedTitle(questionTitle);
  };

  const categories = {
    "ADHD 기본 정보": ["q1", "q2"],
    "증상과 치료": ["q3", "q4", "q5"],
    "교육과 환경": ["q6", "q7", "q8"]
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
                목록으로 돌아가기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="py-8">
        {!selectedId ? (
          <div className="max-w-4xl mx-auto p-4">
            <CardWrapper>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  💬 자주 묻는 질문 (FAQ)
                </h2>
                <p className="text-lg text-muted-foreground">
                  ADHD 관련 자주 묻는 질문들을 카테고리별로 정리했습니다
                </p>
              </div>

              {Object.entries(categories).map(([category, questionIds]) => (
                <div key={category} className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>{category}</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {questionIds.map((questionId) => {
                      const question = qnaList.find(q => q.id === questionId);
                      if (!question) return null;
                      
                      return (
                        <button
                          key={questionId}
                          onClick={() => handleQuestionClick(questionId, question.title)}
                          className="w-full text-left p-4 bg-gradient-to-r from-white to-primary/5 hover:from-primary/5 hover:to-primary/10 border border-border hover:border-primary/30 rounded-lg transition-all duration-200 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium text-foreground group-hover:text-primary mb-1">
                                {question.title}
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {question.keywords.slice(0, 3).map((keyword, idx) => (
                                  <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/5 rounded-lg border border-primary/10">
                <div className="text-center">
                  <h4 className="font-semibold text-lg mb-2">찾는 질문이 없나요?</h4>
                  <p className="text-muted-foreground mb-4">
                    직접 궁금한 점을 질문해보시거나 자가진단을 통해 더 구체적인 도움을 받아보세요
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/ask" className="btn-primary">
                      직접 질문하기
                    </Link>
                    <Link to="/checklist" className="btn-secondary">
                      자가진단 받기
                    </Link>
                  </div>
                </div>
              </div>
            </CardWrapper>
          </div>
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
              <Link to="/ask" className="btn-secondary text-center">
                직접 질문하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqPage;