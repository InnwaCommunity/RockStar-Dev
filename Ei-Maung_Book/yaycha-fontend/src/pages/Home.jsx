// import { useState, useEffect } from "react";
import { Alert, Box } from "@mui/material";
import Form from "../components/Form";
import Item from "../components/Item";
import { useApp } from "../ThemedApp";

import { useQuery } from "react-query";
const api = import.meta.env.VITE_API;

export default function Home() {
    const { showForm, setGlobalMsg } = useApp();
    
    const { isLoading, isError, error, data } = useQuery("posts",
        async () => {
            const res = await fetch(`${api}/content/posts`);
            return res.json();
          });

    const remove = id => {
        setData(data.filter(item => item.id !== id));
        setGlobalMsg("An item deleted");
    };

    const add = (content, name) => {
        const id = data.length > 0 ? data[0].id + 1 : 1;
        setData([{ id, content, name }, ...data]);
        setGlobalMsg("An item added");
    };

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     const api = import.meta.env.VITE_API;
    //     fetch(`${api}/content/posts`)
    //         .then(async res => {
    //             if (res.ok) {
    //                 setData(await res.json());
    //                 setLoading(false);
    //             } else {
    //                 setError(true);
    //             }
    //         })
    //         .catch(() => {
    //             setError(true);
    //             setGlobalMsg(error.message);
    //         });
    //     // fetch(`${api}/content/posts`)
    //     //     .then(async res => {
    //     //         if (!res.ok) {
    //     //             throw new Error('Network response was not ok');
    //     //         }
    //     //         setData(await res.json());
    //     //     })
    //     //     .catch(error => {
    //     //         console.error('Error fetching data:', error);
    //     //         setGlobalMsg(error.message);
    //     //     });
    // });
    if (isError) {
        return (
            <Box>
        <Alert severity="warning">{error.message}</Alert>
      </Box>
        );
    }
    if (
        isLoading) {
        return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
    }
    return (
        <Box>
            {showForm && <Form add={add} />}
            {data.map(item => (
                <Item key={item.id} item={item} remove={remove} />
            ))}
        </Box>
    );
}