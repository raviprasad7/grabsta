import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/post";
import PostCard from "./PostCard";
import { Layout } from "antd";

const { Header } = Layout;

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log("render", this.props);
    const { posts, isLoading } = this.props;
    if (posts.length === 0) {
      posts.push(...Array(3).fill({}));
    }
    return (
      <div>
        <Header className="app-header">
          <div className="logo"></div>
          <div className="header-desc">For the foodie in you</div>
        </Header>
        {posts.map((post, idx) => {
          return (
            <PostCard {...post} key={idx} isLoading={isLoading}></PostCard>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("mapStateToProps", state);
  return {
    posts: state.postData.posts,
    isLoading: state.postData.isLoading,
  };
};

export default connect(mapStateToProps, { fetchPosts })(Feed);
