import Task from '../models/task.model';
import Project from '../models/project.model';

export default class ProjectService {
    constructor(Restangular) {
        this.Restangular = Restangular;
    }

    getProjectTickets(projectId) {
        this.baseEmployees = this.Restangular.one('projects', projectId);

        return this.baseEmployees.getList('tickets').then((projectTickets) => {
            let tickets = [];
            projectTickets.forEach((projectTicket) => {
                let ticket = new Task(projectTicket);
                tickets.push(ticket);
            });

            return tickets;
        });
    }

    getProject(projectId) {
        return this.Restangular.one('projects', projectId).get().then((project) => {
            return new Project(project);
        });
    }

    editProject(project) {
        return this.Restangular.one('projects', project.Id).get().then((projectToUpdate) => {
            return projectToUpdate.customPUT(project).then((updatedProject) => {
                return new Project(updatedProject);
            });
        });
    }

    getAllProjects() {
        let baseProjects = this.Restangular.all('projects');

        return baseProjects.getList().then((projects) => {
            let projectsResult = [];
            projects.forEach((project) => {
                let newProject = new Project(project);
                projectsResult.push(newProject);
            });

            return projectsResult;
        });
    }
}