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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointmentServices = exports.getAppointmentByIdServices = exports.getAllAppointmentsServices = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = __importDefault(require("../entities/Appointment"));
const User_1 = __importDefault(require("../entities/User"));
const appointmentModel = data_source_1.AppDataSource.getRepository(Appointment_1.default);
const userModel = data_source_1.AppDataSource.getRepository(User_1.default);
const getAllAppointmentsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield appointmentModel.find({
        relations: { user: true }
    });
    return allAppointments;
});
exports.getAllAppointmentsServices = getAllAppointmentsServices;
const getAppointmentByIdServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield appointmentModel.findOneBy({
        id: id,
    });
    if (!foundAppointment)
        throw Error(`Turno con ID ${id} no encontrado`);
    return foundAppointment;
});
exports.getAppointmentByIdServices = getAppointmentByIdServices;
const createAppointmentServices = (createAppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = appointmentModel.create(createAppointmentDto);
    yield appointmentModel.save(newAppointment);
    const user = yield userModel.findOneBy({
        id: createAppointmentDto.userId,
    });
    if (!user) {
        throw new Error("El ID de usuario es obligatorio para crear un turno.");
    }
    newAppointment.user = user;
    yield appointmentModel.save(newAppointment);
    return newAppointment;
});
exports.createAppointmentServices = createAppointmentServices;
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointmentId = yield appointmentModel.findOneBy({
        id: id,
    });
    if (!foundAppointmentId) {
        throw Error(`No se encontró un turno con el ID ${id}.`);
    }
    foundAppointmentId.status = 'canceled';
    yield appointmentModel.save(foundAppointmentId);
});
exports.cancelAppointment = cancelAppointment;
