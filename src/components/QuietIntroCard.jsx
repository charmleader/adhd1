import React from 'react';
import CardWrapper from './CardWrapper';
import { Brain, Heart, Eye, Clock } from 'lucide-react';

const QuietIntroCard = () => {
  const characteristics = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "멍한 시간 많음",
      description: "하루 종일 멍하니 있거나 딴 생각에 빠져있는 모습"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "학습 속도 느림",
      description: "새로운 것을 배우거나 이해하는데 시간이 오래 걸림"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "감정 표현 부족",
      description: "기쁨, 슬픔 등의 감정을 잘 드러내지 않음"
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "과제 시작 어려움",
      description: "스스로 무언가를 시작하거나 계획하는 것을 어려워함"
    }
  ];

  return (
    <CardWrapper>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          🤫 조용한 ADHD란?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          겉으로는 얌전하고 착한 아이처럼 보이지만, <br className="hidden md:block" />
          실제로는 <span className="font-semibold text-foreground">주의력 부족과 자기조절 어려움</span>을 겪는 ADHD의 한 유형입니다.
        </p>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/10 p-6 rounded-lg mb-8">
        <div className="flex flex-col items-center mb-4 text-center">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-2">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">주요 특징</h2>
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed text-center">
          조용한 ADHD를 가진 아이들은 충동적이거나 과활동적인 행동보다는 
          <span className="font-medium text-foreground"> 내재화된 어려움</span>을 보입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {characteristics.map((char, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white/60 rounded-lg text-center">
              <div className="flex-shrink-0 mt-1 mb-2">
                {char.icon}
              </div>
              <h4 className="font-semibold text-foreground mb-1 text-center">
                {char.title}
              </h4>
              <p className="text-sm text-muted-foreground text-center">
                {char.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-warning/10 border border-warning/20 p-6 rounded-lg text-center flex flex-col items-center">
        <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center mb-2">
          <Eye className="w-4 h-4 text-warning" />
        </div>
        <h4 className="font-semibold text-warning mb-3 text-center">왜 놓치기 쉬울까요?</h4>
        <p className="text-sm leading-relaxed text-center">
          조용한 ADHD를 가진 아이들은 수업을 방해하지 않고 말썽을 피우지 않아서 
          선생님이나 부모님이 문제를 인식하기 어렵습니다. 
          하지만 내면적으로는 <span className="font-medium">집중하기 어려워하고, 
          자신감이 떨어지며, 학습에 어려움</span>을 겪고 있을 수 있습니다.
        </p>
      </div>
    </CardWrapper>
  );
};

export default QuietIntroCard;