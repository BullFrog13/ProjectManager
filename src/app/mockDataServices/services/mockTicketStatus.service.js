export default class MockTicketStatusService {

    constructor($http) {
        this.$http = $http;
    }

    getTicketStatuses() {
        return this.$http.get('assets/mockData/ticketStatuses.json').then(({ data }) => data);
    }
}