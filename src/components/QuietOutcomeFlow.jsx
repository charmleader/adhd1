import React from 'react';
import CardWrapper from './CardWrapper';
import { AlertTriangle, TrendingDown, Brain, Heart, GraduationCap } from 'lucide-react';

const QuietOutcomeFlow = () => {
  const stages = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "초기 학습 실패",
      description: "주의력 부족으로 인한 학습 지연과 성적 하락",
      timeframe: "초등학교 저학년",
      color: "text-yellow-600 bg-yellow-50 border-yellow-200"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "과제 회피 및 성취감 저하",
      description: "반복되는 실패로 인해 도전을 피하고 포기하는 습관 형성",
      timeframe: "초등학교 고학년",
      color: "text-orange-600 bg-orange-50 border-orange-200"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "자존감 하락 및 자기 부정",
      description: "지속적인 좌절감으로 '나는 할 수 없는 사람'이라는 인식 형성",
      timeframe: "중학교",
      color: "text-red-600 bg-red-50 border-red-200"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "우울/불안, 대인 기피",
      description: "정서적 문제 발생과 사회적 관계에서의 위축",
      timeframe: "고등학교",
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "진로 포기 및 사회기능 저하",
      description: "성인이 되어서도 지속되는 어려움과 사회 적응 문제",
      timeframe: "성인기",
      color: "text-gray-600 bg-gray-50 border-gray-300"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <CardWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-destructive mb-4">
            ⏰ 치료 시기를 놓치면?
          </h2>
          <p className="text-lg text-muted-foreground">
            조용한 ADHD를 방치했을 때 나타날 수 있는 발달 경로
          </p>
        </div>

        <div className="relative">
          {/* 연결선 */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-yellow-300 via-orange-400 via-red-500 via-purple-600 to-gray-400 hidden md:block"></div>

          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* 타임라인 점 */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-current rounded-full hidden md:block" 
                     style={{ color: stage.color.split(' ')[0].replace('text-', '') === 'yellow' ? '#d97706' : 
                                    stage.color.split(' ')[0].replace('text-', '') === 'orange' ? '#ea580c' :
                                    stage.color.split(' ')[0].replace('text-', '') === 'red' ? '#dc2626' :
                                    stage.color.split(' ')[0].replace('text-', '') === 'purple' ? '#9333ea' : '#6b7280' }}>
                </div>

                <div className={`md:ml-16 p-6 rounded-lg border ${stage.color}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-2 rounded-lg ${stage.color}`}>
                      {stage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {index + 1}. {stage.title}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground">
                          {stage.timeframe}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* 화살표 (모바일에서만 표시) */}
                  {index < stages.length - 1 && (
                    <div className="flex justify-center mt-4 md:hidden">
                      <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-muted-foreground/30"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-success/10 border border-success/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Heart className="w-4 h-4 text-success" />
            </div>
            <div>
              <h4 className="font-semibold text-success mb-2">조기 발견과 치료의 중요성</h4>
              <p className="text-sm leading-relaxed">
                하지만 <span className="font-medium">조기에 발견하고 적절한 치료를 받으면</span> 
                이러한 부정적인 경로를 예방할 수 있습니다. 
                아이의 타고난 장점을 발견하고 키워주면서, 어려운 부분은 전문적인 도움으로 
                개선해 나갈 수 있어요. <span className="font-medium text-foreground">늦었다고 생각할 때가 가장 빠른 때</span>입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-lg">
            <AlertTriangle className="w-4 h-4" />
            <span>모든 아이가 이 경로를 따르는 것은 아니며, 개인차가 있을 수 있습니다</span>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default QuietOutcomeFlow;