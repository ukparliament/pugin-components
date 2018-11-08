'use strict';

/*
 * Google Analytics
 */


(function(){

  let GA_TRACKING_ID;
  const GA_TRACKING_ID_WWW = 'UA-15845045-1';
  const GA_TRACKING_ID_BETA = 'UA-15845045-29';
  const GA_TRACKING_ID_DEVCI = 'UA-15845045-30';

  const hostname = window.location.hostname;

  switch(hostname) {
    case 'www.parliament.uk':
      GA_TRACKING_ID = GA_TRACKING_ID_WWW;
      break;
    case 'beta.parliament.uk':
      GA_TRACKING_ID = GA_TRACKING_ID_BETA;
      break;
    case 'devci.parliament.uk':
      GA_TRACKING_ID = GA_TRACKING_ID_DEVCI;
  }


  let gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`);
  document.head.appendChild(gtagScript);


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {'anonymize_ip': true});

})();
