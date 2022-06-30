const { createContext, useState } = require("react");


export const FavContext = createContext(
    {
        favorites: [],
        nbFavorites: 0,
        addToFavorites: () => { },
        removeFromFavorites: () => { },
        isFavorite: () => { }
    }
)

function FavoritesContextProvider(props) {
    const [tabFavorites, setTabFavorites] = useState([]);

    function addToFavorites(film) {
        setTabFavorites((prev) => {
            return [...prev, film];
        })
    }

    function removeFromFavorites(id) {
        setTabFavorites(() => {
            return tabFavorites.filter((f) => f.id !== id)
        })
    }

    function isFaovrite(id) {
        return tabFavorites.some((f) => f.id === id)
    }

    const context = {
        favorites: tabFavorites,
        nbFavorites: tabFavorites.length,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        isFavorite: isFaovrite
    }




    return (
        <FavContext.Provider value={context}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavoritesContextProvider