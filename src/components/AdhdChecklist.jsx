import React, { useState, useRef, useEffect } from "react";
import { adrsItems } from "../data/adrsItems";

const initialInfo = { date: "", grade: "", name: "", gender: "", rater: "" };

export default function AdhdChecklist({ onSubmit }) {
  const [info, setInfo] = useState(initialInfo);
  const [answers, setAnswers] = useState(Array(18).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const rowRefs = useRef([]);
  const resultRef = useRef(null);

  // 점수 계산
  const total = answers.reduce((a, b) => a + (b ?? 0), 0);
  const oddSum = answers.filter((_, i) => i % 2 === 0).reduce((a, b) => a + (b ?? 0), 0);
  const evenSum = answers.filter((_, i) => i % 2 === 1).reduce((a, b) => a + (b ?? 0), 0);

  // 보호자/교사 구분 불가(평정자 입력 없음) → 보호자 기준(19점)으로 안내
  const threshold = 19;
  const needConsult = total >= threshold;

  // Google Sheets 연동 (시트 ID 반영)
  const handleSubmit = async () => {
    // 미체크 문항 확인
    const firstUnanswered = answers.findIndex(a => a === null);
    if (firstUnanswered !== -1) {
      setError(`${firstUnanswered + 1}번 문항에 답변해 주세요.`);
      // 해당 문항으로 스크롤
      if (rowRefs.current[firstUnanswered]) {
        rowRefs.current[firstUnanswered].scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setError("");
    setSubmitted(true);
    await fetch("https://script.google.com/macros/s/AKfycbynY6gHftWWa5oSQ5FdO3a05E-quNd188sjAQCyeONPNSlIOkW4L2JRHT0FlLswYlYP/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...info,
        answers,
        evenSum,
        oddSum,
        total
      }),
    });
    if (onSubmit) onSubmit({ ...info, answers, evenSum, oddSum, total });
  };

  useEffect(() => {
    if (submitted && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitted]);

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center" ref={resultRef}>
        <h2 className="text-2xl font-bold text-primary mb-4">결과 요약</h2>
        <p className="mb-4 font-semibold text-lg">
          {needConsult
            ? "조용한 ADHD 특성이 의심됩니다. 전문가 상담을 권장합니다."
            : "일반적인 범위입니다. 필요시 추가 상담을 권장합니다."}
        </p>
        <p className="text-sm text-muted-foreground">* 실제 진단은 전문 심리검사 및 임상진단을 통해 이루어져야 합니다.</p>
      </div>
    );
  }

  return (
    <form className="max-w-2xl mx-auto space-y-6 p-4">
      {/* 기본 정보 입력 */}
      <div className="grid grid-cols-2 gap-4">
        <input type="date" value={info.date} onChange={e => setInfo({ ...info, date: e.target.value })} required className="border rounded px-2 py-1" />
        <select value={info.grade} onChange={e => setInfo({ ...info, grade: e.target.value })} required className="border rounded px-2 py-1">
          <option value="">학년 선택</option>
          {[1,2,3,4,5,6].map(g => <option key={g}>{g}학년</option>)}
        </select>
        <input placeholder="학생 이름" value={info.name} onChange={e => setInfo({ ...info, name: e.target.value })} required className="border rounded px-2 py-1" />
        <select value={info.gender} onChange={e => setInfo({ ...info, gender: e.target.value })} required className="border rounded px-2 py-1">
          <option value="">성별</option>
          <option>남</option>
          <option>여</option>
        </select>
        <input placeholder="평정자 성함 및 관계 (예: 김OO(모))" value={info.rater} onChange={e => setInfo({ ...info, rater: e.target.value })} required className="border rounded px-2 py-1 col-span-2" />
      </div>

      {/* 점수 의미 안내 */}
      <div className="w-full text-center text-sm text-muted-foreground mb-2">
        <span className="inline-block mx-2">전혀 그렇지 않다(0)</span>
        <span className="inline-block mx-2">때때로 그렇다(1)</span>
        <span className="inline-block mx-2">자주 그렇다(2)</span>
        <span className="inline-block mx-2">매우 자주 그렇다(3)</span>
      </div>
      {error && <div className="text-red-600 text-center font-semibold mb-2">{error}</div>}
      {/* 문항 체크 */}
      <table className="w-full border mt-6">
        <thead>
          <tr>
            <th className="text-center">번호</th>
            <th className="text-center">문항</th>
            <th className="text-center">점수</th>
          </tr>
        </thead>
        <tbody>
          {adrsItems.map((item, idx) => (
            <tr key={item.num} ref={el => rowRefs.current[idx] = el} className="align-middle h-28 border-none">
              <td className="text-center font-bold align-middle w-12">{item.num}</td>
              <td className="text-center align-middle px-2">
                <div className="flex flex-col justify-center h-full min-h-[80px]">
                  <span className="text-base font-medium flex-1 flex items-center justify-center h-full">{item.text}</span>
                </div>
              </td>
              <td className="text-center align-middle px-2">
                <div className="flex flex-col items-center gap-1 mt-2">
                  <div className="flex flex-row justify-center gap-8 mb-1 w-full items-center">
                    <span className="text-xs text-muted-foreground min-w-[60px] text-left">전혀 그렇지 않다</span>
                    {[0,1,2,3].map(val => (
                      <span key={val} className="font-semibold text-sm w-8 text-center">{val}</span>
                    ))}
                    <span className="text-xs text-muted-foreground min-w-[60px] text-right">매우 자주 그렇다</span>
                  </div>
                  <div className={`flex flex-row justify-center gap-8 ${answers[idx] === null ? 'border-2 border-red-500 rounded-lg p-1 bg-red-50' : ''}`}>
                    {[0,1,2,3].map(val => (
                      <label key={val} className="flex flex-col items-center w-8">
                        <input
                          type="radio"
                          name={`q${item.num}`}
                          value={val}
                          checked={answers[idx] === val}
                          onChange={() => setAnswers(ans => ans.map((a, i) => i === idx ? val : a))}
                          required
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="btn-primary text-center" onClick={handleSubmit}>
        결과 보기
      </button>
    </form>
  );
}