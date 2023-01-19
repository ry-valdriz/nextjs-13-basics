'use client';
import { useState } from "react";
import styles from './Notes.module.css';
import { useRouter } from "next/navigation";

export default function CreateNote() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const router = useRouter();

    const createNote = async () => {
        try {
            const endpoint = "http://127.0.0.1:8090/api/collections/notes/records";
            // const endpoint = "http://localhost:3000/api/noteAPI";
            const payload = JSON.stringify({
                title,
                content,
            });
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: payload,
                cache: 'no-store'
            });
            console.log("create note response: ", response);
            // router.refresh();
        } catch (error) {
            console.log("error creating note: ", error);
        }
    }



    return (
        <form
            onSubmit={createNote}
            // action="api/createNote"
            method="POST"
            className={styles['create-note-container']}
        >
            <h3>Create Note</h3>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    name="title"
                    type={"text"}
                    placeholder="Title. . ."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="content">Content: </label>
                <textarea
                    name="content"
                    placeholder="Content. . ."
                    value={content}
                    required
                    minLength={1}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                />
            </div>
            <button type="submit">
                Create Note
            </button>
        </form>
    )
}