import React, { useState } from "react";
import { qnaList } from "../data/qnaList";
import CardWrapper from "./CardWrapper";
import { Search, MessageCircle, ArrowRight, Lightbulb } from "lucide-react";

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
    <div className="max-w-4xl mx-auto p-4">
      <CardWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            🤖 궁금한 점을 질문해보세요
          </h2>
          <p className="text-muted-foreground text-lg">
            ADHD 관련 궁금한 점을 입력하시면 관련 답변을 찾아드립니다
          </p>
        </div>

        <div className="relative mb-6">
          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="예: 조용한 ADHD는 무엇인가요?"
              className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 border-input bg-input focus:outline-none focus:ring-2 focus:ring-ring text-lg"
            />
            <button 
              onClick={searchQna}
              className="btn-primary rounded-l-none px-6"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {matched && (
          <div className="bg-gradient-to-r from-primary/10 to-accent/20 p-6 rounded-lg mb-6 border border-primary/20">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">관련 질문을 찾았습니다!</p>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {matched.title}
                </h3>
                <button 
                  onClick={() => onSelect && onSelect(matched.id)}
                  className="btn-primary text-sm flex items-center space-x-2"
                >
                  <span>답변 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {!matched && suggestions.length > 0 && (
          <div className="bg-accent/30 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span>이런 질문들이 도움이 될까요?</span>
            </h3>
            <div className="space-y-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleQuestionClick(suggestion.id)}
                  className="w-full text-left p-3 rounded-lg bg-white hover:bg-primary/5 border border-border transition-colors"
                >
                  {suggestion.title}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4">자주 묻는 질문</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {popularQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => handleQuestionClick(question.id)}
                className="btn-secondary text-sm py-2 px-4"
              >
                {question.text}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            💡 키워드를 포함해서 질문하시면 더 정확한 답변을 찾을 수 있어요
          </p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default QnaChatSearch;