# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- Consegna -->
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.

<!-- preparazione del progetto -->
<!-- pacchetti installati -->
- react-router-dom  --> per le rotte √
- axios --> per richieste api √
- bootstrap --> per facilitare lo stile √
- fontawesome --> per utilizzare le icone √


<!-- esercizio -->
1. Partiamo col definire la <lista dei post> all’interno di App.jsx √
    - oggetto {articol, setArticol}√

2. Se non lo abbiamo già fatto in precedenza, creiamo un <componente PostsPage.jsx> che conterrà al suo interno un titolo e un <componente PostsList.jsx> che mostra la lista di tutti i nostri post.√
    - creiamo pagina <PostsPage.jsx> con componente titolo + <PostsList.jsx>√
    - componente <PostsList.jsx> avra all'interno un map collegato a <PostCard.jsx>√
    - componente <PostCard.jsx> sara composto da tutti i dati della card√

3. Creiamo un <file> per definire il nostro <Context> ed esportiamolo √
    - creiamo una cartella <Context> √
    - creiamo un file <PostContext.jsx> √
    - importiamo {createContext} da react√
    - creiamo il nostro <PostContex = createContext>√
    - e lo esportiamo√

4. Importiamo il <Provider in App.jsx> e wrappiamoci la nostra applicazione√
    - Importiamo su App.jsx il nostro <PostContext>√
    - inseriamo il <valore> che dobbiamo trasmettere all'interno della <proprietà provider>√
    - <wrappiamo> tutte le rotte all'interno√

5. Facciamo in modo che il componente PostsList.jsx che recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.√
    - importiamo <useContext> & <PostContext> a <PostList.jsx> cioè il figlio che deve consumare i dati√
    - mandiamo tramite props da padre <PostList.jsx> a figlio <PostCard.jsx> i singoli oggetti per creare le card√

<!-- NOTE -->
La struttura dell’App deve essere App.jsx > PostsPage.jsx > PostsList.jsx > PostCard.jsx

<!-- Bonus -->
includere diverse sezioni con relative rotte (quindi oltre alla pagina di listato post, anche qualche pagina basica, tipo About, Contacts ), quindi gestione completa in App di rotte e context.