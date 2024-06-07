import { defineStore } from "pinia";
import { Employee } from "../types/Employee";

const state = (): { employees: Employee[] } => ({
  employees: [
    {
      id: "1",
      name: "Luiza",
      description:
        "Trabalhar na Logcomex é uma grande satisfação e realização pessoal, uma vez que a empresa promove a cooperação entre os colaboradores, sempre com base nos princípios de respeito, lealdade, generosidade, empatia e transparência.",
      role: "Frontend Developer",
      photo:
        "https://assets-global.website-files.com/5e7b99a162211f50391ae211/65ca1f367c28fed1c2242234_Luiza-p-500.png",
      workingSince: "Há 10 meses",
    },

    {
      id: "2",
      name: "Nickelson",
      description:
        "Integrar o time da Logcomex é um privilégio e uma realização significativa, pois a empresa facilita o trabalho em conjunto, respeitando valores fundamentais como respeito, lealdade, generosidade, empatia e transparência.",
      role: "Frontend Developer",
      photo:
        "https://assets-global.website-files.com/5e7b99a162211f50391ae211/65ca1f36dbac80974691dc0f_Nickelson-p-500.png",
      workingSince: "Há 5 anos",
    },
    {
      id: "3",
      name: "Laryssa",
      description:
        "Ser membro da equipe da Logcomex é uma honra e uma conquista, pois a empresa valoriza o trabalho colaborativo, enfatizando valores como respeito, lealdade, generosidade, empatia e transparência.",
      role: "Fullstack Developer",
      photo:
        "https://assets-global.website-files.com/5e7b99a162211f50391ae211/6400980b10a9c9484775d2aa_lary-p-500.png",
      workingSince: "Há 5 meses",
    },
    {
      id: "4",
      name: "Mônica",
      description:
        "Fazer parte da equipe da Logcomex é motivo de orgulho e realização, dado que a empresa incentiva o trabalho em grupo de maneira harmoniosa, valorizando o respeito, a lealdade, a generosidade, a empatia e a transparência.",
      role: "Frontend Developer",
      photo:
        "https://assets-global.website-files.com/5e7b99a162211f50391ae211/6580ae1e08f2e72c2da690b2_new_imag_sobre-1-p-500.png",
      workingSince: "Há 1 ano",
    },
    {
      id: "5",
      name: "Matheus", 
      description:
        "Ser parte da Logcomex é uma grande realização e privilégio, visto que a empresa promove um ambiente de trabalho colaborativo, fundamentado em valores como respeito, lealdade, generosidade, empatia e transparência.",
      role: "Backend Developer",
      photo:
        "https://assets-global.website-files.com/5e7b99a162211f50391ae211/6580ae1e8bc394b7814814dc_new_imag_sobre-2-p-500.png",
      workingSince: "Há 30 dias",
    },
  ],
});

export const useEmployeesStore = defineStore("employees", {
  state,
  getters: {
    findById: (state: { employees: Employee[] }) => (id: string) =>
      state.employees.find((item: Employee) => item.id === id),
  },
});
