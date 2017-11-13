export default class MockTicketTypeService {

    constructor($http) {
        this.$http = $http;
    }

    getTicketTypes() {
        return this.$http.get('assets/mockData/ticketTypes.json').then(({ data }) => data);
    }
}