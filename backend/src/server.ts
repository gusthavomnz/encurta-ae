import express from 'express';
import cors from 'cors';
import { UserService } from './services/userService';
import { linkService } from './services/linkService';
import { authMiddleware } from './middleware/authMiddleware';
import { alterarSenhaRequest } from './types/Auth';
import { alterarNomeRequest } from './types/Auth';

const app = express();
app.use(cors());
app.use(express.json());
const userService = new UserService();
const linkServiceInstance = new linkService();

app.get('/test', (req, res) => {
  return res.json({ message: "API rodando perfeitamente!" });
});

app.post('/registrar', async (req, res) => {
  try {
    const newUserId = await userService.registerUser(req.body);
    return res.status(201).json({ message: "Usuário registrado!", userId: newUserId.userId });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao registrar usuário." });
  }
});

app.post('/login', async(req,res) => {
  try {
    const userLogado = await userService.loginUser(req.body);
    return res.status(200).json({ message: "Usuario logado!", userId: userLogado.userId, name: userLogado.name });
  }
  catch(error){
    return res.status(400).json({ error: "Erro ao logar."});
  }
});

app.post('/encurtar', authMiddleware, async (req, res) => {
  try {
    const newLink = await linkServiceInstance.createLink(req.body, (req as any).userId);
    return res.status(201).json({linkEncurtado: newLink});
  } catch (error){
    return res.status(400).json({error: "Erro ao cadastrar link"})
  }
});

app.get('/allLinks', authMiddleware, async (req, res) => {
  try {
    const allLinks =  await linkServiceInstance.getAllLinksByUserId((req as any).userId)
    return res.status(200).json({Links: allLinks})
  } catch (error) {
    console.error(error)
    return res.status(400).json({error: "Erro ao listar links."})
  }
});

app.put('/alterarData', authMiddleware, async (req,res) => {
  try {
    const novoLink = await linkServiceInstance.editDateLink(req.body, (req as any).userId)
    return res.status(201).json({novolink: novoLink})
  } catch(error){
    return res.status(400).json({error: "Erro ao editar o link."})
  }
});

app.get('/:LinkEncurtado', async (req,res) => {

const ip = req.ip ?? '';
const userAgent = req.headers['user-agent'] ?? '';
const referrer = req.headers['referer'] ?? '';
    try {
        const redirectUrl = await linkServiceInstance.retornarLinkOriginal(req.params.LinkEncurtado,ip,userAgent,referrer)

        if (!redirectUrl) {
            return res.status(404).json({error: "Link não encontrado"})
        }

        const url = /^https?:\/\//i.test(redirectUrl) ? redirectUrl : `https://${redirectUrl}`;
        return res.status(200).json({link: url})
    } catch (error) {
        return res.status(404).json({error: "Link não encontrado"})
    }
});

app.post('/qrcode', async (req,res) => {
  const { url } = req.body;
  let codigoImagem = await linkServiceInstance.criarQrCode(url)
  return res.status(201).json({qrCode: codigoImagem})
});

app.delete('/delete', authMiddleware, async (req,res) => {
  const { linkId } = req.body;
  let ifDelete = await linkServiceInstance.deletarLink((req as any).userId, linkId)
  if (ifDelete == true) {
    return res.status(200).json({ifDelete})
  } else {
    return res.status(400).json({ifDelete})
  }

});


app.put('/alterarSenha', authMiddleware, async (req,res) => {
  try {
    const { senhaAntiga, novaSenha } = req.body;
    const userId = (req as any).userId;
    const dados: alterarSenhaRequest = { userId, senhaAntiga, novaSenha };
    const resultado = await userService.alterarSenha(dados);
    if (resultado) {
      return res.status(200).json({ message: "Senha alterada com sucesso!" });  
    } else {
      return res.status(400).json({ error: "Erro ao alterar senha. Verifique se a senha antiga está correta." });
    }
  } catch (error) {
    return res.status(400).json({ error: "Erro ao alterar senha." });
  }
});

app.put('/alterarNome', authMiddleware, async (req, res) => {
  try {
    const { novoNome } = req.body;
    const userId = (req as any).userId;
    const dados: alterarNomeRequest = { userId, novoNome };
    const resultado = await userService.alterarNome(dados);
    if (resultado.ok) {
      return res.status(200).json({ message: "Nome alterado com sucesso!" });
    } else {
      return res.status(400).json({ error: resultado.error });
    }
  } catch (error) {
    return res.status(400).json({ error: "Erro ao alterar nome." });
  }
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(` Servidor backend rodando em http://localhost:${PORT}`);
});
