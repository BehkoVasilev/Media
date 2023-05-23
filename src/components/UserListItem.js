import { GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";

function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user)
    }

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 fustify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
                    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                        <GoTrashcan />
                    </Button>
                    {error && <div>Error deleting user.</div>}
                    {user.name}
                </div>
            </div>
        </div>
    )
};

export default UserListItem;