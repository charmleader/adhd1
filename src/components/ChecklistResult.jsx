import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import { Send, Shield, CheckCircle, AlertTriangle, Info, Download } from "lucide-react";

const ChecklistResult = ({ name = "익명 보호자", score, answers }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitToSheet = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyESU-0GFYu_CghZY01j_tYXz5IE9ND72-4jA5ABCmWez7M9KaC-GvIHyipMd1i85vP/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name, 
          score, 
          answers,
          timestamp: new Date().toISOString() 
        })
      });
      
      setSubmitted(true);
      const result = await response.json();
      console.log("결과 제출 완료:", { name, score, answers });
    } catch (error) {
      console.error("제출 중 오류:", error);
      alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResultAnalysis = () => {
    if (score >= 5) {
      return {
        type: "warning",
        icon: <AlertTriangle className="w-8 h-8 text-warning" />,
        title: "전문가 상담 권장",
        message: "조용한 ADHD 특성이 강하게 나타나고 있습니다.",
        recommendation: "소아정신과나 발달센터에서 정확한 진단을 받아보시기 바랍니다."
      };
    } else if (score >= 3) {
      return {
        type: "info",
        icon: <Info className="w-8 h-8 text-blue-500" />,
        title: "지속적 관찰 필요",
        message: "일부 ADHD 특성이 관찰됩니다.",
        recommendation: "앞으로 3-6개월간 자녀의 행동을 더 자세히 관찰해보세요."
      };
    } else {
      return {
        type: "success",
        icon: <CheckCircle className="w-8 h-8 text-success" />,
        title: "양호한 상태",
        message: "현재로서는 큰 문제가 없어 보입니다.",
        recommendation: "하지만 지속적인 관심과 사랑으로 아이를 지켜봐 주세요."
      };
    }
  };

  const analysis = getResultAnalysis();

  const generatePDFContent = () => {
    const content = `
ADHD 자가진단 결과 요약

날짜: ${new Date().toLocaleDateString('ko-KR')}
응답자: ${name}

체크된 항목 수: ${score}개 / 8개

선택된 항목:
${answers.map((answer, index) => `${index + 1}. ${answer}`).join('\n')}

결과 분석:
${analysis.title}
${analysis.message}
${analysis.recommendation}

주의사항:
- 이 결과는 의학적 진단을 대체할 수 없습니다
- 정확한 진단을 위해서는 전문의와 상담하세요
- 더 자세한 정보는 ADHD 보호자 Q&A 앱을 참고하세요
    `;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ADHD_자가진단결과_${new Date().toLocaleDateString('ko-KR')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <CardWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            📊 자가진단 결과
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg text-center">
              <h3 className="font-semibold text-lg mb-2">기본 정보</h3>
              <p><span className="font-medium">이름:</span> {name}</p>
              <p><span className="font-medium">체크 항목:</span> {score}개 / 8개</p>
              <p><span className="font-medium">날짜:</span> {new Date().toLocaleDateString('ko-KR')}</p>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-center">선택된 항목</h3>
              <ul className="text-sm space-y-1">
                {answers.map((answer, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{answer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`p-6 rounded-lg border-2 ${
            analysis.type === 'warning' ? 'border-warning bg-warning/5' :
            analysis.type === 'success' ? 'border-success bg-success/5' :
            'border-blue-300 bg-blue-50'
          }`}>
            <div className="text-center mb-4">
              {analysis.icon}
              <h3 className="text-xl font-bold mt-2">{analysis.title}</h3>
            </div>
            <p className="text-center font-medium mb-4">{analysis.message}</p>
            <p className="text-sm text-center">{analysis.recommendation}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button 
            onClick={generatePDFContent}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>결과 저장하기</span>
          </button>

          {!submitted ? (
            <button 
              onClick={submitToSheet}
              disabled={isSubmitting}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "제출 중..." : "익명으로 결과 제출"}</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2 text-success">
              <CheckCircle className="w-5 h-5" />
              <span>제출이 완료되었습니다</span>
            </div>
          )}
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <div className="flex flex-col items-center text-center space-y-3">
            <Shield className="w-5 h-5 text-primary" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">개인정보 보호 안내</p>
              <p>
                • 이 앱은 개인정보를 저장하지 않습니다<br />
                • 제출된 데이터는 익명으로 처리됩니다<br />
                • 통계 목적으로만 사용되며 개인을 식별할 수 없습니다
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default ChecklistResult;