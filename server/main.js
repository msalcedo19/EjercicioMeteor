import { Meteor } from 'meteor/meteor';
import Events from '../collections';

Meteor.startup(() => {
    Events.insert({name: "Evento2", description: "Descripcion2", responsable: "Mateo", fechaInicio: "2017-02-02", fechaFin: "2017-03-02", ubicacion: "Cra 6 #12-34"})
});
