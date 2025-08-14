import { Play } from "phosphor-react";
import {
  ConstdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="">durante</label>
          <input id="minutesAmount" />

          <span>minutos.</span>
        </FormContainer>

        <ConstdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ConstdownContainer>

        <button type="submit">
          <Play size={24} />
          começar
        </button>
      </form>
    </HomeContainer>
  );
}
