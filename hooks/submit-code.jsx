import { useState, useEffect } from "react";
export default function useSubmitCode()
{
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("");
    const [compiler, setCompiler] = useState("");
    const [compilerVersion, setCompilerVersion] = useState("");

    function submitCode()
    {
        console.log("submitCode");
    }
}