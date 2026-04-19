import {
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
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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

  const [completedStats, setCompletedStats] = useState({
    total: 0,
    completed: 0,
  });
  type WeeklyData = {
    name: string;
    tasks: number;
  };
  
  const [weeklyData, setWeeklyData] = useState<WeeklyData[]>([]);
  const [loadingWeekly, setLoadingWeekly] = useState(true);

  useEffect(() => {
    (async () => {
      try {

        const res2 = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/tasks/stats/completion`,
          { credentials: "include" }
        );
        if (res2.ok) {
          const data = await res2.json();
          setCompletedStats(data);
        }

        const res3 = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/tasks/stats/weekly`,
          { credentials: "include" }
        );
    
        if (res3.ok) {
          const data = await res3.json();
    
          const formatted = data.map((d: any, index: number, arr: any[]) => ({
            name: new Date(d.date).toLocaleDateString("pt-BR", {
              weekday: "short",
            }),
            tasks: d.count
          }));
    
          setWeeklyData(formatted);
          setLoadingWeekly(false);
        }
      } catch (err) {
        console.error("Error fetching stats", err);
      } finally {
        setLoadingWeekly(false);
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
              <Stack spacing={2}>
                <Typography variant="h6">Weekly Activity</Typography>
                {loadingWeekly ? (
                  <Typography fontSize={12}>Carregando...</Typography>
                ) : weeklyData.every(d => d.tasks === 0) ? (
                  <Typography fontSize={12}>
                    Nenhuma tarefa concluída esta semana
                  </Typography>
                ) : (
                  <Box width="100%">
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#aaa" tick={{ fontSize: 12 }} />
                        <Tooltip formatter={(value) => `${value ?? 0} tarefas`} />
                        <Bar
                          dataKey="tasks"
                          barSize={30}
                          radius={[8, 8, 0, 0]}
                          shape={(props: any) => {
                            const { x, y, width, height, index } = props;
                            const isToday = index === weeklyData.length - 1;
                        
                            return (
                              <rect
                                x={x}
                                y={y}
                                width={width}
                                height={height}
                                fill={isToday ? "#fbbf24" : "#f59e0b"}
                                rx={6}
                              />
                            );
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>  
                  </Box>
                )}
              </Stack>
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