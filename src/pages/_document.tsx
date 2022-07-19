import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
          {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content="O toque de beleza que faltava no seu dia"/>
          <meta name="keywords" content="venda, revenda, Venda, Revenda, Daterra, Loja, Consultora, daterra, loja, lojas, consultora, revendas, vendas, dinheiro, renda, renda extra, extra, enriquecer, trabalho, grátis, produtos, cosméticos, revendedor, revendedora, consultor, rica, produtos, inscreva-se, seja uma revendedora, seja uma consultora, seja um consultor, seja um revendedor, site, online, vender, revender, lucrar, enriquecer"/>

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://revenda.daterra.com.br/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Daterra - Seja um(a) consultor(a)"/>
         <meta property="og:description" content="Qualidade que se sente"/>
         <meta property="og:image" content="https://revenda.daterra.com.br/static/img/daterra-meta.png"/>

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="daterra.com.br"/>
         <meta property="twitter:url" content="https://revenda.daterra.com.br//"/>
         <meta name="twitter:title" content="Daterra - Seja um(a) consultor(a)"/>
         <meta name="twitter:description" content="O toque de beleza que faltava no seu dia"/>
         <meta name="twitter:image" content="https://revenda.daterra.com.br/static/img/daterra-meta.png"/>


         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" href="/static/img/dat-icon.ico" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}