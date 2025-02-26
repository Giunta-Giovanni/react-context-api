// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il contesto creato
import PostContext from "./contexts/PostContext";

// importiamo hookx e libreria per gestire i listato
import { useState, useEffect } from "react";
import axios from "axios";

// importiamo i layout
import DefaultLayout from "./layout/DefaultLayout";

// importiamo le pagine
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import AddPostPage from "./pages/AddPostPage";
import SinglePostPage from "./pages/SinglePostPage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {

  // creiamo una variabile di stato che conterrà il nostro array di oggetti
  const [articols, setArticols] = useState([])
  console.log(articols)

  // Funzione di richiesta Api
  function fetchArticols() {
    // richiesta di chiamata a localhost 3000
    axios.get('http://localhost:3000/posts')
      // prendi i dati di risposta e inseriscili a res.data
      .then((res) =>
        setArticols(res.data),

      ).catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
      });
  }
  // richiamo la funzione di richiesta dati al caricamento del componente
  // fetchPizzas();
  // Solo al primo rendering
  useEffect(fetchArticols, []);




  return (
    <PostContext.Provider value={{ articols, setArticols }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts">
              <Route index element={<PostsPage />} />
              <Route path="addpost" element={<AddPostPage />} />
              <Route path="post/:id" element={<SinglePostPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter >
    </PostContext.Provider >
  );
}