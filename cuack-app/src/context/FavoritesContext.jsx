import { createContext, useContext, useState } from "react";

// 1. Creamos el contexto
const FavoritesContext = createContext();

// 2. Creamos el Proveedor que envolverá nuestra aplicación
export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  // Función para agregar o quitar un juego de favoritos
  const toggleFavorito = (juego) => {
    setFavoritos((prevFavoritos) => {
      // Verificamos si el juego ya está en favoritos
      const existe = prevFavoritos.some((fav) => fav.id === juego.id);

      if (existe) {
        // Si ya está, lo filtramos para sacarlo
        return prevFavoritos.filter((fav) => fav.id !== juego.id);
      } else {
        // Si no está, lo agregamos a la lista
        return [...prevFavoritos, juego];
      }
    });
  };

  // Función rápida para comprobar si un juego específico es favorito
  const esFavorito = (id) => {
    return favoritos.some((fav) => fav.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito, esFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Hook personalizado para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  return useContext(FavoritesContext);
}