import React from 'react';
import { Link } from 'react-router-dom';
import QuietIntroCard from '../components/QuietIntroCard';
import QuietSymptomCards from '../components/QuietSymptomCards';
import QuietOutcomeFlow from '../components/QuietOutcomeFlow';
import { ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react';

const QuietAdhdPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/10 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>홈으로 돌아가기</span>
          </Link>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="py-8">
        <QuietIntroCard />
        <QuietSymptomCards />
        <QuietOutcomeFlow />
      </div>

      {/* 행동 유도 섹션 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-primary/10 to-accent/20 p-8 rounded-xl border border-primary/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🎯 다음 단계로 넘어가세요
            </h3>
            <p className="text-muted-foreground text-lg">
              조용한 ADHD에 대해 더 알아보았다면, 이제 구체적인 행동을 취해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/checklist" 
              className="group p-6 bg-white/60 rounded-lg border border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">
                    자가진단 체크하기
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    우리 아이에게 해당하는 특성들을 체크해보세요
                  </p>
                </div>
              </div>
            </Link>

            <Link 
              to="/ask" 
              className="group p-6 bg-white/60 rounded-lg border border-primary/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">
                    전문가에게 질문하기
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    구체적인 궁금증이 있다면 질문해보세요
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-center text-sm text-success font-medium">
              💚 기억하세요: 조기 발견과 적절한 도움으로 아이의 밝은 미래를 만들어 갈 수 있어요!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuietAdhdPage;