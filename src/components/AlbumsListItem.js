import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

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
        <PhotosList album={album}/>
    </ExpandablePanel>
}

export default AlbumsListItem