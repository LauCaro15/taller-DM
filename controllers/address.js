const express = require('express');
const Address = require('../models/address');
const axios = require('axios');
const fetch = require('node-fetch')

const getAddresses = async (req, res)=>{
    try {
        const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        const response = await fetch(url)
        const data = await response.json()
        res.status(200).json(data)
    } catch (err) {
        console.error(err)
    }
};

// Función usando FETCH para obtener los nombres de departamentos sin duplicados
const queryDepartmentsFetch = async (req, res) => {
    try {
        const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        const response = await fetch(url);
        const data = await response.json();
        // Extraer nombres de departamentos y eliminar duplicados
        const departamentos = [...new Set(data.map(item => item.departamento))];
        // Renderizar una vista o enviar una respuesta JSON con los departamentos
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(departamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los departamentos.' });
    }
};

// Función usando AXIOS para obtener los nombres de departamentos sin duplicados
const queryDepartmentsAxios = async (req, res) => {
    try {
        const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json"
        const response = await axios.get(url);
        const data = response.data;

        // Extraer nombres de departamentos y eliminar duplicados
        const departamentos = [...new Set(data.map(item => item.departamento))];

        // Renderizar una vista o enviar una respuesta JSON con los departamentos
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(departamentos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los departamentos.' });
    }
};

// Función para obtener los municipios de un departamento específico
const queryMunicipalities = async (req, res) => {
    const departamento = req.params.departamento;
    try {
        const response = await fetch(`https://www.datos.gov.co/resource/xdk5-pm3f.json?departamento=${departamento}`);
        const data = await response.json();

        // Extraer nombres de municipios
        const municipios = data.map(item => item.municipio);

        // Renderizar una vista o enviar una respuesta JSON con los municipios
        // Puedes usar res.render() o res.json() según tu configuración de vistas
        res.status(200).json(municipios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los municipios.' });
    }
};

module.exports = {getAddresses, queryDepartmentsFetch, queryDepartmentsAxios, queryMunicipalities};
