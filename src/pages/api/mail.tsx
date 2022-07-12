const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req,res) => {
   console.log('conectamos na api')
   let sendTest = 0
   const body = JSON.parse(req.body)
   
   const message = `
   Nome: ${body.Nome}\r\n
   Número: (${body.ddd}) ${body.Numero}\r\n
   Email: ${body.Email}\r\n
   Cidade: ${body.Cidade}\r\n
   Estado: ${body.Estado}
   `;
   const data = {
      to:'matheus@awer.co',
      from: 'contato@awer.co',
      subject: `DATERRA COSMÉTICOS - SEJA UM(A) CONSULTOR(A)`,
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
   const message2 = 
   `Olá ${body.Nome} ☺ \r\n \r\n A Daterra Cosméticos agradece o seu contato, retornaremos o mais breve possível!`

   const data2 = {
      to:`${body.Email}`,
      from: 'contato@awer.co',
      subject: `DATERRA COSMÉTICOS - SEJA UMA CONSULTORA`,
      text: message2,
      html: message2.replace(/\r\n/g,'<br>')
   }
   console.log("We're here 2")

   await mail.send(data2).then((response) => {
      console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      while(response[0].statusCode != 202){
         setTimeout(mail.send(data2), 500)
         console.log(response[0].headers)
         sendTest = sendTest + 1
         console.log(`tentativa ${sendTest}º: ${response[0].statusCode}`)
      }
   })
   .catch((error) => {
     console.error(error)
   })

   console.log('Finalizando processo...')
   res.status(200).json({status: 'Ok'})
   // Criar lógica do If status not 200, retry
}