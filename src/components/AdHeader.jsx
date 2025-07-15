import React from 'react';
import AdSense from './AdSense';

const AdHeader = () => {
  return (
    <div className="w-full bg-muted/30 py-2 border-b border-border">
      <div className="max-w-4xl mx-auto px-4">
        <AdSense
          adSlot="5585696067" // 실제 광고 슬롯 ID로 교체 필요
          adFormat="horizontal"
          className="text-center"
          style={{ minHeight: '50px' }}
        />
      </div>
    </div>
  );
};

export default AdHeader;