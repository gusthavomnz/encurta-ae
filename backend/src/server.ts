import express from 'express';
import { UserService } from './services/userService';

const app = express();
app.use(express.json());
const userService = new UserService();

app.get('/test', (req, res) => {
  return res.json({ message: "API rodando perfeitamente!" });
});

app.post('/registrar', async (req, res) => {
try {
        const newUser = await userService.registerUser(req.body);
        return res.status(201).json({ message: "Usuário registrado!", id: newUser?.id });
    } catch (error) {
        return res.status(400).json({ error: "Erro ao registrar usuário." });
    }
});


const PORT = 3333;
app.listen(PORT, () => {
  console.log(` Servidor backend rodando em http://localhost:${PORT}`);
});



