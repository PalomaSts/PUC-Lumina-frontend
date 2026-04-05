import {
  BarChart,
  PieChart,
  Person as ProfileIcon,
  BackupTable as ProjectsIcon,
  FormatListBulleted as TasksIcon,
} from "@mui/icons-material";
import {
  Grid2 as Grid,
  Paper,
  Stack,
  SxProps,
  Typography,
  LinearProgress,
  Box,
  CircularProgress,
} from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useNavigator } from "../AppRouter";

const btnStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TopBtn = ({ children }: PropsWithChildren) => (
  <Paper elevation={6} sx={btnStyles}>
    <Stack spacing={2} p={8} alignItems="center" justifyContent="center">
      {children}
    </Stack>
  </Paper>
);

const BottomBtn = ({ children, ...props }: PropsWithChildren & any) => (
  <Paper
    {...props}
    variant="outlined"
    sx={{
      ...btnStyles,
      cursor: "pointer",
      transition: "0.2s",
      "&:hover": { boxShadow: 6, transform: "scale(1.03)" },
    }}
  >
    <Stack spacing={1} p={6} alignItems="center" justifyContent="center">
      {children}
    </Stack>
  </Paper>
);

export function Home() {
  const navigator = useNavigator();

  const [last24h, setLast24h] = useState<number>(0);
  const [completedStats, setCompletedStats] = useState({
    total: 0,
    completed: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const res1 = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/tasks/stats/last24h`,
          { credentials: "include" }
        );
        if (res1.ok) {
          const data = await res1.json();
          setLast24h(data.count || 0);
        }

        const res2 = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/tasks/stats/completion`,
          { credentials: "include" }
        );
        if (res2.ok) {
          const data = await res2.json();
          setCompletedStats(data);
        }
      } catch (err) {
        console.error("Error fetching stats", err);
      }
    })();
  }, []);

  const percentage =
    completedStats.total > 0
      ? Math.round((completedStats.completed / completedStats.total) * 100)
      : 0;

  const getColor = () => {
    if (percentage < 30) return "error";
    if (percentage < 70) return "warning";
    return "success";
  };

  return (
    <Stack spacing={3}>
      {/* ===== TOP CARDS ===== */}
      <Grid container spacing={5}>
        {/* CARD 1 */}
        <Grid size={6}>
          <TopBtn>
            <BarChart sx={{ fontSize: 70 }} />

            <Typography variant="h6">Today</Typography>

            <Typography variant="h4" fontWeight={600}>
              {last24h}
            </Typography>

            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              tasks completed in the last 24h
            </Typography>
          </TopBtn>
        </Grid>

        {/* CARD 2 */}
        <Grid size={6}>
          <TopBtn>
            {/* gráfico circular */}
            <Box position="relative" display="inline-flex">
              <CircularProgress
                variant="determinate"
                value={percentage}
                size={90}
                color={getColor()}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                bottom={0}
                right={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6" fontWeight={600}>
                  {percentage}%
                </Typography>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 1 }}>
              Progress
            </Typography>

            <Typography variant="body2">
              {completedStats.completed} / {completedStats.total} completed
            </Typography>

            {/* barra complementar */}
            <Box sx={{ width: "80%", mt: 2 }}>
              <LinearProgress
                variant="determinate"
                value={percentage}
                color={getColor()}
                sx={{
                  height: 10,
                  borderRadius: 5,
                }}
              />
            </Box>
          </TopBtn>
        </Grid>
      </Grid>

      {/* ===== NAVIGATION CARDS ===== */}
      <Grid container spacing={5}>
        <Grid size={4}>
          <BottomBtn onClick={() => navigator("/tasks")}>
            <TasksIcon sx={{ fontSize: 70 }} />
            <Typography>My Tasks</Typography>
          </BottomBtn>
        </Grid>

        <Grid size={4}>
          <BottomBtn onClick={() => navigator("/projects")}>
            <ProjectsIcon sx={{ fontSize: 70 }} />
            <Typography>Projects</Typography>
          </BottomBtn>
        </Grid>

        <Grid size={4}>
          <BottomBtn onClick={() => navigator("/profile")}>
            <ProfileIcon sx={{ fontSize: 70 }} />
            <Typography>Profile</Typography>
          </BottomBtn>
        </Grid>
      </Grid>
    </Stack>
  );
}