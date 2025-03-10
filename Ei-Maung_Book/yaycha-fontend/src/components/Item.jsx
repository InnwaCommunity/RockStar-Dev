import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import { formatRelative } from "date-fns";
import { Alarm as TimeIcon, AccountCircle as UserIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";

export default function Item({ item, remove, primary, comment }) {
    const navigate = useNavigate();

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent onClick={() => {
                if(comment) return false;
                navigate(`/comments/${item.id}`);
            }} sx={{ cursor: "pointer" }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
                        <TimeIcon fontSize="small" color="success" />
                        <Typography variant="caption" sx={{ color: green[500] }}>
                            {formatRelative(item.created, new Date())}
                        </Typography>
                    </Box>
                    <IconButton
                        sx={{ color: "text.fade" }}
                        size="small"
                        onClick={e => {
                            remove(item.id);
                            e.stopPropagation();
                        }}>
                        <DeleteIcon color="inherit" fontSize="inherit" />
                    </IconButton>
                </Box>
                <Typography sx={{ my: 3 }}>{item.content}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
                    <UserIcon fontSize="small" color="info" />
                    <Typography variant="caption">{item.user?.name || 'Unknown User'}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
}