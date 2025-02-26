// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il contesto creato
import PostContext from "./contexts/PostContext";

// importiamo hookx e libreria per gestire i listato
import { useState, useEffect } from "react";
import axios from "axios";
const endpoint = 'http://localhost:3000/posts';

// importiamo i layout
import DefaultLayout from "./components/DefaultLayout";

// importiamo le pagine
import HomePage from "./route/HomePage";
import AboutPage from "./route/AboutPage";
import PostsPage from "./route/PostsPage";
import AddPostPage from "./route/AddPostPage";
import SinglePostPage from "./route/SinglePostPage";
import NotFoundPage from "./route/NotFoundPage";


export default function App() {

  // creiamo una variabile di stato che conterrà il nostro array di oggetti
  const [articols, setArticols] = useState([])
  console.table(articols)

  // Funzione di richiesta Api
  function fetchArticols() {
    // richiesta di chiamata a localhost 3000
    axios.get(endpoint)
      // prendi i dati di risposta e inseriscili a res.data
      .then((res) =>
        setArticols(res.data),

      ).catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
      });
  }

  // chiamata api effettuata all'avvio del server
  useEffect(() => {
    console.log("Sto recuperando gli articoli...");
    fetchArticols();
  }, []);

  return (
    <PostContext.Provider value={{ articols }}>
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
            <Route path="*" element={<NotFoundPage />} />

          </Route>

        </Routes>
      </BrowserRouter >
    </PostContext.Provider>
  );
}