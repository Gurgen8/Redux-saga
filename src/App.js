import { connect } from "react-redux";
import { getUsersRequest } from "./store/actions/users";
import { getPostsRequest } from "./store/actions/posts";
import { ListGroup, ListGroupItem } from "reactstrap";

function App(props) {
  const { getUsersRequest, users, getPostsRequest, posts } = props;
  return (
    <div className="App">
      <ListGroup>
        {users.items.map((user) => {
          return (
            <ListGroupItem key={user.id}>{user?.first_name}</ListGroupItem>
          );
        })}
      </ListGroup>
      <p onClick={() => getUsersRequest(10)}>Fetch users </p>
      <p onClick={() => getPostsRequest()}>Fetch posts </p>
      <ListGroup>
        {posts.posts.map((p) => {
          return (
            <ListGroupItem key={p.id}>{p?.title}</ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default connect(({ users, posts }) => ({ users, posts }), {
  getUsersRequest,
  getPostsRequest,
})(App);
