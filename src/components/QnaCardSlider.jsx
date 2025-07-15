import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardWrapper from "./CardWrapper";
import { ExternalLink, AlertTriangle, CheckCircle, Info, BookOpen } from "lucide-react";

const QnaCardSlider = ({ cards, title }) => {
  const getCardIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-6 h-6 text-warning" />;
      case "success":
        return <CheckCircle className="w-6 h-6 text-success" />;
      case "info":
      default:
        return <Info className="w-6 h-6 text-primary" />;
    }
  };

  const getCardStyle = (type) => {
    switch (type) {
      case "warning":
        return "border-l-4 border-warning bg-warning/5";
      case "success":
        return "border-l-4 border-success bg-success/5";
      case "info":
      default:
        return "border-l-4 border-primary bg-primary/5";
    }
  };

  if (!cards || cards.length === 0) {
    return (
      <CardWrapper>
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            선택된 질문에 대한 답변을 준비 중입니다.
          </p>
        </div>
      </CardWrapper>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <CardWrapper>
        {title && (
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              {title}
            </h2>
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="qna-swiper"
          style={{
            "--swiper-navigation-color": "hsl(var(--primary))",
            "--swiper-pagination-color": "hsl(var(--primary))",
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className={`p-6 rounded-lg min-h-[200px] ${getCardStyle(card.type)}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getCardIcon(card.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-4">
                      {card.content}
                    </p>
                    
                    {card.reference && (
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <a
                          href={card.reference.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary-hover transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>📖 {card.reference.title}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            좌우로 스와이프하거나 화살표를 클릭해서 더 많은 정보를 확인하세요
          </p>
        </div>
      </CardWrapper>
    </div>
  );
};

export default QnaCardSlider;