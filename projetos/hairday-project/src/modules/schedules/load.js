import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../../modules/form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  hoursLoad({ date, dailySchedules });
}
