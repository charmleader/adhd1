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
  Book,
  Star,
  Shield
} from 'lucide-react';

const Home = () => {
  const menuItems = [
    {
      to: "/checklist",
      icon: <CheckCircle className="w-10 h-10" />,
      title: "자가진단 체크리스트",
      description: "우리 아이에게 조용한 ADHD 특성이 있는지 8가지 항목으로 확인해보세요",
      color: "text-primary bg-primary/10 border-primary/20",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      to: "/quiet-adhd", 
      icon: <Brain className="w-10 h-10" />,
      title: "조용한 ADHD 알아보기",
      description: "조용한 ADHD의 정의, 특징, 증상에 대해 자세하고 쉽게 알아보세요",
      color: "text-purple-600 bg-purple-50 border-purple-200",
      gradient: "from-purple-50 to-purple-25"
    },
    {
      to: "/faq",
      icon: <MessageCircle className="w-10 h-10" />,
      title: "자주 묻는 질문 (Q&A)",
      description: "ADHD 관련 궁금증을 전문가 검증된 Q&A 카드로 해결해보세요", 
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      gradient: "from-emerald-50 to-emerald-25"
    },
    {
      to: "/ask",
      icon: <Search className="w-10 h-10" />,
      title: "궁금한 점 질문하기",
      description: "직접 질문하시면 키워드 기반으로 관련 답변을 즉시 추천해드립니다",
      color: "text-orange-600 bg-orange-50 border-orange-200",
      gradient: "from-orange-50 to-orange-25"
    }
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "보호자 중심 설계",
      description: "ADHD 자녀를 둔 부모님들을 위한 맞춤 정보와 실용적 가이드"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "전문가 검증 정보",
      description: "신뢰할 수 있는 의학 정보와 연구 자료를 바탕으로 제작"
    },
    {
      icon: <Book className="w-8 h-8 text-green-500" />,
      title: "쉬운 설명",
      description: "복잡한 의학 용어를 일반인도 이해하기 쉽게 풀어서 설명"
    }
  ];

  const benefits = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "우리 아이가 ADHD일까 궁금한 부모님",
      description: "체크리스트를 통해 조용한 ADHD 특성을 확인하고 전문가 상담의 필요성을 판단해보세요"
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-600" />,
      title: "조용한 ADHD에 대해 알고 싶은 분",
      description: "일반적인 ADHD와 다른 조용한 ADHD의 특징과 증상을 상세히 설명해드려요"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-emerald-600" />,
      title: "ADHD 관련 궁금증이 많은 분",
      description: "약물치료, 교육방법, 가정에서의 도움 등 다양한 Q&A로 궁금증을 해결하세요"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20 border-b border-border/50">
        <div className="content-container">
          <div className="text-container">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                🧠 ADHD 보호자 Q&A 앱
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                자녀의 ADHD에 대해 궁금한 점을 질문하고, 체크하고, 배우세요.<br />
                <span className="text-lg text-muted-foreground/80">전문가 검증 정보로 올바른 이해를 도와드립니다.</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border/30 shadow-sm">
                    {feature.icon}
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>무료 • 개인정보 저장 없음 • 전문가 검증</span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="content-container py-16">
        <div className="text-container mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🎯 원하시는 서비스를 선택해주세요
          </h2>
          <p className="text-lg text-muted-foreground">
            단계별로 차근차근 진행하시거나, 궁금한 부분부터 바로 확인해보세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="group">
              <div className={`p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 bg-gradient-to-br ${item.gradient} ${item.color} h-full`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20">
                    {React.cloneElement(item.icon, { 
                      className: `w-10 h-10 ${item.color.split(' ')[0]}` 
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:text-primary-hover transition-colors">
                      <span className="mr-2">시작하기</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-muted/30 to-accent/10 py-16 border-y border-border/50">
        <div className="content-container">
          <div className="text-container mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              💡 이런 분들에게 특히 도움이 됩니다
            </h2>
            <p className="text-lg text-muted-foreground">
              각자의 상황에 맞는 정보와 도구를 제공합니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <CardWrapper key={index} className="text-center h-full">
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="content-container py-16">
        <CardWrapper className="text-center bg-gradient-to-r from-primary/5 to-accent/10 border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            🚀 지금 바로 시작해보세요
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            아이의 밝은 미래를 위한 첫 걸음을 내딛어보세요. 
            모든 정보는 무료이며, 개인정보는 저장되지 않습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/checklist" className="btn-primary text-lg">
              자가진단 시작하기 →
            </Link>
            <Link to="/quiet-adhd" className="btn-secondary text-lg">
              조용한 ADHD 알아보기
            </Link>
          </div>
        </CardWrapper>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="content-container text-center">
          <div className="mb-6">
            <p className="text-lg font-semibold text-primary mb-2">
              📌 개발자: <span className="text-foreground">참리더</span>
            </p>
            <p className="text-muted-foreground mb-4">
              본 앱은 보호자 교육을 위해 제작된 비영리 프로젝트입니다.
            </p>
          </div>
          
          <div className="bg-warning/10 border border-warning/30 p-6 rounded-xl max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-warning">⚠️ 중요 안내:</strong><br />
              이 앱의 정보는 참고용이며 의학적 진단을 대체할 수 없습니다.<br />
              정확한 진단과 치료를 위해서는 반드시 전문의와 상담하시기 바랍니다.<br />
              개인정보는 앱에 저장되지 않으며, 모든 데이터는 익명으로 처리됩니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;