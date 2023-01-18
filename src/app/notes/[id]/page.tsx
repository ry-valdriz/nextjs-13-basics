import styles from "../Notes.module.css";

async function getNote(noteID: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteID}`,
        {
            next: { revalidate: 30 }
        }
    );
    const data = await res.json();
    return data;
};

export default async function NotePage({ params }: any) {
    const { id, title, content, created } = await getNote(params.id);
    return (
        <div className={styles["page-container"]}>
            <div className={styles["notes-card"]} >
                <h1>notes</h1>
                <div>
                    <h3>{title}</h3>
                    <h5>{content}</h5>
                    <p>{created}</p>
                </div>
            </div>
        </div>
    )
}