import React, { useEffect } from 'react';

const AdSense = ({ 
  adSlot, 
  adFormat = "auto", 
  adLayout = "", 
  adLayoutKey = "",
  style = {},
  className = ""
}) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-1384920486072546"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-ad-layout={adLayout}
        data-ad-layout-key={adLayoutKey}
      />
    </div>
  );
};

export default AdSense;