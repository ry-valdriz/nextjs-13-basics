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
            <h1 className={styles["page-title"]}>notes</h1>
            <div className={styles["notes-card"]}>
                <div>
                    <h2 className={styles["card-title"]}>{title}</h2>
                    <p className={styles["card-content"]}>{content}</p>
                    <p className={styles["card-create-date"]}>{created}</p>
                </div>
            </div>
        </div >
    )
}