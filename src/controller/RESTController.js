import React, {Component} from 'react';
import axios from "axios";

class RESTController extends Component {

    constructor(props) {
        super(props);
        this.baseURL = "/nobes/timetable/calendar";

        this.config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }

    getPlans = (data) => {

        return axios
            .post(`${this.baseURL}/getPlans`, data.programName, this.config)
            .then(response => {
                const jsonMap = JSON.stringify(response.data.obj);
                const progMap = JSON.parse(jsonMap);
                return Object.keys(progMap);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    getTerms = (data) => {

        return axios
            .post(`${this.baseURL}/getPlans`, data.programName, this.config)
            .then(response => {
                const progMap = response.data.obj;
                return progMap[data.planName];
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    getLecs = (data) => {

        const newdata = {
            programName: data.programName,
            planName: data.planName,
            termName: data.termName,
            componentId: "1"
        }

        return axios
            .post(`${this.baseURL}/getLecsInfo`, newdata, this.config)
            .then(response => {
                const lecMap = response.data.obj;
                const lecs = [];

                for (const course in lecMap) {

                    let description;
                    let courseTitle;
                    let accredition;

                    if (lecMap[course] != null) {
                        const options = lecMap[course].map((option) => {

                            const duration = this.updateTime(option);

                            if (description == null) {
                                description = option.descp;
                            }

                            if (courseTitle == null) {
                                courseTitle = option.courseTitle;
                            }

                            if (option.aucount != null) {
                                accredition = Object.entries(option.aucount)
                                    .map(([key, value]) => `${key}: ${value}`)
                                    .join('\n');
                            }

                            return {
                                section: option.section,
                                color: this.generateRandomColor(),
                                times: duration,
                            }
                        });

                        lecs.push({
                            name: course,
                            extendedName: courseTitle,
                            color: "lightgrey",
                            options: options,
                            description: description,
                            accreditionUnits: accredition,
                        });
                    } else {
                        console.log("Missing information about " + course);
                    }
                }

                console.log("lec succeed");
                return lecs;
            })
            .catch(error => {
                console.log(newdata);
                console.error('getLec: Error fetching data:', error);
            });
    }

    getLabs = (data) => {

        const newdata = {
            programName: data.programName,
            planName: data.planName,
            termName: data.termName,
            componentId: "2"
        }

        return axios
            .post(`${this.baseURL}/getLabsInfo`, newdata, this.config)
            .then(response => {
                const labMap = response.data.obj;
                const labs = [];

                for (const course in labMap) {

                    if (labMap[course] != null) {
                        const options = labMap[course].map((option) => {

                            const duration = this.updateTime(option);
                            console.log(duration);

                            return {
                                section: option.section,
                                color: this.generateRandomColor(),
                                times: duration
                            }
                        });

                        labs.push({
                            name: course + " Lab",
                            color: "lightgrey",
                            options: options,
                        });
                    }
                }

                console.log("lab succeed");
                return labs;
            })
            .catch(error => {
                console.log(newdata);
                console.error('getLab: Error fetching data:', error);
            });
    }

    getSems = (data) => {

        const newdata = {
            programName: data.programName,
            planName: data.planName,
            termName: data.termName,
            componentId: "3"
        }

        return axios
            .post(`${this.baseURL}/getSemsInfo`, newdata, this.config)
            .then(response => {
                const semMap = response.data.obj;
                const sems = [];

                for (const course in semMap) {

                    if (semMap[course] != null) {
                        const options = semMap[course].map((option) => {

                            const duration = this.updateTime(option);

                            return {
                                section: option.section,
                                color: this.generateRandomColor(),
                                times: duration
                            }
                        });

                        sems.push({
                            name: course + " Sem",
                            color: "lightgrey",
                            options: options,
                        });
                    }
                }

                return sems;
            })
            .catch(error => {
                console.log(newdata);
                console.error('getSem: Error fetching data:', error);
            });
    }


    updateTime(option) {
        const duration = option.times.map((time) => {
            const [day, timeHrs] = time.split("_");
            const [startTime, endTime] = timeHrs.split("-");
            let [endHrs, endMin] = endTime.split(":");

            let endHrsNumber = parseInt(endHrs);
            let endMinNumber = parseInt(endMin);

            let carry = Math.floor((endMinNumber + 10) / 60);

            carry = carry < 1 ? 0 : 1;

            endHrsNumber += carry;

            endHrs = endHrsNumber.toString();

            if (carry == 1) {
                endMin = "00";
            } else {
                endMin = (endMinNumber + 10).toString();
            }

            let s = day + "_" + startTime + "-" + endHrs + ":" + endMin;

            return s;

        })
        return duration;
    }

    generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

}

export default RESTController;


