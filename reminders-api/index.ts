import express from 'express';
import { ReminderDto } from './interfaces/reminder-dto';


const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  let data = req.body as ReminderDto;
  console.log(data);
  res.json({name: "Sathya", title: data.title});
})

app.listen(8000, () => console.log("Server started"));