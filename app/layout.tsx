import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Titillium_Web } from "next/font/google";
import EstimattyInitializer from './EstimattyInitializer';

export const metadata: Metadata = {
  title: 'Mopzilla Cleaning',
  description: 'Delivering Expert Commercial Cleaning Services Facility and Everyone In It',
}

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code - noscript part */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=925564659782415&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={titillium.className}>
        {children}
        <EstimattyInitializer />

        {/* ✅ Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '925564659782415');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* ✅ Tawk.to Live Chat */}
        <Script
          id="tawkto"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/684083332d1fbe190e48615b/1isu010mn';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        {/* ✅ UserWay ADA Widget */}
        <Script id="userway-config" strategy="beforeInteractive">
          {`
            window._userway_config = {
              account: 'pr3j6GuKON',
              position: '4' // top-left
            };
          `}
        </Script>

        <Script
          id="userway-widget"
          strategy="afterInteractive"
          src="https://cdn.userway.org/widget.js"
        />
      </body>
    </html>
  );
}