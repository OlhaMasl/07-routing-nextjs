import { fetchNoteById } from '@/lib/api';
import css from '@/app/@modal/(.)notes/[id]/NotePreview.module.css';
import ModalPreview from '@/components/ModalPreview/ModalPreview';

type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: NotePreviewProps) => {
    const { id } = await params;
    const note = await fetchNoteById(id);

    return (
        <ModalPreview >
            <div className={css.container}>
                <div className={css.item}>
                    <div className={css.header}>
                        <h2>{note.title}</h2>
                    </div>
                    <p className={css.content}>{note.content}</p>
                    <p className={css.date}>{note.createdAt}</p>
                    <p className={css.tag}>{note.tag}</p>
                </div>
            </div>
        </ModalPreview>
    );
};

export default NotePreview;