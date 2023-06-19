import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    const header = <div className="flex flex-row items-center justify-between">
        <Button>
            <GoTrashcan />
        </Button>
        {album.title}
    </div>;

    return <ExpandablePanel header={header}>
        List of photos in the album
    </ExpandablePanel>
}

export default AlbumsListItem