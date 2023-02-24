import "./App.css";
import React from "react";
import {
  Button,
  Indicator,
  Container,
  Drawer,
  SimpleGrid,
  Group,
  Input,
} from "@mantine/core";
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
  let [opened, setOpened] = useState(false);
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
        <Indicator color="red" label={basketItems.length} size={22}>
          <Button onClick={() => setOpened(true)}>Sepet</Button>
        </Indicator>
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
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Sepetim"
        padding="md"
        size="md"
      >
        {/* Drawer content */}

        <List className="List">
          {basketItems.map(({ name }, index) => (
            <List.Item key={index}>{name}</List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
