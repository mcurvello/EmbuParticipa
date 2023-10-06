import React from "react";
import { FlatList } from "react-native";
import { SafeArea } from "../../components/SafeArea";
import { Search } from "../../components/Search";
import ReclameCard from "../../components/ReclameCard";

export const product = [
  {
    key: 1,
    image:
      "https://cdn.agenciamural.org.br/2022/11/09151406/Tapa-buraco-Sao-Paulo.jpg",
    title: "Buraco na rua",
    author: "João Silva",
    description:
      "Rua principal está cheia de buracos, dificultando o tráfego de veículos.",
    date: "30/05/2023",
  },
  {
    key: 2,
    image:
      "https://www.diariodoaco.com.br/images/noticias/57818/mn_m26Z1148767290757363700.jpg",
    title: "Iluminação pública ruim",
    author: "Maria Souza",
    description:
      "Lâmpadas queimadas estão tornando a rua escura e perigosa à noite.",
    date: "30/05/2023",
  },
  {
    key: 3,
    image: "https://patoshoje.com.br/media/imageprov/lixo-nova-floresta-c1.jpg",
    title: "Coleta de lixo irregular",
    author: "Carlos Santos",
    description:
      "Coleta de lixo não ocorre regularmente, causando acúmulo de lixo nas ruas.",
    date: "30/05/2023",
  },
  {
    key: 4,
    image:
      "https://midiamax.uol.com.br/wp-content/uploads/2021/12/arquivos_noticias_2017_jan_15879083_1220839304674410_531437492_n.jpg",
    title: "Manutenção de praça",
    author: "Ana Oliveira",
    description:
      "A praça local está abandonada e precisa de limpeza e reparos.",
    date: "30/05/2023",
  },
];

export const Menu = () => {
  return (
    <SafeArea>
      <Search />
      <FlatList
        data={product}
        renderItem={({ item }) => <ReclameCard reclame={item} />}
        keyExtractor={(item) => item.key}
      />
    </SafeArea>
  );
};
