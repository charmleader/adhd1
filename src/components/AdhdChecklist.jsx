import React, { useState } from "react";
import { checklistItems } from "../data/checklistItems";
import CardWrapper from "./CardWrapper";
import { CheckCircle2, Circle, AlertTriangle, Info, Target } from "lucide-react";

const AdhdChecklist = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const checkedCount = Object.values(answers).filter(Boolean).length;

  const handleCheck = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const selectedItems = checklistItems.filter(item => answers[item.id]);
    onComplete && onComplete(checkedCount, selectedItems.map(item => item.text));
  };

  const getFeedbackMessage = () => {
    if (checkedCount >= 5) {
      return {
        type: "warning",
        icon: <AlertTriangle className="w-6 h-6" />,
        message: "조용한 ADHD 특성이 강하게 의심됩니다. 전문가 상담을 권장합니다.",
        detail: "5개 이상의 특성이 확인되면 전문의와 상담을 받아보시는 것이 좋습니다."
      };
    } else if (checkedCount >= 3) {
      return {
        type: "info", 
        icon: <Info className="w-6 h-6" />,
        message: "일부 ADHD 특성이 관찰됩니다. 지속적인 관찰이 필요합니다.",
        detail: "앞으로 3-6개월간 자녀의 행동을 더 자세히 관찰해보세요."
      };
    } else {
      return {
        type: "success",
        icon: <CheckCircle2 className="w-6 h-6" />,
        message: "현재로서는 큰 문제가 없어 보입니다.",
        detail: "하지만 지속적인 관심과 사랑으로 아이를 지켜봐 주세요."
      };
    }
  };

  const feedback = getFeedbackMessage();

  return (
    <div className="content-container py-8">
      <CardWrapper>
        <div className="text-container mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            🧠 조용한 ADHD 자가진단 체크리스트
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            자녀에게 해당하는 항목에 체크해주세요<br />
            <span className="text-lg text-muted-foreground/80">총 8가지 특성으로 구성되어 있습니다</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-10">
            {checklistItems.map((item) => (
              <div 
                key={item.id} 
                className={`checkbox-item cursor-pointer border-2 ${
                  answers[item.id] ? 'border-primary/30 bg-primary/5' : 'border-border'
                }`}
                onClick={() => handleCheck(item.id, !answers[item.id])}
              >
                <div className="flex-shrink-0 mt-1">
                  {answers[item.id] ? (
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  ) : (
                    <Circle className="w-7 h-7 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {item.text}
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {checkedCount > 0 && (
            <div className={`mb-8 p-8 rounded-2xl border-2 ${
              feedback.type === 'warning' ? 'alert-warning' : 
              feedback.type === 'success' ? 'alert-success' : 
              'alert-info'
            }`}>
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {feedback.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  체크된 항목: {checkedCount}개 / {checklistItems.length}개
                </h3>
                <p className="text-lg font-medium mb-3">
                  {feedback.message}
                </p>
                <p className="text-base opacity-90">
                  {feedback.detail}
                </p>
              </div>
            </div>
          )}

          {checkedCount > 0 && (
            <div className="text-center mb-8">
              <button 
                onClick={handleSubmit}
                className="btn-primary text-xl px-12 py-5 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                📊 상세 결과 확인하기
              </button>
            </div>
          )}

          <div className="bg-warning/10 border-2 border-warning/30 p-8 rounded-2xl">
            <div className="text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-4" />
              <h4 className="font-bold text-warning mb-3 text-lg">⚠️ 중요한 안내사항</h4>
              <p className="text-muted-foreground leading-relaxed">
                이 체크리스트는 <span className="font-semibold text-foreground">의학적 진단을 대체할 수 없습니다</span>. 
                정확한 진단을 위해서는 반드시 소아정신과, 발달센터 등에서 전문의와 상담하세요. 
                체크 결과와 관계없이 아이의 행동이나 학습에 지속적인 어려움이 있다면 전문가의 도움을 받으시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default AdhdChecklist;