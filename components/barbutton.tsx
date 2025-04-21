"use client";
import { useState } from "react";
import { Note } from "./BarLabel/note";
import { Chatbot } from "./BarLabel/chatbot";
import { Question } from "./BarLabel/question";
import { Hint } from "./BarLabel/hint";

export const Barbutton = () => {
    const [view, setView] = useState(null);

    return (
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-row gap-5">
            <button onClick={() => setView("note")}>Note</button>
            <button onClick={() => setView("chat")}>Chat Bot</button>
            <button onClick={() => setView("qa")}>Q&A / Report Exercise</button>
            <button onClick={() => setView("hint")}>Hint</button>
        </div>
        <div>
            {view === "note" && <Note/>}
            {view === "chat" && <Chatbot/>}
            {view === "qa" && <Question/>}
            {view === "hint" && <Hint />}
        </div>
      </div>
    );
};
