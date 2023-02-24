import "./App.css";
import React from "react";
import { Button, Container, SimpleGrid, Group, Input } from "@mantine/core";
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
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Temizle</Button>
      </Group>

      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, src }) => {
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

      <List className="List">
        {basketItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
