export default class RegistrationCtrl {

    constructor(RegistrationService, LocationService, ProjectPositionService, EmployeeService) {

        this.locations = [];
        this.positions = [];
        this.employees = [];

        this.RegistrationService = RegistrationService;
        LocationService.getLocations().then(locations => {
            this.locations = locations;
        });
        ProjectPositionService.getProjectPositions().then(positions => {
            this.positions = positions;
        });

        this.EmployeeService = EmployeeService;
    }

    register(employee) {
        this.EmployeeService.createEmployee(employee);
    }
}