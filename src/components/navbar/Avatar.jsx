import avatar from "../../assets/images/image-avatar.png";
const Avatar = () => {
    return (
        <img
            src={avatar}
            alt=""
            width="30"
            height="30"
            className="cursor-pointer"
        />
    );
};

export default Avatar;
