const { application } = require('express');
const api = require('./api')
const app = require('./config/express')();
const port = app.get('port');

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});

app.get("/", (req, res) => {
  return res.send({ message: "TESTE" });
});

app.get("/omdb/:title", async (req, res) => {
  const {title} = req.params; 
  console.log(title);
  try {
    const {data} = await api.get(`${title}`);

    return res.send({ data });
  } catch (error) {
    res.send({ error: error.message });
  }
})