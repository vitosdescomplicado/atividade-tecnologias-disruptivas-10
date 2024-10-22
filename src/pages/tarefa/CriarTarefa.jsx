import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

//Declaração do componente CriarTarefa, recebendo como props, do Componente ListarTarefa, os states handClose, tarefas e setTarefas
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState("");
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [inicioTarefa, setInicioTarefa] = useState("");
  const [fimTarefa, setFimTarefa] = useState("");
  const [recursoTarefa, setRecursoTarefa] = useState("");
  const [statusTarefa, setStatusTarefa] = useState("");

  useEffect(() => {
    //Abaixo uma variável é declarada para armazenar o id da tarefa, somando 1 ao maior id existente atualmente no state Tarefas
    let proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa)) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(
      `id: ${idTarefa} \n titulo: ${tituloTarefa} \n descrição: ${descricaoTarefa} \n inicio: ${inicioTarefa} \n fim: ${fimTarefa} \n recurso: ${recursoTarefa} \n status: ${statusTarefa}`
    );

    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    console.log(`Tarefas: ` + JSON.stringify(tarefas));
    handleClose();
  };

  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", marginTop: 12 }}
    >
      <Card
        sx={{
          backgroundColor: "#1a1a1a",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <CardHeader
          title="Tarefas"
          subheader="Cadastro de Tarefas"
          sx={{
            borderBottom: "1px solid #333",
            backgroundImage:
              "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        />
        <CardContent
          sx={{
            width: "95%",
            maxWidth: "100%",
          }}
        >
          <Grid item>
            <FormControl fullWidth>
              <Input
                id="tarefa_titulo"
                aria-describedby="tarefa_titulo_helper_text"
                value={tituloTarefa}
                onChange={(e) => {
                  setTituloTarefa(e.target.value);
                }}
                sx={{
                  color: "#fff",
                  borderColor: "#ff8c00",
                  "&:hover": {
                    borderColor: "#ff0080",
                  },
                }}
              />
              <FormHelperText
                id="tarefa_titulo_helper_text"
                sx={{ color: "#ff8c00" }}
              >
                Título da Tarefa.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl fullWidth>
              <Input
                id="tarefa_descricao"
                aria-describedby="tarefa_descricao_helper_text"
                value={descricaoTarefa}
                onChange={(e) => {
                  setDescricaoTarefa(e.target.value);
                }}
                sx={{
                  color: "#fff",
                  borderColor: "#ff8c00",
                  "&:hover": {
                    borderColor: "#ff0080",
                  },
                }}
              />
              <FormHelperText
                id="tarefa_descricao_helper_text"
                sx={{ color: "#ff8c00" }}
              >
                Descrição da Tarefa.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item>
              <FormControl>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={inicioTarefa}
                  onChange={(e) => {
                    setInicioTarefa(e.target.value);
                  }}
                  sx={{
                    color: "#fff",
                    paddingLeft: "13px",
                    borderColor: "#ff8c00",
                    "&:hover": {
                      borderColor: "#ff0080",
                    },
                  }}
                />
                <FormHelperText
                  id="tarefa_inicio_helper_text"
                  sx={{ color: "#ff8c00" }}
                >
                  Início da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <Input
                  id="tarefa_fim"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={fimTarefa}
                  onChange={(e) => {
                    setFimTarefa(e.target.value);
                  }}
                  sx={{
                    color: "#fff",
                    paddingLeft: "13px",
                    borderColor: "#ff8c00",
                    "&:hover": {
                      borderColor: "#ff0080",
                    },
                  }}
                />
                <FormHelperText
                  id="tarefa_fim_helper_text"
                  sx={{ color: "#ff8c00" }}
                >
                  Fim da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item width={150}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: "#ff8c00" }}>
                  Recurso
                </InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "#ff8c00",
                    "&:hover": {
                      borderColor: "#ff0080",
                    },
                  }}
                >
                  <MenuItem value={"Recurso 1"}>Recurso 1</MenuItem>
                  <MenuItem value={"Recurso 2"}>Recurso 2</MenuItem>
                  <MenuItem value={"Recurso 3"}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item width={150}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso" sx={{ color: "#ff8c00" }}>
                  Status
                </InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "#ff8c00",
                    "&:hover": {
                      borderColor: "#ff0080",
                    },
                  }}
                >
                  <MenuItem value={"Aguardando"}>Aguardando</MenuItem>
                  <MenuItem value={"Em Andamento"}>Em Andamento</MenuItem>
                  <MenuItem value={"Concluída"}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(90deg, #40e0d0, #ff8c00, #ff0080)",
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(64, 224, 208, 0.7)",
                  }}
                  onClick={handleSalvar}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "#ff8c00",
                    "&:hover": {
                      borderColor: "#ff0080",
                    },
                  }}
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CriarTarefa;
