import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import CriarTarefa from "./CriarTarefa";
import EditarTarefa from "./EditarTarefa";
import { CardActions } from "@mui/material";

//A função abaixo é usada para criar o array contendo os dados iniciais da listagem de tarefas.
function createData(
  idTarefa,
  tituloTarefa,
  descricaoTarefa,
  inicioTarefa,
  fimTarefa,
  statusTarefa,
  recursoTarefa
) {
  return {
    idTarefa,
    tituloTarefa,
    descricaoTarefa,
    inicioTarefa,
    fimTarefa,
    statusTarefa,
    recursoTarefa,
  };
}

//Definição do array contendo os dados iniciais da listagem de tarefas
const initialRows = [
  createData(
    1,
    "Tarefa 1",
    "Descrição da Tarefa 1",
    "2022-01-01",
    "2022-01-02",
    "Concluída",
    "Recurso 1"
  ),
  createData(
    2,
    "Tarefa 2",
    "Descrição da Tarefa 2",
    "2022-01-03",
    "2022-01-04",
    "Em Andamento",
    "Recurso 2"
  ),
  createData(
    3,
    "Tarefa 3",
    "Descrição da Tarefa 3",
    "2022-01-04",
    "2022-01-05",
    "Em Andamento",
    "Recurso 3"
  ),
  createData(
    4,
    "Tarefa 4",
    "Descrição da Tarefa 4",
    "2022-01-05",
    "2022-01-06",
    "Em Andamento",
    "Recurso 4"
  ),
  createData(
    5,
    "Tarefa 5",
    "Descrição da Tarefa 5",
    "2022-01-06",
    "2022-01-07",
    "Em Andamento",
    "Recurso 5"
  ),
  createData(
    6,
    "Tarefa 6",
    "Descrição da Tarefa 6",
    "2022-01-07",
    "2022-01-08",
    "Aguardando",
    "Recurso 6"
  ),
];

//Componente ListarTarefa
const ListarTarefa = () => {
  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState();
  const [idTarefaSelecionada, setIdTarefaSelecionada] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEditar = () => setOpenEditar(true);
  const handleCloseEditar = () => setOpenEditar(false);

  //O array definido acima é setado como conteúdo do state Tarefas na renderização inicial do componente.
  useEffect(() => {
    setTarefas(initialRows);
  }, []);

  const handleEditar = (id) => {
    setIdTarefaSelecionada(id);

    //Objeto local para armazenamento da tarefa filtrada de acordo com a seleção do usuário
    let tarefaParaEditar = tarefas.filter((obj) => {
      return obj.idTarefa === id;
    })[0];

    //Atribuição do Objeto local, setado acima, ao state Tarefa
    setTarefa(tarefaParaEditar);

    //Seta como true o state responsável pela exibição do Model de Editar Tarefa
    setOpenEditar(true);
  };

  const handleDeletar = (id) => {
    setTarefas((current) =>
      current.filter((tarefa) => {
        return tarefa.idTarefa !== id;
      })
    );
  };

  return (
    <>
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
          padding: 12,
        }}
      >
        <CardHeader
          title="Tarefas"
          subheader="Listagem de Tarefas"
          sx={{
            borderBottom: "1px solid #333",
            backgroundImage:
              "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        />
        <CardContent>
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: "#333",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(255, 140, 0, 0.5)",
            }}
          >
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#444" }}>
                  <TableCell sx={{ color: "#fff" }}>#</TableCell>
                  <TableCell sx={{ color: "#fff" }}>Título</TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Descrição
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Data de Início
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Data de Finalização
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Status
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    Recurso
                  </TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow
                    key={indice}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#2b2b2b" },
                    }}
                  >
                    <TableCell
                      sx={{ color: "#fff" }}
                      component="th"
                      scope="row"
                    >
                      {row.idTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>
                      {row.tituloTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.descricaoTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.inicioTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.fimTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.statusTarefa}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.recursoTarefa}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(90deg, #ff0080, #ff8c00)",
                          color: "#fff",
                          boxShadow: "0 4px 10px rgba(255, 140, 0, 0.7)",
                          minWidth: 0,
                          padding: "6px",
                        }}
                        onClick={() => handleEditar(row.idTarefa)}
                      >
                        <EditIcon fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(90deg, #ff0080, #ff8c00)",
                          color: "#fff",
                          boxShadow: "0 4px 10px rgba(255, 140, 0, 0.7)",
                          minWidth: 0,
                          padding: "6px",
                        }}
                        onClick={() => handleDeletar(row.idTarefa)}
                      >
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #40e0d0, #ff8c00, #ff0080)",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(64, 224, 208, 0.7)",
            }}
            onClick={handleOpen}
          >
            Criar Tarefa
          </Button>
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
          >
            Cancelar
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <div>
          <CriarTarefa
            handleClose={handleClose}
            tarefas={tarefas}
            setTarefas={setTarefas}
          />
        </div>
      </Modal>
      <Modal open={openEditar} onClose={handleCloseEditar}>
        <div>
          <EditarTarefa
            handleCloseEditar={handleCloseEditar}
            idTarefaSelecionada={idTarefaSelecionada}
            tarefas={tarefas}
            tarefa={tarefa}
            setTarefas={setTarefas}
          />
        </div>
      </Modal>
    </>
  );
};

export default ListarTarefa;
