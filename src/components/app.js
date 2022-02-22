import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./menu/header";
import Helpcenter from "./pages/helpcenter";
import Home from "./pages/home4";
import Artists from "./pages/artists";
import Artworks from "./pages/artworks";
import News from "./pages/news";
import NewsSingle from "./pages/newsSingle";
import Faq from "./pages/faq";
import Explore from "./pages/explore";
import Artist from "./pages/Artist";
import ItemDetailRedux from "./pages/ItemDetailRedux";
import Connect from "./pages/connect";

const EntityTest = () => {
  const params = useParams();
  return (
    <>
    This is a test only:{params.id}
    </>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/Artist/:authorId" element={<Artist />} />
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/ItemDetail/:nftId" element={<ItemDetailRedux />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsSingle />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/helpcenter" element={<Helpcenter />} />
        <Route path="entity/:id" element={<EntityTest />} />
        <Route path="/lottery" element={<News />} />
        <Route path="/wallet" element={<Connect />} />
      </Routes>
    </>
  );
};

export default App;
