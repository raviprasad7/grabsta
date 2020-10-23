import React, { Component, Fragment } from "react";
import { Card, Button, Avatar, Skeleton, Row, Col } from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  UserOutlined,
  ShareAltOutlined,
  HeartTwoTone,
  ShopTwoTone,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      isFollowing: false,
    };
  }
  getPostHeader = () => {
    const { OwnerName, Title, isLoading } = this.props;
    const { isFollowing, isStateLoading } = this.state;
    if (isLoading) {
      return <Skeleton avatar active paragraph={{ rows: 1 }}></Skeleton>;
    }
    return (
      <Fragment>
        <Row style={{ width: "100%" }} justify="space-around">
          <Col span={3} className="post-avatar">
            <Avatar icon={<UserOutlined />} />
          </Col>
          <Col span={15} className="post-header-info">
            <span className="post-owner">{OwnerName}</span>
            <p className="post-title">{Title}</p>
          </Col>
          <Col span={6} className="post-header-options">
            <Button
              className="follow-button"
              type="link"
              icon={
                isFollowing ? <MinusCircleOutlined /> : <PlusCircleOutlined />
              }
              loading={isStateLoading}
              onClick={this.toggleFollow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
            {/* <Button className="follow-button" type="link">
            {isFollowing ? <MinusCircleOutlined /> : <PlusCircleOutlined />}
            <span style={{ marginLeft: 5 }} onClick={this.toggleFollow}>
              {isFollowing ? "Unfollow" : "Follow"}
            </span>
          </Button> */}
          </Col>
        </Row>
      </Fragment>
    );
  };

  getPostImage = () => {
    const { isLoading, Title, ImageUrl } = this.props;
    if (!isLoading) {
      return (
        <div className="post-image">
          <img alt={Title} src={`/food/${ImageUrl}`} />
          <Link to="/merchant/seafood steamboat">
            <ShopTwoTone className="shop-icon" />
          </Link>
        </div>
      );
    }
  };

  getPostDescription = () => {
    const { Likes, Description, Hashtags, isLoading } = this.props;
    const { isLiked } = this.state;
    if (!isLoading) {
      return (
        <div className="post-body">
          <div className="post-options">
            <div>
              <HeartTwoTone
                className={`like-button${isLiked ? " liked" : ""}`}
                onClick={this.toggleLike}
              />
              {Likes}
            </div>
            <div>
              <ShareAltOutlined />
            </div>
          </div>
          <div className="post-description">{Description}</div>
          <div className="post-hashtags">{Hashtags}</div>
        </div>
      );
    }
  };

  toggleLike = () => {
    setTimeout(() => {
      this.setState((prevState) => ({ isLiked: !prevState.isLiked }));
    }, 500);
  };

  toggleFollow = () => {
    this.setState((prevState) => ({ isStateLoading: true }));
    setTimeout(() => {
      this.setState((prevState) => ({
        isFollowing: !prevState.isFollowing,
        isStateLoading: false,
      }));
    }, 500);
  };
  render() {
    const { isLoading } = this.props;

    return (
      <Card
        title={<div className="post-header"> {this.getPostHeader()} </div>}
        cover={this.getPostImage()}
        loading={isLoading}
      >
        {this.getPostDescription()}
      </Card>
    );
  }
}

export default PostCard;
