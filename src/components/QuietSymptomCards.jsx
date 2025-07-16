import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardWrapper from './CardWrapper';
import { 
  Brain, 
  Clock, 
  MessageSquare, 
  Target, 
  Puzzle, 
  Heart,
  BookOpen,
  Users
} from 'lucide-react';

const QuietSymptomCards = () => {
  const symptoms = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "지시를 듣고도 잊는 일이 잦음",
      description: "부모나 선생님의 말을 들었지만 금방 잊어버리거나 다른 생각에 빠져있어서 실행하지 못합니다.",
      examples: ["숙제를 해오라고 했는데 잊어버림", "준비물을 가져오라고 해도 빼먹음", "여러 가지 지시를 한 번에 주면 일부만 기억"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "스스로 시작하지 못하고 기다림",
      description: "무엇을 해야 할지 알고 있어도 스스로 시작하기 어려워하며, 누군가의 도움이나 재촉이 있어야 행동합니다.",
      examples: ["숙제를 시작하라고 해도 멍하니 앉아있음", "옷을 갈아입으라고 해도 계속 미루기", "놀이나 활동에 적극적으로 참여하지 않음"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "멍하거나 반응이 느림",
      description: "주변 상황이나 대화에 대한 반응이 느리고, 자주 멍한 표정으로 있어서 다른 세상에 있는 것처럼 보입니다.",
      examples: ["이름을 불러도 대답이 늦음", "질문을 해도 한참 후에 답변", "수업 중에 자주 딴 생각에 빠짐"]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "정리정돈, 준비 시간이 오래 걸림",
      description: "체계적으로 정리하거나 계획을 세우는 것이 어렵고, 간단한 준비에도 많은 시간이 필요합니다.",
      examples: ["가방 정리를 혼자서 못함", "외출 준비에 시간이 많이 걸림", "방이나 책상이 항상 어수선함"]
    },
    {
      icon: <Puzzle className="w-8 h-8 text-primary" />,
      title: "과제나 활동을 끝까지 마치기 어려움",
      description: "시작은 하지만 중간에 흥미를 잃거나 어려움을 느끼면 포기하는 경우가 많습니다.",
      examples: ["숙제를 시작해도 끝까지 하지 못함", "그림이나 만들기를 중도에 그만둠", "책을 읽다가 중간에 멈춤"]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "감정 표현이 제한적",
      description: "기쁨, 슬픔, 화남 등의 감정을 잘 드러내지 않고, 자신의 감정을 말로 표현하는 것을 어려워합니다.",
      examples: ["좋은 일이 있어도 표정 변화가 적음", "속상해도 말하지 않고 혼자 있음", "감정을 묻면 '모르겠다'고 답함"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "학습 속도가 또래보다 느림",
      description: "새로운 개념을 이해하거나 기술을 습득하는 데 다른 아이들보다 더 많은 시간과 반복이 필요합니다.",
      examples: ["구구단이나 한글 익히기에 시간이 많이 걸림", "새로운 운동이나 기술 배우기 어려워함", "설명을 여러 번 들어야 이해"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "사회적 상호작용의 어려움",
      description: "친구들과 어울리는 것을 어려워하고, 그룹 활동에서 소극적인 모습을 보입니다.",
      examples: ["친구들과 놀 때 구경만 하기", "그룹 활동에서 참여하지 않음", "새로운 환경에서 위축됨"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <CardWrapper>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            🔍 조용한 ADHD 주요 증상
          </h2>
          <p className="text-lg text-muted-foreground text-center">
            아이에게서 이런 모습을 관찰할 수 있습니다
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true 
          }}
          className="symptom-swiper"
          style={{
            "--swiper-navigation-color": "hsl(var(--primary))",
            "--swiper-pagination-color": "hsl(var(--primary))",
          }}
        >
          {symptoms.map((symptom, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 p-8 rounded-xl min-h-[400px] border border-primary/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                    {symptom.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-center">
                    {symptom.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {symptom.description}
                  </p>
                </div>

                <div className="bg-white/60 p-6 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-3 text-center">
                    💡 이런 모습을 보여요
                  </h4>
                  <ul className="space-y-2 text-center">
                    {symptom.examples.map((example, idx) => (
                      <li key={idx} className="flex flex-col items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-muted-foreground text-center">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4 text-center">
            좌우로 스와이프하거나 화살표를 클릭해서 다른 증상들도 확인해보세요
          </p>
          <div className="bg-warning/10 border border-warning/20 p-4 rounded-lg inline-block">
            <p className="text-sm text-warning font-medium text-center">
              ⚠️ 이러한 증상들이 6개월 이상 지속되고 일상생활에 지장을 준다면 전문가 상담을 받아보세요
            </p>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default QuietSymptomCards;