const express = require("express");
const mongoose = require("mongoose");
const produtoRoutes = require("./api/routes/produtos");
const pedidoRoutes = require("./api/routes/pedidos");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.a2if4.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Erro ao conectar no banco" + error);
    } else {
      console.log("sucesso ao contectar no banco");
    }
  }
);

app.use("/", (req, res, next) => {
  res.setHeader("HeaderExemploMiddeware", "IESB");
  next();
});

app.use("/produtos", produtoRoutes);
app.use("/pedidos", pedidoRoutes);

app.use((req, res, next) => {
  const err = new Error("URL inexistente");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ mensagem: err.message });
});

app.listen(port, () => {
  console.log(`App iniciou na porta ${port}!`);
});
