import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMerchant } from "../../redux/actions/merchant";
import { Card, Divider, Row, Col, List, Button, Skeleton, Input } from "antd";
import {
  StarFilled,
  FieldTimeOutlined,
  RightOutlined,
  DollarCircleOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

class Merchant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.fetchMerchant();
  }
  getMerchantCoverTitle() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="merchant-title">
          <Skeleton paragraph={{ rows: 2 }} title={false} />
        </div>
      );
    }
    return <div className="merchant-title">147 Seafood Steamboat</div>;
  }
  getMerchantDetails() {
    const { isLoading } = this.props;
    if (isLoading) {
      return (
        <Card className="merchant-card">
          <Skeleton paragraph={{ rows: 2 }} />
          <Divider />
          <Skeleton paragraph={{ rows: 1 }} />
        </Card>
      );
    }
    return (
      <Card className="merchant-card" bordered={false}>
        <div className="card-title">
          147 Seafood Steamboat - Serangoon Avenue 2
        </div>
        <span className="merchant-rating">
          <StarFilled /> 4.3
        </span>
        <span className="details-icon">
          <span>See Details</span>
        </span>
        <Divider />
        <Row>
          <Col span={4}>
            <Row justify="center">
              <Col>
                <FieldTimeOutlined />
              </Col>
            </Row>
          </Col>
          <Col span={18}>
            <div className="delivery-time">40-50 mins</div>
            <div className="delivery-distance">3.4km away</div>
          </Col>
          <Col span={2}>
            <RightOutlined />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={4}>
            <Row justify="center">
              <Col>
                <DollarCircleOutlined />
              </Col>
            </Row>
          </Col>
          <Col span={18}>Check for available offers</Col>
          <Col span={2}>
            <RightOutlined />
          </Col>
        </Row>
      </Card>
    );
  }
  getQuickCheckoutCard() {
    const { isLoading } = this.props;
    if (!isLoading) {
      return (
        <Card className="checkout-card" bordered={false}>
          <div className="card-title">Quick Checkout</div>
          <Divider />
          <Row align="middle">
            <Col span={16}>
              <div className="delivery-time">Chopped Salad</div>
            </Col>
            <Col span={6}>
              <Input.Group className="cart-modifier">
                <Row justify="center">
                  <Col span={8}>
                    <Button className="cart-modifier-icons">-</Button>
                  </Col>
                  <Col span={8}>
                    <Input
                      className="cart-quantity"
                      defaultValue="1"
                      disabled={true}
                    />
                  </Col>
                  <Col span={8}>
                    <Button className="cart-modifier-icons plus-icon">+</Button>
                  </Col>
                </Row>
              </Input.Group>
            </Col>
            <Col span={2}>
              <RightOutlined />
            </Col>
          </Row>
        </Card>
      );
    }
  }
  getItemCard(category) {
    const { isLoading } = this.props;
    return (
      <Card
        className="menu-category"
        style={{ width: "100%" }}
        loading={isLoading}
      >
        <List
          header={category.categoryName}
          dataSource={category.items}
          bordered={false}
          renderItem={(item) => {
            return (
              <List.Item>
                <Row style={{ width: "100%" }} justify="space-between">
                  <Col span={21}>
                    <div className="item-name">{item.item}</div>
                    <div className="item-price">${item.price}</div>
                  </Col>
                  <Col span={3}>
                    <Button
                      className="add-item"
                      type="primary"
                      icon={<PlusOutlined />}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </List.Item>
            );
          }}
        />
      </Card>
    );
  }
  render() {
    const {
      match: {
        params: { id },
      },
      isLoading,
    } = this.props;
    const menu = isLoading
      ? [{}, {}]
      : [
          {
            categoryName: "Fish",
            items: [
              {
                item: "Sea Bass",
                price: "35",
              },
              {
                item: "Fish Head",
                price: "30",
              },
              {
                item: "Sliced Fish",
                price: "14",
              },
            ],
          },
          {
            categoryName: "Vegetables",
            items: [
              {
                item: "Brocolli with Scallop",
                price: "25.70",
              },
              {
                item: "Green Dragon Vegetable w/ Beansprout",
                price: "14.20",
              },
            ],
          },
          {
            categoryName: "Soup",
            items: [
              {
                item: "Superior Soup",
                price: "13",
              },
              {
                item: "Salted Vegetable Beancurd Soup",
                price: "14.20",
              },
            ],
          },
        ];
    const combos = {
      categoryName: "Popular Combos",
      items: [
        {
          item: "Sea Bass & coke",
          price: "45",
        },
        {
          item: "Fish Head & mojhito",
          price: "40",
        },
      ],
    };
    return (
      <div>
        <div className="merchant-cover">
          <div className="merchant-image"></div>
          {this.getMerchantCoverTitle()}
        </div>
        <div className="merchant-info">
          {this.getMerchantDetails()}
          {this.getQuickCheckoutCard()}
          {this.getItemCard(combos)}
        </div>
        <div className="menu-items">
          {menu.map((category) => this.getItemCard(category))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.merchantData,
    isLoading: state.merchantData.isLoading,
  };
};

export default connect(mapStateToProps, { fetchMerchant })(Merchant);
