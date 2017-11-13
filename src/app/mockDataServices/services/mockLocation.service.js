export default class MockLocationService {
    /** @ngInject */
    constructor($http) {
        // DI
        this.$http = $http;
    }

    getLocations() {
        return this.$http.get('assets/mockData/locations.json').then(({ data }) => data);
    }
}