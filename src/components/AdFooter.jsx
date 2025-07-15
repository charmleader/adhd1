import React from 'react';
import AdSense from './AdSense';

const AdFooter = () => {
  return (
    <div className="w-full bg-muted/30 py-4 border-t border-border mt-8">
      <div className="max-w-4xl mx-auto px-4">
        <AdSense
          adSlot="5585696067" // 실제 광고 슬롯 ID로 교체 필요
          adFormat="rectangle"
          className="text-center"
          style={{ minHeight: '200px' }}
        />
        <div className="text-center mt-4 text-xs text-muted-foreground">
          © 2024 참리더. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AdFooter;