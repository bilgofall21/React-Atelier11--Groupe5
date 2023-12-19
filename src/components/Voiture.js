// Voiture.js
import React from 'react';

const Voiture = ({id, marque, couleur , annee, age, clearvoiture, showAge, hiddenAge}) => {

    const maCouleur = couleur === '' ? 'Neant' : couleur;
    const boutonAffichage = () =>{
        if(showAge){
            hiddenAge();
        }
        else{
            clearvoiture();
        }
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{marque}</td>
            {/* <td>{couleur || "Neant" }</td> */}
            {/* <td>{couleur == '' ? "Neant" : couleur }</td> */}
            <td>{maCouleur}</td>
            <td>{annee}</td>
            <td> {showAge ? age : 'non afficher'}</td>
            <td> <button class='btn btn-warning text-white' onClick={boutonAffichage}  className={`btn ${showAge ? 'btn-danger' : 'btn-warning'} text-white`} > {showAge ? 'Cacher Age voiture ' : 'Afficher Age voiture'}</button></td>
        </tr>
    );
};

export default Voiture;