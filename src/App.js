import "./App.css";
import React from "react";
import { Container, SimpleGrid, Input } from "@mantine/core";
import { List } from "@mantine/core";
import Card from "./components/Card";
import { useState } from "react";

const storeItems = [
  {
    name: "Sırt Çantası",
    src: "bag",
    price: 20,
  },
  {
    name: "Kamera",
    src: "camera",
    price: 10,
  },
  {
    name: "Kulaklık",
    src: "headphone",
    price: 25,
  },
  {
    name: "Oyuncak Araba",
    src: "car",
    price: 25,
  },
  {
    name: "Ayakkabı",
    src: "shoes",
    price: 25,
  },
  {
    name: "Cep Telefon",
    src: "phone",
    price: 25,
  },
];
function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = basketItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>
      {searchValue}
      <Input.Wrapper label="Input label">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>

      <List className="List">
        {filteredItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
