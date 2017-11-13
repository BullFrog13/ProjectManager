export default class RegistrationService {
    constructor(Restangular) {
        this.Restangular = Restangular;
    }

    register(employee) {
        let baseEmployees = this.Restangular.all('employees');

        baseEmployees.post(employee);
    }
}