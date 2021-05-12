const express = require("express");
const router = express.Router();

const Produto = require("../models/produto");

router.get("/", async (req, res) => {
  const { nome, preco } = req.body;
  try {
    const docs = await Produto.find({
      // nome: /Yakissoba.*/,
      // preco: {$ne: 30.99}
    });
    res.send(docs);
  } catch (error) {
    console.log(`Erro final: ` + error);
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Produto.findById(id);
    res.send(doc);
  } catch (error) {
    console.log(`Erro final: ` + error);
    res.send(error);
  }
});

router.patch("/:id", async function (req, res) {
  const { id } = req.params;
  const updateParams = {};
  for (const param of Object.keys(req.body)) {
    updateParams[param] = req.body[param];
  }
  try {
    const doc = await Produto.updateOne(
      {
        _id: id,
      },
      updateParams
    );
    res.status(204).send(doc);
  } catch (err) {
    console.log(err);
    res.send({ mensagem: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Produto.deleteOne({
      _id: id,
    });
    res.status(204).send({});
  } catch (err) {
    console.log(err);
    res.send({ mensagem: err.message });
  }
});

router.post("/", async (req, res) => {
  const { nome, descricao, preco, imagem } = req.body;
  const produto = Produto({
    nome: nome,
    descricao: descricao,
    preco: preco,
    imagem: imagem,
  });

  try {
    const doc = await produto.save();
    res.status(201).send({
      mensagem: "Produto salvo com sucesso",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).send({ mensagem: "Produto já existe" });
    } else {
      console.log(`Erro final: ` + error);
      res.send({ mesangem: error.message });
    }
  }
});

module.exports = router;
