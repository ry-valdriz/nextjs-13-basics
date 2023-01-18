import Link from "next/link";
import styles from './Notes.module.css';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

const getNotes = async () => {
    console.log("getting notes. . .")
    try {
        // const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
        // const data = await res.json();
        const db = new PocketBase('http://127.0.0.1:8090');
        const data = await db.collection('notes').getList(1, 10);
        console.log("notes data: ", data);
        return data?.items as any[];
    } catch (error) {
        console.log("error fetching notes: ", error);
        return [] as any[];
    }
}

const Note = ({ note }: any) => {
    const { id, title, content, created } = note || {};
    console.log('card info: ', { id, title, content, created });
    return (
        <Link href={`/notes/${id}`}>
            <div className={styles["notes-card"]}>
                <h2>{title}</h2>
                <h5>{content || ""}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}


export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div className={styles["page-container"]}>
            <h1>Notes</h1>
            <div className={styles["notes-container"]}>

                {
                    notes?.map((note) => {
                        return <Note key={note.id} note={note} />
                    })
                }
            </div>
        </div>
    )
}