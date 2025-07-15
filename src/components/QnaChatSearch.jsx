import React, { useState } from "react";
import { qnaList } from "../data/qnaList";
import CardWrapper from "./CardWrapper";
import { Search, MessageCircle, ArrowRight, Lightbulb, Sparkles } from "lucide-react";

const QnaChatSearch = ({ onSelect }) => {
  const [input, setInput] = useState("");
  const [matched, setMatched] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const searchQna = () => {
    if (!input.trim()) return;
    
    const lower = input.toLowerCase();
    const results = qnaList
      .map((item) => ({
        ...item,
        score: item.keywords.filter(k => lower.includes(k)).length
      }))
      .sort((a, b) => b.score - a.score);

    const bestMatch = results[0];
    if (bestMatch && bestMatch.score > 0) {
      setMatched(bestMatch);
      onSelect && onSelect(bestMatch.id);
    } else {
      setMatched(null);
      // 키워드 기반 제안
      const relatedQuestions = qnaList.filter(item => 
        item.keywords.some(keyword => 
          keyword.includes(lower) || lower.includes(keyword)
        )
      ).slice(0, 3);
      setSuggestions(relatedQuestions);
    }
  };

  const popularQuestions = [
    { text: "조용한 ADHD", id: "q2" },
    { text: "약물 치료", id: "q5" },
    { text: "감정 조절", id: "q3" },
    { text: "전문가 상담", id: "q4" }
  ];

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchQna();
    }
  };

  const handleQuestionClick = (questionId) => {
    const question = qnaList.find(q => q.id === questionId);
    if (question) {
      setMatched(question);
      setInput(question.title);
      onSelect && onSelect(questionId);
    }
  };

  return (
    <div className="content-container py-8">
      <CardWrapper>
        <div className="text-container mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            🤖 궁금한 점을 질문해보세요
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            ADHD 관련 궁금한 점을 입력하시면 키워드를 분석하여<br />
            <span className="text-primary font-semibold">가장 관련성 높은 답변</span>을 즉시 찾아드립니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative">
            <div className="flex rounded-2xl border-2 border-primary/20 overflow-hidden shadow-lg bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="예: 조용한 ADHD는 무엇인가요? 약물 치료가 안전한가요?"
                className="flex-1 px-6 py-4 text-lg bg-transparent focus:outline-none placeholder:text-muted-foreground/60"
              />
              <button 
                onClick={searchQna}
                className="btn-primary rounded-none px-8 m-0 flex items-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">검색</span>
              </button>
            </div>
          </div>
        </div>

        {matched && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 p-8 rounded-2xl border-2 border-primary/30 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <p className="text-sm text-primary font-medium mb-2">✨ 관련 질문을 찾았습니다!</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                    {matched.title}
                  </h3>
                  <button 
                    onClick={() => onSelect && onSelect(matched.id)}
                    className="btn-primary text-lg inline-flex items-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>답변 보러 가기</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!matched && suggestions.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-accent/20 p-8 rounded-2xl border border-accent/40">
              <h3 className="text-xl font-bold text-center mb-6 flex items-center justify-center space-x-3">
                <Lightbulb className="w-6 h-6 text-primary" />
                <span>💡 이런 질문들이 도움이 될까요?</span>
              </h3>
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleQuestionClick(suggestion.id)}
                    className="w-full text-left p-6 rounded-xl bg-white hover:bg-primary/5 border-2 border-border hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-foreground group-hover:text-primary">
                        {suggestion.title}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">🔥 자주 묻는 질문</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => handleQuestionClick(question.id)}
                className="btn-secondary text-base py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {question.text}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground leading-relaxed">
            💡 <span className="font-semibold">검색 팁:</span> '조용한', '약물', '치료', '학교' 등의 
            키워드를 포함해서 질문하시면 더 정확한 답변을 찾을 수 있어요
          </p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default QnaChatSearch;