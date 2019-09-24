import './main.html';
import Events from "../collections";

Template.formulario.events({
   'submit form': (event) => {
       event.preventDefault();
       const target = event.target;
       const name = target.name.value;
       const description = target.description.value;
       const responsable = target.responsable.value;
       const fechaInicio = target.fechaInicio.value;
       const fechaFin = target.fechaFin.value;
       const ubicacion = target.ubicacion.value;

       Events.insert({name: name, description: description, responsable: responsable, fechaInicio: fechaInicio, fechaFin: fechaFin, ubicacion: ubicacion});
   }
});

Template.events1.helpers({
    eventsCollection: () => {
        return Events.find({});
    }
});
