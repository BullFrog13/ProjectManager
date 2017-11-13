export default class MockLevelService {
    constructor($http) {
        this.$http = $http;
    }

    getLevels() {
        return this.$http.get('assets/mockData/levels.json').then(({ data }) => data);
    }

    getLevel(id) {
        return this.$http.get('assets/mockData/levels.json').then((levels) => {
            for (let i = 0; i < levels.data.length; i++) {
                if (levels.data[i].Id === id) {
                    return levels.data[i].Name;
                }
            }
        });
    }
}