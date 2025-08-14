import { Play } from "phosphor-react";
import {
  ConstdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskIntput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskIntput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="">durante</label>
          <MinutesAmountInput id="minutesAmount" placeholder="00" />

          <span>minutos.</span>
        </FormContainer>

        <ConstdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ConstdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
