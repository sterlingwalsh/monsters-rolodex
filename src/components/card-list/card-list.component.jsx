import React from "react";

import "./card-list.styles.css";

import { Card } from "../card/card.component";

export const CardList = props => {
  console.log({ props });

  const users = props.monsters.map(monster => {
    return <Card key={monster.id} monster={monster} />;
  });

  return <div className="card-list">{users}</div>;
};
