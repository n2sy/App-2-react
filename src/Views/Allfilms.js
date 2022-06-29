import { useEffect, useState } from 'react';
import FilmList from '../components/FilmList';

function AllFilms() {
    const [tabFilms, setTabFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const listFilms = [
        // {
        //     id: 'f1',
        //     title: 'Heat',
        //     year: 1995,
        //     image: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-08/heat.jpg',
        //     description: "La bande de Neil McCauley à laquelle est venu se greffer Waingro, une nouvelle recrue, attaque un fourgon blindé pour s'emparer d'une somme importante en obligations."
        // },import { useState } from 'react';

        // {
        //     id: 'f2',
        //     title: 'Inception',
        //     year: 2010,
        //     image: 'https://cdn2.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg',
        //     description: "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu"
        // }
    ];

    useEffect(() => {
        //setLoading(true);
        fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setLoading(false)
                console.log(data);
                for (const key in data) {
                    data[key].id = key;
                    listFilms.push(data[key]);
                }
                setTabFilms(listFilms);
                //console.log(listFilms);
            })
    }, []);

    // fetch('https://filmstore-409b9-default-rtdb.firebaseio.com/Films.json')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         for (const key in data) {
    //             data[key].id = key;
    //             listFilms.push(data[key]);
    //         }
    //         setTabFilms(listFilms);
    //         //console.log(listFilms);
    //     })

    if (loading) {
        return (
            <section>
                <h2>Data is Loading...</h2>

            </section>
        )
    }

    return (
        <section>
            <h4>All Films</h4>
            <FilmList listOfFilms={tabFilms}></FilmList>
        </section>
    )
}

export default AllFilms;