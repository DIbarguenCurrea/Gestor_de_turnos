"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.schedule = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const turnsServices_1 = require("../services/turnsServices");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, turnsServices_1.getAllAppointmentsServices)();
    res.status(200).json(appointments);
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundAppointment = yield (0, turnsServices_1.getAppointmentByIdServices)(Number(id));
        res.status(200).json(foundAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId } = req.body;
        const newAppointment = yield (0, turnsServices_1.createAppointmentServices)({
            date, time, userId,
        });
        res.status(200).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundAppointmentId = yield (0, turnsServices_1.cancelAppointment)(Number(id));
        res.status(200).json({ mesage: 'Turno Cancelado' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.cancel = cancel;
