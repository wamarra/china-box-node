const express = require("express");
const router = express.Router();

const Produto = require("../models/produto");
const Pedido = require("../models/pedido");

router.get("/", async (req, res) => {
  const docs = await Pedido.find({}).populate("lista.idProduto");
  res.send(docs);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Pedido.findById(id);
    res.send(doc);
  } catch (error) {
    console.log(`Erro final: ` + error);
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Pedido.deleteOne({
      _id: id,
    });
    res.status(204).send({});
  } catch (err) {
    console.log(err);
    res.send({ mensagem: err.message });
  }
});

router.post("/", async (req, res, next) => {
  const { nomeUsuario, lista } = req.body;

  const listaIdProduto = lista.map((element) => {
    return element.idProduto;
  });

  const totalEncontrados = await Produto.countDocuments({
    _id: { $in: listaIdProduto },
  });

  if (listaIdProduto.length !== totalEncontrados) {
    res.status(406).send({ mensagem: "Produtos não encontrados" });
    return;
  }

  const pedido = new Pedido({
    nomeUsuario: nomeUsuario,
    lista: lista,
  });

  try {
    const doc = await pedido.save();
    res.status(201).send(doc);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
