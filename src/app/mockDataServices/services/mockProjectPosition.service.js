export default class MockProjectPositionService {
    /** @ngInject */
    constructor($http) {
        // DI
        this.$http = $http;
    }

    getProjectPositions() {
        return this.$http.get('assets/mockData/projectPositions.json').then(({ data }) => data);
    }
}