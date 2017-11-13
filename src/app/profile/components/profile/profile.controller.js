export default class ProfileController {
    constructor(LoginService, NotificationService) {
        this.LoginService = LoginService;
        this.NotificationService = NotificationService;

        this.User = LoginService.getCurrentUser();

        this.NotificationService.addListener('userLoggedIn', (user) => {
            this.User = user;
        });
    }
}