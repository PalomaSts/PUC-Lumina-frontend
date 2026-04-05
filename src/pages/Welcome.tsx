import { Stack, Typography, Paper } from "@mui/material";
import { useNavigator } from "../AppRouter";

export function Root() {
  const navigate = useNavigator();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "80vh", textAlign: "center" }}
      spacing={5}
    >
      {/* Título principal */}
      <Typography variant="h2" fontWeight={600}>
        Lumina
      </Typography>

      {/* Subtítulo */}
      <Typography variant="h6" sx={{ opacity: 0.7, maxWidth: 500 }}>
        Organize suas tarefas, acompanhe seu progresso e mantenha o foco no que realmente importa.
      </Typography>

      {/* Cards */}
      <Stack direction="row" spacing={4} mt={4}>
        <Paper
          sx={{
            p: 4,
            width: 220,
            textAlign: "center",
            transition: "0.2s",
            "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          }}
        >
          <Typography variant="h6">Tasks</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Gerencie suas tarefas do dia a dia
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 4,
            width: 220,
            textAlign: "center",
            transition: "0.2s",
            "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          }}
        >
          <Typography variant="h6">Projects</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Organize tudo em projetos estruturados
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: 4,
            width: 220,
            textAlign: "center",
            transition: "0.2s",
            "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
          }}
        >
          <Typography variant="h6">Progress</Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Acompanhe sua evolução com métricas
          </Typography>
        </Paper>
      </Stack>

      {/* Frase final */}
      <Typography variant="body2" sx={{ opacity: 0.5, mt: 3 }}>
        Comece agora e construa consistência todos os dias 🚀
      </Typography>
    </Stack>
  );
}
