import { expect } from 'chai';
import medicalCheckup from '../medicalCheckup.js';

describe('Medical Checkup', () => {
    describe('scheduleAppointment(patientsCount, costPerPatient, clinicLocation)', () => {
        it('Should throw an error for invalid input', () => {
            expect(() => medicalCheckup.scheduleAppointment('', '', '')).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.scheduleAppointment(1, '1', '')).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.scheduleAppointment('1', 1, '')).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.scheduleAppointment(1, 1, '')).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.scheduleAppointment(1, 1, 1)).to.throw(Error, 'Invalid Information!');
        });
        it('Should throw error for location different then Sofia', () => {
            expect(() => medicalCheckup.scheduleAppointment(1, 1, 'Plovdiv')).to.throw(Error, 'The location of this clinic is not in the correct city!');
        });
        it('Should meet requirements', () => {
            expect(medicalCheckup.scheduleAppointment(31, 49, 'Sofia')).to.be.equal('This clinic meets the requirements, with capacity for 31 patients at 49$ per checkup.');
            expect(medicalCheckup.scheduleAppointment(30, 50, 'Sofia')).to.be.equal('This clinic meets the requirements, with capacity for 30 patients at 50$ per checkup.');
        });
        it('Should NOT meet requirements', () => {
            expect(medicalCheckup.scheduleAppointment(29, 51, 'Sofia')).to.be.equal('This clinic does not meet your requirements!');
        });
    });

    describe('additionalServices(labTests, consultations, hasInsurance)', () => {
        it('Should throw error for invalid input', () => {
            expect(() => medicalCheckup.additionalServices('blood', ['general'], true)).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.additionalServices(['blood'], 'general', true)).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.additionalServices(['blood'], ['general'], 'true')).to.throw(Error, 'Invalid Information!');
        });

        it('Should calculate total cost without insurance', () => {
            expect(medicalCheckup.additionalServices(['blood'], ['specialist'], false)).to.be.equal(`You spend 220$ for lab tests and consultations!`);
        });
        it('Should calculate total cost with insurance', () => {
            expect(medicalCheckup.additionalServices(['urine'], ['general'], true)).to.be.equal(`You spend ${(15 + 100) * 0.8}$ for lab tests and consultations with 20% insurance discount!`)
        });
    });

    describe('roomDistribution(patients, rooms)', () => {
        it('Should throw error for invalid input', () => {
            expect(() => medicalCheckup.roomDistribution(1, '2')).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.roomDistribution('1', 2)).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.roomDistribution(-1, 2)).to.throw(Error, 'Invalid Information!');
            expect(() => medicalCheckup.roomDistribution(1, -2)).to.throw(Error, 'Invalid Information!');
        });
        it('Should check for people count invalid', () => {
            expect(medicalCheckup.roomDistribution(3, 1)).to.be.equal('There is only 3 patient in every room, consider rearranging.');
        });
        it('Should check for people count valid', () => {
            expect(medicalCheckup.roomDistribution(12, 2)).to.be.equal('You have 2 rooms with 6 patients in each room.');
        });
    });

})

