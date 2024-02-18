import Script from "next/script";
import './styles.css'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "gqhymojzmp");
if(window.scrollY===0) document.body.classList.add("top");
window.addEventListener("scroll", function(){
  if(window.scrollY===0){
    document.body.classList.add("top");
  } else {
    document.body.classList.remove("top");
  }
});
                    `,
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
