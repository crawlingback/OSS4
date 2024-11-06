import Add from "../Comment/Add";
import List from "../Comment/List";
import Edit from "../Comment/Edit";
import Comment from "../Comment/Comment";
import Home from "../Layout/Home";

const unblocker = (Block, prop) => {
    return <Block id={prop} />;
};

const URLs = {
    home: { link: "/", route: <Home /> },
    edit: { link: "/edit/", route: <Edit />, unblock: Edit },
    comment: {
        link: "/comment/",
        route: <Comment />,
        unblock: Comment,
    },
    create: { link: "/create", route: <Add /> },
    list: { link: "/list", route: <List /> },
    unblock: unblocker,
};

export default function URLhandler() {
    return URLs;
}