// MesVoitures.js 
import React, { Component } from 'react';
import Voiture from './Voiture';
import './MesVoitures.css';
import Header from './Header';

class MesVoitures extends Component {
    constructor(props) {
        super(props);

        // Initialisation du state avec un tableau d'objets représentant des voitures
        this.state = {
            voitures: [
                { id : 1, marque: 'Toyota', couleur: 'Rouge', annee: 2022, showAge: false },
                { id : 2, marque: 'Ford', couleur: '', annee: 2020, showAge: false },
                { id : 3, marque: 'Honda', couleur: 'Vert', annee: 2021, showAge: false },
            ],
        };
    }

    // on crer une methode pour calculer l'age
    calculerAge = (annee) =>{
const anneeActuel = new Date().getFullYear();
return anneeActuel -annee;
    }

    // on calclt et on met a jour l'age des voitures avec l'age calcule
    clearvoiture = (voitreId)=>{
        const voitureAge = this.state.voitures.map((Voiture) =>{
            if (Voiture.id === voitreId){
                return{
                    ...Voiture,
                    age : this.calculerAge(Voiture.annee),
                    showAge : true,
                };
            }
            return Voiture;
        });
        this.setState({voitures : voitureAge})
    };
    hiddenAge = (voitreId) =>{
        const voitureAgeHidden = this.state.voitures.map((Voiture) =>{
            if(Voiture.id === voitreId){
                return{
                    ...Voiture,
                    age: this.calculerAge(Voiture.annee),
                    showAge:!Voiture.showAge,
                };
            }
            return Voiture;
        }) ;
        this.setState({voitures : voitureAgeHidden})
    }

    render() {
        return (
            <div className="MesVoitures">
                <Header />
                <h1 className=''>Liste des Voitures</h1>

                {/* <button onClick={this.clearvoiture} class='btn btn-primary'>Age de la voiture</button> */}
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marque</th>
                            <th>Couleur</th>
                            <th>Année</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.voitures.map(({id, marque, couleur, annee, age, showAge}, index) => (
                            <Voiture key={index} id={id} marque={marque} couleur={couleur} annee={annee} age={age} showAge={showAge} clearvoiture = {() => this.clearvoiture(id)} hiddenAge = {() => this.hiddenAge(id)} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MesVoitures;
