import Skill from '../models/skill.model';

export default class SkillService {

    constructor(Restangular) {
        this.Restangular = Restangular;
    }

    getEmployeeSkills(employeeId) {
        return this.Restangular.one('skills', employeeId).getList().then((skills) => {
            let result = [];
            skills.forEach((skill) => {
                let newSkill = new Skill(skill);
                result.push(newSkill);
            });

            return result;
        });
    }

    updateEmployeeSkill(skill) {
        return this.Restangular.one('skills', skill.Id).get().then((skillToUpdate) => {
            return skillToUpdate.customPUT(skill).then((updatedSkill) => {
                return new Skill(updatedSkill);
            });
        });
    }

    deleteSkill(skillId, employeeId) {
        return this.Restangular.one('skills').get().then((skill) => {
            return skill.customDELETE('', { id: skillId, empId: employeeId }).then((result) => {
                return result;
            });
        });
    }

    getSkills() {
        return this.Restangular.one('skills').getList().then((skills) => {
            let result = [];
            skills.forEach((skill) => {
                let skillModel = new Skill(skill);
                result.push(skillModel);
            });

            return result;
        });
    }

    addSkill(skill) {
        let base = this.Restangular.all('skills');

        return base.post(skill).then((createdSkill) => {
            return new Skill(createdSkill);
        });
    }
}