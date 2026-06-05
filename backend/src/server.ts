import express from 'express';

const app = express();
app.use(express.json());

app.get('/test', (req, res) => {
  return res.json({ message: "API rodando perfeitamente!" });
});

const PORT = 3333;
app.listen(PORT, () => {
  console.log(` Servidor backend rodando em http://localhost:${PORT}`);
});