import { useRef, useState } from "react";
import "./App.css";
import Logo from "./Animations/Logo";
import {
        Button,
        Card,
        Container,
        IconButton,
        Stack,
        styled,
        Switch,
        TextField,
        Typography,
        useColorScheme,
} from "@mui/material";
import MousePointer from "./Animations/MousePointer";
import BoxAnimation from "./Animations/BoxAnimation";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import InIt from "./Animations/InIt";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import PlaylistAddCircleRoundedIcon from "@mui/icons-material/PlaylistAddCircleRounded";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        "& .MuiSwitch-switchBase": {
                margin: 1,
                padding: 0,
                transform: "translateX(6px)",
                "&.Mui-checked": {
                        color: "#fff",
                        transform: "translateX(22px)",
                        "& .MuiSwitch-thumb:before": {
                                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                                        "#fff",
                                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                        },
                        "& + .MuiSwitch-track": {
                                opacity: 1,
                                backgroundColor: "#aab4be",
                                ...theme.applyStyles("dark", {
                                        backgroundColor: "#8796A5",
                                }),
                        },
                },
        },
        "& .MuiSwitch-thumb": {
                backgroundColor: "#f0abfc",
                width: 32,
                height: 32,
                "&::before": {
                        content: "''",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        left: 0,
                        top: 0,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                                "#fff",
                        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
                },
                ...theme.applyStyles("dark", {
                        backgroundColor: "#f0abfc",
                }),
        },
        "& .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#aab4be",
                borderRadius: 20 / 2,
                ...theme.applyStyles("dark", {
                        backgroundColor: "#8796A5",
                }),
        },
}));

function App() {
        const { mode, setMode } = useColorScheme();
        const chatContainerRef = useRef<any>(null);
        const [todos, setTodos] = useState([{ text: "a", id: 23, completed: false }]);
        const [newTodo, setNewTodo] = useState("");
        // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const scrolltobottom = () => {
                if (chatContainerRef.current) {
                        // Scrolls to the bottom of the scrollable content
                        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
        };
        const addTodo = (e: any) => {
                e.preventDefault();
                if (todos[todos.length - 1]?.text === "") return;
                setTodos([...todos, { id: Date.now(), text: "", completed: false }]);
        };

        const deleteTodo = async (id: number) => {
                setTodos(todos.filter((todo) => todo.id !== id));
        };

        const toggleComplete = (id: number) => {
                setTodos(
                        todos.map((todo) =>
                                todo.id === id
                                        ? {
                                                  ...todo,
                                                  completed: !todo.completed,
                                          }
                                        : todo,
                        ),
                );
        };

        const updateComplete = (id: number) => {
                if (newTodo.trim() === "") return;
                setTodos(
                        todos.map((todo) =>
                                todo.id === id
                                        ? {
                                                  ...todo,
                                                  text: newTodo,
                                          }
                                        : todo,
                        ),
                );
                setNewTodo("");
        };
        return (
                <Container>
                        <Stack
                                sx={{
                                        overflow: "none",
                                        height: "100vh",
                                }}
                                direction={"column"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                        >
                                <Stack
                                        sx={{
                                                overflow: "none",
                                                width: "100%",
                                        }}
                                        direction={"column"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                >
                                        <MousePointer />
                                        <InIt>
                                                <Stack
                                                        direction={"row"}
                                                        justifyContent={"center"}
                                                        m={4}
                                                        alignItems={"center"}
                                                        spacing={2}
                                                >
                                                        <Logo />
                                                        <Typography
                                                                variant="h1"
                                                                color={"textSecondary"}
                                                        >
                                                                ToDo List{" "}
                                                        </Typography>
                                                        <IconButton
                                                                color="primary"
                                                                onClick={(e) => {
                                                                        scrolltobottom();
                                                                        addTodo(e);
                                                                }}
                                                        >
                                                                <AddCircleRoundedIcon fontSize="large" />
                                                        </IconButton>
                                                </Stack>
                                        </InIt>

                                        <InIt>
                                                <Card
                                                        sx={{
                                                                boxShadow: "none",
                                                        }}
                                                >
                                                        <Stack
                                                                direction={"column"}
                                                                ref={chatContainerRef}
                                                                height={"330px"}
                                                                width={"900px"}
                                                                overflow={"auto"}
                                                                p={5}
                                                                spacing={2}
                                                        >
                                                                {todos.map((todo) => (
                                                                        <BoxAnimation
                                                                                mkey={
                                                                                        todo.id +
                                                                                        todo.text
                                                                                }
                                                                                key={
                                                                                        todo.id +
                                                                                        todo.text
                                                                                }
                                                                        >
                                                                                <Stack
                                                                                        direction={
                                                                                                "row"
                                                                                        }
                                                                                        alignItems={
                                                                                                "center"
                                                                                        }
                                                                                        justifyContent={
                                                                                                "space-between"
                                                                                        }
                                                                                        spacing={4}
                                                                                >
                                                                                        {todo.text ===
                                                                                        "" ? (
                                                                                                <TextField
                                                                                                        fullWidth
                                                                                                        variant="filled"
                                                                                                        type="text"
                                                                                                        // multiline
                                                                                                        value={
                                                                                                                newTodo
                                                                                                        }
                                                                                                        onChange={(
                                                                                                                e,
                                                                                                        ) =>
                                                                                                                setNewTodo(
                                                                                                                        e
                                                                                                                                .target
                                                                                                                                .value,
                                                                                                                )
                                                                                                        }
                                                                                                        placeholder="Add A New ToDo"
                                                                                                />
                                                                                        ) : (
                                                                                                <Typography
                                                                                                        variant="h5"
                                                                                                        onClick={() =>
                                                                                                                toggleComplete(
                                                                                                                        todo.id,
                                                                                                                )
                                                                                                        }
                                                                                                        noWrap
                                                                                                        textTransform={
                                                                                                                "capitalize"
                                                                                                        }
                                                                                                        sx={{
                                                                                                                color: todo.completed
                                                                                                                        ? "error.main"
                                                                                                                        : "success.main",
                                                                                                        }}
                                                                                                >
                                                                                                        {
                                                                                                                todo.text
                                                                                                        }
                                                                                                </Typography>
                                                                                        )}
                                                                                        {todo.text ===
                                                                                        "" ? (
                                                                                                <IconButton
                                                                                                        color="success"
                                                                                                        onClick={() =>
                                                                                                                updateComplete(
                                                                                                                        todo.id,
                                                                                                                )
                                                                                                        }
                                                                                                >
                                                                                                        <PlaylistAddCheckCircleRoundedIcon fontSize="large" />
                                                                                                </IconButton>
                                                                                        ) : (
                                                                                                <Stack
                                                                                                        direction={
                                                                                                                "row"
                                                                                                        }
                                                                                                        spacing={
                                                                                                                2
                                                                                                        }
                                                                                                >
                                                                                                        <IconButton
                                                                                                                color="success"
                                                                                                                onClick={() =>
                                                                                                                        toggleComplete(
                                                                                                                                todo.id,
                                                                                                                        )
                                                                                                                }
                                                                                                        >
                                                                                                                {todo.completed ? (
                                                                                                                        <PlaylistAddCircleRoundedIcon
                                                                                                                                color="error"
                                                                                                                                fontSize="large"
                                                                                                                        />
                                                                                                                ) : (
                                                                                                                        <PlaylistAddCheckCircleRoundedIcon fontSize="large" />
                                                                                                                )}
                                                                                                        </IconButton>
                                                                                                        <Button
                                                                                                                color="error"
                                                                                                                variant="text"
                                                                                                                size="large"
                                                                                                                onClick={() =>
                                                                                                                        deleteTodo(
                                                                                                                                todo.id,
                                                                                                                        )
                                                                                                                }
                                                                                                        >
                                                                                                                Delete
                                                                                                        </Button>
                                                                                                </Stack>
                                                                                        )}
                                                                                </Stack>
                                                                        </BoxAnimation>
                                                                ))}
                                                        </Stack>
                                                </Card>
                                        </InIt>
                                </Stack>
                                <InIt>
                                        <Typography variant="h5" m={2} color="text.secondary">
                                                Copyright@10/2025
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <MaterialUISwitch
                                                        sx={{ m: 1 }}
                                                        defaultChecked
                                                        value={mode}
                                                        onChange={() =>
                                                                setMode(
                                                                        mode === "dark" ||
                                                                                mode === "system"
                                                                                ? "light"
                                                                                : "dark",
                                                                )
                                                        }
                                                />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By
                                                Abhishek Zambare
                                        </Typography>
                                </InIt>
                        </Stack>
                </Container>
        );
}

export default App;
