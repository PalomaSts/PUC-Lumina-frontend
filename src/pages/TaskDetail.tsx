import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigator } from '../AppRouter';
import { useLoading } from '../contexts/LoadingContext';
import { FormInputControl } from '../form/form-control';
import { useZForm } from '../form/useForm';
import { taskSchema } from '../schemas/Task';
import { getTask } from '../services/Task.service';
import { listProjects } from '../services/Project.service';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function TaskDetail() {
  const navigate = useNavigator();
  const [isOpen, setIsOpen] = useState(true);
  const { id } = useParams();
  const { setLoading } = useLoading();
  const location = useLocation();
  const state = location.state;
  const [projects, setProjects] = useState<any[]>([]);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    (async () => {
      if (id && id !== 'new') {
        setLoading(true);
        try {
          const task = await getTask(id);
          form.setValues(task);
        } catch (error) {}
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const allProjects = await listProjects();
        setProjects(allProjects.filter((p) => p.status !== 'cancelled'));
      } catch (error) {}
    })();
  }, []);

  const close = () => {
    setIsOpen(false);
    navigate(-1);
  };

  const form = useZForm(taskSchema, {
    onSubmit: async (values) => {
      const isNew = id === 'new';

      const payload = {
        ...values,
        dueDate: new Date(values.dueDate),
        createdAt: new Date(values.createdAt),
      };

      await fetch(
        `${process.env.REACT_APP_SERVER_URL}/tasks${isNew ? '' : '/' + id}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: isNew ? 'POST' : 'PATCH',
          credentials: 'include',
          body: JSON.stringify(payload),
        },
      );
      close();
    },
  });

  const selectedProject = projects.find(p => p.id === form.values.projectId);

  const getNextStatusOptions = (current: string) => {
    switch (current) {
      case 'new':
        return ['in_progress', 'cancelled'];
      case 'in_progress':
        return ['completed', 'paused', 'cancelled'];
      case 'paused':
        return ['in_progress'];
      case 'completed':
        return ['in_progress'];
      default:
        return [];
    }
  };

  const getReadableStatus = (status: string) => {
    switch (status) {
      case 'new':
        return 'New';
      case 'in_progress':
        return 'In Progress';
      case 'paused':
        return 'Paused';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  useEffect(() => {
    setSuggestions([]);
  }, [form.values.projectId]);

  const getSuggestions = async () => {
    if (!selectedProject) return;

    setLoadingAI(true);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/ai/suggest-tasks?project=${selectedProject.name}`
      );

      if (!res.ok) {
        throw new Error("Erro ao gerar sugestões");
      }

      const data = await res.json();
      setSuggestions(data.suggestions || []);
    } catch (err) {
      console.error(err);
    }

    setLoadingAI(false);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={4}>
            <Select
              value={form.values.projectId || ''}
              onChange={(e) => form.setFieldValue('projectId', e.target.value)}
              fullWidth
              disabled={state?.readonly}
              displayEmpty
            >
              <MenuItem value="">Select a project</MenuItem>
              {projects.map((project) => (
                <MenuItem key={project.id} value={project.id}>
                  {project.name}
                </MenuItem>
              ))}
            </Select>

            <Button
              variant="outlined"
              onClick={getSuggestions}
              disabled={!form.values.projectId || loadingAI}
              sx={{ mt: 1 }}
            >
             {loadingAI ? "Gerando..." : "💡 Sugerir tarefas com IA"}
            </Button>

            {suggestions.length > 0 && (
              <Stack spacing={1} mt={2}>
                <Typography variant="subtitle1">Sugestões:</Typography>
            
                {suggestions.map((s, index) => (
                  <Paper key={index} sx={{ p: 1.5 }}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontSize={14}>{s}</Typography>
            
                      <Button
                        size="small"
                        onClick={() => {
                          form.setFieldValue("title", s);
                          setSuggestions([]);
                        }}
                      >
                        Usar
                      </Button>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            )}

            <FormInputControl
              schema={taskSchema}
              form={form}
              field="title"
              disabled={state?.readonly}
            />
            <FormInputControl
              schema={taskSchema}
              form={form}
              field="description"
              disabled={state?.readonly}
            />
            {!state?.readonly && form.values.status !== 'cancelled' && (
              <Select
                value={form.values.status || ''}
                onChange={(e) => {
                  if (e.target.value === 'cancelled') {
                    setShowCancelDialog(true);
                  } else {
                    form.setFieldValue('status', e.target.value);
                  }
                }}
                fullWidth
                label="Status"
              >
                <MenuItem value={form.values.status} disabled>
                  {getReadableStatus(form.values.status)}
                </MenuItem>

                {getNextStatusOptions(form.values.status).map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt.charAt(0).toUpperCase() +
                      opt.slice(1).replace('_', ' ')}
                  </MenuItem>
                ))}
              </Select>
            )}

            {form.values.status === 'cancelled' && (
              <TextField
                value="Cancelled"
                label="Status"
                fullWidth
                disabled
                variant="outlined"
              />
            )}

            <TextField
              type="date"
              value={
                form.values.dueDate instanceof Date
                  ? form.values.dueDate.toISOString().split('T')[0]
                  : new Date(form.values.dueDate || '')
                      .toISOString()
                      .split('T')[0]
              }
              onChange={(e) => form.setFieldValue('dueDate', e.target.value)}
              fullWidth
              disabled={state?.readonly}
              label="Due Date"
              InputLabelProps={{ shrink: true }}
            />

            <Select
              value={form.values.priority}
              onChange={(e) => form.setFieldValue('priority', e.target.value)}
              fullWidth
              disabled={state?.readonly}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
            <Stack direction={'row-reverse'} spacing={2}>
              <Button
                type="submit"
                variant="contained"
                onClick={form.submitForm}
                disabled={!form.dirty || !form.isValid}
              >
                Save
              </Button>
              <Button onClick={close}>Cancel</Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
      <Dialog
        open={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
      >
        <DialogTitle>Confirm Cancel</DialogTitle>
        <DialogContent>
          Tem certeza que deseja cancelar esta tarefa? Essa ação é irreversível.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCancelDialog(false)}>Não</Button>
          <Button
            color="error"
            onClick={() => {
              form.setFieldValue('status', 'cancelled');
              setShowCancelDialog(false);
            }}
          >
            Sim, cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
