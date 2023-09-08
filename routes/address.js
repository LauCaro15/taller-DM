const express = require("express");
const router = express.Router();
const addressController = require("../controllers/address")

/* http://localhost:3000/api/v1/addresses */
router.get("/", addressController.getAddresses);
/* http://localhost:3000/api/v1/addresses/departmentsFetch */
router.get("/departmentsFetch", addressController.queryDepartmentsFetch);
/* http://localhost:3000/api/v1/addresses/departmentsAxios */
router.get('/departmentsAxios',addressController.queryDepartmentsAxios);
/* http://localhost:3000/api/v1/addresses/municipalities/Caldas */
/* http://localhost:3000/api/v1/addresses/municipalities/Antioquia */
router.get('/municipalities/:departamento', addressController.queryMunicipalities);

module.exports = router;
