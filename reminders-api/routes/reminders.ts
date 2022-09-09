import {Router} from "express"
import { ReminderDto } from "../interfaces/reminder-dto";
import Reminder from "../models/reminder";
const router = Router();

const reminders: Reminder[] = [];

router.get('/', (req, res) => {
  res.send("Reminders");
})

router.post("/", (req, res) => {
  const { title } = req.body as ReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
})