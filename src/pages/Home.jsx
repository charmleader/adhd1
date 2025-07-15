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
      to: "/faq",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "자주 묻는 질문 (Q&A)",
      description: "ADHD 관련 궁금증을 Q&A 카드로 해결해보세요", 
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              🧠 ADHD 보호자 Q&A 앱
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              자녀의 ADHD에 대해 궁금한 점을 질문하고, 체크하고, 배우세요
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
      </div>

      {/* Main Menu */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="group">
              <div className={`p-6 rounded-xl border hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 ${item.color}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {React.cloneElement(item.icon, { 
                      className: `w-8 h-8 ${item.color.split(' ')[0]}` 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-hover">
                      시작하기
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 추가 정보 섹션 */}
        <CardWrapper className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              💡 이런 분들에게 도움이 됩니다
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">우리 아이가 ADHD일까 궁금한 부모님</h3>
                <p className="text-sm text-muted-foreground">자가진단 체크리스트로 확인해보세요</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">조용한 ADHD에 대해 알고 싶은 분</h3>
                <p className="text-sm text-muted-foreground">증상과 특징을 자세히 설명드려요</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold mb-2">ADHD 관련 궁금증이 많은 분</h3>
                <p className="text-sm text-muted-foreground">Q&A로 궁금증을 해결하세요</p>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            📌 개발자: <span className="font-semibold text-primary">참리더</span>
          </p>
          <p className="text-xs text-muted-foreground">
            본 앱은 보호자 교육을 위해 제작된 비영리 프로젝트입니다.<br />
            정보는 앱에 저장되지 않으며, 의학적 진단을 대체할 수 없습니다.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;