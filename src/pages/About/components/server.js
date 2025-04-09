import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Pode ser alterado para seu SMTP
  auth: {
    user: 'tech.cr.assistencia@gmail.com', // E-mail da sua loja
    pass: 'fcuu vexh lusn olkk' // Use variáveis de ambiente em produção!
  }
});

app.post('/enviar-contato', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  const mailOptions = {
    from: '"CRTech Assistencia" <tech.cr.assistencia@gmail.com>', // Nome da loja como remetente
    to: 'tech.cr.assistencia@gmail.com', // E-mail que receberá os contatos
    replyTo: email, // Opcional: permite responder diretamente ao cliente
    subject: 'Nova mensagem no site',
    text: `
      📩 Nova mensagem de contato:
      
      👤 Nome: ${nome}
      ✉️ Email: ${email}
      📝 Mensagem: 
      ${mensagem}
      
      ---
      Mensagem enviada através do formulário do site.
    `,
    html: `
      <h3>📩 Nova mensagem de contato:</h3>
      <p><strong>👤 Nome:</strong> ${nome}</p>
      <p><strong>✉️ Email:</strong> ${email}</p>
      <p><strong>📝 Mensagem:</strong></p>
      <p>${mensagem.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Mensagem enviada através do formulário do site.</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro no envio:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar mensagem',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));