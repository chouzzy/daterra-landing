const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req,res) => {
   console.log('conectamos na api')
   let sendTest = 0
   const body = JSON.parse(req.body)
   
   const message = `
   Nome:${body.Nome}\r\n
   Número:${body.Numero}\r\n
   Email:${body.Email}\r\n
   Cidade:${body.Cidade}\r\n
   Estado: ${body.Estado}
   `;
   const data = {
      to:'matheus@awer.co',
      from: 'contato@awer.co',
      subject: `FORMULÁRIO SITE - SEJA UMA CONSULTORA`,
      text: message,
      html: message.replace(/\r\n/g,'<br>')
   }
   console.log("We're here")

   await mail.send(data).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })

   console.log('chegamos aqui')
   res.status(200).json({status: 'Ok'})
   // Criar lógica do If status not 200, retry
}