import React, { useState } from "react";
import { checklistItems } from "../data/checklistItems";
import CardWrapper from "./CardWrapper";
import { CheckCircle2, Circle, AlertTriangle, Info } from "lucide-react";

const AdhdChecklist = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const checkedCount = Object.values(answers).filter(Boolean).length;

  const handleCheck = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const selectedItems = checklistItems.filter(item => answers[item.id]);
    
    // 구글 시트에 결과 전송
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyESU-0GFYu_CghZY01j_tYXz5IE9ND72-4jA5ABCmWez7M9KaC-GvIHyipMd1i85vP/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: "익명 보호자", 
          score: checkedCount, 
          answers: selectedItems.map(item => item.text),
          timestamp: new Date().toISOString() 
        })
      });
    } catch (error) {
      console.error("제출 중 오류:", error);
    }
    
    onComplete && onComplete(checkedCount, selectedItems.map(item => item.text));
  };

  const getFeedbackMessage = () => {
    if (checkedCount >= 5) {
      return {
        type: "warning",
        icon: <AlertTriangle className="w-5 h-5" />,
        message: "조용한 ADHD 특성이 강하게 의심됩니다. 전문가 상담을 권장합니다."
      };
    } else if (checkedCount >= 3) {
      return {
        type: "info", 
        icon: <Info className="w-5 h-5" />,
        message: "일부 ADHD 특성이 보입니다. 지속적인 관찰이 필요합니다."
      };
    } else {
      return {
        type: "success",
        icon: <CheckCircle2 className="w-5 h-5" />,
        message: "현재로서는 큰 문제가 없어 보입니다. 하지만 계속 관심을 가져주세요."
      };
    }
  };

  const feedback = getFeedbackMessage();

  return (
    <div className="w-full p-4 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
      <div className="hidden md:block" />
      <div className="mx-auto max-w-sm justify-self-center w-full">
        <CardWrapper className="shadow-2xl bg-white/90">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              🧠 조용한 ADHD 자가진단 체크리스트
            </h2>
            <p className="text-muted-foreground text-lg">
              자녀에게 해당하는 항목에 체크해주세요
            </p>
          </div>

          <div className="space-y-4 mb-8 max-w-xl w-full mx-auto">
            {checklistItems.map((item) => (
              <div key={item.id} className="checkbox-item flex flex-row items-center gap-4 py-5 border-b border-muted-foreground/20 last:border-b-0 px-2 pl-8 md:pl-20">
                <button
                  onClick={() => handleCheck(item.id, !answers[item.id])}
                  className="flex-shrink-0 w-6 h-6"
                >
                  {answers[item.id] ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  )}
                </button>
                <div className="flex flex-col items-start text-left">
                  <p className="font-medium text-foreground mb-1">
                    {item.text}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {checkedCount > 0 && (
            <div className={`mb-6 p-4 rounded-lg border ${
              feedback.type === 'warning' ? 'alert-warning' : 
              feedback.type === 'success' ? 'alert-success' : 
              'bg-blue-50 border-blue-200 text-blue-800'
            }`}>
              <div className="flex items-start space-x-3">
                {feedback.icon}
                <div>
                  <p className="font-medium mb-2">
                    체크된 항목: {checkedCount}개 / {checklistItems.length}개
                  </p>
                  <p className="text-sm">
                    {feedback.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {checkedCount > 0 && (
            <div className="text-center">
              <button 
                onClick={handleSubmit}
                className="btn-primary text-lg px-8 py-4"
              >
                결과 확인하기
              </button>
            </div>
          )}

          <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              ⚠️ 이 체크리스트는 의학적 진단을 대체할 수 없습니다. 
              정확한 진단을 위해서는 반드시 전문의와 상담하세요.
            </p>
          </div>
        </CardWrapper>
      </div>
      <div className="hidden md:block" />
    </div>
  );
};

export default AdhdChecklist;