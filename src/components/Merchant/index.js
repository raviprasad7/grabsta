import React, { Component } from "react";
import { Card, Divider, Row, Col, List, Button } from "antd";
import {
  StarFilled,
  FieldTimeOutlined,
  RightOutlined,
  DollarCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

class Merchant extends Component {
  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const menu = [
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
    return (
      <div>
        <div className="merchant-cover">
          <div className="merchant-image"></div>
          <div className="merchant-title">147 Seafood Steamboat</div>
        </div>
        <div className="merchant-info">
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
        </div>
        <div className="menu-items">
          {menu.map((category) => {
            return (
              <Card className="menu-category" style={{ width: "100%" }}>
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
                            <div className="item-price">{item.price}</div>
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
          })}
        </div>
      </div>
    );
  }
}

export default Merchant;
