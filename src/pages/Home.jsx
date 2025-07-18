import React from 'react';
import { Link } from 'react-router-dom';
import CardWrapper from '../components/CardWrapper';
import { 
  CheckCircle, 
  Search, 
  MessageCircle, 
  Brain, 
  ArrowRight,
  Heart,
  Users,
  Book
} from 'lucide-react';

const Home = () => {
  const menuItems = [
    {
      to: "/checklist",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "자가진단 체크리스트",
      description: "우리 아이에게 조용한 ADHD 특성이 있는지 확인해보세요",
      color: "text-primary bg-primary/10 border-primary/20"
    },
    {
      to: "/quiet-adhd", 
      icon: <Brain className="w-8 h-8" />,
      title: "조용한 ADHD 알아보기",
      description: "조용한 ADHD의 특징과 증상에 대해 자세히 알아보세요",
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      to: "https://preview--adhd-parent-compass-qna.lovable.app/",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "자주 묻는 질문 (Q&A)",
      description: "ADHD 관련 궁금증을 Q&A 카드로 해결해보세요", 
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      external: true
    },
    {
      to: "/ask",
      icon: <Search className="w-8 h-8" />,
      title: "궁금한 점 질문하기",
      description: "직접 질문하면 관련 답변을 추천해드립니다",
      color: "text-orange-600 bg-orange-50 border-orange-200"
    }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "보호자 중심",
      description: "ADHD 자녀를 둔 부모님들을 위한 맞춤 정보"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "전문가 검증",
      description: "신뢰할 수 있는 의학 정보와 연구 자료 기반"
    },
    {
      icon: <Book className="w-6 h-6 text-green-500" />,
      title: "쉬운 이해",
      description: "복잡한 의학 용어를 쉽게 풀어서 설명"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="font-bold text-primary mb-4" style={{ fontSize: "6rem" }}>
              우리 아이가 ADHD 라고?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
               ADHD에 대해 함께 알아봅시다.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/60 px-4 py-2 rounded-full">
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Hero Section과 메뉴 사이에 중앙 정렬된 자가진단 체크리스트 */}
        <div className="w-full flex justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 mt-2 text-center w-full max-w-4xl">
            자가진단 체크리스트
          </h2>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              원하시는 서비스를 선택해 주세요
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 justify-items-center">
            {menuItems.map((item, index) => (
              item.external ? (
                <a 
                  key={index} 
                  href={item.to} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group w-full"
                >
                  <div className={`p-6 rounded-xl border hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 ${item.color} flex flex-col items-center text-center`}>
                    <div className="flex flex-col items-center mb-2">
                      <div className="flex-shrink-0 mb-2">
                        {React.cloneElement(item.icon, { 
                          className: `w-8 h-8 ${item.color.split(' ')[0]}` 
                        })}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3 text-center">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-sm font-medium text-primary group-hover:text-primary-hover">
                      시작하기
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              ) : (
                <Link key={index} to={item.to} className="group w-full">
                  <div className={`p-6 rounded-xl border hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 ${item.color} flex flex-col items-center text-center`}>
                    <div className="flex flex-col items-center mb-2">
                      <div className="flex-shrink-0 mb-2">
                        {React.cloneElement(item.icon, { 
                          className: `w-8 h-8 ${item.color.split(' ')[0]}` 
                        })}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3 text-center">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-sm font-medium text-primary group-hover:text-primary-hover">
                      시작하기
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="flex justify-center px-4">
          <div className="w-full max-w-4xl text-center">
            <p className="text-sm text-muted-foreground mb-2">
              📌 개발자: <span className="font-semibold text-primary">참리더</span>
            </p>
            <p className="text-xs text-muted-foreground">
              본 앱은 보호자 교육을 위해 제작된 비영리 프로젝트입니다.<br />
              정보는 앱에 저장되지 않으며, 의학적 진단을 대체할 수 없습니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;