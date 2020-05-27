// Step 1 - Read database Json


const url =  "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19&q=&facet=fecha_actualizacion&facet=origen&facet=sector&facet=entidad_um&facet=sexo&facet=entidad_nac&facet=entidad_res&facet=municipio_res&facet=tipo_paciente&facet=fecha_ingreso&facet=fecha_def&facet=edad&facet=nacionalidad&facet=embarazo&facet=habla_lengua_indi&facet=diabetes&facet=epoc&facet=asma&facet=inmusupr&facet=hipertension&facet=cardiovascular&facet=obesidad&facet=renal_cronica&facet=tabaquismo&facet=resultado&facet=migrante&facet=pais_nacionalidad&facet=rango_edad"
d3.json(url).then(function(data) {
    console.log(data);
});

const url2 =  "https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=capacidad-hospitalaria&q=&facet=fecha&facet=nombre_hospital&facet=institucion&facet=estatus_capacidad_hospitalaria&facet=estatus_capacidad_uci"
d3.json(url2).then(function(data) {
    console.log(data);
});
