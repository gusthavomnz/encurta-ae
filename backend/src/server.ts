import express from 'express';
import { UserService } from './services/userService';
import { linkService } from './services/linkService'

const app = express();
app.use(express.json());
const userService = new UserService();
const linkServiceInstance = new linkService();

app.get('/test', (req, res) => {
  return res.json({ message: "API rodando perfeitamente!" });
});

app.post('/registrar', async (req, res) => {
  try {
    const newUserId = await userService.registerUser(req.body);
    return res.status(201).json({ message: "Usuário registrado!", Usuario: newUserId });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao registrar usuário." });
  }
});

app.post('/encurtar', async (req, res) => {
  try {
    const newLink = await linkServiceInstance.createLink(req.body);
    return res.status(201).json({linkEncurtado: newLink});
  } catch (error){
    return res.status(400).json({error: "Erro ao cadastrar link"})
  }
});

app.get('/allLinks/:UserId', async (req, res) => {
  const userIdRequest = req.params.UserId
  const allLinks =  await linkServiceInstance.getAllLinksByUserId(userIdRequest)
  return res.status(201).json({links: allLinks})

});

app.put('/alterarData', async (req,res) => {
  try {
    const novoLink = await linkServiceInstance.editDateLink(req.body)
    return res.status(201).json({novolink: novoLink})
  } catch(error){
    return res.status(400).json({error: "Erro ao editar o link."})
  }
});


const PORT = 3333;
app.listen(PORT, () => {
  console.log(` Servidor backend rodando em http://localhost:${PORT}`);
});



