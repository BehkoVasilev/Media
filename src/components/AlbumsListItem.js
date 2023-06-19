import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    const [removeAlbum, result] = useRemoveAlbumMutation();

    const handleRemoveClick = () => {
        removeAlbum(album);
    }

    const header = <>
        <Button className="mr-2" loading={result.isLoading} onClick={handleRemoveClick}>
            <GoTrashcan />
        </Button>
        {album.title}
    </>;

    return <ExpandablePanel header={header}>
        List of photos in the album
    </ExpandablePanel>
}

export default AlbumsListItem