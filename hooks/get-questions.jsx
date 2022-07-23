import { useState, useEffect } from "react";
import axios from "axios";
export default function useGetQuestion() {
    const [questions, setQuestions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    function getQuestions() {
        setLoading(true);
        axios
            .get("/api/questions?limit")
            .then(res => {
                setQuestions(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            }
            );
    }
    useEffect(() => {
     
    }, []);
}